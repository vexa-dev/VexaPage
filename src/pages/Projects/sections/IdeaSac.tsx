export function IdeaSac() {
  return (
    <section id="proyecto-ideasac" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">IdeaSAC</h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Gestión de Astillero
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Sistema Corporativo
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Solución web integral para la industria naval que unifica la presencia digital pública
            con una administración interna centralizada. El sistema permite a los clientes explorar
            el catálogo de embarcaciones de aluminio y solicitar cotizaciones personalizadas,
            mientras los administradores gestionan el flujo de trabajo, el personal calificado y las
            órdenes de producción desde un dashboard especializado.
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
                La empresa no contaba con presencia digital ni un canal oficial de comunicación, por
                lo que necesitaban una web profesional y un sistema de gestión integrado para
                centralizar y mejorar todo el proceso de contacto con sus clientes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                  La Solución
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed m-0">
                Implementación de una arquitectura MVC robusta utilizando Spring Boot y Java para la
                lógica de backend, con Thymeleaf para el renderizado dinámico y una base de datos
                MySQL estructurada para escalabilidad operativa.
              </p>
            </div>
          </div>
          {/* Bento Grid 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=VEXA+DASHBOARD"
                alt="IdeaSAC Astillero Principal"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=VEXA+PLATFORM"
                alt="Producción barcos aluminio"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=ADMIN+PANEL"
                alt="Admin Dashboard Vexa"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=SYSTEM+VIEW"
                alt="Cotizaciones Sistema"
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
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-vscode-plain colored tech-icon" title="VS Code" />
                  <i className="devicon-github-original tech-icon" title="GitHub" />
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">query_stats</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Panel Administrativo</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Gestión de cotizaciones, personal y catálogo interno.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">engineering</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Portal de Cotización</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Solicitud masiva de proyectos de aluminio y naval.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">inventory_2</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Showroom Dinámico</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Visualización de Stock y especificaciones técnicas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">security</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Integridad de Datos</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Arquitectura MVC segura con persistencia MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
