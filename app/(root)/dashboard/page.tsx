import { Icons, StackIcons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import PageHeader from "@/components/common/page-header";
import SectionHeading from "@/components/common/section-header";
import SectionSubHeading from "@/components/common/section-sub-header";
import { SkeletonCalendar, SkeletonCard } from "@/components/dashboard/skeleton/skeleton-card";
import { pagesConfig } from "@/config/pages";
import { SocialLinks } from "@/config/socials";
import { Metadata } from "next";
import Link from "next/link";

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
      <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <SkeletonCalendar className="mt-5" />
    </PageContainer>
  );
};

export default DashboardPage;
