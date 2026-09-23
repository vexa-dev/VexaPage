# 04 · Iconografía

El sitio combina tres fuentes de iconos.

## 1. Material Symbols Outlined (iconos de interfaz)

- Cargados desde Google Fonts en [`index.html`](../index.html).
- Configuración global en [`src/styles/index.css`](../src/styles/index.css):

  ```css
  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
  ```

  Es decir: **contorno (sin relleno), peso 400**.

- Uso: se escribe el nombre del icono como texto.

  ```tsx
  <span className="material-symbols-outlined text-primary">verified</span>
  ```

- Tamaño con clases de texto: `text-sm` (botones), `text-2xl` (línea de tiempo), `text-3xl` (tarjetas), `text-8xl` (fondo de tarjetas del portafolio).
- Color: normalmente `text-primary`; sobre fondos de tarjeta `text-white/20` o `text-white/30` como decoración.
- Catálogo: <https://fonts.google.com/icons?icon.style=Outlined>

### Iconos en uso

| Contexto                                   | Iconos                                                                                                               |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Navegación y acciones                      | `menu`, `arrow_back`, `expand_more`, `send`, `sync` (cargando), `check_circle`, `link`, `menu_book`                  |
| Quiénes somos                              | `verified`, `speed`, `support_agent`                                                                                 |
| Servicios                                  | `lightbulb`, `web`, `smartphone`, `inventory`, `groups`, `search`, `trending_up`, `sell`, `person`                   |
| Portafolio                                 | `lightbulb`, `task_alt`, `shopping_bag`, `directions_car`, `menu_book`, `icecream`, `restaurant`                     |
| Proyectos (característica, reto, solución) | `warning`, `auto_awesome`, `query_stats`, `security`, `monitoring`, `receipt_long`, `database`, `devices`, `tune`, … |
| Contacto                                   | `email`                                                                                                              |

## 2. Devicon (logos de tecnologías)

- Hoja de estilos desde jsDelivr en [`index.html`](../index.html).
- Solo se usa en la página **/proyectos**, en el bloque "Stack Tecnológico".
- Clase `tech-icon` (definida en `index.css`): el icono aparece **en blanco y semitransparente** y recupera su color original al pasar el cursor.

  ```tsx
  <i className="devicon-react-original colored tech-icon" title="React" />
  ```

- Tamaño: el contenedor usa `text-3xl`.
- Siempre incluye `title` con el nombre de la tecnología (tooltip y accesibilidad).
- Catálogo: <https://devicon.dev>

Iconos usados actualmente: bootstrap, css3, eclipse, express, figma, git, github, html5, java, javascript, json, mysql, nodejs, postman, react, spring, vscode.

## 3. SVG de redes sociales

- Paths en [`src/components/icons/socialIconPaths.ts`](../src/components/icons/socialIconPaths.ts) (viewBox `0 0 24 24`).
- Componente [`SocialIcon`](../src/components/icons/SocialIcon.tsx): recibe `network` (`github`, `linkedin`, `instagram`, `website`, `link`). Si la red no tiene SVG, muestra el Material Symbol `link`.
- Se pintan con `fill-current`, así que heredan el color del texto (`text-white`).
- El icono de WhatsApp del botón flotante está embebido en [`WhatsAppButton.tsx`](../src/components/layout/WhatsAppButton.tsx) (viewBox `0 0 16 16`).

## Contenedores de icono

| Patrón                  | Clases                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| Cuadrado con fondo      | `w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary`          |
| Círculo con fondo       | `w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary`        |
| Botón social (glass)    | `w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary` |
| Nodo de línea de tiempo | `w-16 h-16 rounded-full glass border-4 border-[#0a0a0a] … process-icon`                     |
