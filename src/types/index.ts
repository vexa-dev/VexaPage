export interface NavItem {
  /** id de la sección en la página de inicio */
  id: string;
  label: string;
  /** los enlaces con subrayado usan border-b-2 para marcar la sección activa */
  underline: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
  icon?: string;
  problem?: string;
  benefit?: string;
  targetSector?: string;
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
  /** Imagen de portada representativa para galerías y acordeón */
  image?: string;
}

export type SocialNetwork = "github" | "linkedin" | "instagram" | "website" | "link";

export interface SocialLink {
  network: SocialNetwork;
  href: string;
}

export interface TeamHighlight {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  tag?: string;
  headline?: string;
  quote?: string;
  highlights?: TeamHighlight[];
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
