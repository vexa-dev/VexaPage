import type { TeamMember } from "../types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Robert Vasquez",
    role: "CEO | Ing. de Software",
    bio: "Experto en desarrollo Backend, metodologías ágiles (Scrum) y BDD.",
    photo: { src: "/img/perfil1.png", alt: "Robert Vasquez" },
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
    bio: "Creador de interfaces web dinámicas. Experto en React y diseño centrado en la experiencia del usuario (UX).",
    photo: { src: "/img/perfil2.png", alt: "José Gonzales" },
    socials: [
      { network: "github", href: "https://github.com/JAZE30" },
      { network: "linkedin", href: "https://www.linkedin.com/feed/" },
      { network: "instagram", href: "https://www.instagram.com/jose_gonzales3011/" },
    ],
  },
  {
    name: "Jhony Rivera",
    role: "Backend Architect | Ing. de Sistemas",
    bio: "Arquitecto de bases de datos y backend. Diseña sistemas robustos y escalables impulsados por BDD.",
    socials: [{ network: "link", href: "#" }],
  },
  {
    name: "Diego Choque",
    role: "DevOps Engineer | Ing. de Software",
    bio: "Especialista en integración continua (CI/CD), automatización y despliegue seguro en servidores.",
    socials: [{ network: "link", href: "#" }],
  },
];
