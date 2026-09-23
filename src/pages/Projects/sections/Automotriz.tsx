export function Automotriz() {
  return (
    <section id="proyecto-auto" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">
        Automotriz
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Sistema Web
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Control Inventario
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Sistema complejo de control logístico para talleres automotrices. Gestiona inventario de
            repuestos, mecánicos, historiales y citas de clientes. Cuenta con generador de boletas
            automáticas, dashboards interactivos semanales de ingresos y recordatorios SMS a
            clientes recurrentes.
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
                Controlar el flujo de miles de repuestos y servicios simultáneos desde diferentes
                terminales, evitando errores manuales en el inventario y colisiones de datos.
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
                Núcleo transaccional ACID en PostgreSQL con procesos de validación cruzada en tiempo
                real y dashboards integrados que alertan sobre discrepancias de stock al instante.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=LOGISTICS+SYSTEM"
                alt="Mecánico view"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=INVENTORY+TOOLS"
                alt="Automotriz tools"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=TALLER+DASHBOARD"
                alt="Dashboard Taller"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=SERVICE+APP"
                alt="Reparaciones App"
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
                  <i className="devicon-spring-original colored tech-icon" title="Spring" />
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
                  <i className="devicon-eclipse-plain colored tech-icon" title="Eclipse/IntelliJ" />
                  <i className="devicon-github-original tech-icon" title="GitHub" />
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">sms</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">SMS Reminders</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Alertas automatizadas a dispositivos móviles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">inventory</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Control Logístico</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Gestión milimétrica de repuestos y personal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">receipt_long</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Fast Billing</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Generación de boletas y facturas al instante.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">finance_mode</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Dashboards Integrados</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Análisis interactivo de operaciones semanales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
