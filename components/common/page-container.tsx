import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div>
        <PageHeader title={title} description={description} />
        <div className="mx-6">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
