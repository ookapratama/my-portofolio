import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.about.metadata.title,
  description: pagesConfig.about.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: pagesConfig.about.metadata.title,
    description: pagesConfig.about.metadata.description,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
