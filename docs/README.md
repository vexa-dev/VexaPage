# Documentación de VexaPage

Guía de referencia del sitio **vexa.space**: sistema de diseño (marca, colores, tipografía, componentes) y documentación técnica (arquitectura, contenido y despliegue).

> Regla general: **el código es la fuente de verdad**. Si cambias un token de diseño en
> [`tailwind.config.ts`](../tailwind.config.ts) o [`src/styles/index.css`](../src/styles/index.css),
> actualiza también el documento correspondiente.

## Sistema de diseño

| Documento                                                             | Contenido                                                             |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [01 · Marca y logo](01-marca-y-logo.md)                               | Logotipos, usos correctos, nombre, eslogan y tono de voz              |
| [02 · Colores](02-colores.md)                                         | Paleta de marca, neutros, opacidades, acentos por proyecto, contraste |
| [03 · Tipografía](03-tipografia.md)                                   | Fuentes, pesos, escala tipográfica y estilos de texto                 |
| [04 · Iconografía](04-iconografia.md)                                 | Material Symbols, Devicon e iconos de redes sociales                  |
| [05 · Layout y espaciado](05-layout-y-espaciado.md)                   | Contenedores, grillas, breakpoints, radios, sombras y capas           |
| [06 · Componentes](06-componentes.md)                                 | Botones, badges, tarjetas, formularios, modales y más                 |
| [07 · Animaciones e interacciones](07-animaciones-e-interacciones.md) | Keyframes, transiciones y comportamientos con JavaScript              |

## Documentación técnica

| Documento                                         | Contenido                                                    |
| ------------------------------------------------- | ------------------------------------------------------------ |
| [08 · Arquitectura](08-arquitectura.md)           | Stack, estructura de carpetas, rutas, hooks y convenciones   |
| [09 · Guía de contenido](09-guia-de-contenido.md) | Cómo editar textos, proyectos, equipo, servicios y políticas |
| [10 · Despliegue](10-despliegue.md)               | Build, GitHub Pages, dominio, Analytics y formulario         |

## Resumen rápido

- **Color de marca:** `primary` `#548D7B` sobre fondo `background-dark` `#0A0A0A`.
- **Fuentes:** _Plus Jakarta Sans_ (títulos, `font-display`) e _Inter_ (texto, `font-sans`).
- **Estética:** modo oscuro, _glassmorphism_ (fondos translúcidos con desenfoque), bordes blancos al 5–10 % y brillos verdes.
- **Stack:** React 19 + TypeScript + Vite + Tailwind CSS v3 + React Router.
