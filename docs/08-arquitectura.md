# 08 · Arquitectura

## Stack

| Capa      | Tecnología                                                           |
| --------- | -------------------------------------------------------------------- |
| UI        | React 19 + TypeScript (modo `strict`)                                |
| Build     | Vite                                                                 |
| Rutas     | React Router (`BrowserRouter`)                                       |
| Estilos   | Tailwind CSS v3 + plugins `forms`, `typography`, `container-queries` |
| Animación | Typed.js + CSS                                                       |
| Formato   | Prettier (`npm run format`)                                          |
| Hosting   | GitHub Pages (rama `gh-pages`)                                       |

## Estructura de carpetas

```
VexaPage/
├── .github/workflows/deploy.yml   # CI: build y publicación en GitHub Pages
├── docs/                          # Esta documentación
├── public/                        # Se copia tal cual a dist/
│   ├── CNAME                      # Dominio personalizado (vexa.space)
│   └── img/                       # Logos y fotos del equipo
├── src/
│   ├── main.tsx                   # Punto de entrada (monta <App/>, protección de contenido)
│   ├── App.tsx                    # Definición de rutas
│   ├── components/                # Componentes compartidos entre páginas
│   │   ├── icons/                 #   SocialIcon + paths SVG
│   │   └── layout/                #   Layout, Header, Footer, SectionLink, WhatsAppButton
│   ├── data/                      # Contenido y configuración (sin JSX)
│   │   ├── site.ts                #   Email, WhatsApp, Formspree, títulos de página
│   │   ├── navigation.ts          #   Menú del header y enlaces del footer
│   │   ├── portfolio.ts           #   Tarjetas del carrusel
│   │   ├── team.ts                #   Miembros del equipo
│   │   ├── projects.ts            #   Índice lateral de /proyectos
│   │   └── policies.ts            #   Índice lateral de /politicas
│   ├── hooks/                     # Lógica reutilizable (scroll, analytics, título)
│   ├── pages/                     # Una carpeta por ruta
│   │   ├── Home/
│   │   │   ├── HomePage.tsx
│   │   │   ├── sections/          #   Hero, About, Services, Portfolio, Team, Contact
│   │   │   └── components/        #   PortfolioCard, TeamCard, SuccessModal
│   │   ├── Projects/
│   │   │   ├── ProjectsPage.tsx
│   │   │   ├── ProjectsSidebar.tsx
│   │   │   └── sections/          #   Un componente por proyecto (IdeaSac, VexaTask, …)
│   │   └── Policies/
│   │       ├── PoliciesPage.tsx
│   │       ├── PoliciesSidebar.tsx
│   │       └── PoliciesContent.tsx #  Texto legal
│   ├── styles/index.css           # Directivas de Tailwind + estilos globales
│   ├── types/index.ts             # Tipos compartidos
│   └── utils/smoothScroll.ts      # Scroll animado
├── index.html                     # HTML base: fuentes, Google Analytics, favicon
├── tailwind.config.ts             # Tokens de diseño
├── vite.config.ts                 # Alias @/ y generación de 404.html
└── tsconfig*.json                 # Configuración de TypeScript
```

### Criterios de organización

- **`pages/<Página>/sections/`**: bloques grandes que componen una página, en el orden en que aparecen.
- **`pages/<Página>/components/`**: piezas usadas solo por esa página (tarjetas, modales).
- **`components/`**: solo lo que se comparte entre varias páginas.
- **`data/`**: contenido editable sin tocar JSX. Todo está tipado con las interfaces de `types/`.
- **`hooks/`**: comportamiento sin interfaz (scroll, analytics). Cada hook en su propio archivo.

## Rutas

Definidas en [`src/App.tsx`](../src/App.tsx):

| URL                                                 | Componente                                         | Título de pestaña              |
| --------------------------------------------------- | -------------------------------------------------- | ------------------------------ |
| `/`                                                 | `HomePage`                                         | VEXA                           |
| `/proyectos`                                        | `ProjectsPage`                                     | VEXA - Proyectos Destacados    |
| `/politicas`                                        | `PoliciesPage`                                     | VEXA - Políticas de Privacidad |
| `/index.html`, `/proyectos.html`, `/politicas.html` | Redirección a la ruta nueva (conserva el `#ancla`) | —                              |
| Cualquier otra                                      | Redirección a `/`                                  | —                              |

Todas las páginas comparten [`Layout`](../src/components/layout/Layout.tsx): header, footer, botón de WhatsApp (excepto en `/proyectos`) y los hooks globales de scroll y analytics.

## Hooks

| Hook               | Responsabilidad                                                       |
| ------------------ | --------------------------------------------------------------------- |
| `useAnchorLinks`   | Intercepta clics en `href="#…"` y hace scroll suave                   |
| `useHashScroll`    | Al cambiar de ruta, va al `#ancla` de la URL o al inicio de la página |
| `useScrollSpy`     | Devuelve el id de la sección visible (modos `range` y `passed`)       |
| `useHeaderScroll`  | Indica si la página se desplazó más de 20 px                          |
| `usePageView`      | Envía `page_view` a Google Analytics en cada cambio de ruta           |
| `useDocumentTitle` | Cambia el título de la pestaña                                        |

## Enlaces internos

- **Secciones de la home:** usa [`SectionLink`](../src/components/layout/SectionLink.tsx) con `to="contacto"`. En la home genera `<a href="#contacto">` (scroll suave) y en otras páginas `<Link to="/#contacto">`.
- **Otras páginas:** usa `<Link to="/proyectos#proyecto-urba">` de React Router (nunca `<a href>` a rutas internas, porque recargaría la página).
- **Anclas dentro de la misma página:** `<a href="#seccion">`.

## Convenciones de código

- Imports con alias **`@/`** para salir de la carpeta actual (`@/data/site`, `@/hooks/useScrollSpy`); rutas relativas (`./`, `../components/`) solo dentro de la misma página.
- Componentes con nombre en `PascalCase` y exportación nombrada (`export function Hero()`).
- Clases de Tailwind escritas completas: nunca construir nombres dinámicos como `` `bg-${color}-500` `` (Tailwind no los detectaría). Si varían, guarda la clase completa en `data/`.
- Comentarios y textos en español.
- Ejecuta `npm run format` antes de hacer commit.
