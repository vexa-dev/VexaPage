export function Nutricraft() {
  return (
    <section id="proyecto-nutri" className="scroll-mt-32">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white !mt-0">
        Nutricraft
      </h2>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Salud &amp; Bienestar
        </span>
        <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
          Micro Apps
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Description & Media */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <p className="text-slate-300 leading-relaxed mb-6">
            Plataforma de e-learning y monetización de contenido gastronómico que transformó una
            juguería tradicional en un negocio digital escalable. Nutricraft permite la exhibición,
            preventa y comercialización de recetas exclusivas, ofreciendo una experiencia inmersiva
            que detalla beneficios nutricionales, procesos de preparación y resultados esperados.
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
                Una juguería con recetas únicas y alta demanda local buscaba expandir sus ingresos
                más allá de su capacidad física. El desafío era encontrar una forma de rentabilizar
                su conocimiento culinario y llegar a comensales fuera de su ubicación geográfica sin
                los costos de una franquicia física.
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
                Creamos un nuevo canal de ingresos mediante la digitalización de su catálogo.
                Nutricraft permitió la venta global de infoproductos, logrando que la marca genere
                ganancias de forma automatizada. Ahora la empresa no solo vende productos físicos,
                sino que monetiza su autoridad en nutrición a través de la web.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl h-64 md:h-[400px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/1200x800/1e293b/475569?text=HEALTH+APP"
                alt="Diet foods"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=DIET+PLANNRER"
                alt="Nutricion app dietas"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=DIET+APP+UI"
                alt="Dieta menu ux"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 md:h-[192px] border border-white/10">
              <img
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                src="https://placehold.co/800x600/1e293b/475569?text=HEALTHY+UI"
                alt="Healthy life app ui"
              />
            </div>
          </div>
        </div>
        {/* Right Column: Meta Info Elements */}
        <div className="order-1 lg:order-2 lg:col-span-1 space-y-8 not-prose">
          <div className="mb-6 border-b border-white/5 pb-6">
            <h4 className="text-white font-display text-base mb-4">Stack Tecnológico</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
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
                  <i className="devicon-figma-plain colored tech-icon" title="Figma" />
                </div>
              </div>
            </div>
          </div>
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">shopping_cart</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">E-commerce de Contenido</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Sistema de pagos para acceso a recetas premium.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">preview</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Preview Dinámico</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Sistema de vista previa para enganchar al usuario antes de la compra.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300">
              <span className="material-symbols-outlined text-primary mt-0.5">receipt_long</span>
              <div>
                <h5 className="text-white font-bold mb-1 mt-0 text-sm">Fichas Técnicas</h5>
                <p className="text-slate-400 text-xs leading-relaxed m-0">
                  Visualización estructurada de beneficios y pasos de preparación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
