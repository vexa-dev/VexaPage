# 03 · Tipografía

## Familias

| Rol     | Fuente                | Clase Tailwind                        | Pesos cargados          | Fallback     |
| ------- | --------------------- | ------------------------------------- | ----------------------- | ------------ |
| Títulos | **Plus Jakarta Sans** | `font-display`                        | 400, 500, 600, 700, 800 | `sans-serif` |
| Texto   | **Inter**             | `font-sans` (por defecto en `<body>`) | 300, 400, 500, 600, 700 | `sans-serif` |

- Se cargan desde Google Fonts en [`index.html`](../index.html) con `display=swap`.
- Están registradas en [`tailwind.config.ts`](../tailwind.config.ts) → `theme.extend.fontFamily`.
- El `<body>` usa `font-sans antialiased`, así que todo el texto es Inter salvo que se indique `font-display`.

> Si agregas un peso nuevo (p. ej. Inter 800), añádelo también a la URL de Google Fonts en `index.html`.

## Pesos

| Clase            | Peso | Uso                                              |
| ---------------- | ---- | ------------------------------------------------ |
| `font-extrabold` | 800  | H1 del hero y wordmark "VEXA"                    |
| `font-bold`      | 700  | Títulos, botones, badges, nombres (el más usado) |
| `font-semibold`  | 600  | Botón "Contacto" del header                      |
| `font-medium`    | 500  | Enlaces de navegación, labels, roles del equipo  |
| (normal)         | 400  | Párrafos                                         |

## Escala tipográfica

Tamaños por defecto de Tailwind (1rem = 16 px). Los títulos crecen en `md` (≥ 768 px).

| Estilo                       | Clases                                                           | Móvil → Escritorio |
| ---------------------------- | ---------------------------------------------------------------- | ------------------ |
| **H1 hero**                  | `font-display text-3xl md:text-5xl font-extrabold leading-tight` | 30 → 48 px         |
| **H1 páginas** (políticas)   | `text-3xl md:text-5xl font-bold`                                 | 30 → 48 px         |
| **H2 sección principal**     | `font-display text-4xl md:text-5xl font-bold`                    | 36 → 48 px         |
| **H2 sección secundaria**    | `font-display text-3xl md:text-4xl font-bold`                    | 30 → 36 px         |
| **H2 proyecto**              | `text-4xl md:text-5xl font-display font-bold`                    | 36 → 48 px         |
| **H3 tarjeta / servicio**    | `font-display text-2xl font-bold`                                | 24 px              |
| **H3 políticas**             | `text-xl font-bold`                                              | 20 px              |
| **H4 nombre de equipo**      | `font-bold text-lg`                                              | 18 px              |
| **H4 bloque de proyecto**    | `font-display text-base`                                         | 16 px              |
| **H5 característica**        | `font-bold text-sm`                                              | 14 px              |
| **Párrafo destacado (hero)** | `text-lg md:text-xl leading-relaxed text-slate-400`              | 18 → 20 px         |
| **Párrafo de sección**       | `text-lg leading-relaxed text-slate-400`                         | 18 px              |
| **Párrafo estándar**         | `leading-relaxed text-slate-400` / `text-slate-300`              | 16 px              |
| **Texto pequeño**            | `text-sm` (14 px) · `text-xs` (12 px)                            | —                  |
| **Micro-etiqueta**           | `text-[10px] font-bold uppercase tracking-wider`                 | 10 px              |

## Espaciado de letras e interlineado

| Clase             | Uso                                                              |
| ----------------- | ---------------------------------------------------------------- |
| `tracking-tight`  | Wordmark "VEXA"                                                  |
| `tracking-wide`   | Títulos de índices laterales, nombres en tarjetas del portafolio |
| `tracking-wider`  | Botones "Ver Proyecto", micro-etiquetas                          |
| `tracking-widest` | Badges en mayúsculas, footer inferior, categorías del stack      |
| `leading-tight`   | Títulos grandes (H1, H2 con salto de línea)                      |
| `leading-relaxed` | Todos los párrafos descriptivos (el más usado)                   |

## Estilos especiales

- **Mayúsculas:** los badges, etiquetas de tecnología, botones de tarjeta y el pie del footer usan `uppercase` + `tracking-wider`/`tracking-widest` + `font-bold`.
- **Texto con degradado:** clase `.text-gradient` en [`src/styles/index.css`](../src/styles/index.css) (blanco → `#548D7B`). Disponible aunque actualmente no se usa.
- **Palabra animada del hero:** `<span className="text-primary">` controlado por Typed.js.
- **Contenido largo (proyectos y políticas):** usa el plugin `@tailwindcss/typography` con `prose prose-invert`, títulos en blanco (`prose-headings:text-white`) y enlaces en `primary` (`prose-a:text-primary`). Dentro de `prose`, los bloques con diseño propio llevan `not-prose`.

## Ejemplo

```tsx
<h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
  Nuestros<br /> <span className="text-primary">Servicios Estrella</span>
</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
  Descubre cómo podemos potenciar tu negocio…
</p>
```
