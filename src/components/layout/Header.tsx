import { Link, useLocation } from "react-router-dom";
import { HOME_SECTION_IDS, NAV_ITEMS } from "../../data/navigation";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import type { NavItem } from "../../types";
import { SectionLink } from "./SectionLink";

const LINK_BASE = "text-sm font-medium hover:text-primary transition-colors";
const NO_SECTIONS: readonly string[] = [];

function linkClass(item: NavItem, active: boolean): string {
  if (!item.underline) return active ? `${LINK_BASE} text-primary` : LINK_BASE;
  return `${LINK_BASE} border-b-2 ${active ? "border-primary text-primary" : "border-transparent"}`;
}

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isProjects = pathname === "/proyectos";
  const scrolled = useHeaderScroll();
  const activeSection = useScrollSpy(isHome ? HOME_SECTION_IDS : NO_SECTIONS, { offset: 120 });

  return (
    <header
      className={`fixed top-0 w-full z-50 glass border-b border-white/5${scrolled ? " header-scrolled" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            alt="VEXA Logo"
            className="h-10 w-10 object-contain rounded-full"
            src="/img/vexa-fondo-negro.svg"
          />
          <span className="font-display font-extrabold text-2xl tracking-tight text-white">
            VEXA
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) =>
            // En /proyectos, "Portafolio" apunta a la propia página y queda resaltado.
            item.id === "portafolio" && isProjects ? (
              <Link key={item.id} className={linkClass(item, true)} to="/proyectos">
                {item.label}
              </Link>
            ) : (
              <SectionLink
                key={item.id}
                className={linkClass(item, isHome && activeSection === item.id)}
                to={item.id}
              >
                {item.label}
              </SectionLink>
            ),
          )}
          <SectionLink
            className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
            to="contacto"
          >
            Contacto
          </SectionLink>
        </div>
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
}
