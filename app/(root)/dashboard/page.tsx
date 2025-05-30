import { StackIcons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import SectionHeading from "@/components/common/section-header";
import SectionSubHeading from "@/components/common/section-sub-header";
import Contributions from "@/components/dashboard/contributions";
import { GITHUB_ACCOUNTS } from "@/config/constants";
import { pagesConfig } from "@/config/pages";
import { SocialLinks } from "@/config/socials";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: pagesConfig.dashboard.metadata.title,
  description: pagesConfig.dashboard.metadata.description,
};

const DashboardPage = () => {
  return (
    <PageContainer
      title={pagesConfig.dashboard.title}
      description={pagesConfig.dashboard.description}
    >
      <SectionHeading title={"My Contributions"} icon={StackIcons.github} />
      <SectionSubHeading className="mt-2">
        <p className="dark:text-neutral-400">
          My contributions from last year on github.
        </p>
        <Link
          href={SocialLinks[0].link}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          {SocialLinks[0].username}
        </Link>
      </SectionSubHeading>
      {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
        (account, index) => (
          <Contributions
            key={index}
            username={account.username}
            type={account?.type}
            endpoint={account?.endpoint}
          />
        )
      )}
    </PageContainer>
  );
};

export default DashboardPage;
