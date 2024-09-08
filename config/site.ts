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
      href: "/pricing",
    },
    {
      label: "Feed",
      href: "/blog",
    },
    {
      label: "Sobre",
      href: "/about",
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
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    create: "treinamentos/create",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
