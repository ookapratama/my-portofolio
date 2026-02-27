"use client";

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";
import PageContainer from "@/components/common/page-container";
import About from "@/components/about/about";

export default function AboutPage() {
  const { language } = useLanguageStore();
  const t = translations[language].pages.about;

  return (
    <PageContainer title={t.title} description={t.description}>
      <About />
    </PageContainer>
  );
}
