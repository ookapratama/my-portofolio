import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(3).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
  social: z.string().trim().max(2048).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (
    !formLink ||
    !fieldIdName ||
    !fieldIdEmail ||
    !fieldIdMessage ||
    !fieldIdSocial
  ) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return new NextResponse("Invalid input", { status: 400 });
  }

  const { name, email, message, social } = parsed.data;

  // Build the Google Form query with encoded params to prevent field injection.
  const params = new URLSearchParams({
    [fieldIdName]: name,
    [fieldIdEmail]: email,
    [fieldIdMessage]: message,
    [fieldIdSocial]: social ?? "",
  });

  try {
    const res = await fetch(`${formLink}/formResponse?${params.toString()}`);

    if (!res.ok) {
      console.error("Google Form submission failed:", res.status);
      return new NextResponse("Failed to submit", { status: 502 });
    }

    return NextResponse.json("Success!");
  } catch (error) {
    console.error("Contact form error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
