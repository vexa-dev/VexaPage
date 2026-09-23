import { useEffect } from "react";
import { scrollToElement } from "../utils/smoothScroll";

/**
 * Intercepta los clics en enlaces internos (href="#seccion") para hacer
 * scroll suave sin cambiar la URL, igual que el sitio original.
 */
export function useAnchorLinks(): void {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;

      e.preventDefault();
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;

      // Quita un #ancla anterior de la URL para que al recargar no salte a otra sección.
      if (window.location.hash) {
        window.history.replaceState(
          window.history.state,
          "",
          window.location.pathname + window.location.search,
        );
      }
      scrollToElement(target);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
