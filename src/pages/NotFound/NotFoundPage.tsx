import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { SITE } from "@/data/site";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { AnimatedButton } from "@/components/animations/AnimatedButton";

export function NotFoundPage() {
  useDocumentTitle(SITE.titles.notFound);
  const navigate = useNavigate();

  return (
    <main className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 overflow-hidden select-none bg-[#070A0E]">
      {/* 1. Resplandores ambientales de fondo (Cyber Emerald & Deep Cyan) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* 2. Cuadrícula sutil técnica HUD con máscara de desvanecimiento radial */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 50% 50%, #000 30%, transparent 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">

        {/* 404 Gigante con Gradiente y Radar Central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center my-2 sm:my-4"
        >
          <h1 className="font-display text-8xl sm:text-[11rem] md:text-[14rem] font-extrabold tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-100/90 to-primary/20 drop-shadow-[0_0_45px_rgba(16,185,129,0.35)] flex items-center">
            <span>4</span>
            {/* Cero estilizado como un radar orbital */}
            <span className="relative inline-flex items-center justify-center mx-1 sm:mx-2">
              <span className="opacity-90">0</span>
              <span className="absolute inset-2 sm:inset-4 rounded-full border border-primary/40 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />
              <span className="absolute inset-5 sm:inset-8 rounded-full border border-cyan-400/30 animate-[spin_12s_linear_infinite_reverse] pointer-events-none" />
              <span className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_#10B981] pointer-events-none" />
            </span>
            <span>4</span>
          </h1>
        </motion.div>

        {/* Mensaje directo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto px-4 mb-10 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            La página solicitada no existe
          </h2>
        </motion.div>

        {/* Botones de Acción Principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <AnimatedButton
            as={Link}
            to="/"
            shineColor="rgba(16, 185, 129, 0.7)"
            className="!bg-primary hover:!bg-emerald-600 !border-primary/50 text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">home</span>
              Regresar al Inicio
            </span>
          </AnimatedButton>

          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-lg text-primary">rocket_launch</span>
            Ver Proyectos
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Volver Atrás
          </button>
        </motion.div>

        {/* Accesos Directos Recomendados (Destinos Populares) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-10 text-left"
        >
          <Link
            to="/#servicios"
            className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-primary/30 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-lg">widgets</span>
            </div>
            <h3 className="font-display font-semibold text-white text-base group-hover:text-primary transition-colors">
              Nuestros Servicios
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1">
              Desarrollo de páginas web, apps móviles y sistemas de gestión a medida.
            </p>
          </Link>

          <Link
            to="/proyectos"
            className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-primary/30 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-lg">layers</span>
            </div>
            <h3 className="font-display font-semibold text-white text-base group-hover:text-cyan-400 transition-colors">
              Casos de Éxito
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1">
              7 proyectos de alto impacto diseñados para empresas y negocios reales.
            </p>
          </Link>

          <Link
            to="/#contacto"
            className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-primary/30 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-lg">support_agent</span>
            </div>
            <h3 className="font-display font-semibold text-white text-base group-hover:text-emerald-400 transition-colors">
              Hablar con Soporte
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1">
              ¿Buscabas algo específico? Cuéntanos y te ayudamos en menos de 12 horas.
            </p>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default NotFoundPage;
