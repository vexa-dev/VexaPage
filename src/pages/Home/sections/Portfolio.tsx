import { useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import { CinematicSlider } from "@/components/animations/CinematicSlider";
import { AccordionGallery, type AccordionGalleryItem } from "@/components/animations/AccordionGallery";
import { AnimatedButton } from "@/components/animations/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_TITLE = "Trabajo Destacado";
const TITLE_WORDS = PORTFOLIO_TITLE.split(" ");
const PORTFOLIO_SUBTITLE = "Soluciones digitales de alto impacto que transforman negocios complejos en experiencias simples y poderosas.";
const SUBTITLE_WORDS = PORTFOLIO_SUBTITLE.split(" ");

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const ctaWrapperRef = useRef<HTMLDivElement>(null);

  const galleryItems = useMemo<AccordionGalleryItem[]>(
    () =>
      FEATURED_PROJECTS.map((project) => ({
        image: project.image,
        label: project.title,
        description: project.description,
        link: project.link || `/proyectos#${project.id}`,
        tags: project.tags,
        icon: project.icon,
        alt: project.title,
        category: project.category,
        problem: project.problem,
        benefit: project.benefit,
        targetSector: project.targetSector,
      })),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =========================================================================
      // DESKTOP (>= 1024px): Coreografía de 3 fases con pin y ScrollTrigger
      // =========================================================================
      mm.add("(min-width: 1024px)", () => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const header = headerRef.current;
        const subtitle = subtitleRef.current;
        const sliderWrapper = sliderWrapperRef.current;
        const ctaWrapper = ctaWrapperRef.current;

        if (!section || !container || !header || !subtitle || !sliderWrapper) {
          return;
        }

        // -------------------------------------------------------------
        // ESTADO INICIAL
        // -------------------------------------------------------------
        // 1. Bloque de textos centrado en el viewport (gracias a lg:absolute lg:inset-0)
        gsap.set(header, {
          opacity: 1,
          y: 0,
        });

        // 2. Letras del título preparadas para revelación inicial 3D flip-fade
        gsap.set(".portfolio-title-char", {
          rotateX: 90,
          y: 28,
          opacity: 0,
          filter: "blur(8px)",
          transformOrigin: "center bottom",
        });

        // 3. Subtítulo con letras preparadas para revelación 3D flip-fade
        gsap.set(subtitle, {
          y: 0,
          opacity: 1,
        });
        gsap.set(".portfolio-subtitle-char", {
          rotateX: 90,
          y: 18,
          opacity: 0,
          filter: "blur(6px)",
          transformOrigin: "center bottom",
        });

        // 4. Slider panorámico oculto, escalado ligeramente y abajo
        gsap.set(sliderWrapper, {
          opacity: 0,
          y: 120,
          scale: 0.92,
          pointerEvents: "none",
        });

        // 5. Botón CTA inferior oculto inicialmente
        if (ctaWrapper) {
          gsap.set(ctaWrapper, {
            opacity: 0,
            y: 30,
            pointerEvents: "none",
          });
        }

        // -------------------------------------------------------------
        // TIMELINE DE SCROLLTRIGGER (Pin fijando la sección)
        // -------------------------------------------------------------
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=1900",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // =============================================================
        // FASE 1: Aparición de textos en el centro
        // =============================================================
        // El título "Trabajo Destacado" ejecuta su animación de revelación inicial letra por letra
        tl.to(
          ".portfolio-title-char",
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.04,
            duration: 1.2,
            ease: "power2.out",
          },
          0
        );

        // Justo después, las letras del subtítulo se revelan con el efecto 3D flip-fade
        tl.to(
          ".portfolio-subtitle-char",
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.012,
            duration: 1.2,
            ease: "power2.out",
          },
          0.8
        );

        // =============================================================
        // FASE 2: Lectura y Pausa (Hold)
        // =============================================================
        // Espacio temporal en el timeline para que ambos textos permanezcan
        // estáticos en el centro de la pantalla mientras el usuario hace scroll
        tl.to(
          {},
          {
            duration: 1.4,
          },
          1.8
        );

        // =============================================================
        // FASE 3: Desaparición de textos y Despliegue del Slider
        // =============================================================
        // 1. El bloque de textos desaparece hacia arriba desvaneciéndose por completo
        tl.to(
          header,
          {
            opacity: 0,
            y: -60,
            duration: 1.2,
            ease: "power2.inOut",
          },
          3.0
        );

        // 2. Simultáneamente, el contenedor del slider entra en escena en su tamaño normal:
        // pasa de opacity: 0, y: 120, scale: 0.92 a opacity: 1, y: 0, scale: 1
        tl.to(
          sliderWrapper,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2.0,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          3.2
        );

        // 3. Botón CTA inferior entra con el slider
        if (ctaWrapper) {
          tl.to(
            ctaWrapper,
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power2.out",
              pointerEvents: "auto",
            },
            4.2
          );
        }
      });

      // =========================================================================
      // RESPONSIVE MÓVIL (< 1024px): Sin pin invasivo, flujo suave al scroll
      // =========================================================================
      mm.add("(max-width: 1023px)", () => {
        const subtitle = subtitleRef.current;
        const sliderWrapper = sliderWrapperRef.current;
        const ctaWrapper = ctaWrapperRef.current;

        if (!subtitle || !sliderWrapper) return;

        gsap.set(".portfolio-title-char", {
          rotateX: 90,
          y: 20,
          opacity: 0,
          filter: "blur(6px)",
        });

        gsap.set(subtitle, {
          y: 0,
          opacity: 1,
        });

        gsap.set(".portfolio-subtitle-char", {
          rotateX: 90,
          y: 16,
          opacity: 0,
          filter: "blur(6px)",
        });

        gsap.to(".portfolio-title-char", {
          scrollTrigger: {
            trigger: subtitle,
            start: "top 85%",
            once: true,
          },
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.03,
          duration: 1.0,
          ease: "power2.out",
        });

        gsap.to(".portfolio-subtitle-char", {
          scrollTrigger: {
            trigger: subtitle,
            start: "top 85%",
            once: true,
          },
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.008,
          duration: 1.0,
          delay: 0.2,
          ease: "power2.out",
        });

        gsap.set(sliderWrapper, {
          opacity: 0,
          y: 40,
          scale: 0.98,
          pointerEvents: "auto",
        });

        if (ctaWrapper) {
          gsap.set(ctaWrapper, {
            opacity: 1,
            y: 0,
            pointerEvents: "auto",
          });
        }

        gsap.to(sliderWrapper, {
          scrollTrigger: {
            trigger: sliderWrapper,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: "power2.out",
        });
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full bg-[#0A0C0E] transition-colors duration-500 overflow-hidden"
      id="portafolio"
    >
      {/* Resplandores decorativos ambientales de fondo (Verde Corporativo + Azul Petróleo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#498974]/[0.08] blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4A788A]/[0.06] blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Contenedor fijado durante el scroll en desktop */}
      <div
        ref={containerRef}
        className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-3 sm:px-6 lg:px-10 py-12 md:py-16 z-20"
      >
        {/* 1. Bloque de Textos (Centrado en pantalla en Fases 1 y 2; desaparece en Fase 3) */}
        <div
          ref={headerRef}
          className="portfolio-header lg:absolute lg:inset-0 flex flex-col justify-center items-center text-center z-30 max-w-7xl mx-auto px-6 mb-12 lg:mb-0 pointer-events-none"
          style={{ willChange: "transform, opacity" }}
        >
          <h2
            ref={titleRef}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 text-white tracking-tight"
            style={{ perspective: 1000 }}
          >
            {TITLE_WORDS.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-3 sm:mr-4 last:mr-0"
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="portfolio-title-char inline-block"
                    style={{ willChange: "transform, opacity, filter" }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p
            ref={subtitleRef}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ willChange: "transform, opacity", perspective: 1000 }}
          >
            {SUBTITLE_WORDS.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-1.5 sm:mr-2 last:mr-0"
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="portfolio-subtitle-char inline-block"
                    style={{ willChange: "transform, opacity, filter", transformStyle: "preserve-3d" }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>

        {/* 2. Contenedor de Proyectos: Slider Panorámico en PC/Laptop vs Acordeón en Celular */}
        <div
          ref={sliderWrapperRef}
          className="portfolio-slider-wrapper w-full max-w-[1760px] mx-auto z-20 relative"
          style={{ willChange: "transform, opacity" }}
        >
          {/* VISTA DESKTOP / LAPTOP (>= 1024px): Slider Cinemático Panorámico (100% INTACTO) */}
          <div className="hidden lg:block w-full">
            <CinematicSlider
              items={FEATURED_PROJECTS}
              autoPlay={true}
              interval={6500}
              className="w-full"
            />
          </div>

          {/* VISTA MÓVIL / CELULAR (< 1024px): Acordeón Interactivo de Proyectos */}
          <div className="block lg:hidden w-full max-w-xl mx-auto px-1 sm:px-2">
            <AccordionGallery
              items={galleryItems}
              defaultIndex={2}
              accentColor="#548D7B"
              overlayColor="#0A0C0E"
              textColor="#ffffff"
              height={550}
              gap={8}
              radius={16}
              expandRatio={0.46}
              orientation="vertical"
              duration={0.55}
              ease="power3.out"
              trigger="click"
              showLabels={true}
              grayscale={false}
              className="w-full"
            />
          </div>
        </div>

        {/* 3. Enlace / Botón CTA inferior */}
        <div
          ref={ctaWrapperRef}
          className="portfolio-cta-wrapper text-center z-20 w-full mt-8 md:mt-12"
          style={{ willChange: "transform, opacity" }}
        >
          <AnimatedButton
            as={Link}
            to="/proyectos"
            shineColor="rgba(118, 168, 151, 0.7)"
            className="bg-[#111518]/80 backdrop-blur-md border-white/10 hover:border-white/20 text-[#76A897] hover:text-white"
          >
            <span>Ver catálogo completo de proyectos</span>
            <span className="material-symbols-outlined text-base text-[#76A897] transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
