import { describe, expect, it } from "vitest";

import { getContributionStats, getStreakStats } from "./contributions";
import { type CalendarProps, type Contributions } from "@/config/constants";

const day = (contributionCount: number): Contributions => ({
  date: "2024-01-01",
  contributionCount,
  color: "#fff",
  contributionLevel: "NONE",
});

const buildCalendar = (
  weeks: number[][],
  totalContributions: number,
): CalendarProps => ({
  totalContributions,
  weeks: weeks.map((counts) => ({
    firstDay: "2024-01-01",
    contributionDays: counts.map(day),
  })),
  months: [],
  colors: [],
});

describe("getContributionStats", () => {
  it("should compute total, this-week, best and rounded average for real data", () => {
    // 2 weeks: [1,2,3] and [4,5,6]; total provided as 21
    const data = buildCalendar(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      21,
    );

    const stats = getContributionStats(data);

    expect(stats.total).toBe(21);
    expect(stats.thisWeek).toBe(15); // last week 4+5+6
    expect(stats.best).toBe(6); // single highest day
    expect(stats.average).toBe(3.5); // 21 / 6 days, rounded to 1 dp
  });

  it("should return zeros (no NaN / -Infinity) for empty or undefined data", () => {
    expect(getContributionStats(undefined)).toEqual({
      total: 0,
      thisWeek: 0,
      best: 0,
      average: 0,
    });

    const empty = buildCalendar([], 0);
    const stats = getContributionStats(empty);

    expect(stats.best).toBe(0);
    expect(Number.isNaN(stats.average)).toBe(false);
    expect(stats.average).toBe(0);
  });
});

describe("getStreakStats", () => {
  it("should compute the current streak as the trailing run of active days", () => {
    // week: [1,2,0,3,4] -> most recent 2 days (4,3) are the current streak,
    // broken by the 0 before them.
    const data = buildCalendar([[1, 2, 0, 3, 4]], 10);

    const stats = getStreakStats(data);

    expect(stats.currentStreak).toBe(2);
  });

  it("should compute the longest streak as the best run anywhere, even mid-history", () => {
    // week 1: [1,1,1,0] -> a 3-day run in the middle of history
    // week 2: [1,0]     -> current trailing run is only 0 (broken by the 0)
    const data = buildCalendar(
      [
        [1, 1, 1, 0],
        [1, 0],
      ],
      4,
    );

    const stats = getStreakStats(data);

    expect(stats.longestStreak).toBe(3);
    expect(stats.currentStreak).toBe(0);
  });

  it("should return zeros for empty or undefined data", () => {
    expect(getStreakStats(undefined)).toEqual({
      currentStreak: 0,
      longestStreak: 0,
    });

    const empty = buildCalendar([], 0);
    expect(getStreakStats(empty)).toEqual({
      currentStreak: 0,
      longestStreak: 0,
    });
  });
});
