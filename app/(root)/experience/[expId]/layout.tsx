import { type Metadata } from "next";

import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

interface ExperienceLayoutProps {
  children: React.ReactNode;
  params: Promise<{ expId: string }>;
}

export function generateStaticParams() {
  return Experiences.map((exp) => ({ expId: exp.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ expId: string }>;
}): Promise<Metadata> {
  const { expId } = await params;
  const exp = Experiences.find((val) => val.id === expId);

  if (!exp) {
    return { title: `Experience | ${siteConfig.authorName}` };
  }

  const title = `${exp.companyName} | ${siteConfig.authorName}`;

  return {
    title,
    description: exp.shortDescription,
    openGraph: {
      title,
      description: exp.shortDescription,
      type: "article",
      url: `${siteConfig.url}/experience/${exp.id}`,
    },
  };
}

export default function ExperienceDetailLayout({
  children,
}: ExperienceLayoutProps) {
  return <>{children}</>;
}
