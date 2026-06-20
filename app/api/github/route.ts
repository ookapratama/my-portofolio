import { type NextRequest } from "next/server";
import { getContribution } from "@/lib/github";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") ?? "";

  try {
    const response = await getContribution(type);

    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Invalid user type") {
      return new Response("Invalid user type", { status: 400 });
    }
    console.error("GitHub contributions error:", error);
    return new Response("Failed to fetch contributions", { status: 502 });
  }
}
