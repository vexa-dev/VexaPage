import { useEffect, useRef } from "react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioCard } from "../components/PortfolioCard";

const SCROLL_SPEED = 1;

export function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll de ida y vuelta; se pausa con hover o al tocar la pantalla.
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isPaused = false;
    let direction = 1;
    let frame = 0;
    let resumeTimeout = 0;

    const tick = () => {
      if (!isPaused) {
        carousel.scrollLeft += SCROLL_SPEED * direction;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1) {
          direction = -1;
        } else if (carousel.scrollLeft <= 0) {
          direction = 1;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    const pause = () => {
      window.clearTimeout(resumeTimeout);
      isPaused = true;
    };
    const resume = () => {
      isPaused = false;
    };
    const resumeLater = () => {
      resumeTimeout = window.setTimeout(resume, 1000);
    };

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);
    carousel.addEventListener("touchstart", pause, { passive: true });
    carousel.addEventListener("touchend", resumeLater, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimeout);
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
      carousel.removeEventListener("touchstart", pause);
      carousel.removeEventListener("touchend", resumeLater);
    };
  }, []);

  return (
    <section className="py-24 bg-accent/30 relative" id="portafolio">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Trabajo Destacado
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Soluciones digitales de alto impacto que transforman negocios complejos en experiencias
            simples y poderosas.
          </p>
        </div>
        {/* Portafolio: Carrusel de Proyectos Interactivo */}
        <div className="relative w-full pb-10">
          {/* Carrusel Contenedor */}
          <div
            ref={carouselRef}
            id="portfolio-carousel"
            className="flex gap-6 overflow-x-auto pb-8 pt-4 lg:px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {PORTFOLIO_PROJECTS.map((project) => (
              <PortfolioCard key={project.anchor} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
