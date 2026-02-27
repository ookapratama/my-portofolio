import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

export function MobileNav({ items, children }: MobileNavProps) {
  const { language } = useLanguageStore();
  useLockBody();

  const t = translations[language].nav;

  // Map route titles to translations
  const translatedItems = items?.map((item) => {
    let title = item.title;
    if (item.href === "/") title = t.home;
    else if (item.href === "/dashboard") title = t.dashboard;
    else if (item.href === "/experience") title = t.experience;
    else if (item.href === "/about") title = t.about;
    else if (item.href === "/contact") title = t.contact;
    else if (item.href === "/skills") title = t.skills;
    return { ...item, title };
  });

  return (
    <div
      className={cn(
        "fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(norican.className, "text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {translatedItems?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
