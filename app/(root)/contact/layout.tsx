import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: pagesConfig.contact.metadata.title,
    description: pagesConfig.contact.metadata.description,
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
