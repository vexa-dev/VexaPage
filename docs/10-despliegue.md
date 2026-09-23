# 10 · Despliegue

## Requisitos locales

- Node.js **20.19+** (recomendado 22, la misma versión que usa CI).
- npm (incluido con Node).

```bash
npm install      # instala dependencias
npm run dev      # servidor local en http://localhost:5173
npm run build    # verifica tipos (tsc) y genera dist/
npm run preview  # sirve dist/ en http://localhost:4173
```

## Flujo de publicación

1. Trabaja en una rama y haz merge a `main`.
2. Cada push a `main` ejecuta [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml):
   1. `npm ci`
   2. `npm run build`
   3. Publica `dist/` en la rama **`gh-pages`** con `peaceiris/actions-gh-pages` (`force_orphan: true`, así que la rama solo contiene el último build).
3. GitHub Pages sirve la rama `gh-pages` en **https://vexa.space**.

También se puede lanzar manualmente desde la pestaña **Actions → Deploy to GitHub Pages → Run workflow**.

> Si el build falla (por ejemplo, por un error de TypeScript), el sitio publicado no cambia.

## Configuración de GitHub Pages

En **Settings → Pages** del repositorio:

- **Source:** Deploy from a branch.
- **Branch:** `gh-pages` / `(root)`.
- **Custom domain:** `vexa.space` (con _Enforce HTTPS_ activado).

El dominio está definido en dos sitios y deben coincidir: [`public/CNAME`](../public/CNAME) y la opción `cname` del workflow.

## Rutas en GitHub Pages (SPA)

GitHub Pages no sabe que `/proyectos` es una ruta de React. Para resolverlo, [`vite.config.ts`](../vite.config.ts) copia `dist/index.html` como `dist/404.html`: cuando alguien entra directo a `vexa.space/proyectos`, GitHub responde con ese `404.html`, que carga la app y React Router muestra la página correcta.

- Las URLs antiguas (`/proyectos.html`, `/politicas.html`) redirigen a las nuevas conservando el `#ancla`.
- Limitación: esas entradas directas responden con código HTTP 404 aunque el usuario vea la página. Para SEO conviene que los enlaces externos apunten a la home o usar el sitemap cuando se agregue.

## Google Analytics

- ID de medición: `G-2GKJSPYJXQ`, configurado en [`index.html`](../index.html) con `send_page_view: false`.
- El hook [`usePageView`](../src/hooks/usePageView.ts) envía un evento `page_view` en cada cambio de ruta (necesario en una SPA, donde no hay recargas).

## Formulario de contacto

- Servicio: [Formspree](https://formspree.io), endpoint en `SITE.formEndpoint` ([`src/data/site.ts`](../src/data/site.ts)).
- Campos enviados: `nombre`, `email`, `servicio`, `mensaje`.
- Los mensajes llegan al correo configurado en la cuenta de Formspree.

## Qué se sube a GitHub y qué no

El [`.gitignore`](../.gitignore) excluye:

| Excluido                           | Motivo                                               |
| ---------------------------------- | ---------------------------------------------------- |
| `node_modules/`                    | Se reinstala con `npm install`                       |
| `dist/`, `.vite/`, `*.tsbuildinfo` | Resultados de build; los genera CI                   |
| `.env`, `.env.*`, `*.local`        | Pueden contener secretos (se permite `.env.example`) |
| `.claude/`                         | Configuración local de asistentes de IA              |
| `.vscode/*`, `.idea/`              | Preferencias personales del editor                   |
| Logs y archivos del sistema        | `*.log`, `.DS_Store`, `Thumbs.db`                    |

El [`.gitattributes`](../.gitattributes) normaliza los finales de línea a LF para evitar diferencias entre Windows y Linux.

## Checklist antes de hacer merge a `main`

- [ ] `npm run build` termina sin errores.
- [ ] `npm run preview`: revisar home, `/proyectos` y `/politicas` en escritorio y móvil.
- [ ] Los enlaces "Ver Proyecto" llevan a la sección correcta.
- [ ] `npm run format` aplicado.
- [ ] Si cambió algo visual (colores, fuentes, componentes), actualizar `docs/`.
