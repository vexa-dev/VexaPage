import { SITE } from "@/data/site";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { PoliciesContent } from "./PoliciesContent";
import { PoliciesSidebar } from "./PoliciesSidebar";

export function PoliciesPage() {
  useDocumentTitle(SITE.titles.policies);

  return (
    <main className="pt-32 pb-24 relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Índice lateral */}
      <PoliciesSidebar />

      <PoliciesContent />
    </main>
  );
}
