# 09 · Guía de contenido

Cómo actualizar los textos y datos más habituales. Después de cualquier cambio, revisa en local con `npm run dev` y confirma que `npm run build` no da errores.

## Datos de contacto e integraciones

Archivo: [`src/data/site.ts`](../src/data/site.ts)

```ts
export const SITE = {
  email: "vexa.corp@outlook.com", // se muestra en la sección Contacto
  whatsappUrl: "https://wa.link/5ifr33", // botón flotante
  formEndpoint: "https://formspree.io/f/mgolnlzd", // destino del formulario
  titles: { home: "VEXA", projects: "…", policies: "…" },
};
```

> El correo que aparece dentro del texto legal está escrito directamente en
> [`PoliciesContent.tsx`](../src/pages/Policies/PoliciesContent.tsx); actualízalo también ahí si cambia.

## Menú y footer

Archivo: [`src/data/navigation.ts`](../src/data/navigation.ts)

- `NAV_ITEMS`: enlaces del header. `id` debe coincidir con el `id` de la sección en la home.
- `HOME_SECTION_IDS`: secciones que observa el resaltado del menú. Si agregas una sección a la home, añade su `id`.
- `FOOTER_QUICK_LINKS` y `FOOTER_SERVICES`: columnas del footer.

## Miembros del equipo

Archivo: [`src/data/team.ts`](../src/data/team.ts)

```ts
{
  name: "Nombre Apellido",
  role: "Rol | Carrera",
  bio: "Descripción corta de una o dos líneas.",
  photo: { src: "/img/perfil3.png", alt: "Nombre Apellido" }, // opcional
  socials: [
    { network: "github", href: "https://github.com/usuario" },
    { network: "linkedin", href: "https://www.linkedin.com/in/usuario" },
  ],
}
```

- Sin `photo` se muestra un avatar genérico con el icono `person`.
- Redes disponibles: `github`, `linkedin`, `instagram`, `website`, `link`.
- **Fotos:** cuadradas (se recortan con `aspect-square`), guardadas en `public/img/`. Se recomienda WebP de unos 800 × 800 px y menos de 200 KB (las actuales `perfil1.png` y `perfil2.png` pesan 930 KB y 340 KB).

## Tarjetas del portafolio (home)

Archivo: [`src/data/portfolio.ts`](../src/data/portfolio.ts)

```ts
{
  title: "Nombre del proyecto",
  description: "Frase corta que explica el valor del proyecto.",
  icon: "shopping_bag",              // Material Symbol
  tags: ["React", "Node.js"],        // máx. 2–3 para que quepan
  anchor: "proyecto-nuevo",          // id de la sección en /proyectos
  theme: {
    gradient: "from-cyan-500/20",
    border: "border-cyan-500/30",
    button: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500",
  },
  overlay: "bg-black/95",            // opcional; por defecto "bg-black/40 backdrop-blur-md"
}
```

Escribe las clases de color **completas** (ver [02 · Colores](02-colores.md#acentos-por-proyecto-portafolio)).

## Agregar un proyecto a /proyectos

1. Crea `src/pages/Projects/sections/NuevoProyecto.tsx`. Lo más rápido es copiar un proyecto existente (p. ej. `Urbanwear.tsx`) y cambiar textos, imágenes y tecnologías.
2. La etiqueta raíz debe ser `<section id="proyecto-nuevo" className="scroll-mt-32">`.
3. Añádelo en [`ProjectsPage.tsx`](../src/pages/Projects/ProjectsPage.tsx) dentro de `<div className="space-y-32">`.
4. Añade `{ id: "proyecto-nuevo", label: "Nuevo Proyecto" }` en [`src/data/projects.ts`](../src/data/projects.ts), **en el mismo orden** que en la página.
5. (Opcional) Crea su tarjeta en `portfolio.ts` con `anchor: "proyecto-nuevo"`.

Estructura de cada proyecto: título + etiquetas → descripción → "El Reto" / "La Solución" → galería bento → columna lateral con "Stack Tecnológico" (Devicon) y características clave.

> Las imágenes de los proyectos son **placeholders** de `placehold.co`. Para usar capturas reales,
> guárdalas en `public/img/proyectos/` y cambia los `src` (p. ej. `/img/proyectos/urbawear-1.webp`).

## Servicios (home)

Archivo: [`src/pages/Home/sections/Services.tsx`](../src/pages/Home/sections/Services.tsx)

Cada paso es un bloque `process-step` con mockup visual, icono de línea de tiempo, título, descripción y chips. Los pasos alternan el lado del texto (izquierda/derecha). Si agregas o quitas un paso, actualiza `STEP_COUNT` y los índices de `setStepRef(n)`, `setIconRef(n)` y `activeSteps[n]`.

## Textos de las secciones

Los textos del hero, "Quiénes somos", encabezados y contacto están directamente en los archivos de [`src/pages/Home/sections/`](../src/pages/Home/sections/). Las palabras animadas del hero están en la constante `TYPED_WORDS` de `Hero.tsx`.

## Políticas y términos

- Texto: [`src/pages/Policies/PoliciesContent.tsx`](../src/pages/Policies/PoliciesContent.tsx). Cada apartado es un `<h3 id="section-N" className="scroll-mt-24 mt-12 text-xl font-bold">`.
- Índice lateral: [`src/data/policies.ts`](../src/data/policies.ts). Los `id` deben coincidir con los del texto.
- El footer enlaza a `/politicas` (privacidad) y a `/politicas#section-9` (términos). Si cambia la numeración, actualiza [`Footer.tsx`](../src/components/layout/Footer.tsx).
- Actualiza la fecha de "Última actualización" al modificar el contenido.

## Imágenes y logos

- Todo archivo en `public/` se sirve desde la raíz: `public/img/logo.svg` → `/img/logo.svg`.
- Nombres en minúsculas, sin espacios ni tildes (`kebab-case`).
- Formatos recomendados: SVG para logos, WebP para fotos.
