# 05 · Layout y espaciado

## Breakpoints

Se usan los breakpoints por defecto de Tailwind (mobile-first):

| Prefijo | Ancho mínimo | Cambios principales en el sitio                                                           |
| ------- | ------------ | ----------------------------------------------------------------------------------------- |
| (base)  | 0            | Una columna, menú del header oculto                                                       |
| `sm:`   | 640 px       | Botones del hero en fila, grilla de equipo a 2 columnas                                   |
| `md:`   | 768 px       | Menú de navegación visible, títulos más grandes, línea de tiempo de servicios centrada    |
| `lg:`   | 1024 px      | Dos columnas en "Quiénes somos"/contacto, índices laterales visibles, equipo a 4 columnas |
| `xl:`   | 1280 px      | Sin cambios específicos                                                                   |

## Contenedores

| Contexto                                  | Clases                                        | Ancho máx.   |
| ----------------------------------------- | --------------------------------------------- | ------------ |
| Secciones de la home, header y footer     | `max-w-7xl mx-auto px-6`                      | 1280 px      |
| Páginas con índice (proyectos, políticas) | `max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8` | 1400 px      |
| Línea de tiempo de servicios              | `max-w-5xl mx-auto`                           | 1024 px      |
| Textos centrados                          | `max-w-2xl mx-auto` / `max-w-xl mx-auto`      | 672 / 576 px |

## Espaciado vertical

| Elemento                               | Clases                          |
| -------------------------------------- | ------------------------------- |
| Sección estándar                       | `py-24` (96 px arriba y abajo)  |
| Hero                                   | `pt-32 pb-20 lg:pt-48 lg:pb-32` |
| Páginas internas (bajo el header fijo) | `pt-32 pb-24`                   |
| Encabezado de sección → contenido      | `mb-16` / `mb-20`               |
| Separación entre proyectos             | `space-y-32`                    |
| Footer                                 | `pt-16 pb-8`                    |

Alternancia de fondos en la home: `bg-background-dark` → `bg-accent/30` → … (Quiénes somos y Portafolio usan `bg-accent/30`).

## Grillas

| Sección                     | Grilla                                                                    |
| --------------------------- | ------------------------------------------------------------------------- |
| Quiénes somos               | `grid lg:grid-cols-2 gap-16 items-center`                                 |
| Equipo                      | `grid sm:grid-cols-2 lg:grid-cols-4 gap-8`                                |
| Contacto                    | `grid lg:grid-cols-2 gap-16 items-start`                                  |
| Footer                      | `grid md:grid-cols-4 gap-12`                                              |
| Proyecto (contenido / meta) | `grid grid-cols-1 lg:grid-cols-3 gap-8` (2 + 1 columnas)                  |
| Bento de imágenes           | `grid grid-cols-1 md:grid-cols-4 gap-4` con `md:col-span-2 md:row-span-2` |
| Carrusel portafolio         | `flex gap-6 overflow-x-auto` con tarjetas de `w-[280px] h-[400px]`        |

Espaciados (`gap`) más comunes: `gap-2` (chips), `gap-4` (tarjetas pequeñas), `gap-6`/`gap-8` (tarjetas), `gap-12`/`gap-16` (columnas).

## Radios de borde

⚠️ Los radios `rounded` y `rounded-2xl` están **personalizados** en `tailwind.config.ts`:

| Clase          | Valor                                        | Uso                                       |
| -------------- | -------------------------------------------- | ----------------------------------------- |
| `rounded`      | **0.75 rem** (12 px, por defecto sería 4 px) | Chips del portafolio                      |
| `rounded-lg`   | 0.5 rem (8 px)                               | Iconos cuadrados, enlaces del índice      |
| `rounded-xl`   | 0.75 rem (12 px)                             | Botones, inputs, imágenes, cajas de info  |
| `rounded-2xl`  | **1.5 rem** (24 px, por defecto sería 16 px) | Tarjetas, modales, formulario             |
| `rounded-full` | circular                                     | Logo, badges, botón de contacto, avatares |

## Sombras

| Clase                                    | Uso                                                 |
| ---------------------------------------- | --------------------------------------------------- |
| `shadow-xl` / `shadow-2xl` / `shadow-lg` | Formulario, imágenes                                |
| `shadow-[0_15px_30px_rgba(0,0,0,0.5)]`   | Tarjetas del portafolio                             |
| `shadow-[0_0_30px_rgba(0,0,0,0.5)]`      | Logo del hero                                       |
| Sombras verdes (`rgba(84,141,123,…)`)    | Ver [02 · Colores](02-colores.md#sombras-con-color) |

## Capas (z-index)

| Valor           | Elemento                                               |
| --------------- | ------------------------------------------------------ |
| `-z-10`         | Luces ambientales de fondo                             |
| `z-10` / `z-20` | Elementos sobre imágenes, iconos de la línea de tiempo |
| `z-50`          | Header fijo                                            |
| `z-[100]`       | Botón de WhatsApp y modal de mensaje enviado           |

## Header fijo y anclas

- El header mide `h-16` (64 px) y es `fixed`.
- El `<html>` tiene `scroll-pt-16` (64 px de _scroll padding_).
- Las secciones de proyectos usan `scroll-mt-32` y los títulos de políticas `scroll-mt-24`, para que al saltar a un ancla el título no quede tapado.
- El scroll suave de la home compensa 80 px (ver [07 · Animaciones](07-animaciones-e-interacciones.md)).

## Luz ambiental

Patrón decorativo repetido al inicio del hero y de las páginas internas:

```tsx
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />
```
