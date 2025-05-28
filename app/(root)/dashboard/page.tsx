import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

const DashboardPage = () => {
  return (
    <PageContainer
      title={pagesConfig.dashboard.title}
      description={pagesConfig.dashboard.description}
    >
      <></>
    </PageContainer>
  );
};

export default DashboardPage;
