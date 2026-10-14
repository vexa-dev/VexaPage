import { useRef, useEffect, useState, useCallback, type CSSProperties, type KeyboardEvent, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  link?: string;
  alt?: string;
  description?: string;
  category?: string;
  problem?: string;
  benefit?: string;
  targetSector?: string;
  tags?: string[];
  icon?: string;
}

export interface AccordionGalleryProps {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
];

export const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 2,
  accentColor = '#10B981',
  overlayColor = '#060010',
  height = 540,
  gap = 10,
  radius = 16,
  expandRatio = 0.5,
  orientation = 'vertical',
  duration = 0.55,
  ease = 'power3.out',
  trigger = 'click',
  className = ''
}: AccordionGalleryProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const overlayBg = `linear-gradient(180deg, transparent 40%, color-mix(in srgb, ${overlayColor} 85%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            duration: dur,
            ease
          },
          0
        );
      });

      tlRef.current = tl;
    },
    [active, count, expandRatio, duration, ease, prefersReduced]
  );

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i: number, e: MouseEvent) => {
    // Al pulsar la barra o tarjeta, ÚNICAMENTE expandimos la ventana.
    // La navegación solo ocurre al pulsar el botón explícito "Explorar Proyecto".
    e.preventDefault();
    e.stopPropagation();
    setActive(i);
  };

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} w-full max-w-full select-none ${className}`}
      style={{
        gap: `${gap}px`,
        height: `${height}px`
      }}
      role="list"
      aria-label="Galería interactiva de proyectos"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = 'div';
        return (
          <Tag
            key={i}
            ref={(el: HTMLElement | null) => {
              panelRefs.current[i] = el;
            }}
            className="group relative block min-w-0 min-h-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-[#07110E] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.8)] border border-white/10 focus-visible:ring-2 focus-visible:ring-[#548D7B] min-h-[46px] transition-shadow duration-300 hover:shadow-[0_16px_40px_-8px_rgba(73,137,116,0.25)]"
            style={
              {
                borderRadius: `${radius}px`,
                '--ag-accent': accentColor,
                willChange: 'flex-grow'
              } as CSSProperties
            }
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            {/* Imagen de fondo inmersiva */}
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <img
                src={item.image}
                alt={item.alt || item.label || ''}
                draggable={false}
                className={`block h-full w-full select-none object-cover [-webkit-user-drag:none] transition-all duration-700 ${
                  isActive ? 'scale-105 filter-none brightness-100' : 'scale-100 grayscale-[0.3] brightness-[0.55]'
                }`}
              />
              <span
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{ background: overlayBg }}
                aria-hidden="true"
              />
            </span>

            {/* ======================================================== */}
            {/* VISTA COLAPSADA: Barra limpia con Icono + Título + Flecha */}
            {/* ======================================================== */}
            {!isActive && (
              <div className="absolute inset-0 z-[3] flex items-center justify-between px-4 sm:px-5 bg-black/65 backdrop-blur-[2px] transition-all duration-300 pointer-events-none group-hover:bg-black/50">
                <div className="flex items-center gap-3 min-w-0">
                  {item.icon && (
                    <span className="material-symbols-outlined text-xl sm:text-2xl text-[#76A897] flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide truncate">
                    {item.label}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:bg-[#498974] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* VISTA ACTIVA: Contenido limpio: Título + Descripción + CTA */}
            {/* ======================================================== */}
            {isActive && (
              <div className="absolute inset-0 z-[4] p-5 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/55 to-transparent text-left pointer-events-none">
                {/* Categoría / Rubro */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#76A897] font-semibold">
                    {item.category || item.targetSector || "Proyecto Destacado"}
                  </span>
                </div>

                {/* Título */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-1.5 leading-snug">
                  {item.label}
                </h3>

                {/* Descripción */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                )}

                {/* Botón Explorar Proyecto: ÚNICO elemento que navega al catálogo */}
                {item.link && (
                  <div className="pointer-events-auto pt-1">
                    <Link
                      to={item.link}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#498974] hover:bg-[#3B705F] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(73,137,116,0.35)] hover:scale-105 active:scale-95"
                    >
                      <span>Explorar Proyecto</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
