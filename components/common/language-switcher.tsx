"use client";

import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/app/store/use-language";
import { useIsHydrated } from "@/hooks/use-is-hydrated";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageStore();
  const isHydrated = useIsHydrated();

  if (!isHydrated) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="w-10 h-10 p-0 font-bold uppercase"
      aria-label="Toggle language"
    >
      {language === "en" ? "ID" : "EN"}
    </Button>
  );
}
