export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Agenda",
  description: "routs.",
  navItems: [
    {
      label: "Programação",
      href: "/",
    },
    {
      label: "Treinamentos",
      href: "/treinamentos",
    },
    {
      label: "Usuários",
      href: "/users",
    },
    {
      label: "Feed",
      href: "/feed",
    },
    {
      label: "Report",
      href: "/report",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/D4n1l0sbg/nextjs-agenda-hub",
    twitter: "",
    create: "treinamentos/create",
    discord: "",
    sponsor: "",
  },
};
