"use client";

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

type PagesShape = (typeof translations)["en"]["pages"];
type PageKey = keyof PagesShape;

interface PageTextProps<K extends PageKey> {
  page: K;
  field: keyof PagesShape[K];
}

/**
 * Resolves a single translated string from `translations[language].pages`
 * reactively, so a parent page can stay a Server Component while only this
 * leaf re-renders on language change.
 */
export function PageText<K extends PageKey>({ page, field }: PageTextProps<K>) {
  const { language } = useLanguageStore();
  const value = translations[language].pages[page][field] as string;

  return <>{value}</>;
}
