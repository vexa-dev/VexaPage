import { useEffect, useState } from "react";

interface ScrollSpyOptions {
  /**
   * Línea de referencia en px desde la parte superior del viewport
   * donde se evalúa qué sección está activa (por defecto: 160px).
   */
  offset?: number;
  /**
   * "range": activa la sección cuyo rango contiene la línea de referencia.
   * "passed": activa la última sección cuyo top ya pasó la línea de referencia.
   */
  mode?: "range" | "passed";
  /**
   * Umbral en px de scroll desde la parte superior donde siempre se considera activa la primera sección (Inicio).
   */
  topThreshold?: number;
}

/**
 * Devuelve el id de la sección visible según la posición del scroll,
 * compatible con elementos fijados (pin) por GSAP ScrollTrigger mediante getBoundingClientRect.
 */
export function useScrollSpy(
  ids: readonly string[],
  options: ScrollSpyOptions = {},
): string | null {
  const { offset = 160, mode = "range", topThreshold = 120 } = options;
  const [activeId, setActiveId] = useState<string | null>(() => ids[0] ?? null);

  useEffect(() => {
    if (ids.length === 0) return;

    const compute = () => {
      const scrollY = window.scrollY;

      // 1. Si está en la parte superior del viewport, activar siempre la primera sección (Inicio)
      if (topThreshold !== undefined && scrollY <= topThreshold) {
        setActiveId(ids[0] ?? null);
        return;
      }

      // 2. Si se alcanzó el final de la página, activar la última sección
      const isAtBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveId(ids[ids.length - 1] ?? null);
        return;
      }

      // 3. Evaluar qué sección cubre la línea de referencia (offset) en el viewport
      // Compatible con GSAP ScrollTrigger: si la sección está fijada (pinned),
      // tomamos su contenedor .pin-spacer para medir la distancia real en el flujo del scroll.
      let currentId: string | null = null;

      if (mode === "passed") {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const targetEl = (el.closest(".pin-spacer") as HTMLElement) || el;
          const rect = targetEl.getBoundingClientRect();
          if (rect.top <= offset) {
            currentId = id;
          }
        }
        if (currentId) setActiveId(currentId);
        return;
      }

      // Modo "range": buscar la sección que cubre el punto de referencia
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const targetEl = (el.closest(".pin-spacer") as HTMLElement) || el;
        const rect = targetEl.getBoundingClientRect();

        // La sección está activa si su borde superior está en o por encima del offset
        // y su borde inferior aún no ha sobrepasado el offset
        if (rect.top <= offset && rect.bottom > offset) {
          currentId = id;
          break;
        }
      }

      // Fallback: si ninguna sección coincide exactamente (ej. en un margen o transición rápida),
      // seleccionar la última sección cuyo borde superior ya pasó la línea de referencia
      if (!currentId) {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const targetEl = (el.closest(".pin-spacer") as HTMLElement) || el;
          const rect = targetEl.getBoundingClientRect();
          if (rect.top <= offset) {
            currentId = id;
          }
        }
      }

      if (currentId) {
        setActiveId(currentId);
      }
    };

    compute();

    // Re-evaluar tras retrasos breves para que GSAP ScrollTrigger termine de crear sus .pin-spacer
    const t1 = window.setTimeout(compute, 100);
    const t2 = window.setTimeout(compute, 500);

    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute, { passive: true });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids, offset, mode, topThreshold]);

  return activeId;
}
