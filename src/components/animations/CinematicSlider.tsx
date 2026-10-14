"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export interface CinematicSliderProps {
  items: Project[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  onSelectProject?: (projectId: string) => void;
}

/**
 * CinematicSlider
 * Réplica cinematográfica interactiva de pantalla amplia estilo editorial de lujo.
 * - Marco principal: Totalmente recto/cuadrado (rounded-none), formato panorámico inmersivo.
 * - Textos limpios flotantes: Letras flotando directamente sobre la fotografía sin cuadros ni blur.
 * - Miniaturas: Bordes redondeados pronunciados con imagen limpia y título sin badges verdes.
 * - Control de navegación: Único botón de avanzar (→) centrado en el medio inferior.
 */
export function CinematicSlider({
  items,
  className,
  autoPlay = true,
  interval = 7000,
  onSelectProject,
}: CinematicSliderProps) {
  // Orden dinámico de los elementos gestionado en estado de React
  const [projects, setProjects] = useState<Project[]>(() => items);
  const [isPaused, setIsPaused] = useState(false);
  const isAnimatingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  // Sincroniza si la prop `items` cambia externamente
  useEffect(() => {
    setProjects(items);
  }, [items]);

  // Rotar hacia adelante (Next): el primer elemento se envía al final
  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setProjects((prev) => {
      if (prev.length < 2) return prev;
      return [...prev.slice(1), prev[0]];
    });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 650);
  }, []);

  // Rotar hacia atrás (soporte para gestos táctiles y teclado)
  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setProjects((prev) => {
      if (prev.length < 2) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 650);
  }, []);

  // Al hacer clic en cualquiera de las tarjetas de la derecha, rota hasta colocarla como elemento activo
  const handleThumbnailClick = useCallback((targetId: string) => {
    if (isAnimatingRef.current) return;

    setProjects((prev) => {
      const targetIndex = prev.findIndex((p) => p.id === targetId);
      // Si ya es el fondo (0) o el activo (1), no rotar
      if (targetIndex <= 1) return prev;

      isAnimatingRef.current = true;
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 650);

      const shift = targetIndex - 1;
      return [...prev.slice(shift), ...prev.slice(0, shift)];
    });
  }, []);

  // Autoplay continuo con pausa al interactuar (hover)
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, handleNext]);

  // Navegación con teclado (Flecha derecha / izquierda)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  // Soporte de gestos táctiles (Swipe en móviles)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // Swipe izquierda -> siguiente
      } else {
        handlePrev(); // Swipe derecha -> anterior
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Galería cinematográfica interactiva de proyectos destacados"
      className={cn(
        "cinematic-slider-container relative w-full rounded-none overflow-hidden bg-[#111518] shadow-2xl border border-white/10 select-none outline-none focus-visible:ring-1 focus-visible:ring-[#548D7B]/40",
        className
      )}
    >
      {/* ========================================================= */}
      {/* PISTA DE DIAPOSITIVAS Y TARJETAS FLOTANTES (LUNDEV TRACK) */}
      {/* ========================================================= */}
      <div className="cinematic-slide-track w-full h-full relative">
        {projects.map((project, index) => {
          const isActive = index === 1;
          const isThumbnail = index >= 2;

          return (
            <div
              key={project.id}
              onClick={isThumbnail ? () => handleThumbnailClick(project.id) : undefined}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={cn(
                "cinematic-item",
                isThumbnail && "group cursor-pointer"
              )}
            >
              {/* ========================================================= */}
              {/* CONTENIDO DEL SLIDE ACTIVO (ÍNDICE 1) - LETRAS FLOTANTES */}
              {/* ========================================================= */}
              {isActive && (
                <div
                  key={`content-${project.id}`}
                  style={{
                    textShadow:
                      "0 2px 12px rgba(0, 0, 0, 0.7), 0 1px 4px rgba(0, 0, 0, 0.9)",
                  }}
                  className="cinematic-content absolute z-20 top-12 sm:top-16 md:top-1/2 md:-translate-y-1/2 left-8 sm:left-12 md:left-16 lg:left-20 right-8 md:right-auto max-w-lg lg:max-w-xl text-left pointer-events-auto select-none"
                >
                  {/* Título: Tamaño moderado, sobrio y legible */}
                  <h3 className="cinematic-anim-title font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Descripción: Reducida, máximo 2 líneas breves */}
                  <p className="cinematic-anim-desc text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 max-w-md mb-5 font-normal">
                    {project.description}
                  </p>


                  {/* Enlace secundario ("EXPLORAR PROYECTO →") en Verde Corporativo VEXA */}
                  <div className="cinematic-anim-cta">
                    <Link
                      to={project.link || `/proyectos#${project.id}`}
                      onClick={() => onSelectProject?.(project.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#498974] hover:bg-[#3B705F] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(73,137,116,0.35)] hover:scale-105 active:scale-95 group cursor-pointer"
                    >
                      <span>EXPLORAR PROYECTO</span>
                      <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MINIATURAS FLOTANTES DE LA DERECHA (IMAGEN LIMPIA + TÍTULO) */}
              {/* ========================================================= */}
              {isThumbnail && (
                <>
                  {/* Gradiente inferior muy sutil para legibilidad del título */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none group-hover:from-black/90 transition-all" />
                  
                  {/* Borde sutil de cristal */}
                  <div className="absolute inset-0 rounded-[inherit] border border-white/10 group-hover:border-white/25 transition-colors pointer-events-none" />

                  {/* Solo el título limpio de la miniatura */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-left">
                    <h4 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-md line-clamp-2 group-hover:text-[#8BB8A8] transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* CONTROL DE NAVEGACIÓN (ÚNICO BOTÓN AVANZAR CENTRADO ABAJO) */}
      {/* ========================================================= */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
        <button
          onClick={handleNext}
          type="button"
          aria-label="Siguiente proyecto"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full glass bg-[#111518]/80 hover:bg-[#161B20] border border-white/15 hover:border-[#548D7B]/50 text-white hover:text-[#8BB8A8] flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-2xl group"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl transition-transform group-hover:translate-x-0.5">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
