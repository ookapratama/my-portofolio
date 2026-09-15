import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.dashboard.metadata.title,
  description: pagesConfig.dashboard.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/dashboard`,
  },
  openGraph: {
    title: pagesConfig.dashboard.metadata.title,
    description: pagesConfig.dashboard.metadata.description,
    url: `${siteConfig.url}/dashboard`,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
