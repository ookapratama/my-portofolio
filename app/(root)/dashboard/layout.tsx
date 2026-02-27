import { Metadata } from "next";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.dashboard.metadata.title,
  description: pagesConfig.dashboard.metadata.description,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
