import type { TeamMember } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Robert Vasquez",
    role: "CEO | Ing. de Software",
    tag: "CEO & Co-Founder",
    headline: "Liderazgo técnico y arquitectura de software de alto impacto",
    bio: "Experto en desarrollo Backend, metodologías ágiles (Scrum) y BDD.",
    quote:
      "Diseñamos plataformas y arquitecturas robustas que transforman desafíos empresariales complejos en software intuitivo, escalable y de alto rendimiento. Cada línea de código responde a una estrategia de valor real y visión a largo plazo.",
    photo: { src: "/img/perfil1.png", alt: "Robert Vasquez" },
    highlights: [
      { label: "Enfoque", value: "Backend & Arquitectura" },
      { label: "Metodología", value: "Scrum & BDD" },
      { label: "Impacto", value: "Alta Escalabilidad" },
    ],
    socials: [
      { network: "github", href: "https://github.com/Shiro-Vs" },
      { network: "linkedin", href: "https://www.linkedin.com/in/shirovs" },
      { network: "instagram", href: "https://www.instagram.com/shiro.vs/" },
      { network: "website", href: "https://shirovs.online/" },
    ],
  },
  {
    name: "José Gonzales",
    role: "Frontend Developer | Ing. de Sistemas",
    tag: "Frontend Lead & UX",
    headline: "Experiencias interactivas y diseño centrado en el usuario",
    bio: "Creador de interfaces web dinámicas. Experto en React y diseño centrado en la experiencia del usuario (UX).",
    quote:
      "Creador de interfaces web dinámicas y sistemas de diseño modernos. Especialista en React, TypeScript y microinteracciones de alto impacto que no solo funcionan con precisión milimétrica, sino que cautivan al usuario final.",
    photo: { src: "/img/perfil2.png", alt: "José Gonzales" },
    highlights: [
      { label: "Stack", value: "React, Next.js, TS" },
      { label: "Especialidad", value: "UI/UX & Animación" },
      { label: "Rendimiento", value: "Optimización Web" },
    ],
    socials: [
      { network: "github", href: "https://github.com/JAZE30" },
      { network: "linkedin", href: "https://www.linkedin.com/feed/" },
      { network: "instagram", href: "https://www.instagram.com/jose_gonzales3011/" },
    ],
  },
  {
    name: "Jhony Rivera",
    role: "Backend Architect | Ing. de Sistemas",
    tag: "Backend Architect",
    headline: "Sistemas distribuidos y bases de datos de alta demanda",
    bio: "Arquitecto de bases de datos y backend. Diseña sistemas robustos y escalables impulsados por BDD.",
    quote:
      "Arquitecto de bases de datos y microservicios. Especialista en modelado relacional y NoSQL, APIs resilientes y lógica de negocio guiada por pruebas (BDD) para soportar altos volúmenes de transacción con total integridad.",
    photo: {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      alt: "Jhony Rivera",
    },
    highlights: [
      { label: "Bases de Datos", value: "MySQL & MongoDB" },
      { label: "Arquitectura", value: "Microservicios & MVC" },
      { label: "Seguridad", value: "APIs REST & OAuth" },
    ],
    socials: [
      { network: "github", href: "https://github.com" },
      { network: "linkedin", href: "https://linkedin.com" },
    ],
  },
  {
    name: "Diego Choque",
    role: "DevOps Engineer | Ing. de Software",
    tag: "DevOps & Cloud Engineer",
    headline: "Infraestructura cloud, automatización y despliegue continuo",
    bio: "Especialista en integración continua (CI/CD), automatización y despliegue seguro en servidores.",
    quote:
      "Especialista en integración y despliegue continuo (CI/CD), contenedores Docker y orquestación cloud. Diseñamos entornos seguros y automatizados que garantizan estabilidad absoluta y despliegues sin interrupciones para el cliente.",
    photo: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      alt: "Diego Choque",
    },
    highlights: [
      { label: "Infraestructura", value: "Docker & Cloud (GCP/AWS)" },
      { label: "Automatización", value: "CI/CD Pipelines" },
      { label: "Disponibilidad", value: "Monitoreo 24/7" },
    ],
    socials: [
      { network: "github", href: "https://github.com" },
      { network: "linkedin", href: "https://linkedin.com" },
    ],
  },
];
