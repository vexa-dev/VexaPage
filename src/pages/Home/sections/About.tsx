export function About() {
  return (
    <section className="py-24 bg-accent/30" id="quienes-somos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <img
              alt="VEXA Equipo colaborando"
              className="rounded-2xl shadow-2xl relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtsRuASG83vK1S37fZ8snixF3i32qrI4jujSe4jCAEeY51Y54w9Xq3_soF6Y1svDyrdz8f6lMkK1tCoe04dsKXJe8RLBUmVdpVBFAC7DzERGIOG-wm15Fo897KfmvihOAfyG5efumX6JwP9H7ZKyLu1hzEuq4A9C9svGHTNxHHFiaK9hfaSl-zYrSKUMtlgdy-1eM6LyTUQbKQZHw-pUWa_vLWnEzcMrisQ7JfaN3IdHfBedrQdrN51gFPpVc7oXTKU3fMKSbkM8ER"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#3E6B5D] p-6 rounded-2xl hidden md:flex flex-col items-center justify-center z-20 overflow-hidden shadow-[0_0_20px_rgba(84,141,123,0.3)] border border-white/10">
              {/* Efecto de brillo */}
              <div className="absolute top-0 -left-[50%] h-full w-[50%] animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[30deg]" />
              <div className="flex items-center gap-2 relative z-10 mb-1">
                <span className="material-symbols-outlined text-white text-3xl">support_agent</span>
                <div className="text-3xl font-bold text-white">24/7</div>
              </div>
              <div className="text-sm font-medium text-white/90 relative z-10">Soporte Técnico</div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Quiénes Somos: Talento Joven, Soluciones Robustas
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              En VEXA, somos un equipo de ingenieros en formación apasionados por la arquitectura de
              software. No solo creamos aplicaciones; diseñamos sistemas escalables utilizando las
              herramientas que están definiendo el mercado actual. Creemos que la juventud es
              sinónimo de innovación sin límites y adaptabilidad total.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Calidad Sin Compromisos</h4>
                  <p className="text-slate-500 text-sm">
                    Cada línea de código es revisada y optimizada para el máximo rendimiento.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Despliegue Ágil</h4>
                  <p className="text-slate-500 text-sm">
                    Nuestra metodología ágil asegura que tu producto llegue al mercado más rápido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
