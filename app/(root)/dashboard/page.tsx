import PageContainer from "@/components/common/page-container";
import Contributions from "@/components/dashboard/contributions";
import { GITHUB_ACCOUNTS } from "@/config/constants";
import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pagesConfig.dashboard.metadata.title,
  description: pagesConfig.dashboard.metadata.description,
};

const DashboardPage = () => {
  console.log("github account : ", GITHUB_ACCOUNTS);
  return (
    <PageContainer
      title={pagesConfig.dashboard.title}
      description={pagesConfig.dashboard.description}
    >
      {/* <></> */}
      {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
        (account, index) => (
          <Contributions
            key={index}
            type={account?.type}
            endpoint={account?.endpoint}
          />
        )
      )}
    </PageContainer>
  );
};

export default DashboardPage;
