import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { differenceInMonths, differenceInYears } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Human-readable duration between two dates (e.g. "2 Years 3 Months").
// An omitted endDate means the role is ongoing (counts up to now).
export function getCareerDuration(
  startDate: string | Date,
  endDate?: string | Date | null,
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const years = differenceInYears(end, start);
  const months = differenceInMonths(end, start) % 12;

  let text = "";
  if (years > 0) {
    text += `${years} Year${years !== 1 ? "s" : ""} `;
  }
  if (months > 0 || years === 0) {
    text += `${months} Month${months !== 1 ? "s" : ""}`;
  }

  return text.trim();
}

export function formatDate(
  input: string | number,
  lang: string = "en",
): string {
  const date = new Date(input);
  return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date, lang: string = "en"): string {
  const date = new Date(input);
  return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
