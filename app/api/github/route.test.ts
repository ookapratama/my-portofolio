import { type NextRequest } from "next/server";
import { describe, expect, it, vi } from "vitest";

import { GET } from "./route";
import { getContribution } from "@/lib/github";

vi.mock("@/lib/github", () => ({
  getContribution: vi.fn(),
}));

const requestWithType = (type: string) =>
  ({
    nextUrl: { searchParams: new URLSearchParams({ type }) },
  }) as unknown as NextRequest;

describe("GET /api/github", () => {
  it("should return the contribution data with cache headers for a valid type", async () => {
    const data = { totalContributions: 42 };
    vi.mocked(getContribution).mockResolvedValue({ status: 200, data });

    const res = await GET(requestWithType("personal"));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual(data);
    expect(res.headers.get("Cache-Control")).toBe(
      "public, s-maxage=60, stale-while-revalidate=30",
    );
  });

  it("should return 400 when getContribution rejects the account type", async () => {
    vi.mocked(getContribution).mockRejectedValue(
      new Error("Invalid user type"),
    );

    const res = await GET(requestWithType("unknown"));

    expect(res.status).toBe(400);
  });

  it("should return 502 when getContribution throws an unexpected error", async () => {
    vi.mocked(getContribution).mockRejectedValue(new Error("network down"));

    const res = await GET(requestWithType("personal"));

    expect(res.status).toBe(502);
  });
});
