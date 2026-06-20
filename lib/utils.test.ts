import { describe, expect, it } from "vitest";

import { cn, getCareerDuration } from "./utils";

describe("cn", () => {
  it("should merge class names and dedupe conflicting tailwind utilities", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("text-sm", false && "hidden", "font-bold")).toBe(
      "text-sm font-bold",
    );
  });
});

describe("getCareerDuration", () => {
  it("should format a multi-year span with years and months", () => {
    expect(getCareerDuration("2021-01-01", "2023-04-01")).toBe(
      "2 Years 3 Months",
    );
  });

  it("should show months only when under a year", () => {
    expect(getCareerDuration("2024-01-01", "2024-06-01")).toBe("5 Months");
  });

  it("should show 0 Months for a same-month span (edge case)", () => {
    expect(getCareerDuration("2024-03-10", "2024-03-20")).toBe("0 Months");
  });
});
