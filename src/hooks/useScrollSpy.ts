import { useEffect, useState } from "react";

interface ScrollSpyOptions {
  /** px que se restan al offsetTop de cada sección */
  offset: number;
  /**
   * "range": activa la sección cuyo rango [top, top + alto] contiene el scroll.
   * "passed": activa la última sección cuyo top ya se pasó.
   */
  mode?: "range" | "passed";
  /** si el scroll es menor a este valor, se activa la primera sección */
  topThreshold?: number;
}

/** Devuelve el id de la sección visible según la posición del scroll. */
export function useScrollSpy(
  ids: readonly string[],
  { offset, mode = "range", topThreshold }: ScrollSpyOptions,
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const compute = () => {
      const scrollY = window.scrollY;

      if (topThreshold !== undefined && scrollY < topThreshold) {
        setActiveId(ids[0] ?? null);
        return;
      }

      if (mode === "passed") {
        let current = ids[0] ?? null;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollY + offset) current = id;
        }
        setActiveId(current);
        return;
      }

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - offset;
        if (scrollY > top && scrollY <= top + el.offsetHeight) setActiveId(id);
      }
    };

    compute();
    const timeout = window.setTimeout(compute, 100);
    window.addEventListener("scroll", compute, { passive: true });
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", compute);
    };
  }, [ids, offset, mode, topThreshold]);

  return activeId;
}
