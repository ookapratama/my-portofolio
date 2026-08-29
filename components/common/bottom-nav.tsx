"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons, type IconType } from "@/components/common/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";
import { cn } from "@/lib/utils";

interface BottomNavItem {
  href: string;
  labelKey: keyof typeof translations.en.nav;
  icon: IconType;
}

// Kept to 4 primary tabs for touch-target comfort; the rest live under "More".
const PRIMARY_NAV_ITEMS: BottomNavItem[] = [
  { href: "/", labelKey: "home", icon: Icons.home },
  { href: "/experience", labelKey: "experience", icon: Icons.work },
  { href: "/dashboard", labelKey: "dashboard", icon: Icons.dashboard },
  { href: "/contact", labelKey: "contact", icon: Icons.contact },
];

const MORE_NAV_ITEMS: BottomNavItem[] = [
  { href: "/skills", labelKey: "skills", icon: Icons.skills },
  { href: "/about", labelKey: "about", icon: Icons.user },
];

function isItemActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function BottomNav() {
  const pathname = usePathname();
  const { language } = useLanguageStore();
  const t = translations[language].nav;
  const isMoreActive = MORE_NAV_ITEMS.some((item) =>
    isItemActive(pathname, item.href),
  );

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t bg-background pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      {PRIMARY_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = isItemActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] font-medium transition-colors",
              isActive ? "text-foreground" : "text-foreground/60",
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{t[item.labelKey]}</span>
          </Link>
        );
      })}

      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] font-medium outline-none transition-colors",
            isMoreActive ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Icons.more className="h-5 w-5" />
          <span>{t.more}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="top" className="mb-2">
          {MORE_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span>{t[item.labelKey]}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
