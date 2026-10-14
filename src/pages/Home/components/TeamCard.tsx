import { SocialIcon } from "@/components/icons/SocialIcon";
import type { TeamMember } from "@/types";

export function TeamCard({
  member,
  isActive = false,
}: {
  member: TeamMember;
  isActive?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-[#111518] border border-white/10 hover:border-white/20 p-6 sm:p-8 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between transition-all duration-500 w-full ${
        isActive ? "opacity-100" : "opacity-60 hover:opacity-85"
      }`}
    >
      {/* Resplandores ambientales de fondo (Verde Corporativo + Azul Petróleo) */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#498974]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#4A788A]/[0.08] rounded-full blur-3xl pointer-events-none" />

      {/* Columna Izquierda: Badge, Titular, Cita y Firma (Visible SOLO en Desktop/Laptop: lg:flex) */}
      <div className="hidden lg:flex flex-1 flex-col justify-between pr-0 lg:pr-4 relative z-10">
        <div>
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#4A788A]/15 text-[#88B0C0] border border-[#4A788A]/30 uppercase tracking-wider mb-5">
            {member.tag || member.role}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white mb-5 leading-tight">
            {member.headline || member.name}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-xl">
            “{member.quote || member.bio}”
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10 flex flex-col">
          <span className="font-bold text-white text-base sm:text-lg">{member.name}</span>
          <span className="text-xs sm:text-sm text-slate-400 font-medium">{member.role}</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#76A897] mt-1">
            VEXA CORE TEAM
          </span>
        </div>
      </div>

      {/* Columna Derecha / Cuadro de Perfil:
          - En Móvil (< lg): Actúa como el único cuadro visible ("el cuadro pequeño")
          - En Desktop (lg:): Se posiciona a la derecha (w-72) exactamente como en el diseño original
      */}
      <div className="w-full lg:w-72 flex-shrink-0 flex flex-col items-center lg:items-start relative z-10">
        {/* Retrato Ovalado de Élite */}
        <div className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-[999px] overflow-hidden border-2 border-white/15 shadow-2xl bg-[#161B20] flex-shrink-0 mx-auto lg:mx-0">
          {member.photo ? (
            <img
              src={member.photo.src}
              alt={member.photo.alt || member.name}
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
              <span className="material-symbols-outlined text-white/50 text-5xl">person</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Rol y Nombre */}
        <div className="mt-4 text-center lg:text-left w-full">
          <p className="text-[10px] font-bold tracking-widest text-[#88B0C0] uppercase font-mono">
            {member.role.split("|")[0].trim()}
          </p>
          <h4 className="font-display text-white font-bold text-xl sm:text-2xl lg:text-lg mt-0.5 tracking-tight lg:tracking-normal">
            {member.name}
          </h4>
        </div>

        {/* Separador fino */}
        <div className="w-full border-t border-white/10 my-4" />

        {/* Especialidades e impacto */}
        <div className="w-full space-y-2.5">
          <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 text-center lg:text-left">
            Especialidades & Impacto
          </p>
          {member.highlights?.map((item) => (
            <div key={item.label} className="flex justify-between items-center text-xs gap-3">
              <span className="text-slate-400">{item.label}</span>
              <span className="font-semibold text-white text-right">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-2.5 pt-5 w-full justify-center lg:justify-start">
          {member.socials.map((social) => (
            <a
              key={social.network}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#498974] border border-white/10 hover:border-[#548D7B] flex items-center justify-center text-white text-xs transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
              aria-label={social.network}
            >
              <SocialIcon network={social.network} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
