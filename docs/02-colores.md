# 02 · Colores

Todos los colores de marca están definidos en [`tailwind.config.ts`](../tailwind.config.ts) (`theme.extend.colors`) y se usan como clases de Tailwind: `bg-primary`, `text-primary`, `border-primary/30`, etc.

## Paleta de marca

| Token Tailwind     | Hex       | Muestra                                                  | Uso                                                        |
| ------------------ | --------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| `primary`          | `#548D7B` | ![#548D7B](https://placehold.co/24x24/548D7B/548D7B.png) | Color principal: botones, enlaces activos, iconos, acentos |
| `background-dark`  | `#0A0A0A` | ![#0A0A0A](https://placehold.co/24x24/0A0A0A/0A0A0A.png) | Fondo general de la página (`<body>`)                      |
| `accent`           | `#1A1A1A` | ![#1A1A1A](https://placehold.co/24x24/1A1A1A/1A1A1A.png) | Footer (`bg-accent`) y secciones alternas (`bg-accent/30`) |
| `background-light` | `#F9FAFB` | ![#F9FAFB](https://placehold.co/24x24/F9FAFB/F9FAFB.png) | Reservado (el sitio no tiene modo claro actualmente)       |

## Colores puntuales (valores arbitrarios)

Se usan como clases arbitrarias (`bg-[#...]`) en lugares concretos. Si se reutilizan en más sitios, conviene convertirlos en tokens.

| Hex                   | Dónde se usa                                           |
| --------------------- | ------------------------------------------------------ |
| `#3E6B5D`             | Tarjeta flotante "24/7 Soporte Técnico" (verde oscuro) |
| `#111111`             | Fondo del modal de "¡Mensaje Enviado!"                 |
| `#0A0A0A`             | Borde de los iconos de la línea de tiempo de servicios |
| `#25D366`             | Botón flotante de WhatsApp (color oficial de WhatsApp) |
| `#1E293B` / `#475569` | Fondos/texto de las imágenes placeholder de proyectos  |

## Neutros (texto)

Se usa la escala `slate` de Tailwind sobre fondo oscuro:

| Clase            | Hex       | Uso                                              |
| ---------------- | --------- | ------------------------------------------------ |
| `text-white`     | `#FFFFFF` | Títulos y textos destacados                      |
| `text-slate-100` | `#F1F5F9` | Color base del `<body>`                          |
| `text-slate-300` | `#CBD5E1` | Párrafos en proyectos/políticas, chips           |
| `text-slate-400` | `#94A3B8` | Párrafos descriptivos, enlaces inactivos         |
| `text-slate-500` | `#64748B` | Textos secundarios, labels de formulario, footer |

## Escala de opacidades (glassmorphism)

La estética se construye con blanco y negro semitransparentes. Estas son las combinaciones más usadas (por frecuencia):

| Clase                                                     | Uso típico                                         |
| --------------------------------------------------------- | -------------------------------------------------- |
| `border-white/10`                                         | Borde estándar de tarjetas, inputs y separadores   |
| `border-white/5`                                          | Bordes sutiles, divisores internos                 |
| `bg-white/5`                                              | Fondo de tarjetas, chips y paneles                 |
| `bg-white/[0.02]` · `bg-white/[0.03]` · `bg-white/[0.05]` | Cajas de información en proyectos (reposo → hover) |
| `bg-white/10` → `bg-white/20`                             | Botón secundario (reposo → hover)                  |
| `bg-black/20` · `bg-black/40`                             | Fondos de inputs y mockups                         |
| `bg-black/80`                                             | Fondo del overlay de modales                       |

Y sus equivalentes con el color de marca:

| Clase                                                           | Uso típico                         |
| --------------------------------------------------------------- | ---------------------------------- |
| `bg-primary/10` · `border-primary/20`                           | Badges e iconos destacados         |
| `bg-primary/20`                                                 | Círculos de icono, brillos difusos |
| `border-primary/30` · `border-primary/40` · `border-primary/50` | Bordes en hover                    |
| `text-primary/80`                                               | Etiquetas ("La Solución")          |
| `from-primary/10 to-transparent`                                | Luz ambiental del hero y cabeceras |

## Acentos por proyecto (portafolio)

Cada tarjeta del carrusel usa una familia de color de Tailwind. Las clases completas están en [`src/data/portfolio.ts`](../src/data/portfolio.ts).

| Proyecto             | Familia  | Degradado            | Botón                                                   |
| -------------------- | -------- | -------------------- | ------------------------------------------------------- |
| IdeaSAC              | `indigo` | `from-indigo-500/20` | `bg-indigo-500/20 text-indigo-400 border-indigo-500/50` |
| Vexa Task            | `blue`   | `from-blue-500/20`   | `bg-blue-500/20 text-blue-400 border-blue-500/50`       |
| UrbaWear             | `amber`  | `from-amber-500/20`  | `bg-amber-500/20 text-amber-400 border-amber-500/50`    |
| Automotriz           | `rose`   | `from-rose-500/20`   | `bg-rose-500/20 text-rose-400 border-rose-500/50`       |
| Biblioteca           | `purple` | `from-purple-500/20` | `bg-purple-500/20 text-purple-400 border-purple-500/50` |
| Heladería Dulce Perú | `pink`   | `from-pink-500/20`   | `bg-pink-500/20 text-pink-400 border-pink-500/50`       |
| Nutricraft           | `green`  | `from-green-500/20`  | `bg-green-500/20 text-green-400 border-green-500/50`    |

Patrón: degradado `-500/20`, borde del overlay `-500/30`, borde del botón `-500/50`, texto `-400` y hover sólido `-500`.

## Colores semánticos

| Uso                            | Clases                                                 |
| ------------------------------ | ------------------------------------------------------ |
| "El Reto" (problema)           | `text-orange-400`, `text-orange-400/80`                |
| "La Solución"                  | `text-primary`, `text-primary/80`                      |
| Badge "Gratuito"               | `bg-green-500/10 border-green-500/20 text-green-400`   |
| Puntos de ventana (mockup web) | `bg-red-500/80`, `bg-yellow-500/80`, `bg-green-500/80` |

## Sombras con color

| Sombra                                   | Uso                                   |
| ---------------------------------------- | ------------------------------------- |
| `shadow-[0_0_20px_rgba(84,141,123,0.4)]` | Hover del botón principal y de iconos |
| `shadow-[0_0_15px_rgba(84,141,123,0.6)]` | Línea de progreso de servicios        |
| `shadow-[0_0_20px_rgba(37,211,102,0.5)]` | Botón de WhatsApp                     |
| `shadow-[0_15px_30px_rgba(0,0,0,0.5)]`   | Tarjetas del portafolio               |

`rgba(84,141,123, …)` es `primary` expresado en RGB.

## Contraste (WCAG 2.1)

Relación de contraste calculada sobre los fondos del sitio:

| Texto                   | Sobre `#0A0A0A` | Sobre `#1A1A1A` | Resultado                                           |
| ----------------------- | --------------- | --------------- | --------------------------------------------------- |
| `white`                 | 19.8 : 1        | 17.4 : 1        | AAA                                                 |
| `slate-300`             | 13.3 : 1        | 11.7 : 1        | AAA                                                 |
| `slate-400`             | 7.7 : 1         | 6.8 : 1         | AAA / AA                                            |
| `primary`               | 5.2 : 1         | 4.5 : 1         | AA                                                  |
| `slate-500`             | 4.2 : 1         | 3.7 : 1         | ⚠️ Solo AA para texto grande (≥ 18 px o 14 px bold) |
| `white` sobre `primary` | 3.8 : 1         |                 | ⚠️ Solo AA para texto grande                        |

Recomendación: usar `slate-500` solo en textos grandes o no esenciales, y preferir `slate-400` para texto pequeño que deba leerse.
