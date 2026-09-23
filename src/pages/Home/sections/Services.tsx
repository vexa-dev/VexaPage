import { useCallback, useEffect, useRef, useState } from "react";

const STEP_COUNT = 5;

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(() => Array(STEP_COUNT).fill(false));

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };
  const setIconRef = (index: number) => (el: HTMLDivElement | null) => {
    iconRefs.current[index] = el;
  };

  // Activa cada paso al entrar en pantalla; se desactiva solo al salir hacia abajo (scroll hacia arriba).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveSteps((prev) => {
          const next = [...prev];
          for (const entry of entries) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index === -1) continue;
            if (entry.isIntersecting) next[index] = true;
            else if (entry.boundingClientRect.top > 0) next[index] = false;
          }
          return next;
        });
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.1 },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  // La línea de progreso llega hasta el centro del icono del último paso activo.
  const updateProgressLine = useCallback(() => {
    const progress = progressRef.current;
    const container = containerRef.current;
    if (!progress || !container) return;

    const lastActive = activeSteps.lastIndexOf(true);
    const lastIcon = lastActive === -1 ? null : iconRefs.current[lastActive];
    if (!lastIcon) {
      progress.style.height = "0px";
      return;
    }
    const height =
      lastIcon.getBoundingClientRect().top - container.getBoundingClientRect().top + 32;
    progress.style.height = `${Math.max(0, height)}px`;
  }, [activeSteps]);

  useEffect(() => {
    updateProgressLine();
    const timeout = window.setTimeout(updateProgressLine, 500);
    const onResize = () => requestAnimationFrame(updateProgressLine);
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, [updateProgressLine]);

  return (
    <section className="py-24 relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Nuestros
            <br /> <span className="text-primary">Servicios Estrella</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Descubre cómo podemos potenciar tu negocio a través de nuestras soluciones tecnológicas
            a medida, diseñadas para escalar y optimizar tus recursos.
          </p>
        </div>
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Línea de Fondo (Timeline) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full hidden md:block" />
          {/* Línea de Progreso Animada */}
          <div
            ref={progressRef}
            id="process-progress"
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 rounded-full hidden md:block transition-all duration-[1s] ease-out h-0 shadow-[0_0_15px_rgba(84,141,123,0.6)]"
          />
          {/* Paso 1: Consultoría en Transformación Digital */}
          <div
            ref={setStepRef(0)}
            className={`process-step relative flex flex-col md:flex-row items-center justify-between mb-24 group${activeSteps[0] ? " step-active" : ""}`}
          >
            <div className="w-full md:w-5/12 order-1 md:order-1 pl-24 md:pl-0 pr-0 md:pr-12 opacity-0 translate-y-8 transition-all duration-[800ms] delay-[200ms] ease-out">
              <div className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/40 transition-all duration-500 flex justify-center group-hover:-translate-y-2">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-500 group-hover:bg-primary/20" />
                {/* Representación de Consultoría */}
                <div className="h-40 bg-black/40 rounded-xl border border-white/5 flex flex-col p-4 gap-3 overflow-hidden group-hover:border-primary/20 transition-colors w-full">
                  <div className="flex gap-3 h-full">
                    <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                        <span className="material-symbols-outlined text-primary text-sm">
                          search
                        </span>
                      </div>
                      <div className="w-1/2 h-1.5 bg-white/20 rounded-full" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex-1 bg-primary/20 rounded-lg border border-primary/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg">
                          trending_up
                        </span>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white/30 text-lg">
                          lightbulb
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Icon */}
            <div
              ref={setIconRef(0)}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-auto w-16 h-16 rounded-full glass border-4 border-[#0a0a0a] z-10 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 process-icon shadow-[0_0_0px_rgba(84,141,123,0)] group-hover:shadow-[0_0_20px_rgba(84,141,123,0.4)]"
            >
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <div className="w-full md:w-5/12 order-2 md:order-3 text-left pl-24 md:pl-12 mt-6 md:mt-0 opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 ease-out">
              <div className="w-full flex justify-center mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest animate-pulse-glow">
                  <span className="material-symbols-outlined text-sm">sell</span>
                  Gratuito para cualquier servicio
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                1. Consultoría en Transformación Digital
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Te ayudamos a entender qué software necesitas para hacer crecer tu negocio. Te
                guiamos en el proceso estratégico para asegurar que la tecnología sea una inversión
                rentable y no un gasto.
              </p>
              <div className="flex gap-2 justify-start flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Estrategia
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Análisis
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Innovación
                </span>
              </div>
            </div>
          </div>
          {/* Paso 2: Diseño */}
          <div
            ref={setStepRef(1)}
            className={`process-step relative flex flex-col md:flex-row items-center justify-between mb-24 group${activeSteps[1] ? " step-active" : ""}`}
          >
            <div className="w-full md:w-5/12 order-2 md:order-1 text-left md:text-right pl-24 md:pl-0 pr-0 md:pr-12 mt-6 md:mt-0 opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 ease-out">
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                2. Desarrollo de Páginas Web
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Creamos experiencias digitales atractivas y funcionales con la mejor tecnología.
                Landing pages, portafolios interactivos y sitios corporativos optimizados para una
                máxima conversión.
              </p>
              <div className="flex gap-2 justify-start md:justify-end flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  React
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Tailwind CSS
                </span>
              </div>
            </div>
            {/* Timeline Icon */}
            <div
              ref={setIconRef(1)}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-auto w-16 h-16 rounded-full glass border-4 border-[#0a0a0a] z-10 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 process-icon shadow-[0_0_0px_rgba(84,141,123,0)] group-hover:shadow-[0_0_20px_rgba(84,141,123,0.4)]"
            >
              <span className="material-symbols-outlined text-2xl">web</span>
            </div>
            <div className="w-full md:w-5/12 order-1 md:order-3 pl-24 md:pl-12 opacity-0 translate-y-8 transition-all duration-[800ms] delay-[200ms] ease-out">
              <div className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/20" />
                {/* Representación de Web App */}
                <div className="h-40 bg-black/40 rounded-xl border border-white/5 flex flex-col overflow-hidden group-hover:border-primary/20 transition-colors">
                  <div className="flex gap-1.5 p-3 border-b border-white/5 bg-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="w-full flex-1 flex flex-col p-3 gap-3 relative">
                    <div className="flex gap-3 w-full items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/40 animate-pulse" />
                      <div className="flex-1 flex flex-col gap-1.5">
                        <div className="w-full h-2 rounded-full bg-white/10" />
                        <div className="w-2/3 h-2 rounded-full bg-white/5" />
                      </div>
                    </div>
                    <div className="flex gap-2 h-full">
                      <div className="flex-1 h-full rounded-md bg-white/10 border border-white/5" />
                      <div className="flex-1 h-full rounded-md bg-white/10 border border-white/5" />
                      <div className="flex-1 h-full rounded-md bg-white/10 border border-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Paso 2: Desarrollo Web */}
          <div
            ref={setStepRef(2)}
            className={`process-step relative flex flex-col md:flex-row items-center justify-between mb-24 group${activeSteps[2] ? " step-active" : ""}`}
          >
            <div className="w-full md:w-5/12 order-1 md:order-1 pl-24 md:pl-0 pr-0 md:pr-12 opacity-0 translate-y-8 transition-all duration-[800ms] delay-[200ms] ease-out">
              <div className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/40 transition-all duration-500 flex justify-center group-hover:-translate-y-2">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-500 group-hover:bg-primary/20" />
                {/* Representación de Teléfono Móvil */}
                <div className="w-20 h-40 border-[5px] border-slate-800 rounded-2xl p-1 relative bg-black shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-slate-800 rounded-b-xl z-20" />
                  <div className="w-full h-full border border-white/5 rounded-lg relative overflow-hidden flex flex-col bg-[#0a0a0a]">
                    <div className="flex-1 w-full flex flex-col gap-1.5 p-2 pt-4">
                      <div className="flex justify-between items-center mb-1">
                        <div className="h-2 w-8 bg-white/20 rounded-full" />
                        <div className="h-4 w-4 rounded-full bg-primary/40 animate-pulse" />
                      </div>
                      <div className="h-[60px] w-full bg-gradient-to-br from-primary/30 to-primary/5 rounded-md mt-1 shadow-[0_0_15px_rgba(84,141,123,0.3)]" />
                      <div className="flex gap-1.5 mt-1 justify-center">
                        <div className="h-8 w-8 bg-white/5 rounded-full" />
                        <div className="h-8 w-8 bg-white/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Icon */}
            <div
              ref={setIconRef(2)}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-auto w-16 h-16 rounded-full glass border-4 border-[#0a0a0a] z-10 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 process-icon shadow-[0_0_0px_rgba(84,141,123,0)] group-hover:shadow-[0_0_20px_rgba(84,141,123,0.4)]"
            >
              <span className="material-symbols-outlined text-2xl">smartphone</span>
            </div>
            <div className="w-full md:w-5/12 order-2 md:order-3 text-left pl-24 md:pl-12 mt-6 md:mt-0 opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 ease-out">
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                3. Desarrollo de Apps Móviles
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Llevamos tu modelo de negocio directo al bolsillo de tus clientes. Aplicaciones
                nativas e híbridas para iOS y Android con rendimiento superior y animaciones
                fluidas.
              </p>
              <div className="flex gap-2 justify-start flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  React Native
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Swift / Kotlin
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Firebase
                </span>
              </div>
            </div>
          </div>
          {/* Paso 3: Apps Móviles */}
          <div
            ref={setStepRef(3)}
            className={`process-step relative flex flex-col md:flex-row items-center justify-between mb-24 group${activeSteps[3] ? " step-active" : ""}`}
          >
            <div className="w-full md:w-5/12 order-2 md:order-1 text-left md:text-right pl-24 md:pl-0 pr-0 md:pr-12 mt-6 md:mt-0 opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 ease-out">
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                4. Sistema de Gestión de Inventario
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Optimiza el control de tus productos y recursos. Desarrollamos plataformas robustas
                y personalizadas que te brindan una visibilidad completa de tu stock y transacciones
                en tiempo real.
              </p>
              <div className="flex gap-2 justify-start md:justify-end flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Java
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  React
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  REST APIs
                </span>
              </div>
            </div>
            {/* Timeline Icon */}
            <div
              ref={setIconRef(3)}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-auto w-16 h-16 rounded-full glass border-4 border-[#0a0a0a] z-10 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 process-icon shadow-[0_0_0px_rgba(84,141,123,0)] group-hover:shadow-[0_0_20px_rgba(84,141,123,0.4)]"
            >
              <span className="material-symbols-outlined text-2xl">inventory</span>
            </div>
            <div className="w-full md:w-5/12 order-1 md:order-3 pl-24 md:pl-12 opacity-0 translate-y-8 transition-all duration-[800ms] delay-[200ms] ease-out">
              <div className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
                {/* Representación de Inventario (Tabla) */}
                <div className="h-40 bg-black/40 rounded-xl border border-white/5 flex flex-col p-3 gap-2 overflow-hidden group-hover:border-primary/20 transition-colors">
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-t-lg">
                    <div className="w-16 h-2 bg-white/20 rounded" />
                    <div className="w-8 h-2 bg-primary/40 rounded animate-pulse" />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="flex gap-2 items-center bg-white/5 p-2 rounded border border-white/5">
                      <div className="w-4 h-4 rounded bg-primary/30 flex-shrink-0" />
                      <div className="flex-1 h-1.5 bg-white/20 rounded" />
                      <div className="w-8 h-1.5 bg-white/30 rounded" />
                    </div>
                    <div className="flex gap-2 items-center bg-white/5 p-2 rounded border border-white/5">
                      <div className="w-4 h-4 rounded bg-white/10 flex-shrink-0" />
                      <div className="flex-1 h-1.5 bg-white/10 rounded" />
                      <div className="w-8 h-1.5 bg-white/20 rounded" />
                    </div>
                    <div className="flex gap-2 items-center bg-white/5 p-2 rounded border border-white/5">
                      <div className="w-4 h-4 rounded bg-white/10 flex-shrink-0" />
                      <div className="flex-1 h-1.5 bg-white/10 rounded" />
                      <div className="w-8 h-1.5 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Paso 4: Sistemas Corporativos y Dashboards */}
          <div
            ref={setStepRef(4)}
            className={`process-step relative flex flex-col md:flex-row items-center justify-between group${activeSteps[4] ? " step-active" : ""}`}
          >
            {/* Visual Mockup (Dashboard) */}
            <div className="w-full md:w-5/12 order-1 md:order-1 pl-24 md:pl-0 pr-0 md:pr-12 opacity-0 translate-y-8 transition-all duration-[800ms] delay-[200ms] ease-out">
              <div className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group-hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/20" />
                {/* Representación de Personal (Perfiles) */}
                <div className="h-40 rounded-xl flex flex-col gap-2 relative overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    {/* Perfil 1 */}
                    <div className="bg-black/60 border border-white/5 rounded-lg flex flex-col items-center justify-center p-3 gap-3 hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center animate-pulse">
                        <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                          person
                        </span>
                      </div>
                      <div className="w-full flex flex-col items-center gap-1.5">
                        <div className="w-full h-1.5 bg-white/20 rounded-full" />
                        <div className="w-2/3 h-1.5 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    {/* Perfil 2 */}
                    <div className="bg-black/40 border border-white/5 rounded-lg flex flex-col items-center justify-center p-3 gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white/30 text-xl flex-shrink-0">
                          person
                        </span>
                      </div>
                      <div className="w-full flex flex-col items-center gap-1.5">
                        <div className="w-full h-1.5 bg-white/10 rounded-full" />
                        <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline Icon */}
            <div
              ref={setIconRef(4)}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-auto w-16 h-16 rounded-full glass border-4 border-[#0a0a0a] z-10 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 process-icon shadow-[0_0_0px_rgba(84,141,123,0)] group-hover:shadow-[0_0_20px_rgba(84,141,123,0.4)]"
            >
              <span className="material-symbols-outlined text-2xl">groups</span>
            </div>
            {/* Text Context */}
            <div className="w-full md:w-5/12 order-2 md:order-3 text-left pl-24 md:pl-12 mt-6 md:mt-0 opacity-0 translate-y-8 transition-all duration-[800ms] delay-100 ease-out">
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                5. Sistema de Gestión de Personal
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Automatiza y centraliza la administración de tus equipos. Soluciones eficientes para
                control de asistencias, planillas, perfiles profesionales y evaluación de métricas
                corporativas.
              </p>
              <div className="flex gap-2 justify-start flex-wrap">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  Dashboards
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  SpringBoot
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors">
                  MySQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
