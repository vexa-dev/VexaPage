import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface ComplaintsModalContextType {
  isOpen: boolean;
  openComplaintsModal: () => void;
  closeComplaintsModal: () => void;
}

const ComplaintsModalContext = createContext<ComplaintsModalContextType>({
  isOpen: false,
  openComplaintsModal: () => {},
  closeComplaintsModal: () => {},
});

export function ComplaintsModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openComplaintsModal = () => setIsOpen(true);
  const closeComplaintsModal = () => setIsOpen(false);

  // Escucha cambios de hash o eventos para abrir el modal directamente
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#libro-de-reclamaciones" || window.location.hash === "#reclamaciones") {
        setIsOpen(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    const handleCustomEvent = () => setIsOpen(true);
    window.addEventListener("vexa:open-complaints-modal", handleCustomEvent);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("vexa:open-complaints-modal", handleCustomEvent);
    };
  }, []);

  return (
    <ComplaintsModalContext.Provider
      value={{ isOpen, openComplaintsModal, closeComplaintsModal }}
    >
      {children}
    </ComplaintsModalContext.Provider>
  );
}

export function useComplaintsModal() {
  return useContext(ComplaintsModalContext);
}
