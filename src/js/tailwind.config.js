/**
 * Tailwind CSS Configuration
 * Extends the default theme with VEXA brand colors and fonts
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#548D7B",
        "background-light": "#F9FAFB",
        "background-dark": "#0A0A0A",
        accent: "#1A1A1A",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        "2xl": "1.5rem",
      },
    },
  },
};
