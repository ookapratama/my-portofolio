export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface RoutesConfig {
  mainNav: NavItem[];
}

export const routesConfig: RoutesConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "About Me",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
