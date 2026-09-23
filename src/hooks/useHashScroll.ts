import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../utils/smoothScroll";

/** Tiempo durante el cual se re-alinea el ancla mientras cargan imágenes y fuentes. */
const SETTLE_MS = 3000;
const USER_SCROLL_EVENTS = ["wheel", "touchstart", "keydown", "mousedown"] as const;

/**
 * Al navegar entre rutas: si la URL trae #ancla (p. ej. /proyectos#proyecto-urba)
 * lleva la vista a esa sección; si no, vuelve al inicio de la página.
 * Al llegar desde otra página el salto es inmediato (como una carga normal con #ancla);
 * dentro de la misma página el desplazamiento es suave.
 */
export function useHashScroll(): void {
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const changedPage = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (!hash) {
      if (changedPage) window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    scrollToElement(target, { instant: changedPage });
    if (!changedPage) return;

    // Las imágenes y fuentes que terminan de cargar después del salto desplazan el contenido:
    // se vuelve a alinear la sección hasta que el usuario haga scroll por su cuenta.
    let active = true;
    const realign = () => {
      if (active) scrollToElement(target, { instant: true });
    };
    const stop = () => {
      active = false;
    };

    document.addEventListener("load", realign, true);
    document.fonts?.ready.then(realign);
    USER_SCROLL_EVENTS.forEach((type) =>
      window.addEventListener(type, stop, { once: true, passive: true }),
    );
    const timeout = window.setTimeout(stop, SETTLE_MS);

    return () => {
      stop();
      window.clearTimeout(timeout);
      document.removeEventListener("load", realign, true);
      USER_SCROLL_EVENTS.forEach((type) => window.removeEventListener(type, stop));
    };
  }, [pathname, hash, key]);
}
