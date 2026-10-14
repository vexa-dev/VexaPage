import { Link } from "react-router-dom";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES } from "@/data/navigation";
import { SectionLink } from "./SectionLink";
import { useComplaintsModal } from "@/context/ComplaintsModalContext";

export function Footer() {
  const { openComplaintsModal } = useComplaintsModal();
  return (
    <footer className="bg-[#0A0C0E] pt-16 pb-8 border-t border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                alt="VEXA Logo"
                className="h-8 w-8 object-contain rounded-full"
                src="/img/vexa-fondo-negro.svg"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white transition-colors duration-300">
                VEXA
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Construyendo la próxima generación de productos digitales con precisión y pasión.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300">Enlaces Rápidos</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <SectionLink className="hover:text-[#76A897] transition-colors" to={link.id}>
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300">Servicios</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a className="hover:text-[#76A897] transition-colors" href="#">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest transition-colors duration-300">
          <p>© 2025 VEXA Software Agency. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link className="hover:text-[#76A897] transition-colors" to="/politicas">
              Política de Privacidad
            </Link>
            <Link className="hover:text-[#76A897] transition-colors" to="/politicas#section-9">
              Términos de Servicio
            </Link>
            <button
              type="button"
              onClick={openComplaintsModal}
              className="hover:text-[#76A897] transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-widest text-xs"
            >
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Libro de Reclamaciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
