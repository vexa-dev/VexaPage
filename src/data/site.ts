/** Datos generales del sitio: contacto, integraciones y metadatos. */
export const SITE = {
  name: "VEXA",
  url: "https://vexa.space",
  email: "vexa.corp@outlook.com",
  whatsappUrl: "https://wa.link/5ifr33",
  /** Endpoint de Formspree que recibe el formulario de contacto */
  formEndpoint: "https://formspree.io/f/mgolnlzd",
  /** Datos legales para el Libro de Reclamaciones e Indecopi */
  legal: {
    businessName: "VEXA SOFTWARE AGENCY",
    ruc: "20612345678",
    address: "Santiago de Surco, Lima - Perú",
    email: "vexa.corp@outlook.com",
    maxResponseDays: 15, // D.S. N° 101-2022-PCM
  },
  /** Títulos de pestaña por página */
  titles: {
    home: "VEXA",
    projects: "VEXA - Proyectos Destacados",
    policies: "VEXA - Políticas de Privacidad",
    notFound: "VEXA - 404 Página No Encontrada",
  },
} as const;
