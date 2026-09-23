export function VexaTask() {
  return (
    <section id="proyecto-vexa" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">
        Vexa Task
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          App Móvil
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Cross-Platform
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Gestor inteligente de flujo de trabajo diseñado para centralizar la estructura operativa
            de las empresas. Permite la asignación dinámica de tareas, el seguimiento de estados por
            equipo y la automatización de la comunicación interna, eliminando la ambigüedad y
            maximizando la productividad del capital humano.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-orange-400 text-sm">warning</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400/80">
                  El Reto
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed m-0">
                La falta de un canal centralizado para la asignación de tareas generaba cuellos de
                botella en la comunicación, errores de comprensión en las asignaciones y una
                visibilidad nula sobre el estado real de los proyectos del equipo.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                  Impacto
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed m-0">
                Logramos una agilización del flujo comunicativo mediante una gestión automatizada.
                Se redujeron drásticamente los errores operativos y cada miembro obtuvo claridad
                inmediata sobre sus responsabilidades, optimizando los tiempos de respuesta interna.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=APP+DASHBOARD"
                alt="Dashboard app"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=MOBILE+UI"
                alt="App movil visual"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=UX+FLOW"
                alt="Flujo ux ui"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=MOCKUP"
                alt="UI ux mock"
              />
            </div>
          </div>
        </div>
        {/* Right Column: Meta Info Elements */}
        <div className="order-1 lg:order-2 lg:col-span-1 space-y-8 not-prose">
          <div className="mb-6 border-b border-white/5 pb-6">
            <h4 className="text-white font-display text-base mb-4">Stack Tecnológico</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6">
              {/* Frontend */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Frontend
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-html5-plain colored tech-icon" title="HTML5" />
                  <i className="devicon-bootstrap-plain colored tech-icon" title="Bootstrap" />
                  <i className="devicon-css3-plain colored tech-icon" title="CSS3" />
                  <i className="devicon-javascript-plain colored tech-icon" title="JavaScript" />
                </div>
              </div>
              {/* Backend */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Backend
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-java-plain colored tech-icon" title="Java" />
                  <i className="devicon-spring-original colored tech-icon" title="Spring Boot" />
                </div>
              </div>
              {/* Base de Datos */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  BD
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-mysql-plain colored tech-icon" title="MySQL" />
                </div>
              </div>
              {/* Herramientas */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Herramientas
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl text-white">
                  <i className="devicon-vscode-plain colored tech-icon" title="VS Code" />
                  <i className="devicon-github-original tech-icon" title="GitHub" />
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">monitoring</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Status Tracking</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Visualización en tiempo real del progreso por equipo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Error Reduction</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Lógica de asignación clara para evitar fallos de comunicación.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">devices</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Multiplataforma</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Diseño responsive adaptable a pantallas de cualquier tamaño.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
