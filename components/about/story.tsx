"use client";

import { ABOUT_CONTENT } from "@/config/constants";
import { useLanguageStore } from "@/app/store/use-language";

const Story = () => {
  const { language } = useLanguageStore();

  return (
    <section
      className="space-y-4 leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 text-lg text-justify indent-10"
      dangerouslySetInnerHTML={{ __html: ABOUT_CONTENT[language] }}
    />
  );
};

export default Story;
