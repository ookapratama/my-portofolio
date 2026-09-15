import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "./route";

const ENV_KEYS = [
  "GOOGLE_FORM_LINK",
  "GOOGLE_FORM_FIELD_ID_NAME",
  "GOOGLE_FORM_FIELD_ID_EMAIL",
  "GOOGLE_FORM_FIELD_ID_MESSAGE",
  "GOOGLE_FORM_FIELD_ID_SOCIAL",
] as const;

const setValidEnv = () => {
  process.env.GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/fake";
  process.env.GOOGLE_FORM_FIELD_ID_NAME = "entry.1";
  process.env.GOOGLE_FORM_FIELD_ID_EMAIL = "entry.2";
  process.env.GOOGLE_FORM_FIELD_ID_MESSAGE = "entry.3";
  process.env.GOOGLE_FORM_FIELD_ID_SOCIAL = "entry.4";
};

const validBody = {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello, this is a test message.",
  social: "https://github.com/johndoe",
};

const postRequest = (body: unknown) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });

describe("POST /api/contact", () => {
  beforeEach(() => {
    setValidEnv();
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    for (const key of ENV_KEYS) delete process.env[key];
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("should return 200 Success! when the submission is valid and the form accepts it", async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: true } as Response);

    const res = await POST(postRequest(validBody));

    expect(res.status).toBe(200);
    expect(await res.json()).toBe("Success!");
  });

  it("should return 500 when a required env variable is missing", async () => {
    delete process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

    const res = await POST(postRequest(validBody));

    expect(res.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should return 400 when the input fails schema validation", async () => {
    const res = await POST(postRequest({ ...validBody, email: "not-an-email" }));

    expect(res.status).toBe(400);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should return 502 when the Google Form responds with a non-OK status", async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: false, status: 400 } as Response);

    const res = await POST(postRequest(validBody));

    expect(res.status).toBe(502);
  });

  it("should return 500 when the fetch to the Google Form throws", async () => {
    vi.mocked(fetch).mockRejectedValue(new Error("network error"));

    const res = await POST(postRequest(validBody));

    expect(res.status).toBe(500);
  });
});
