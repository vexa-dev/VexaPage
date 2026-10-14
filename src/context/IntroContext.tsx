import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface IntroContextType {
  isIntroActive: boolean;
  isIntroComplete: boolean;
  markIntroComplete: () => void;
}

const IntroContext = createContext<IntroContextType>({
  isIntroActive: false,
  isIntroComplete: true,
  markIntroComplete: () => {},
});

export function IntroProvider({ children }: { children: ReactNode }) {
  // Solo se ejecuta en la página de inicio al cargar/recargar
  const [isIntroComplete, setIsIntroComplete] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      return true;
    }
    return false;
  });

  const isIntroActive = !isIntroComplete;

  const markIntroComplete = () => {
    setIsIntroComplete(true);
  };

  useEffect(() => {
    if (!isIntroActive) return;

    window.scrollTo(0, 0);

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const preventKeys = (e: KeyboardEvent) => {
      if (["Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeys);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
    };
  }, [isIntroActive]);

  return (
    <IntroContext.Provider value={{ isIntroActive, isIntroComplete, markIntroComplete }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}
