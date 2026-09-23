import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", underline: true },
  { id: "quienes-somos", label: "Quiénes Somos", underline: true },
  { id: "servicios", label: "Servicios", underline: true },
  { id: "portafolio", label: "Portafolio", underline: true },
  { id: "equipo", label: "Equipo", underline: false },
];

/** Secciones de la home observadas por el scroll-spy del header. */
export const HOME_SECTION_IDS = [
  "inicio",
  "quienes-somos",
  "servicios",
  "portafolio",
  "equipo",
  "contacto",
] as const;

export const FOOTER_QUICK_LINKS: { id: string; label: string }[] = [
  { id: "quienes-somos", label: "Quiénes Somos" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio" },
  { id: "equipo", label: "Equipo" },
  { id: "contacto", label: "Contacto" },
];

export const FOOTER_SERVICES = [
  "Web Apps",
  "Desarrollo Móvil",
  "Sistemas CRM",
  "Consultoría Cloud",
];
