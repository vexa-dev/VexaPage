import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { SITE } from "@/data/site";
import { SuccessModal } from "../components/SuccessModal";
import { FlipFadeText } from "@/components/animations/FlipFadeText";

interface FormspreeError {
  errors?: { message: string }[];
}

export function Contact() {
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Copiar correo al portapapeles con feedback visual
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback silencioso si el navegador no permite el portapapeles
    }
  };

  // Envío a Formspree sin recargar la página
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);

    try {
      const response = await fetch(SITE.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        const data = (await response.json().catch(() => ({}))) as FormspreeError;
        alert(
          data.errors
            ? data.errors.map((error) => error.message).join(", ")
            : "Hubo un problema al enviar tu formulario.",
        );
      }
    } catch {
      alert("Hubo un error de conexión.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section
        className="relative isolate py-16 sm:py-24 lg:py-36 pb-28 sm:pb-28 lg:pb-36 overflow-hidden bg-[#0A0C0E] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        id="contacto"
        style={{
          backgroundImage: "url('/img/fondo-contacto.jpg')",
        }}
      >
        {/* 1. Capa de difuminado superior e inferior para transición suave con las secciones contiguas */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-b from-[#0A0C0E] via-[#0A0C0E]/75 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-t from-[#0A0C0E] via-[#0A0C0E]/85 to-transparent pointer-events-none z-0" />

        {/* 2. Capa oscura de contraste y resplandores sutiles */}
        <div className="absolute inset-0 bg-[#0A0C0E]/40 pointer-events-none z-0" />
        <div className="absolute top-1/3 left-0 w-[450px] sm:w-[550px] h-[450px] sm:h-[500px] bg-[#498974]/[0.08] blur-[150px] rounded-full pointer-events-none z-0 max-w-full" />
        <div className="absolute bottom-10 right-0 w-[450px] sm:w-[550px] h-[400px] sm:h-[450px] bg-[#4A788A]/[0.08] blur-[150px] rounded-full pointer-events-none z-0 max-w-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start relative z-10">
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA: Titular, Información y Canales Directos */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-[1.15]">
              <FlipFadeText text="¿Listo para iniciar tu viaje digital?" textClassName="font-display" />
            </h2>

            <p className="font-sans text-slate-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl">
              <FlipFadeText
                text="Cuéntanos sobre tu proyecto o simplemente saluda. Evaluamos los requerimientos técnicos y te entregamos una propuesta de arquitectura y estimación en menos de 12 horas."
                className="inline-flex flex-wrap items-start leading-relaxed"
                staggerDelay={0.008}
                letterDuration={0.35}
                delay={0.15}
              />
            </p>

            {/* Canales Directos de Contacto */}
            <div className="space-y-3.5 sm:space-y-4 max-w-xl">
              {/* Tarjeta de Correo Electrónico con botón de copiado */}
              <div className="group relative p-3.5 sm:p-5 rounded-2xl bg-[#0E1317]/70 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#4A788A]/20 backdrop-blur-md border border-[#4A788A]/40 flex items-center justify-center text-[#88B0C0] flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(74,120,138,0.25)] transition-all duration-300">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">email</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                      Correo Oficial
                    </p>
                    <p className="font-bold text-white text-xs sm:text-sm md:text-base truncate transition-colors group-hover:text-[#88B0C0]">
                      {SITE.email}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/10 hover:bg-[#498974] hover:text-white border border-white/15 hover:border-[#498974] text-slate-200 text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer active:scale-95 shadow-sm backdrop-blur-sm"
                  title="Copiar correo"
                >
                  <span className="material-symbols-outlined text-sm sm:text-base">
                    {copiedEmail ? "check" : "content_copy"}
                  </span>
                  <span>{copiedEmail ? "¡Copiado!" : "Copiar"}</span>
                </button>
              </div>

              {/* Tarjeta de WhatsApp Directo */}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3.5 sm:p-5 rounded-2xl bg-[#0E1317]/70 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4 block"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#498974]/20 backdrop-blur-md border border-[#548D7B]/40 flex items-center justify-center text-[#76A897] flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(73,137,116,0.25)] transition-all duration-300">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">chat</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                      WhatsApp Ejecutivo
                    </p>
                    <p className="font-bold text-white text-xs sm:text-sm md:text-base truncate group-hover:text-[#76A897] transition-colors">
                      Chat directo con un asesor
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#498974]/20 backdrop-blur-md border border-[#548D7B]/40 text-[#76A897] text-[11px] sm:text-xs font-medium flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B] animate-pulse" />
                  &lt;15 min
                </span>
              </a>
            </div>

            {/* Garantías de Confidencialidad y Calidad en contenedor de vidrio marcado */}
            <div className="mt-6 sm:mt-8 p-3.5 sm:p-5 rounded-2xl bg-[#0E1317]/50 backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#88B0C0] text-sm sm:text-base">verified</span>
                Acuerdo de Confidencialidad (NDA)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#76A897] text-sm sm:text-base">speed</span>
                Respuesta en menos de 12 horas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#76A897] text-sm sm:text-base">lock</span>
                Datos protegidos y seguros
              </span>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* COLUMNA DERECHA: Tarjeta de Formulario Glassmorphism 3D   */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full"
          >
            {/* Halo perimetral luminoso detrás de la tarjeta (Verde VEXA & Pizarra Petróleo) */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#498974]/25 via-[#4A788A]/20 to-[#548D7B]/25 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-700 pointer-events-none -z-10" />

            {/* Contenedor Glassmorphism */}
            <div className="bg-[#0E1318]/70 backdrop-blur-2xl border border-white/15 hover:border-white/25 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(73,137,116,0.12)] transition-all duration-500">
              {/* Cabecera del formulario */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/10">
                <div className="pr-2">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                    Solicitud de Propuesta Técnica
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1">
                    Diseñamos sistemas escalables adaptados a tu modelo de negocio.
                  </p>
                </div>
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#498974]/20 border border-[#548D7B]/40 items-center justify-center text-[#76A897] shadow-sm backdrop-blur-md flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">send</span>
                </div>
              </div>

              <form
                id="contact-form"
                action={SITE.formEndpoint}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Campo: Nombre Completo */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nombre Completo <span className="text-[#76A897]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-lg pointer-events-none">
                        person
                      </span>
                      <input
                        className="w-full bg-[#131920]/75 backdrop-blur-md border border-white/15 rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#548D7B] focus:bg-[#131920]/90 focus:ring-1 focus:ring-[#548D7B] transition-all text-xs sm:text-sm font-sans shadow-inner"
                        placeholder="Juan Pérez"
                        type="text"
                        name="nombre"
                        required
                      />
                    </div>
                  </div>

                  {/* Campo: Correo Electrónico */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Correo Electrónico <span className="text-[#76A897]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-lg pointer-events-none">
                        alternate_email
                      </span>
                      <input
                        className="w-full bg-[#131920]/75 backdrop-blur-md border border-white/15 rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#548D7B] focus:bg-[#131920]/90 focus:ring-1 focus:ring-[#548D7B] transition-all text-xs sm:text-sm font-sans shadow-inner"
                        placeholder="juan@ejemplo.com"
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Campo: Tipo de Servicio */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Tipo de Servicio <span className="text-[#76A897]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-lg pointer-events-none">
                      category
                    </span>
                    <select
                      className="w-full bg-[#131920]/75 backdrop-blur-md border border-white/15 rounded-xl pl-11 pr-10 py-3 sm:py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#548D7B] focus:bg-[#131920]/90 focus:ring-1 focus:ring-[#548D7B] transition-all text-xs sm:text-sm font-sans cursor-pointer shadow-inner truncate"
                      name="servicio"
                      defaultValue="Consultoría en Transformación Digital"
                    >
                      <option className="bg-[#111518] text-white" value="Consultoría en Transformación Digital">
                        Consultoría en Transformación Digital (Gratuito)
                      </option>
                      <option className="bg-[#111518] text-white" value="Desarrollo de Páginas Web">
                        Desarrollo de Páginas Web y Portafolios
                      </option>
                      <option className="bg-[#111518] text-white" value="Desarrollo de Apps Móviles">
                        Desarrollo de Apps Móviles (iOS / Android)
                      </option>
                      <option className="bg-[#111518] text-white" value="Sistema de Gestión de Inventario">
                        Sistema de Gestión de Inventario (WMS)
                      </option>
                      <option className="bg-[#111518] text-white" value="Sistema de Gestión de Personal">
                        Sistema de Gestión de Personal (RRHH)
                      </option>
                      <option className="bg-[#111518] text-white" value="Desarrollo de Software a Medida">
                        Desarrollo de Software a Medida
                      </option>
                    </select>
                  </div>
                </div>

                {/* Campo: Resumen del Proyecto */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Resumen del Proyecto <span className="text-[#76A897]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-slate-400 material-symbols-outlined text-lg pointer-events-none">
                      edit_note
                    </span>
                    <textarea
                      className="w-full bg-[#131920]/75 backdrop-blur-md border border-white/15 rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#548D7B] focus:bg-[#131920]/90 focus:ring-1 focus:ring-[#548D7B] transition-all text-xs sm:text-sm font-sans leading-relaxed shadow-inner"
                      placeholder="Cuéntanos sobre tu visión, el problema a resolver o el objetivo principal..."
                      rows={4}
                      name="mensaje"
                      required
                    />
                  </div>
                </div>

                {/* Botón CTA Primario (Verde Corporativo VEXA) con margen inferior para evitar solapamiento con WhatsApp flotante */}
                <div className="pt-2">
                  <button
                    className="group relative w-full py-3.5 sm:py-4 px-6 sm:px-8 bg-[#498974] text-white font-bold hover:bg-[#3B705F] rounded-xl shadow-[0_6px_20px_rgba(73,137,116,0.22)] hover:shadow-[0_8px_28px_rgba(73,137,116,0.32)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
                    type="submit"
                    id="form-submit-btn"
                    disabled={sending}
                  >
                    {/* Resplandor diagonal animado de fondo */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                    {sending ? (
                      <>
                        <span className="font-display font-bold tracking-wide text-xs sm:text-sm md:text-base">
                          Procesando Solicitud...
                        </span>
                        <span className="material-symbols-outlined text-base sm:text-lg animate-spin">sync</span>
                      </>
                    ) : (
                      <>
                        <span className="font-display font-bold tracking-wide text-xs sm:text-sm md:text-base">
                          Enviar Solicitud de Proyecto
                        </span>
                        <span className="material-symbols-outlined text-base sm:text-lg group-hover:translate-x-1.5 transition-transform duration-200">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}

export default Contact;
