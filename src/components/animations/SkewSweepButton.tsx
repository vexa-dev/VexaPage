import React from "react";
import { cn } from "@/lib/utils";

export interface SkewSweepButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

/**
 * SkewSweepButton (uiverse.io vikiWayne style adapted to VEXA)
 * - 45-degree diagonal sweep animation from left to right on hover
 * - Strictly maintains VEXA's corporate colors: Emerald (#548D7B), Tint (#72B19F), Dark glow
 * - Outline style with smooth text color inversion on hover
 */
export function SkewSweepButton({
  children = "Solicitar Cotización",
  href = "#contacto",
  className = "",
  ...props
}: SkewSweepButtonProps) {
  return (
    <a
      href={href}
      className={cn("uiverse-vexa-btn w-full sm:w-auto", className)}
      {...props}
    >
      <span>{children}</span>
    </a>
  );
}

export default SkewSweepButton;
