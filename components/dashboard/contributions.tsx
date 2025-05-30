"use client";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";
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
  username: string | undefined;
};

const Contributions = ({ endpoint, username }: ContributionsProps) => {
  const { data } = useSWR<CalendarResponse, Error>(endpoint, fetcher);
  const contributionCalendar =
    data?.contributionsCollection.contributionCalendar;

  if (!contributionCalendar)
    return (
      <>
        <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <SkeletonCalendar className="mt-5" />
      </>
    );

  return (
    <div>
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
  return <></>;
};

export default Contributions;
