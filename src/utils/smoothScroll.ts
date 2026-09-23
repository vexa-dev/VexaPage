const NAV_HEIGHT = 80;
const DURATION = 800;

function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

/** Scroll animado con easing cúbico, compensando la altura del header fijo. */
export function smoothScrollTo(target: HTMLElement, offset = NAV_HEIGHT): void {
  const startPosition = window.scrollY;
  const offsetPosition = target.getBoundingClientRect().top + startPosition - offset;
  const distance = offsetPosition - startPosition;
  let startTime: number | null = null;

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    window.scrollTo({
      top: easeInOutCubic(Math.min(timeElapsed, DURATION), startPosition, distance, DURATION),
      behavior: "instant",
    });
    if (timeElapsed < DURATION) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/**
 * Lleva la vista a un elemento. Si el elemento define scroll-margin (p. ej. scroll-mt-32)
 * se respeta con scrollIntoView; si no, se compensa la altura del header fijo.
 */
export function scrollToElement(target: HTMLElement, { instant = false } = {}): void {
  const hasScrollMargin = (parseFloat(getComputedStyle(target).scrollMarginTop) || 0) > 0;

  if (hasScrollMargin) {
    target.scrollIntoView({ behavior: instant ? "instant" : "smooth", block: "start" });
  } else if (instant) {
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "instant" });
  } else {
    smoothScrollTo(target);
  }
}
