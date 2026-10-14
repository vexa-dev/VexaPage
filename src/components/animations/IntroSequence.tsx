import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIntro } from "@/context/IntroContext";

export function IntroSequence() {
  const { isIntroActive, markIntroComplete } = useIntro();
  const flyingBrandRef = useRef<HTMLDivElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const logoSrc = "/img/vexa-fondo-negro.svg";

  useEffect(() => {
    if (!isIntroActive) return;

    // Ejecuta inmediatamente tras el primer render de pintura
    const animationFrame = requestAnimationFrame(() => {
      const flyingBrand = flyingBrandRef.current;
      const navbarBrand = document.getElementById("navbar-brand");
      const navbarContent = document.getElementById("navbar-content");
      const navbarActions = document.getElementById("navbar-actions");
      const navbarMobile = document.getElementById("navbar-mobile-content");
      const heroMetallicLogo = document.getElementById("hero-metallic-logo");
      const heroHeadline1 = document.getElementById("hero-headline-1");
      const heroHeadline2 = document.getElementById("hero-headline-2");
      const heroDescription = document.getElementById("hero-description");
      const heroActions = document.getElementById("hero-actions");

      if (!flyingBrand) {
        markIntroComplete();
        return;
      }

      // Medidas del elemento central
      const flyingRect = flyingBrand.getBoundingClientRect();
      const startW = flyingRect.width || 200;
      const startH = flyingRect.height || 60;

      // Coordenadas exactas del logo de destino en el navbar
      const targetRect = navbarBrand?.getBoundingClientRect() || {
        left: 24,
        top: 12,
        width: 120,
        height: 40,
      };

      const startX = (window.innerWidth - startW) / 2;
      const startY = (window.innerHeight - startH) / 2;

      // Escala para encajar al milímetro con el navbar (40px)
      const targetScale = targetRect.height > 0 ? targetRect.height / startH : 0.6;
      const targetX = targetRect.left;
      const targetY = targetRect.top + (targetRect.height - startH * targetScale) / 2;

      // Inicialización instantánea sin flash
      gsap.set(flyingBrand, {
        x: startX,
        y: startY,
        scale: 1,
        autoAlpha: 0,
        transformOrigin: "top left",
        display: "flex",
      });

      if (navbarBrand) gsap.set(navbarBrand, { autoAlpha: 0 });
      if (navbarContent) gsap.set(navbarContent, { autoAlpha: 0, y: -12 });
      if (navbarActions) gsap.set(navbarActions, { autoAlpha: 0, y: -12 });
      if (navbarMobile) gsap.set(navbarMobile, { autoAlpha: 0, y: -12 });

      if (heroMetallicLogo) {
        gsap.set(heroMetallicLogo, {
          autoAlpha: 0,
          scale: 0.55,
          filter: "blur(22px)",
          y: 35,
        });
      }
      if (heroHeadline1) gsap.set(heroHeadline1, { autoAlpha: 0, y: 28 });
      if (heroHeadline2) gsap.set(heroHeadline2, { autoAlpha: 0, y: 28 });
      if (heroDescription) gsap.set(heroDescription, { autoAlpha: 0, y: 16 });
      if (heroActions) gsap.set(heroActions, { autoAlpha: 0, y: 16 });

      // Línea de tiempo maestra (~2.4s totales)
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(flyingBrand, { display: "none" });
          markIntroComplete();
        },
      });

      // 1. Fondo visible de entrada (rápido y elegante)
      tl.to({}, { duration: 0.18 });

      // 2. Aparición suave y ágil del logo central
      tl.to(flyingBrand, {
        autoAlpha: 1,
        duration: 0.38,
        ease: "power2.out",
      });

      // 3. 'VEXA' se escribe al costado con tipografía rítmica rápida
      tl.to(
        letterRefs.current.filter(Boolean),
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.25,
          ease: "back.out(2)",
        },
        "-=0.15"
      );

      // 4. Pausa sutil de 180ms
      tl.to({}, { duration: 0.18 });

      // 5. Vuelo dinámico y fluido desde el centro hasta la esquina del navbar
      tl.to(flyingBrand, {
        x: targetX,
        y: targetY,
        scale: targetScale,
        duration: 0.75,
        ease: "power3.inOut",
      });

      // 6. Transición perfecta e inmediata al logo del navbar
      if (navbarBrand) {
        tl.to(
          navbarBrand,
          {
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }
      tl.to(
        flyingBrand,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // 7. Navbar desciende con elegancia
      if (navbarContent) {
        tl.to(
          navbarContent,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }
      if (navbarActions) {
        tl.to(
          navbarActions,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        );
      }
      if (navbarMobile) {
        tl.to(
          navbarMobile,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        );
      }

      // 8. El logo metálico 3D central emerge de entre las nubes
      if (heroMetallicLogo) {
        tl.to(
          heroMetallicLogo,
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // 9. Letras primarias: Titulares emergen desde abajo rápidamente uno por uno
      if (heroHeadline1) {
        tl.to(
          heroHeadline1,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }
      if (heroHeadline2) {
        tl.to(
          heroHeadline2,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // 11. Párrafo y botones CTA aparecen fluidamente
      if (heroDescription) {
        tl.to(
          heroDescription,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }
      if (heroActions) {
        tl.to(
          heroActions,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [isIntroActive, markIntroComplete]);

  if (!isIntroActive) return null;

  return (
    <div
      ref={flyingBrandRef}
      className="fixed top-0 left-0 z-[60] flex items-center gap-3.5 pointer-events-none select-none opacity-0 invisible"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
        <img
          ref={logoImageRef}
          src={logoSrc}
          alt="VEXA"
          className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(84,141,123,0.6)]"
        />
      </div>
      <div className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-white flex items-center">
        {["V", "E", "X", "A"].map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              letterRefs.current[index] = el;
            }}
            className="inline-block opacity-0 translate-y-3"
            style={{
              textShadow: "0 0 20px rgba(84,141,123,0.6)",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
