import { type CalendarProps } from "@/config/constants";

export interface ContributionStats {
  total: number;
  thisWeek: number;
  best: number;
  average: number;
}

// Derives dashboard summary stats from the GitHub contribution calendar.
// Guards against empty data (no NaN / -Infinity) and rounds the average.
export function getContributionStats(data?: CalendarProps): ContributionStats {
  const total = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const thisWeek =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((day) => day.contributionCount)
      ?.reduce((sum, count) => sum + count, 0) || 0;

  const dailyCounts = weeks.flatMap((week) =>
    week.contributionDays.map((day) => day.contributionCount),
  );

  const best = dailyCounts.length ? Math.max(...dailyCounts) : 0;
  const average = dailyCounts.length
    ? Math.round((total / dailyCounts.length) * 10) / 10
    : 0;

  return { total, thisWeek, best, average };
}
