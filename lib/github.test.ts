import { beforeEach, describe, expect, it, vi } from "vitest";

import { fetchGithubData } from "./github";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

describe("fetchGithubData", () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  it("should return the user calendar when the GraphQL response is well-formed", async () => {
    const user = {
      contributionsCollection: {
        contributionCalendar: { totalContributions: 5 },
      },
    };
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ data: { user } }),
    });

    const result = await fetchGithubData("someuser", "token");

    expect(result).toEqual({ status: 200, data: user });
  });

  it("should return empty data instead of throwing when the GraphQL response has no data.user", async () => {
    // Simulates a GraphQL error response shape (e.g. { errors: [...] })
    // where the parsed body has no `data` key at all.
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({}),
    });

    const result = await fetchGithubData("someuser", "token");

    expect(result).toEqual({ status: 200, data: {} });
  });

  it("should return empty data for a >=400 status", async () => {
    mockFetch.mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(undefined),
    });

    const result = await fetchGithubData("someuser", "token");

    expect(result).toEqual({ status: 400, data: {} });
  });
});
