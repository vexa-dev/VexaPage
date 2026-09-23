export function Urbanwear() {
  return (
    <section id="proyecto-urba" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">
        Urbanwear
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          SISTEMA DE GESTIÓN DE INVENTARIO
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          PROTOTIPO ACADÉMICO / FULL-STACK
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Aplicación web integral diseñada para la administración centralizada de catálogos de
            moda retail. La plataforma permite a los administradores gestionar dinámicamente el
            stock, segmentar productos por categorías y supervisar el flujo de pedidos entrantes en
            tiempo real, optimizando el control operativo desde una interfaz privada y segura.
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
                Crear un panel administrativo privado para gestionar productos, categorías y pedidos
                en tiempo real, eliminando la dependencia de modificar código para actualizar el
                catálogo.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  rocket_launch
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                  Impacto
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed m-0">
                Se logró la automatización total del inventario, permitiendo una gestión ágil de
                pedidos y productos. Gracias a la arquitectura con React y Node.js, el sistema
                garantiza una respuesta inmediata y un control absoluto sobre el flujo de ventas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=ECOMMERCE+VIEW"
                alt="Ecommerce view"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=PRODUCT+GRID"
                alt="Ropa fashion"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=SHOP+UI"
                alt="UI shop"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=CHECKOUT+PAGE"
                alt="Check out page"
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
                  <i className="devicon-react-original colored tech-icon" title="React" />
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
                  <i className="devicon-nodejs-plain colored tech-icon" title="Node.js" />
                  <i className="devicon-express-original colored tech-icon" title="Express" />
                </div>
              </div>
              {/* Base de Datos */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  BD / Persistencia
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-json-plain colored tech-icon" title="JSON Storage" />
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
                  <i className="devicon-postman-plain colored tech-icon" title="Postman" />
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">inventory_2</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Gestión de Catálogo</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Control total sobre el alta, baja y modificación de prendas y colecciones.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">category</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Categorización Dinámica</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Sistema flexible para organizar productos por etiquetas, tallas o estilos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">monitor_heart</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Monitor de Pedidos</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Panel especializado para la visualización y seguimiento de solicitudes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">
                admin_panel_settings
              </span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Acceso Restringido</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Módulo de autenticación robusto para personal autorizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
