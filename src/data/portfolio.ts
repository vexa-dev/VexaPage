import type { PortfolioProject } from "../types";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "IdeaSAC",
    description:
      "Gestión y seguimiento de ideas corporativas, fomentando la colaboración y la escalabilidad de negocios.",
    icon: "lightbulb",
    tags: ["React", "Node.js"],
    anchor: "proyecto-ideasac",
    theme: {
      gradient: "from-indigo-500/20",
      border: "border-indigo-500/30",
      button: "bg-indigo-500/20 text-indigo-400 border-indigo-500/50 hover:bg-indigo-500",
    },
  },
  {
    title: "Vexa Task",
    description:
      "Gestor de tareas nativo con notificaciones cruzadas para maximizar tu productividad diaria.",
    icon: "task_alt",
    tags: ["React Native", "Firebase"],
    anchor: "proyecto-vexa",
    theme: {
      gradient: "from-blue-500/20",
      border: "border-blue-500/30",
      button: "bg-blue-500/20 text-blue-400 border-blue-500/50 hover:bg-blue-500",
    },
  },
  {
    title: "UrbaWear",
    description: "E-Commerce de alta velocidad para marcas de moda con pasarela robusta.",
    icon: "shopping_bag",
    tags: ["Next.js", "Stripe"],
    anchor: "proyecto-urba",
    theme: {
      gradient: "from-amber-500/20",
      border: "border-amber-500/30",
      button: "bg-amber-500/20 text-amber-400 border-amber-500/50 hover:bg-amber-500",
    },
  },
  {
    title: "Automotriz",
    description: "Control logístico y operacional para talleres vehiculares e inventario mecánico.",
    icon: "directions_car",
    tags: ["Java", "Spring"],
    anchor: "proyecto-auto",
    theme: {
      gradient: "from-rose-500/20",
      border: "border-rose-500/30",
      button: "bg-rose-500/20 text-rose-400 border-rose-500/50 hover:bg-rose-500",
    },
  },
  {
    title: "Biblioteca",
    description: "Administración inteligente de catálogos y sistemas de préstamos documentados.",
    icon: "menu_book",
    tags: ["MySQL", "Express"],
    anchor: "proyecto-biblio",
    theme: {
      gradient: "from-purple-500/20",
      border: "border-purple-500/30",
      button: "bg-purple-500/20 text-purple-400 border-purple-500/50 hover:bg-purple-500",
    },
  },
  {
    title: "Heladería",
    description:
      "Punto de Venta veloz (POS) en tiempo real con monitoreo para despachos de alimentos ligeros.",
    icon: "icecream",
    tags: ["React", "Tailwind"],
    anchor: "proyecto-hela",
    theme: {
      gradient: "from-pink-500/20",
      border: "border-pink-500/30",
      button: "bg-pink-500/20 text-pink-400 border-pink-500/50 hover:bg-pink-500",
    },
    overlay: "bg-black/95",
  },
  {
    title: "Nutricraft",
    description:
      "Gamificación y salud nutricional estructurando dietas personalizadas generadas algorítmicamente.",
    icon: "restaurant",
    tags: ["Kotlin", "Firebase"],
    anchor: "proyecto-nutri",
    theme: {
      gradient: "from-green-500/20",
      border: "border-green-500/30",
      button: "bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500",
    },
    overlay: "bg-black/95",
  },
];
