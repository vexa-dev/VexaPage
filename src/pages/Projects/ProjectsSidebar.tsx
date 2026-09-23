import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECT_NAV } from "../../data/projects";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const PROJECT_IDS = PROJECT_NAV.map((project) => project.id);
const LINK_BASE =
  "flex items-center justify-between cursor-pointer hover:text-primary text-slate-400 py-2 px-3 rounded-lg hover:bg-white/5 transition-all";
const LINK_ACTIVE = "text-primary font-bold bg-white/5 border-l-2 border-primary";

export function ProjectsSidebar() {
  const asideRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const activeId = useScrollSpy(PROJECT_IDS, { offset: 200, topThreshold: 100 });

  // Si el enlace activo queda fuera del índice, desplaza el propio índice.
  useEffect(() => {
    const aside = asideRef.current;
    const link = activeId ? linkRefs.current[activeId] : null;
    if (!aside || !link) return;

    const linkRect = link.getBoundingClientRect();
    const asideRect = aside.getBoundingClientRect();
    if (linkRect.top < asideRect.top || linkRect.bottom > asideRect.bottom) {
      link.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  return (
    <aside
      ref={asideRef}
      className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar lg:pr-8 pr-4"
    >
      {/* Botón Volver */}
      <Link
        to="/#portafolio"
        className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-medium text-sm mb-8 group"
      >
        <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        Regresar al Portafolio
      </Link>
      <nav className="text-sm">
        <div className="mb-4">
          <h3 className="font-bold text-white mb-4 text-base tracking-wide border-b border-white/10 pb-2">
            Nuestros Proyectos
          </h3>
          <ul className="space-y-1">
            {PROJECT_NAV.map((project) => (
              <li key={project.id}>
                <a
                  ref={(el) => {
                    linkRefs.current[project.id] = el;
                  }}
                  href={`#${project.id}`}
                  className={activeId === project.id ? `${LINK_BASE} ${LINK_ACTIVE}` : LINK_BASE}
                >
                  {project.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
