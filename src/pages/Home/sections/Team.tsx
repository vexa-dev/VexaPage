import { TEAM_MEMBERS } from "@/data/team";
import { TeamCard } from "../components/TeamCard";

export function Team() {
  return (
    <section className="py-24" id="equipo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Nuestro Equipo
            </h2>
            <p className="text-slate-500 max-w-xl">
              Las mentes brillantes detrás de nuestra excelencia técnica.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
