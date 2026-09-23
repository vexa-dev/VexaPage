export function Biblioteca() {
  return (
    <section id="proyecto-biblio" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">
        Biblioteca BNP (Prototipo)
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          SISTEMA DE ESCRITORIO (DESKTOP)
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          GESTIÓN ADMINISTRATIVA
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Software de escritorio diseñado para la automatización de bibliotecas, enfocado en la
            agilización de procesos operativos. El sistema centraliza el registro de ejemplares, el
            control de usuarios y la trazabilidad completa de movimientos, permitiendo a los
            administradores gestionar el ciclo de vida de los libros desde una interfaz intuitiva y
            eficiente.
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
                Digitalizar el control manual de una biblioteca para reducir los tiempos de espera y
                errores humanos en el registro de préstamos, devoluciones y gestión de morosidad de
                los usuarios.
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
                Se optimizó el flujo administrativo logrando una reducción significativa en el
                tiempo de procesamiento de préstamos. La integración con MySQL permitió un historial
                de movimientos auditable y un control de inventario preciso en tiempo real.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=LIBRARY+MANAGEMENT"
                alt="Libreria libros"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=BOOK+VIEW"
                alt="Libro view"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=LIBRARY+DASHBOARD"
                alt="Dashboard UX libros"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=BOOKS+STACK"
                alt="Dashboard libros stack"
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
                  Lenguaje
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-java-plain colored tech-icon" title="Java JDK" />
                  <span className="text-[10px] font-bold text-slate-400">SWING</span>
                </div>
              </div>
              {/* Backend */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Backend
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-java-plain colored tech-icon" title="Java" />
                </div>
              </div>
              {/* Base de Datos */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  BD / Servidor
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-mysql-plain colored tech-icon" title="MySQL" />
                  <span className="text-[10px] font-bold text-slate-400">XAMPP</span>
                </div>
              </div>
              {/* Herramientas */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Herramientas
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl text-white">
                  <i className="devicon-github-original tech-icon" title="GitHub" />
                  <span className="text-[10px] font-bold text-slate-400">JDBC</span>
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">sync_alt</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Control de Circulación</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Registro rápido de préstamos y devoluciones con validación automática.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">menu_book</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Gestión de Acervos</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Módulo CRUD completo para la administración de libros y autores.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">group</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">
                  Administración de Usuarios
                </h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Control centralizado de lectores y estados de cuenta.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">database</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Persistencia de Datos</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Consultas SQL optimizadas para garantizar la integridad de la información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
