import type { SocialNetwork } from "@/types";
import { SOCIAL_ICON_PATHS } from "./socialIconPaths";

/** Icono de red social: SVG de marca o, si no hay, el símbolo "link" de Material. */
export function SocialIcon({ network }: { network: SocialNetwork }) {
  const path = SOCIAL_ICON_PATHS[network];

  if (!path) {
    return <span className="material-symbols-outlined text-sm">link</span>;
  }

  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
}
