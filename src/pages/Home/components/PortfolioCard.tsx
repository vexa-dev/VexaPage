import { Link } from "react-router-dom";
import type { PortfolioProject } from "@/types";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const { theme } = project;
  return (
    <div className="w-[280px] h-[400px] flex-shrink-0 rounded-2xl border border-white/10 overflow-hidden relative group cursor-pointer shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
      {/* Imagen Genérica de Fondo */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} to-black flex items-center justify-center`}
      >
        <span className="material-symbols-outlined text-white/20 text-8xl">{project.icon}</span>
      </div>
      {/* Vista Default */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end h-32 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-display text-2xl font-bold text-white tracking-wide">
          {project.title}
        </h3>
      </div>
      {/* Overlay Hover */}
      <div
        className={`absolute inset-0 ${project.overlay ?? "bg-black/40 backdrop-blur-md"} p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border ${theme.border}`}
      >
        <div>
          <h3 className="font-display text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-bold text-[10px] items-center justify-center flex uppercase bg-white/10 px-2 py-1 rounded text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Link
          to={`/proyectos#${project.anchor}`}
          className={`w-full py-3 ${theme.button} border rounded-xl font-bold tracking-wider uppercase text-xs hover:text-white transition-colors text-center block`}
        >
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
}
