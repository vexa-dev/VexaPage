import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SectionLinkProps {
  /** id de la sección en la página de inicio */
  to: string;
  className?: string;
  children: ReactNode;
}

/**
 * Enlace a una sección de la home. Dentro de la home es un ancla (#id) con scroll suave;
 * desde otras páginas navega a /#id.
 */
export function SectionLink({ to, className, children }: SectionLinkProps) {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return (
      <a className={className} href={`#${to}`}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={`/#${to}`}>
      {children}
    </Link>
  );
}
