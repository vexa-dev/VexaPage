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
      animation: {
        shimmer: "shimmer 2.5s infinite ease-in-out",
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        "pulse-glow-lg": "pulseGlowLarge 2s infinite ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
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
      },
    },
  },
};
