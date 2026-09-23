import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { ProjectsSidebar } from "./ProjectsSidebar";
import { Automotriz } from "./projects/Automotriz";
import { Biblioteca } from "./projects/Biblioteca";
import { Heladeria } from "./projects/Heladeria";
import { IdeaSac } from "./projects/IdeaSac";
import { Nutricraft } from "./projects/Nutricraft";
import { Urbanwear } from "./projects/Urbanwear";
import { VexaTask } from "./projects/VexaTask";

export function ProjectsPage() {
  useDocumentTitle("VEXA - Proyectos Destacados");

  return (
    <main className="pt-32 pb-24 relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-0">
      {/* Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* ÍNDICE IZQUIERDO */}
      <ProjectsSidebar />

      {/* SEPARADOR VERTICAL */}
      <div className="hidden lg:block w-px bg-white/5 mx-6 self-stretch min-h-[500px]" />

      {/* CONTENIDO DERECHO */}
      <div className="flex-grow max-w-none w-full prose prose-invert prose-slate prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline lg:pl-6 pb-20">
        <div className="space-y-32">
          <IdeaSac />
          <VexaTask />
          <Urbanwear />
          <Automotriz />
          <Biblioteca />
          <Heladeria />
          <Nutricraft />
        </div>
      </div>
    </main>
  );
}
