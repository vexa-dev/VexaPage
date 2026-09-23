/** Datos generales del sitio: contacto, integraciones y metadatos. */
export const SITE = {
  name: "VEXA",
  url: "https://vexa.space",
  email: "vexa.corp@outlook.com",
  whatsappUrl: "https://wa.link/5ifr33",
  /** Endpoint de Formspree que recibe el formulario de contacto */
  formEndpoint: "https://formspree.io/f/mgolnlzd",
  /** Títulos de pestaña por página */
  titles: {
    home: "VEXA",
    projects: "VEXA - Proyectos Destacados",
    policies: "VEXA - Políticas de Privacidad",
  },
} as const;
