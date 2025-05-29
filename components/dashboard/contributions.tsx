"use-client";
import useSWR from "swr";

import { fetcher } from "@/app/api/fetcher";
import { type CalendarResponse } from "@/config/constants";
import SectionHeading from "../common/section-header";
import SectionSubHeading from "../common/section-sub-header";
import { StackIcons } from "../common/icons";
import { SocialLinks } from "@/config/socials";

import Link from "next/link";
import Overview from "./overview";
import { SkeletonCalendar, SkeletonCard } from "./skeleton/skeleton-card";

type ContributionsProps = {
  type: string;
  endpoint: string;
};

const Contributions = ({ endpoint }: ContributionsProps) => {
  console.log(endpoint);
  // console.log(fetcher);
  const { data } = useSWR<CalendarResponse, Error>(endpoint, fetcher);
  console.log(data);

  const contributionCalendar =
    data?.contributionCollections.contributionCalendar;

  if (!contributionCalendar) return null;

  return (
    <div>
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

      {!data ? (
        <>
          <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <SkeletonCalendar className="mt-5" />
        </>
      ) : (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
        </div>
      )}
    </div>
  );
  // return (
  //   <></>
  // )
};

export default Contributions;
