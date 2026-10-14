import { useState, useRef, useEffect } from "react";
import Swiper from "swiper";
import { EffectCreative } from "swiper/modules";
import { motion } from "motion/react";

// Estilos de Swiper y EffectCreative
import "swiper/css";
import "swiper/css/effect-creative";

import { TEAM_MEMBERS } from "@/data/team";
import { TeamCard } from "../components/TeamCard";
import { FlipFadeText } from "@/components/animations/FlipFadeText";

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const swiper = new Swiper(containerRef.current, {
      modules: [EffectCreative],
      effect: "creative",
      grabCursor: true,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      speed: 650,
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
          opacity: 0.6,
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      on: {
        slideChange: (s) => {
          setActiveIndex(s.realIndex);
        },
      },
    });

    swiperInstanceRef.current = swiper;

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  const goToSlide = (index: number) => {
    swiperInstanceRef.current?.slideToLoop(index);
  };

  const nextSlide = () => {
    swiperInstanceRef.current?.slideNext();
  };

  const prevSlide = () => {
    swiperInstanceRef.current?.slidePrev();
  };

  return (
    <section
      className="py-24 relative isolate overflow-hidden bg-[#0A0C0E] transition-colors duration-500"
      id="equipo"
    >
      {/* Resplandor ambiental de fondo (Verde Corporativo + Azul Petróleo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#498974]/[0.08] blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#4A788A]/[0.06] blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Cabecera de la Sección */}
        <div className="text-center lg:text-left mb-12 sm:mb-14 max-w-sm sm:max-w-md lg:max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            <FlipFadeText text="Nuestro Equipo" textClassName="font-display" />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
            <FlipFadeText
              text="Las mentes brillantes y apasionadas detrás de nuestra excelencia técnica."
              className="inline-flex flex-wrap justify-center lg:justify-start items-center leading-relaxed"
              staggerDelay={0.012}
              letterDuration={0.4}
              delay={0.15}
            />
          </p>
        </div>

        {/* Carrusel Swiper 3D Creative Effect (Animación de aparición al llegar su turno en scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-5xl mx-auto select-none"
        >
          <div ref={containerRef} className="swiper w-full rounded-[28px]">
            <div className="swiper-wrapper">
              {TEAM_MEMBERS.map((member, i) => (
                <div key={member.name} className="swiper-slide w-full">
                  <TeamCard member={member} isActive={i === activeIndex} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Controles de Navegación: Puntos de Paginación y Botones de Flecha */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between max-w-sm sm:max-w-md lg:max-w-5xl mx-auto mt-8 pt-4 px-2"
        >
          {/* Puntos de Paginación */}
          <div className="flex items-center gap-2">
            {TEAM_MEMBERS.map((member, i) => (
              <button
                key={member.name}
                onClick={() => goToSlide(i)}
                aria-label={`Ir al perfil de ${member.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-8 bg-[#548D7B] shadow-[0_0_10px_rgba(84,141,123,0.45)]"
                    : "w-2 bg-slate-400/40 dark:bg-white/25 hover:bg-slate-400 dark:hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Flechas de Navegación Circulares */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Miembro anterior"
              className="w-11 h-11 rounded-full bg-[#111518]/80 hover:bg-[#161B20] border border-white/10 hover:border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente miembro"
              className="w-11 h-11 rounded-full bg-[#111518]/80 hover:bg-[#498974] hover:border-[#548D7B] hover:text-white border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
