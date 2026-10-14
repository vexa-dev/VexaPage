"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import { cn } from "@/lib/utils";

export interface SpotlightNavItem {
  id: string;
  label: string;
  href?: string;
}

export interface SpotlightNavbarProps {
  items: SpotlightNavItem[];
  activeId?: string | null;
  className?: string;
  onItemClick?: (item: SpotlightNavItem, index: number) => void;
  renderItem?: (
    item: SpotlightNavItem,
    isActive: boolean,
    index: number,
  ) => React.ReactNode;
}

/**
 * SpotlightNavbar
 * Navbar transparente con luz activa que se desvanece suavemente en los bordes.
 */
export function SpotlightNavbar({
  items,
  activeId,
  className,
  onItemClick,
  renderItem,
}: SpotlightNavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);

  const activeIndex = React.useMemo(() => {
    if (activeId === undefined) return internalActiveIndex;
    if (!activeId) return -1;
    const found = items.findIndex((i) => i.id === activeId);
    return found;
  }, [activeId, items, internalActiveIndex]);

  const ambienceX = useRef(0);
  const controlsRef = useRef<{ stop: () => void } | null>(null);

  const isLightVisible = activeIndex >= 0 && activeIndex < items.length;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updatePosition = (animateSpring: boolean) => {
      if (activeIndex < 0 || activeIndex >= items.length) return;

      const activeEl = nav.querySelector<HTMLElement>(`[data-nav-index="${activeIndex}"]`);
      if (!activeEl) return;

      const navRect = nav.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();

      // Si el elemento no tiene dimensiones visibles aún (ej. durante la animación de intro)
      if (itemRect.width === 0) return;

      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      controlsRef.current?.stop();

      if (!animateSpring || ambienceX.current === 0) {
        ambienceX.current = targetX;
        nav.style.setProperty("--ambience-x", `${targetX}px`);
      } else {
        controlsRef.current = animate(ambienceX.current, targetX, {
          type: "spring",
          stiffness: 220,
          damping: 24,
          onUpdate: (v) => {
            ambienceX.current = v;
            nav.style.setProperty("--ambience-x", `${v}px`);
          },
        });
      }
    };

    updatePosition(true);

    // ResizeObserver para recalcular cuando el navbar pasa de oculto a visible tras la Intro
    const resizeObserver = new ResizeObserver(() => {
      updatePosition(false);
    });
    resizeObserver.observe(nav);

    const handleResize = () => updatePosition(false);
    window.addEventListener("resize", handleResize);

    return () => {
      controlsRef.current?.stop();
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, items.length]);

  const handleItemClick = (item: SpotlightNavItem, index: number) => {
    setInternalActiveIndex(index);
    onItemClick?.(item, index);
  };

  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <nav
        ref={navRef}
        className="relative h-10 px-1 flex items-center bg-transparent border-0 shadow-none overflow-visible"
      >
        {/* Lista de enlaces */}
        <ul className="relative flex items-center h-full gap-1 z-10">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <li
                key={item.id}
                data-nav-index={idx}
                className="relative h-full flex items-center justify-center"
              >
                {renderItem ? (
                  renderItem(item, isActive, idx)
                ) : (
                  <a
                    href={item.href || `#${item.id}`}
                    onClick={(e) => {
                      if (!item.href) e.preventDefault();
                      handleItemClick(item, idx);
                    }}
                    className={cn(
                      "px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full select-none",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
                      isActive
                        ? "text-slate-900 dark:text-white font-semibold"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* 1. Haz de luz inferior con desvanecimiento suave gradual en ambos extremos */}
        <div
          className="pointer-events-none absolute bottom-0 z-[2] -translate-x-1/2 h-[2px] w-28 sm:w-32 transition-opacity duration-300"
          style={{
            opacity: isLightVisible ? 1 : 0,
            left: "var(--ambience-x, 50%)",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.45) 25%, #10b981 50%, rgba(16, 185, 129, 0.45) 75%, transparent 100%)",
            filter: "drop-shadow(0 0 6px #10b981) drop-shadow(0 0 14px rgba(16, 185, 129, 0.6))",
          }}
        />

        {/* 2. Núcleo brillante central desvanecido */}
        <div
          className="pointer-events-none absolute bottom-0 z-[3] -translate-x-1/2 h-[1.5px] w-12 sm:w-16 transition-opacity duration-300"
          style={{
            opacity: isLightVisible ? 1 : 0,
            left: "var(--ambience-x, 50%)",
            background: "linear-gradient(90deg, transparent 0%, #a7f3d0 50%, transparent 100%)",
            filter: "drop-shadow(0 0 4px #10b981)",
          }}
        />

        {/* 3. Halo ambiental elíptico que se desvanece de forma orgánica hacia 0% antes de los bordes */}
        <div
          className="pointer-events-none absolute bottom-0 z-[1] -translate-x-1/2 w-36 sm:w-44 h-12 transition-opacity duration-300"
          style={{
            opacity: isLightVisible ? 1 : 0,
            left: "var(--ambience-x, 50%)",
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(84, 141, 123, 0.28) 0%, rgba(84, 141, 123, 0.07) 45%, transparent 75%)",
          }}
        />
      </nav>
    </div>
  );
}

export default SpotlightNavbar;
