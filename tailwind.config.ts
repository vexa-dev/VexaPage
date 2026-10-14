import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";

/**
 * Tailwind CSS Configuration
 * Extends the default theme with VEXA brand colors and fonts
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#548D7B",
        "background-light": "#F8FAFC",
        "background-dark": "#0A0C0E",
        accent: "#111518",
        // Fondos y Superficies (VEXA Corporate Mineral & Dark Slate)
        vexa: {
          bg: "#0A0C0E", // Negro carbón ejecutivo
          surface: "#111518", // Pizarra carbón mate para cards y modales
          surfaceLight: "#161B20", // Acero oscuro mate para inputs y contenedores
          border: "rgba(255, 255, 255, 0.08)", // Bordes sobrios de cristal
          borderHover: "rgba(255, 255, 255, 0.16)",
          // Acentos cromáticos corporativos (Cero neón / Cero tóxico)
          brand: "#498974", // Verde exacto del logo VEXA
          brandLight: "#548D7B", // Verde VEXA primario
          brandDark: "#3B705F", // Verde pino corporativo (hover)
          sage: "#76A897", // Salvia mineral suave para textos destacados y métricas
          petrol: "#4A788A", // Azul petróleo pizarra para arquitectura y roles
          petrolLight: "#88B0C0",
          steel: "#94A3B8", // Acero ejecutivo para tags tecnológicos
          // Textos
          textPrimary: "#FFFFFF",
          textSecondary: "#94A3B8",
          textMuted: "#64748B",
        },
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(73, 137, 116, 0.14), transparent 70%)",
        "ambient-mesh": "radial-gradient(circle at 50% 50%, rgba(74, 120, 138, 0.08), transparent 60%)",
      },
      boxShadow: {
        "vexa-subtle": "0 8px 24px rgba(73, 137, 116, 0.22)",
        "petrol-subtle": "0 8px 24px rgba(74, 120, 138, 0.18)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        "2xl": "1.5rem",
      },
      animation: {
        shimmer: "shimmer 2.5s infinite ease-in-out",
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        "pulse-glow-lg": "pulseGlowLarge 2s infinite ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        "star-movement-bottom": "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(400%)" },
        },
        pulseGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0px 0px rgba(34, 197, 94, 0.2)",
          },
          "50%": {
            transform: "scale(1.03)",
            boxShadow: "0 0 15px 2px rgba(34, 197, 94, 0.5)",
          },
        },
        pulseGlowLarge: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0px 0px rgba(37, 211, 102, 0.4)",
          },
          "50%": {
            transform: "scale(1.15)",
            boxShadow: "0 0 25px 5px rgba(37, 211, 102, 0.7)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
      zIndex: {
        "1": "1",
      },
    },
  },
  plugins: [forms, typography, containerQueries],
} satisfies Config;
