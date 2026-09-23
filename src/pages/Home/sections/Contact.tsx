import { useState, type FormEvent } from "react";
import { SuccessModal } from "./SuccessModal";

const FORM_ENDPOINT = "https://formspree.io/f/mgolnlzd";

interface FormspreeError {
  errors?: { message: string }[];
}

export function Contact() {
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Envío a Formspree sin recargar la página.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
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
      <section className="py-24 relative overflow-hidden" id="contacto">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para iniciar tu viaje digital?
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Cuéntanos sobre tu proyecto o simplemente saluda. Respondemos típicamente en menos de
              12 horas.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Escríbenos</p>
                  <p className="font-bold text-white">vexa.corp@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl">
            <form
              id="contact-form"
              action={FORM_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    className="w-full bg-black/20 border-white/10 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 text-white"
                    placeholder="Juan Pérez"
                    type="text"
                    name="nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    className="w-full bg-black/20 border-white/10 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 text-white"
                    placeholder="juan@ejemplo.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Tipo de Servicio
                </label>
                <select
                  className="w-full bg-black/20 border-white/10 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 text-white"
                  name="servicio"
                >
                  <option value="Diseño Web">Diseño Web</option>
                  <option value="Aplicación Móvil">Aplicación Móvil</option>
                  <option value="Gestión de Inventario">Gestión de Inventario</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  Resumen del Proyecto
                </label>
                <textarea
                  className="w-full bg-black/20 border-white/10 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 text-white"
                  placeholder="Cuéntanos más sobre lo que quieres construir..."
                  rows={4}
                  name="mensaje"
                  required
                />
              </div>
              <button
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                type="submit"
                id="form-submit-btn"
                disabled={sending}
              >
                {sending ? (
                  <>
                    Enviando...
                    <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <span className="material-symbols-outlined text-sm">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}
