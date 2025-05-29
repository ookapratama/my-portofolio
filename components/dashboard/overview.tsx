import { type CalendarProps } from "@/config/constants";
import { SkeletonCard } from "./skeleton/skeleton-card";
import OverviewItem from "./overview-item";

type OverviewProps = {
  data: CalendarProps;
};

const Overview = ({ data }: OverviewProps) => {
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const totalThisWeekContributions =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) || 0;

  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount
      )
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0
  const averageContribution = totalContributions / totalContributionList.length

  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
      <OverviewItem label="Total" value={totalContributions} />
      <OverviewItem label="This Week" value={totalThisWeekContributions} />
      <OverviewItem label="Best Day" value={bestContribution} />
      <OverviewItem label="Average" value={averageContribution} />
    </div>
  );
};

export default Overview;
