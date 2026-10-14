import { createContext, useContext, useEffect, type ReactNode } from "react";

export type Theme = "dark";

interface ThemeContextType {
  theme: Theme;
  targetTheme: Theme;
  fromTheme: Theme;
  isTransitioning: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  onTransitionComplete: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  targetTheme: "dark",
  fromTheme: "dark",
  isTransitioning: false,
  toggleTheme: () => {},
  setTheme: () => {},
  onTransitionComplete: () => {},
});

/**
 * ThemeProvider
 * Bloqueado permanentemente en modo oscuro para preservar la identidad obsidian y esmeralda de VEXA.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    try {
      localStorage.removeItem("vexa-theme");
      localStorage.setItem("vexa-theme", "dark");
    } catch {
      // Ignora si localStorage no está disponible
    }
  }, []);

  const value: ThemeContextType = {
    theme: "dark",
    targetTheme: "dark",
    fromTheme: "dark",
    isTransitioning: false,
    toggleTheme: () => {},
    setTheme: () => {},
    onTransitionComplete: () => {},
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
