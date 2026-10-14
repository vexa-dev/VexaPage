import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { HOME_SECTION_IDS, NAV_ITEMS } from "@/data/navigation";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useIntro } from "@/context/IntroContext";
import { SectionLink } from "./SectionLink";
import { StickerPeel } from "@/components/animations/StickerPeel";
import { StarBorder } from "@/components/animations/StarBorder";
import { SpotlightNavbar } from "@/components/animations/SpotlightNavbar";
import { cn } from "@/lib/utils";

const NO_SECTIONS: readonly string[] = [];

export function Header() {
  const { pathname } = useLocation();
  const { isIntroActive } = useIntro();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const isProjects = pathname === "/proyectos";
  const scrolled = useHeaderScroll(30);
  const activeSection = useScrollSpy(isHome ? HOME_SECTION_IDS : NO_SECTIONS, {
    offset: 160,
    topThreshold: 120,
  });

  // Cerrar el menú móvil al navegar
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll en el fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Totalmente transparente solo en la presentación (Hero de Home sin scroll); luego difuminado (glass)
  const isTransparent = isHome && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isTransparent
          ? "bg-transparent border-b border-transparent shadow-none"
          : "glass border-b border-white/5 header-scrolled"
      }`}
    >
      <nav className="w-full max-w-[1400px] mx-auto px-8 sm:px-10 lg:px-14 xl:px-16 h-16 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* ========================================================= */}
        {/* 1. LOGO VEXA A LA IZQUIERDA (Más hacia el extremo izquierdo) */}
        {/* ========================================================= */}
        <div
          id="navbar-brand"
          style={isIntroActive ? { opacity: 0, visibility: "hidden", pointerEvents: "none" } : undefined}
          className="flex items-center gap-3 justify-self-start"
        >
          <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <StickerPeel
              imageSrc="/img/vexa-fondo-negro.svg"
              width={40}
              rotate={0}
              peelDirection={130}
              peelBackHoverPct={20}
              peelBackActivePct={35}
              shadowIntensity={0.47}
              lightingIntensity={0.45}
              initialPosition="center"
              className="top-0 left-0"
            />
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-white transition-colors">
            VEXA
          </span>
        </div>

        {/* ========================================================= */}
        {/* 2. ENLACES DEL NAVBAR CENTRADOS EXACTAMENTE EN EL MEDIO */}
        {/* ========================================================= */}
        <div
          id="navbar-content"
          style={isIntroActive ? { opacity: 0, visibility: "hidden", pointerEvents: "none" } : undefined}
          className="hidden md:flex items-center justify-center justify-self-center"
        >
          <SpotlightNavbar
            items={NAV_ITEMS}
            activeId={isHome ? activeSection : isProjects ? "portafolio" : ""}
            renderItem={(item, isActive) => {
              const linkClasses = cn(
                "px-4 py-1.5 text-xs sm:text-sm transition-colors duration-200 rounded-full select-none inline-flex items-center justify-center",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#548D7B]",
                isActive
                  ? "text-white font-semibold"
                  : "text-slate-400 hover:text-white font-medium",
              );

              return item.id === "portafolio" && isProjects ? (
                <Link className={linkClasses} to="/proyectos">
                  {item.label}
                </Link>
              ) : (
                <SectionLink className={linkClasses} to={item.id}>
                  {item.label}
                </SectionLink>
              );
            }}
          />
        </div>

        {/* ========================================================= */}
        {/* 3. BOTÓN CONTACTO A LA DERECHA (Proporcional al logo) */}
        {/* ========================================================= */}
        <div
          id="navbar-actions"
          style={isIntroActive ? { opacity: 0, visibility: "hidden", pointerEvents: "none" } : undefined}
          className="hidden md:flex items-center justify-end justify-self-end"
        >
          <StarBorder
            as={SectionLink}
            to="contacto"
            color="#76A897"
            speed="5s"
            thickness={1}
            className={cn(
              "rounded-full shadow-sm hover:scale-[1.02] transition-all cursor-pointer",
              isHome && activeSection === "contacto" ? "ring-2 ring-[#548D7B]/70 shadow-[0_0_16px_rgba(84,141,123,0.3)]" : "",
            )}
            innerClassName="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
            backgroundColor="#111518"
            borderColor={
              isHome && activeSection === "contacto"
                ? "rgba(118, 168, 151, 0.7)"
                : "rgba(255, 255, 255, 0.12)"
            }
            textColor="#FFFFFF"
          >
            Contacto
          </StarBorder>
        </div>

        {/* ========================================================= */}
        {/* MÓVIL: Botón hamburguesa alineado a la derecha */}
        {/* ========================================================= */}
        <div
          id="navbar-mobile-content"
          style={isIntroActive ? { opacity: 0, visibility: "hidden", pointerEvents: "none" } : undefined}
          className="flex md:hidden items-center gap-3"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#76A897] hover:border-[#548D7B]/40 transition-all cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-2xl transition-transform duration-300">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* MÓVIL: Menú desplegable interactivo con desenfoque de fondo */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0A0C0E]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = isHome ? activeSection === item.id : isProjects && item.id === "portafolio";

                const linkClasses = cn(
                  "w-full px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between",
                  isActive
                    ? "bg-[#548D7B]/15 text-white font-semibold border border-[#548D7B]/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                );

                return item.id === "portafolio" && isProjects ? (
                  <Link
                    key={item.id}
                    to="/proyectos"
                    onClick={() => setMobileMenuOpen(false)}
                    className={linkClasses}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-sm text-[#76A897]">arrow_forward</span>
                  </Link>
                ) : (
                  <SectionLink
                    key={item.id}
                    to={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={linkClasses}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-sm text-[#76A897]">arrow_forward</span>
                  </SectionLink>
                );
              })}

              {/* Botón CTA de Contacto en el menú móvil */}
              <div className="pt-2 mt-2 border-t border-white/10">
                <SectionLink
                  to="contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#498974] hover:bg-[#3B705F] text-white font-bold text-center text-sm tracking-wide shadow-[0_4px_20px_rgba(73,137,116,0.3)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <span>Contacto</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </SectionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
