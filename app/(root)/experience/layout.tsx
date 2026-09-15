import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
  openGraph: {
    title: pagesConfig.experience.metadata.title,
    description: pagesConfig.experience.metadata.description,
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
