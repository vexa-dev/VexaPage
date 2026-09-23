import { POLICY_GROUPS } from "../../data/policies";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { PoliciesContent } from "./PoliciesContent";

const SECTION_IDS = POLICY_GROUPS.flatMap((group) => group.items.map((item) => item.id));
const LINK_BASE = "hover:text-slate-200 block transition-colors py-1 text-sm";

export function PoliciesPage() {
  useDocumentTitle("VEXA - Políticas de Privacidad");
  const activeId = useScrollSpy(SECTION_IDS, { offset: 200, mode: "passed" });

  return (
    <main className="pt-32 pb-24 relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Índice lateral */}
      <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar lg:pr-8 pr-4">
        <nav className="text-sm">
          <div className="mb-4">
            <h3 className="font-bold text-white mb-4 text-base tracking-wide border-b border-white/10 pb-2">
              Políticas del sitio
            </h3>
            <ul className="space-y-1">
              {POLICY_GROUPS.map((group) => (
                <li key={group.title}>
                  <details className="group" open>
                    <summary className="flex items-center justify-between cursor-pointer text-primary font-bold py-2 px-3 rounded-lg bg-white/5 border-l-2 border-primary list-none">
                      {group.title}
                      <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <ul className="my-2 space-y-1 pl-4 ml-3 border-l border-white/10">
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`${LINK_BASE} ${
                              activeId === item.id
                                ? "text-primary font-bold translate-x-1"
                                : "text-slate-400"
                            }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <PoliciesContent />
    </main>
  );
}
