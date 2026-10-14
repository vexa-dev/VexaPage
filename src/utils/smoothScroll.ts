import { ScrollTrigger } from "gsap/ScrollTrigger";

const NAV_HEIGHT = 70;

function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

/**
 * Calcula la posición de scroll óptima para un elemento de destino.
 * Si el elemento tiene un ScrollTrigger con pin (como Quiénes Somos o Portafolio),
 * viaja directamente al estado final culminado de la animación (~95% del pin)
 * para presentar el contenido completamente armado y sin pantalla negra.
 */
export function getTargetScrollPosition(target: HTMLElement, offset = NAV_HEIGHT): number {
  if (target.id === "inicio") {
    return 0;
  }

  try {
    const allTriggers = ScrollTrigger.getAll();
    const pinTrigger = allTriggers.find(
      (st) =>
        (st.trigger === target ||
          target.contains(st.trigger as Node) ||
          (st.trigger as HTMLElement)?.contains?.(target)) &&
        Boolean(st.vars.pin),
    );

    if (pinTrigger && typeof pinTrigger.end === "number" && pinTrigger.end > pinTrigger.start) {
      const pinDistance = pinTrigger.end - pinTrigger.start;

      if (target.id === "servicios") {
        // En Servicios, aterrizar en el punto donde la Tarjeta 01 ya apareció y está 100% visible
        return Math.max(0, Math.round(pinTrigger.start + pinDistance * 0.16));
      }

      // Navegar al ~95% del pin para que la animación esté resuelta y el contenido visible en pantalla
      const settledOffset = Math.min(80, pinDistance * 0.05);
      const targetPos = Math.round(pinTrigger.end - settledOffset);
      return Math.max(0, targetPos);
    }
  } catch {
    // Si GSAP o ScrollTrigger no están listos, continuar con cálculo estándar
  }

  // Secciones estándar no fijadas
  const rect = target.getBoundingClientRect();
  return Math.max(0, rect.top + window.scrollY - offset);
}

/** Scroll animado con easing cúbico, compensando la altura del header fijo y pines cinemáticos GSAP. */
export function smoothScrollTo(target: HTMLElement, offset = NAV_HEIGHT): void {
  const startPosition = window.scrollY;
  const targetPosition = getTargetScrollPosition(target, offset);
  const distance = targetPosition - startPosition;

  // Si ya estamos prácticamente en esa posición, no hacer nada
  if (Math.abs(distance) < 5) return;

  const duration = Math.min(850, Math.max(450, Math.abs(distance) * 0.35));
  let startTime: number | null = null;
  let rafId: number;

  const cancelEvents = ["wheel", "touchstart", "keydown", "mousedown"] as const;
  const onUserInterrupt = () => {
    cancelAnimationFrame(rafId);
    cancelEvents.forEach((ev) => window.removeEventListener(ev, onUserInterrupt));
  };
  cancelEvents.forEach((ev) =>
    window.addEventListener(ev, onUserInterrupt, { passive: true, once: true }),
  );

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const nextY = easeInOutCubic(
      Math.min(timeElapsed, duration),
      startPosition,
      distance,
      duration,
    );

    window.scrollTo({
      top: nextY,
      behavior: "instant",
    });

    if (timeElapsed < duration) {
      rafId = requestAnimationFrame(step);
    } else {
      cancelEvents.forEach((ev) => window.removeEventListener(ev, onUserInterrupt));
    }
  }

  rafId = requestAnimationFrame(step);
}

/**
 * Lleva la vista a un elemento de forma instantánea o con scroll suave inteligente.
 */
export function scrollToElement(target: HTMLElement, { instant = false } = {}): void {
  if (instant) {
    const top = getTargetScrollPosition(target);
    window.scrollTo({ top, behavior: "instant" });
  } else {
    smoothScrollTo(target);
  }
}
