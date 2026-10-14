import { Outlet, useLocation } from "react-router-dom";
import { useAnchorLinks } from "@/hooks/useAnchorLinks";
import { useHashScroll } from "@/hooks/useHashScroll";
import { usePageView } from "@/hooks/usePageView";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";
import { IntroProvider } from "@/context/IntroContext";
import { IntroSequence } from "@/components/animations/IntroSequence";
import { ComplaintsModalProvider } from "@/context/ComplaintsModalContext";
import { ComplaintsBookModal } from "@/components/legal/ComplaintsBookModal";

export function Layout() {
  const { pathname } = useLocation();
  useAnchorLinks();
  useHashScroll();
  usePageView();

  return (
    <IntroProvider>
      <ComplaintsModalProvider>
        <IntroSequence />
        <div id="page-wrapper" className="min-h-screen flex flex-col">
          <Header />
          <Outlet />
          <Footer />
          {/* La página de proyectos no mostraba el botón flotante de WhatsApp */}
          {pathname !== "/proyectos" && <WhatsAppButton />}
        </div>
        <ComplaintsBookModal />
      </ComplaintsModalProvider>
    </IntroProvider>
  );
}
