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

export interface StreakStats {
  currentStreak: number;
  longestStreak: number;
}

// Derives current/longest streak (consecutive days with contributions > 0)
// from the GitHub contribution calendar. Days are walked in chronological
// order (weeks, then days, as returned by the GraphQL calendar).
export function getStreakStats(data?: CalendarProps): StreakStats {
  const weeks = data?.weeks || [];
  const days = weeks.flatMap((week) => week.contributionDays);

  let longestStreak = 0;
  let runningStreak = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  }

  let currentStreak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].contributionCount > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}
