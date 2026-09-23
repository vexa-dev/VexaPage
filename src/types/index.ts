export interface NavItem {
  /** id de la sección en la página de inicio */
  id: string;
  label: string;
  /** los enlaces con subrayado usan border-b-2 para marcar la sección activa */
  underline: boolean;
}

export interface PortfolioProject {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  /** ancla dentro de /proyectos */
  anchor: string;
  /** clases completas de Tailwind (deben ser literales para que Tailwind las detecte) */
  theme: {
    gradient: string;
    border: string;
    button: string;
  };
  /** fondo del overlay al hacer hover */
  overlay?: string;
}

export type SocialNetwork = "github" | "linkedin" | "instagram" | "website" | "link";

export interface SocialLink {
  network: SocialNetwork;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: { src: string; alt: string };
  socials: SocialLink[];
}

export interface ProjectNavItem {
  id: string;
  label: string;
}

export interface PolicyGroup {
  title: string;
  items: { id: string; label: string }[];
}
