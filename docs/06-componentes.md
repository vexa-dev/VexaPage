# 06 · Componentes

Patrones de interfaz reutilizados en el sitio, con sus clases exactas. Copia estas clases al crear elementos nuevos para mantener la coherencia visual.

## Superficie "glass"

Clase propia definida en [`src/styles/index.css`](../src/styles/index.css):

```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}
```

Se usa en el header, tarjetas de servicios, nodos de la línea de tiempo y botones sociales.

Al hacer scroll (> 20 px) el header añade `.header-scrolled`: fondo `rgba(10,10,10,0.8)`, desenfoque de 20 px y sombra.

## Botones

| Variante                  | Clases                                                                                                                                                                    | Dónde                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **Principal**             | `px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(84,141,123,0.4)] transition-all`                                                        | Hero "Solicitar Cotización" |
| **Secundario**            | `px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all`                                                                                  | Hero "Explorar Servicios"   |
| **Pastilla (CTA header)** | `bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all`                                                                 | Header "Contacto"           |
| **Bloque (formulario)**   | `w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2`                                        | "Enviar Solicitud"          |
| **Neutro (modal)**        | `w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all`                                                                                | "Cerrar"                    |
| **Con color de proyecto** | `w-full py-3 bg-{color}-500/20 text-{color}-400 border border-{color}-500/50 rounded-xl font-bold tracking-wider uppercase text-xs hover:bg-{color}-500 hover:text-white` | "Ver Proyecto"              |

Todos los `a` y `button` tienen una transición global de 0.3 s (`cubic-bezier(0.4, 0, 0.2, 1)`).

## Enlaces de navegación

- Base: `text-sm font-medium hover:text-primary transition-colors`.
- Con subrayado: se añade `border-b-2 border-transparent`; el enlace activo cambia a `border-primary text-primary`.
- Índice de proyectos activo: `text-primary font-bold bg-white/5 border-l-2 border-primary`.
- Índice de políticas activo: `text-primary font-bold translate-x-1`.

## Badges y chips

| Variante                           | Clases                                                                                                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Badge de marca** (hero)          | `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest`                            |
| **Badge promocional**              | `inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest animate-pulse-glow` |
| **Chip de tecnología** (servicios) | `px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 font-medium border border-white/10 hover:border-primary/50 transition-colors`                                            |
| **Etiqueta de proyecto**           | `px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider`                                                           |
| **Tag del portafolio**             | `font-bold text-[10px] uppercase bg-white/10 px-2 py-1 rounded text-slate-300 border border-white/5`                                                                               |

El badge del hero incluye un punto con animación `animate-ping` (indicador "en vivo").

## Tarjetas

| Tarjeta                  | Componente / archivo                                                  | Clave visual                                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Servicio (glass)**     | [`Services.tsx`](../src/pages/Home/sections/Services.tsx)             | `glass p-6 rounded-2xl border border-white/10`, borde `primary/40` y elevación `-translate-y-2` en hover                                      |
| **Portafolio**           | [`PortfolioCard.tsx`](../src/pages/Home/components/PortfolioCard.tsx) | 280 × 400 px, degradado de color, overlay que sube desde abajo en hover                                                                       |
| **Miembro del equipo**   | [`TeamCard.tsx`](../src/pages/Home/components/TeamCard.tsx)           | Foto cuadrada en escala de grises que se colorea en hover, redes sociales sobre degradado                                                     |
| **Caja de información**  | Secciones de proyectos                                                | `p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm`                                                                       |
| **Característica**       | Secciones de proyectos                                                | `flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/[0.05]` |
| **Imagen bento**         | Secciones de proyectos                                                | `relative overflow-hidden rounded-xl border border-white/10`, imagen con `hover:scale-105 duration-700`                                       |
| **Estadística flotante** | [`About.tsx`](../src/pages/Home/sections/About.tsx)                   | `bg-[#3E6B5D] p-6 rounded-2xl` con brillo `animate-shimmer`                                                                                   |

## Formulario

- Contenedor: `bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl`.
- Label: `block text-sm font-medium text-slate-500 mb-2`.
- Campo (input, select, textarea):

  ```
  w-full bg-black/20 border-white/10 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 text-white
  ```

- Estilos globales en `index.css`: al enfocar, el fondo pasa a `rgba(0,0,0,0.4)` con un anillo verde; el `select` tiene flecha personalizada verde y opciones con fondo `#1A1A1A`.
- Los estilos base de los inputs vienen del plugin `@tailwindcss/forms`.
- Estado de envío: el botón muestra "Enviando..." con el icono `sync` girando (`animate-spin`) y queda deshabilitado.

## Modal

[`SuccessModal.tsx`](../src/pages/Home/components/SuccessModal.tsx):

- Overlay: `fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm`, aparece con `opacity` (300 ms).
- Caja: `bg-[#111111] border border-white/10 rounded-2xl p-8 max-w-sm`, entra con escala `scale-95 → scale-100`.
- Se cierra con el botón o haciendo clic fuera de la caja.

## Botón flotante de WhatsApp

[`WhatsAppButton.tsx`](../src/components/layout/WhatsAppButton.tsx): círculo `w-14 h-14 bg-[#25D366]` fijo abajo a la derecha, con `animate-pulse-glow-lg`, escala `1.25` en hover y tooltip blanco "Escríbenos ahora". Se muestra en la home y en políticas.

## Índices laterales

[`ProjectsSidebar.tsx`](../src/pages/Projects/ProjectsSidebar.tsx) y [`PoliciesSidebar.tsx`](../src/pages/Policies/PoliciesSidebar.tsx):

- `hidden lg:block w-72 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar`.
- Scrollbar fina (4 px) mediante `.custom-scrollbar` en `index.css`.
- El enlace activo se calcula con el hook `useScrollSpy`.

## Scrollbar global

Definida en `index.css`: 8 px de ancho, riel `#0A0A0A`, pulgar `#1A1A1A` que se vuelve `primary` en hover.
