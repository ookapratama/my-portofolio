"use client";

import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/app/store/use-language";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
