export function Heladeria() {
  return (
    <section id="proyecto-hela" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">
        Heladeria Dulce Perú
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          PROTOTIPO E-COMMERCE
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          UI / UX DESIGN
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Prototipo interactivo de venta minorista diseñado para heladerías locales. La plataforma
            se centra en la personalización de productos, permitiendo a los usuarios configurar sus
            pedidos a medida y navegar por un catálogo dinámico, simulando una experiencia de compra
            fluida y visualmente atractiva en entornos web.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-orange-400 text-sm">warning</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400/80">
                  EL RETO
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed m-0">
                Diseñar una interfaz intuitiva que permitiera a los usuarios personalizar sus
                productos de forma sencilla, superando la dificultad de visualizar combinaciones de
                ingredientes en un entorno digital estático.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                  IMPACTO
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed m-0">
                Se desarrolló una experiencia de usuario altamente interactiva mediante el uso de
                JavaScript puro, logrando un sistema de selección dinámica y personalización en
                tiempo real que simula con precisión el flujo de compra de un e-commerce moderno.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=DULCE+PERU+E-COMMERCE"
                alt="Heladeria Dulce Perú Home"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=CUSTOMIZER+UI"
                alt="Personalizador Dinámico"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=CART+SYSTEM"
                alt="Carrito Simulado"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=RESPONSIVE+VIEW"
                alt="Diseño Adaptable"
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
                  <i className="devicon-css3-plain colored tech-icon" title="CSS3 (Flexbox/Grid)" />
                  <i
                    className="devicon-javascript-plain colored tech-icon"
                    title="JavaScript (Vanilla)"
                  />
                </div>
              </div>
              {/* Lógica */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Lógica
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl text-white">
                  <span className="material-symbols-outlined text-3xl opacity-70">database</span>
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    account_tree
                  </span>
                </div>
              </div>
              {/* Herramientas */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Herramientas
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl">
                  <i className="devicon-vscode-plain colored tech-icon" title="VS Code" />
                  <i className="devicon-git-plain colored tech-icon" title="Git" />
                  <i className="devicon-github-original tech-icon" title="GitHub" />
                </div>
              </div>
              {/* Diseño */}
              <div>
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-3 font-bold">
                  Diseño
                </span>
                <div className="flex flex-wrap items-center gap-3 text-3xl text-white">
                  <span className="material-symbols-outlined text-3xl opacity-70">devices</span>
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">tune</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Personalizador Dinámico</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Sistema que permite elegir sabores, toppings y presentaciones con actualización
                  visual inmediata.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">shopping_cart</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Carrito Simulado</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Gestión de pedidos en tiempo real para visualizar el resumen de compra antes de
                  finalizar.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">category</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Catálogo Interactivo</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Navegación fluida entre distintas categorías de productos con filtros visuales.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">
                stay_primary_portrait
              </span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Diseño Adaptable</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Interfaz optimizada para una navegación cómoda tanto en computadoras como en
                  dispositivos móviles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
