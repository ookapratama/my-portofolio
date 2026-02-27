import Link from "next/link";
import { LuDownload as DownloadIcon } from "react-icons/lu";
import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

const Resume = () => {
  const { language } = useLanguageStore();
  const t = translations[language].about;
  const RESUME_URL = "https://bit.ly/ooka-cv";

  return (
    <Link
      href={RESUME_URL}
      target="_blank"
      passHref
      className="flex gap-2 hover:gap-3 transition-all duration-300 items-center hover:text-neutral-700 hover:dark:text-neutral-300 mt-6 border border-neutral-400 hover:border-neutral-500 w-fit px-4 py-2.5 rounded-lg hover:dark:border-neutral-300"
      data-umami-event="Download Resume"
    >
      <DownloadIcon />
      <span>{t.resume}</span>
    </Link>
  );
};

export default Resume;
