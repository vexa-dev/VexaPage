import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TYPED_WORDS = ["Innovación", "Evolución", "Resultados", "Tecnología"];

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: TYPED_WORDS,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="inicio">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Innovación Digital de Elite
        </div>
        <div className="flex justify-center mb-10">
          <img
            alt="VEXA Logo Hero"
            className="h-48 w-48 md:h-72 md:w-72 object-contain rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            src="/img/vexa-fondo-negro.svg"
          />
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto text-white">
          VEXA: <span ref={typedRef} id="typed" className="text-primary" />
          <br />
          en Software a tu Medida
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Especialistas en el desarrollo de experiencias web premium, aplicaciones móviles de alto
          rendimiento y sistemas robustos de gestión de inventarios para impulsar tu crecimiento.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(84,141,123,0.4)] transition-all"
            href="#contacto"
          >
            Solicitar Cotización
          </a>
          <a
            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
            href="#servicios"
          >
            Explorar Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
