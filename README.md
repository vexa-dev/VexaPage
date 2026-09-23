# VEXA

> Innovación Digital de Élite en Software a tu Medida.

Landing page oficial de VEXA. Diseñada para presentar nuestros servicios, portafolio y talento técnico con una estética premium, moderna y orientada a la conversión.

## ✨ Características Destacadas

- **Diseño UI/UX Premium:** Interfaz minimalista con estética de "glassmorphism" y modo oscuro optimizado.
- **Totalmente Responsiva:** Experiencia fluida adaptada a cualquier dispositivo (Móvil, Tablet, Escritorio).
- **Portafolio Interactivo:** Carrusel de proyectos con auto-scroll y página de casos de estudio detallados.
- **Formulario Funcional:** Sistema de contacto directo e integrado sin necesidad de backend local.
- **Rendimiento Óptimo:** SPA compilada y minificada con Vite.

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript
- **Build:** Vite
- **Rutas:** React Router (`/`, `/proyectos`, `/politicas`)
- **Estilos:** Tailwind CSS (v3) con plugins forms, typography y container-queries
- **Tipografía & Iconos:** Google Fonts (Inter, Plus Jakarta Sans), Material Symbols, Devicon
- **Animaciones:** Typed.js y transiciones nativas CSS

## ⚙️ Desarrollo Local

Requisitos: Node.js 20.19+ (recomendado 22).

```bash
git clone https://github.com/vexa-dev/VexaPage.git
cd VexaPage
npm install
npm run dev
```

| Comando             | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo en `http://localhost:5173` |
| `npm run build`     | Verifica tipos y genera el sitio en `dist/`       |
| `npm run preview`   | Sirve localmente el build de producción           |
| `npm run typecheck` | Solo verificación de tipos con TypeScript         |
| `npm run format`    | Formatea el código con Prettier                   |

## 📁 Estructura

```
public/              Archivos estáticos (logos, fotos del equipo, CNAME)
src/
  components/        Layout (Header, Footer, WhatsApp) e iconos
  data/              Contenido tipado: navegación, portafolio, equipo, proyectos, políticas
  hooks/             Scroll suave, scroll-spy, anclas entre páginas, Analytics
  pages/             Home (secciones), Proyectos (un componente por proyecto) y Políticas
  styles/            Estilos globales y directivas de Tailwind
  types/             Tipos compartidos
tailwind.config.ts   Colores, fuentes y animaciones de la marca
```

## 🚀 Despliegue

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`, que compila el sitio y publica `dist/` en la rama `gh-pages` (GitHub Pages, dominio `vexa.space`). El build genera un `404.html` para que las rutas `/proyectos` y `/politicas` funcionen al entrar directamente o al recargar, y las URLs antiguas (`proyectos.html`, `politicas.html`) redirigen a las nuevas.

## 👥 Nuestro Equipo

- **Robert Vasquez** — CEO | Ing. de Software
- **José Gonzales** — Frontend Developer | Ing. de Sistemas
- **Jhony Rivera** — Backend Architect | Ing. de Sistemas
- **Diego Choque** — DevOps Engineer | Ing. de Software

## 📧 Contacto

- **Email Corporativo:** vexa.corp@outlook.com
- **WhatsApp:** [Escríbenos directamente](https://wa.link/5ifr33)

---

_© 2025 VEXA Software Agency. Todos los derechos reservados._
