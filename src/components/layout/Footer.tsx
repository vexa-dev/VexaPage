import { Link } from "react-router-dom";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES } from "../../data/navigation";
import { SectionLink } from "./SectionLink";

export function Footer() {
  return (
    <footer className="bg-accent pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                alt="VEXA Logo"
                className="h-8 w-8 object-contain rounded-full"
                src="/img/vexa-fondo-negro.svg"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                VEXA
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Construyendo la próxima generación de productos digitales con precisión y pasión.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white">Enlaces Rápidos</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <SectionLink className="hover:text-primary transition-colors" to={link.id}>
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white">Servicios</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a className="hover:text-primary transition-colors" href="#">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest">
          <p>© 2025 VEXA Software Agency. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link className="hover:text-primary transition-colors" to="/politicas">
              Política de Privacidad
            </Link>
            <Link className="hover:text-primary transition-colors" to="/politicas#section-9">
              Términos de Servicio
            </Link>
            <a className="hover:text-primary transition-colors flex items-center gap-1.5" href="#">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Libro de Reclamaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
