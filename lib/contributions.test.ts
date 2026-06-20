import { describe, expect, it } from "vitest";

import { getContributionStats } from "./contributions";
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
