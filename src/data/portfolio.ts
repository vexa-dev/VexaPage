import type { Project, PortfolioProject } from "@/types";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "IdeaSAC",
    description:
      "Gestión y seguimiento de ideas corporativas, fomentando la colaboración y la escalabilidad de negocios.",
    icon: "lightbulb",
    tags: ["React", "Node.js"],
    anchor: "proyecto-ideasac",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    theme: {
      gradient: "from-green-500/20",
      border: "border-green-500/30",
      button: "bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500",
    },
    overlay: "bg-black/95",
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proyecto-ideasac",
    title: "IdeaSAC",
    category: "Ingeniería Naval & Astillero",
    description:
      "Gestión integral de astillero, cotizaciones de embarcaciones y control de órdenes de producción naval.",
    image: "/img/projects/ideasac.jpg",
    link: "/proyectos#proyecto-ideasac",
    tags: ["Astillero", "IngenieríaNaval", "Producción"],
    icon: "directions_boat",
    problem: "Costeo manual y descontrol en planos que causan retrasos y sobrecostos.",
    benefit: "Centraliza cubicación de acero, órdenes de taller y trazabilidad técnica en tiempo real.",
    targetSector: "Astilleros y Constructoras Navales",
  },
  {
    id: "proyecto-vexa",
    title: "Vexa Task",
    category: "Productividad Corporativa",
    description:
      "Flujo colaborativo corporativo de alta eficiencia y gestión ágil de proyectos en equipo.",
    image: "/img/projects/vexa-task.jpg",
    link: "/proyectos#proyecto-vexa",
    tags: ["GestiónTareas", "Colaboración", "Productividad"],
    icon: "task_alt",
    problem: "Requerimientos dispersos en cadenas de chat y nula visibilidad de cuellos de botella.",
    benefit: "Sincroniza tableros kanban en vivo, priorización de sprint y alertas cruzadas.",
    targetSector: "Consultoras, Agencias y Startups",
  },
  {
    id: "proyecto-urba",
    title: "Urbanwear",
    category: "Retail & Moda Omnicanal",
    description:
      "Plataforma e-commerce y POS de alta velocidad para boutique con sincronización de inventario físico y online.",
    image: "/img/projects/urbanwear.jpg",
    link: "/proyectos#proyecto-urba",
    tags: ["Boutique", "POS", "Retail"],
    icon: "shopping_bag",
    problem: "Descuadres de stock entre tienda física y web, y cobros lentos en horas pico.",
    benefit: "Sincronización de inventario en vivo, cobro POS ultraveloz y venta omnicanal.",
    targetSector: "Boutiques, Tiendas de Moda y Retail",
  },
  {
    id: "proyecto-auto",
    title: "Automotriz",
    category: "Sector Automotriz",
    description:
      "Control logístico de talleres mecánicos, check-in digital de vehículos y gestión de repuestos.",
    image: "/img/projects/automotriz.jpg",
    link: "/proyectos#proyecto-auto",
    tags: ["TallerMecánico", "CheckInDigital", "Repuestos"],
    icon: "directions_car",
    problem: "Falta de transparencia en diagnósticos mecánicos y descontrol en rotación de repuestos.",
    benefit: "Check-in digital con fotos del auto, presupuesto vía WhatsApp y stock en taller.",
    targetSector: "Talleres Mecánicos y Concesionarios",
  },
  {
    id: "proyecto-biblio",
    title: "Biblioteca",
    category: "Gestión Documental",
    description:
      "Administración inteligente de catálogos bibliográficos, préstamos digitalizados y control de inventario.",
    image: "/img/projects/biblioteca.jpg",
    link: "/proyectos#proyecto-biblio",
    tags: ["Catálogos", "EscaneoLibros", "Préstamos"],
    icon: "menu_book",
    problem: "Pérdida recurrente de libros físicos, inventarios obsoletos y largas filas de préstamo.",
    benefit: "Catálogo digital instantáneo, escaneo por código de barras y recordatorios de devolución.",
    targetSector: "Universidades, Institutos y Colegios",
  },
  {
    id: "proyecto-hela",
    title: "Heladeria Dulce Perú",
    category: "Restauración & POS",
    description:
      "Punto de venta POS de alta velocidad para heladería artesanal con monitoreo de pedidos en tiempo real.",
    image: "/img/projects/heladeria-dulce-peru.jpg",
    link: "/proyectos#proyecto-hela",
    tags: ["HeladeríaArtesanal", "POS", "Despacho"],
    icon: "icecream",
    problem: "Colas prolongadas por cobro manual de sabores y toppings, y mermas sin registrar.",
    benefit: "Despacho táctil en menos de 10 seg, arqueo ciego de caja y comanda digital.",
    targetSector: "Heladerías, Cafeterías y Cadenas Gastro",
  },
  {
    id: "proyecto-nutri",
    title: "Nutricraft",
    category: "Salud & Nutrición",
    description:
      "Gamificación nutricional, recetas automatizadas y dietas personalizadas algorítmicamente.",
    image: "/img/projects/nutricraft.jpg",
    link: "/proyectos#proyecto-nutri",
    tags: ["Nutrición", "RecetasDigitales", "Salud"],
    icon: "restaurant",
    problem: "El 80% de pacientes abandona dietas en papel por falta de guía clara y opciones.",
    benefit: "Planes dinámicos con sustitución inteligente de recetas y métricas en su móvil.",
    targetSector: "Clínicas Nutricionales y Centros Fitness",
  },
];

