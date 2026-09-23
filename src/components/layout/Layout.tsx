import { Outlet, useLocation } from "react-router-dom";
import { useAnchorLinks } from "@/hooks/useAnchorLinks";
import { useHashScroll } from "@/hooks/useHashScroll";
import { usePageView } from "@/hooks/usePageView";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout() {
  const { pathname } = useLocation();
  useAnchorLinks();
  useHashScroll();
  usePageView();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* La página de proyectos no mostraba el botón flotante de WhatsApp */}
      {pathname !== "/proyectos" && <WhatsAppButton />}
    </>
  );
}
