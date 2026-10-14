import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TITLE = "Quiénes Somos: Talento Joven, Soluciones Robustas";
const TITLE_WORDS = ABOUT_TITLE.split(" ");
const ABOUT_DESCRIPTION = "En VEXA, somos un equipo de ingenieros en formación apasionados por la arquitectura de software. No solo creamos aplicaciones; diseñamos sistemas escalables utilizando las herramientas que están definiendo el mercado actual. Creemos que la juventud es sinónimo de innovación sin límites y adaptabilidad total.";
const DESCRIPTION_WORDS = ABOUT_DESCRIPTION.split(" ");

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const stageColRef = useRef<HTMLDivElement>(null);
  const laptopWrapperRef = useRef<HTMLDivElement>(null);
  const satellitesOriginRef = useRef<HTMLDivElement>(null);

  // Referencias individuales de los 5 satélites
  const satLibretaRef = useRef<HTMLDivElement>(null);
  const satCajaRef = useRef<HTMLDivElement>(null);
  const satEscanerRef = useRef<HTMLDivElement>(null);
  const satBoletaRef = useRef<HTMLDivElement>(null);
  const satLapiceroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP: Timeline con PIN fijando la sección
      // ==========================================
      mm.add("(min-width: 1024px)", () => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const stageCol = stageColRef.current;
        const laptopWrapper = laptopWrapperRef.current;
        const textCol = textColRef.current;
        const paragraph = paragraphRef.current;
        const cards = cardsRef.current;

        const satLibreta = satLibretaRef.current;
        const satCaja = satCajaRef.current;
        const satEscaner = satEscanerRef.current;
        const satBoleta = satBoletaRef.current;
        const satLapicero = satLapiceroRef.current;

        if (
          !section ||
          !container ||
          !stageCol ||
          !laptopWrapper ||
          !textCol ||
          !satLibreta ||
          !satCaja ||
          !satEscaner ||
          !satBoleta ||
          !satLapicero
        ) {
          return;
        }

        // Cálculo exacto del centro de la pantalla relativo a la columna derecha
        const getCenterOffsetX = () => {
          const containerRect = container.getBoundingClientRect();
          const stageRect = stageCol.getBoundingClientRect();
          const containerCenter = containerRect.left + containerRect.width / 2;
          const stageCenter = stageRect.left + stageRect.width / 2;
          return containerCenter - stageCenter;
        };

        const initialOffsetX = getCenterOffsetX();

        // 1. Estado inicial previo a la animación
        // Laptop entra más grande en el centro (scale: 1.55) para apreciar los detalles
        gsap.set(laptopWrapper, {
          x: initialOffsetX,
          y: 350,
          scale: 1.55,
          opacity: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          transformPerspective: 1200,
          transformOrigin: "center center",
        });

        // Contenedor de texto y letras del título inicializados en reposo
        gsap.set(textCol, {
          opacity: 0,
          x: -50,
        });

        // Las letras del título esperan con el efecto 3D flip-fade oculto
        gsap.set(".about-title-char", {
          rotateX: 90,
          y: 22,
          opacity: 0,
          filter: "blur(8px)",
          transformOrigin: "center bottom",
        });

        // Las letras de la descripción esperan con el efecto 3D flip-fade oculto
        gsap.set(".about-desc-char", {
          rotateX: 90,
          y: 18,
          opacity: 0,
          filter: "blur(6px)",
          transformOrigin: "center bottom",
        });

        if (paragraph) gsap.set(paragraph, { opacity: 1, y: 0 });
        if (cards) gsap.set(cards, { opacity: 0, y: 20 });

        gsap.set(
          [satLibreta, satCaja, satEscaner, satBoleta, satLapicero],
          {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
            z: 0,
            transformOrigin: "center center",
          }
        );

        // 2. Timeline sincronizado con ScrollTrigger (Pin de la sección)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=1800",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // -------------------------------------------------------------
        // FASE 1 (Scroll 0-30%): Entrada desde abajo en vista frontal ortogonal
        // -------------------------------------------------------------
        tl.to(
          laptopWrapper,
          {
            y: 0,
            opacity: 1,
            scale: 1.55,
            x: initialOffsetX,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            duration: 3,
            ease: "power2.out",
          },
          0
        );

        // -------------------------------------------------------------
        // FASE 2 (Scroll 30-65%): Se inclina en 3D a isométrica hacia la derecha
        // y se reduce a su tamaño normal (scale: 0.95)
        // -------------------------------------------------------------
        tl.to(
          laptopWrapper,
          {
            x: 0,
            scale: 0.95,
            rotateX: 18,
            rotateY: -22,
            rotateZ: 4,
            duration: 3.5,
            ease: "power2.inOut",
          },
          3
        );

        // AHORA: En su turno exacto (4.0 - 6.5%), se desvanece el contenedor
        // y las letras ejecutan el efecto 3D flip-fade letra por letra
        tl.to(
          textCol,
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          4.0
        );

        // Efecto FlipFade de cada letra exactamente cuando llega el turno del texto
        tl.to(
          ".about-title-char",
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.032,
            duration: 1.8,
            ease: "power2.out",
          },
          4.2
        );

        // Efecto FlipFade de cada letra de la descripción debajo del título
        tl.to(
          ".about-desc-char",
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.005,
            duration: 1.4,
            ease: "power2.out",
          },
          4.8
        );

        if (cards) {
          tl.to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power2.out",
            },
            5.6
          );
        }

        // -------------------------------------------------------------
        // FASE 3 (Scroll 65-100%): Los 5 satélites salen disparados desde
        // el centro de la pantalla de la laptop hacia sus posiciones exteriores
        // -------------------------------------------------------------
        // Libreta (arriba-izquierda)
        tl.to(
          satLibreta,
          {
            x: -200,
            y: -140,
            z: 50,
            scale: 1,
            opacity: 1,
            rotation: -12,
            duration: 3.5,
            ease: "back.out(1.2)",
          },
          6.5
        );

        // Caja (abajo-izquierda)
        tl.to(
          satCaja,
          {
            x: -190,
            y: 130,
            z: 70,
            scale: 1,
            opacity: 1,
            rotation: 6,
            duration: 3.5,
            ease: "back.out(1.2)",
          },
          6.5
        );

        // Registradora / Escáner (abajo-centro)
        tl.to(
          satEscaner,
          {
            x: -10,
            y: 180,
            z: 80,
            scale: 1,
            opacity: 1,
            rotation: -6,
            duration: 3.5,
            ease: "back.out(1.2)",
          },
          6.5
        );

        // Boleta / Ticket (abajo-derecha)
        tl.to(
          satBoleta,
          {
            x: 180,
            y: 130,
            z: 65,
            scale: 1,
            opacity: 1,
            rotation: 14,
            duration: 3.5,
            ease: "back.out(1.2)",
          },
          6.5
        );

        // Lapicero (a la derecha)
        tl.to(
          satLapicero,
          {
            x: 220,
            y: -50,
            z: 60,
            scale: 1,
            opacity: 1,
            rotation: 20,
            duration: 3.5,
            ease: "back.out(1.2)",
          },
          6.5
        );
      });

      // ==========================================
      // RESPONSIVE MÓVIL (< 1024px): Sin PIN invasivo
      // Layout vertical limpio con revelación fluida
      // ==========================================
      mm.add("(max-width: 1023px)", () => {
        const textCol = textColRef.current;
        const paragraph = paragraphRef.current;
        const cards = cardsRef.current;
        const laptopWrapper = laptopWrapperRef.current;
        const stageCol = stageColRef.current;

        const satLibreta = satLibretaRef.current;
        const satCaja = satCajaRef.current;
        const satEscaner = satEscanerRef.current;
        const satBoleta = satBoletaRef.current;
        const satLapicero = satLapiceroRef.current;

        if (
          !textCol ||
          !laptopWrapper ||
          !stageCol ||
          !satLibreta ||
          !satCaja ||
          !satEscaner ||
          !satBoleta ||
          !satLapicero
        ) {
          return;
        }

        // En móvil el texto se revela con su efecto al llegar al viewport
        gsap.set(textCol, { opacity: 1, x: 0 });
        if (paragraph) gsap.set(paragraph, { opacity: 1, y: 0 });
        if (cards) gsap.set(cards, { opacity: 1, y: 0 });

        gsap.set(".about-title-char", {
          rotateX: 90,
          y: 22,
          opacity: 0,
          filter: "blur(8px)",
        });

        gsap.set(".about-desc-char", {
          rotateX: 90,
          y: 16,
          opacity: 0,
          filter: "blur(6px)",
        });

        // Trigger del título en móvil
        gsap.to(".about-title-char", {
          scrollTrigger: {
            trigger: textCol,
            start: "top 85%",
            once: true,
          },
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.025,
          duration: 1.2,
          ease: "power2.out",
        });

        // Trigger de la descripción en móvil
        gsap.to(".about-desc-char", {
          scrollTrigger: {
            trigger: textCol,
            start: "top 85%",
            once: true,
          },
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.005,
          duration: 1.0,
          delay: 0.25,
          ease: "power2.out",
        });

        // Laptop centrada con perspectiva isométrica sutil adaptada
        gsap.set(laptopWrapper, {
          x: 0,
          y: 40,
          scale: 0.9,
          opacity: 0,
          rotateX: 12,
          rotateY: -14,
          rotateZ: 2,
          transformPerspective: 1000,
        });

        // Satélites compactos en móvil para no desbordar la pantalla
        gsap.set(
          [satLibreta, satCaja, satEscaner, satBoleta, satLapicero],
          {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
          }
        );

        // Animación fluida al hacer scroll sin bloquear la pantalla (pin: false)
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: stageCol,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        });

        mobileTl.to(laptopWrapper, {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        });

        // Expansión adaptada de satélites en móvil
        mobileTl.to(
          satLibreta,
          { x: -115, y: -90, scale: 0.8, opacity: 1, rotation: -10, duration: 1.5 },
          0.8
        );
        mobileTl.to(
          satCaja,
          { x: -110, y: 80, scale: 0.8, opacity: 1, rotation: 5, duration: 1.5 },
          0.8
        );
        mobileTl.to(
          satEscaner,
          { x: 0, y: 110, scale: 0.8, opacity: 1, rotation: -4, duration: 1.5 },
          0.8
        );
        mobileTl.to(
          satBoleta,
          { x: 110, y: 80, scale: 0.8, opacity: 1, rotation: 10, duration: 1.5 },
          0.8
        );
        mobileTl.to(
          satLapicero,
          { x: 125, y: -35, scale: 0.8, opacity: 1, rotation: 16, duration: 1.5 },
          0.8
        );
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0 bg-[#0A0C0E]"
      id="quienes-somos"
    >
      {/* Fusión superior continua desde Hero hacia el fondo de Quiénes Somos */}
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#0A0C0E] via-[#0A0C0E]/70 to-transparent -z-10 pointer-events-none" />

      {/* Resplandor ambiental superior de ancho completo que conecta suavemente desde el Hero */}
      <div className="absolute top-0 inset-x-0 h-[220px] bg-gradient-to-b from-[#548D7B]/10 via-[#548D7B]/[0.03] to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Resplandor central pizarra petróleo suave detrás del escenario de la laptop */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#4A788A]/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ======================================================== */}
          {/* COLUMNA IZQUIERDA: Todo el texto oficial de Quiénes Somos */}
          {/* ======================================================== */}
          <div ref={textColRef} className="will-change-transform z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white transition-colors duration-300 leading-tight">
              <span
                className="inline-flex flex-wrap items-center leading-tight tracking-tight select-none"
                style={{ perspective: "1000px" }}
              >
                {TITLE_WORDS.map((word, wIdx) => (
                  <span key={wIdx} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, cIdx) => (
                      <span
                        key={`${wIdx}-${cIdx}`}
                        className="about-title-char inline-block"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {char}
                      </span>
                    ))}
                    {wIdx < TITLE_WORDS.length - 1 && (
                      <span className="inline-block">&nbsp;</span>
                    )}
                  </span>
                ))}
              </span>
            </h2>

            <p
              ref={paragraphRef}
              className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed transition-colors duration-300"
              style={{ perspective: 1000 }}
            >
              {DESCRIPTION_WORDS.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap mr-1.5 last:mr-0"
                >
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="about-desc-char inline-block"
                      style={{ willChange: "transform, opacity, filter", transformStyle: "preserve-3d" }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>

            <div ref={cardsRef} className="space-y-4">
              <div className="flex gap-4 p-3 rounded-xl bg-[#111518]/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-[#498974]/15 border border-[#548D7B]/30 rounded-lg flex items-center justify-center text-[#76A897] shadow-[0_4px_16px_rgba(73,137,116,0.15)]">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-white transition-colors duration-300">
                    Calidad Sin Compromisos
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Cada línea de código es revisada y optimizada para el máximo rendimiento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-3 rounded-xl bg-[#111518]/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4A788A]/15 border border-[#4A788A]/30 rounded-lg flex items-center justify-center text-[#88B0C0] shadow-[0_4px_16px_rgba(74,120,138,0.15)]">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <div>
                  <h4 className="font-bold text-white transition-colors duration-300">
                    Despliegue Ágil
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Nuestra metodología ágil asegura que tu producto llegue al mercado más rápido.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* COLUMNA DERECHA: Escenario 3D interactivo Laptop + Satélites */}
          {/* ======================================================== */}
          <div
            ref={stageColRef}
            className="relative flex items-center justify-center min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] select-none"
            style={{ perspective: "1200px" }}
          >
            {/* Contenedor animado de la Laptop con transformación 3D */}
            <div
              ref={laptopWrapperRef}
              className="relative w-[340px] sm:w-[420px] lg:w-[480px] will-change-transform flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Imagen de la Laptop */}
              <img
                src="/img/about/laptop.png"
                alt="Laptop VEXA Soluciones Digitales"
                className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
                style={{ imageRendering: "auto" }}
                loading="eager"
                decoding="async"
              />

              {/* Centro de emanación de satélites (pantalla de la laptop) */}
              <div
                ref={satellitesOriginRef}
                className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-30 w-0 h-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 1. Libreta (Arriba - Izquierda) */}
                <div
                  ref={satLibretaRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 lg:w-36 will-change-transform"
                >
                  <img
                    src="/img/about/libreta.png"
                    alt="Libreta de conteo manual"
                    className="w-full h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.6)]"
                    style={{ imageRendering: "auto" }}
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 2. Caja (Abajo - Izquierda) */}
                <div
                  ref={satCajaRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-36 lg:w-40 will-change-transform"
                >
                  <img
                    src="/img/about/caja.png"
                    alt="Caja de almacén y logística WMS"
                    className="w-full h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.6)]"
                    style={{ imageRendering: "auto" }}
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 3. Registradora / Escáner (Abajo - Centro) */}
                <div
                  ref={satEscanerRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 lg:w-36 will-change-transform"
                >
                  <img
                    src="/img/about/registradora.png"
                    alt="Pistola escáner de códigos"
                    className="w-full h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.6)]"
                    style={{ imageRendering: "auto" }}
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 4. Boleta / Ticket (Abajo - Derecha) */}
                <div
                  ref={satBoletaRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 lg:w-36 will-change-transform"
                >
                  <img
                    src="/img/about/boleta.png"
                    alt="Ticket y factura de venta"
                    className="w-full h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.6)]"
                    style={{ imageRendering: "auto" }}
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* 5. Lapicero (A la Derecha) */}
                <div
                  ref={satLapiceroRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 lg:w-36 will-change-transform"
                >
                  <img
                    src="/img/about/lapicero.png"
                    alt="Lapicero"
                    className="w-full h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.6)]"
                    style={{ imageRendering: "auto" }}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
