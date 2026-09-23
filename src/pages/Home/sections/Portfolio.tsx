import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "../../../data/portfolio";
import type { PortfolioProject } from "../../../types";

const SCROLL_SPEED = 1;

function PortfolioCard({ project }: { project: PortfolioProject }) {
  const { theme } = project;
  return (
    <div className="w-[280px] h-[400px] flex-shrink-0 rounded-2xl border border-white/10 overflow-hidden relative group cursor-pointer shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
      {/* Imagen Genérica de Fondo */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} to-black flex items-center justify-center`}
      >
        <span className="material-symbols-outlined text-white/20 text-8xl">{project.icon}</span>
      </div>
      {/* Vista Default */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end h-32 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-display text-2xl font-bold text-white tracking-wide">
          {project.title}
        </h3>
      </div>
      {/* Overlay Hover */}
      <div
        className={`absolute inset-0 ${project.overlay ?? "bg-black/40 backdrop-blur-md"} p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border ${theme.border}`}
      >
        <div>
          <h3 className="font-display text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-bold text-[10px] items-center justify-center flex uppercase bg-white/10 px-2 py-1 rounded text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Link
          to={`/proyectos#${project.anchor}`}
          className={`w-full py-3 ${theme.button} border rounded-xl font-bold tracking-wider uppercase text-xs hover:text-white transition-colors text-center block`}
        >
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
}

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
