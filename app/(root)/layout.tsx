import { MainNav } from "@/components/common/main-nav";
import { BottomNav } from "@/components/common/bottom-nav";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col pb-20 md:pb-0">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav} />
          <nav className="flex items-center gap-5">
            <LanguageSwitcher />
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
      <BottomNav />
    </div>
  );
}
