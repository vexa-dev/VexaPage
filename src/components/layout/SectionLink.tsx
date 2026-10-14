import React, { type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToElement } from "@/utils/smoothScroll";

export interface SectionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** id de la sección en la página de inicio */
  to: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Enlace a una sección de la home. Dentro de la home es un ancla (#id) con scroll suave inteligente;
 * desde otras páginas navega a /#id.
 */
export function SectionLink({ to, className, children, onClick, ...rest }: SectionLinkProps) {
  const { pathname } = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;

    if (pathname === "/") {
      e.preventDefault();
      const target = document.getElementById(to);
      if (target) {
        scrollToElement(target);
      }
    }
  };

  if (pathname === "/") {
    return (
      <a className={className} href={`#${to}`} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={`/#${to}`} onClick={onClick} {...(rest as any)}>
      {children}
    </Link>
  );
}
