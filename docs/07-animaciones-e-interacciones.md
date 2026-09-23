# 07 · Animaciones e interacciones

## Animaciones de Tailwind personalizadas

Definidas en [`tailwind.config.ts`](../tailwind.config.ts) (`theme.extend.animation` y `keyframes`):

| Clase                   | Keyframes        | Duración / curva             | Efecto                                             | Uso               |
| ----------------------- | ---------------- | ---------------------------- | -------------------------------------------------- | ----------------- |
| `animate-shimmer`       | `shimmer`        | 2.5 s, infinita, ease-in-out | Desplaza un brillo de `-200%` a `400%` en X        | Tarjeta "24/7"    |
| `animate-pulse-glow`    | `pulseGlow`      | 2.5 s, infinita              | Escala 1 → 1.03 con halo verde (`rgba(34,197,94)`) | Badge "Gratuito"  |
| `animate-pulse-glow-lg` | `pulseGlowLarge` | 2 s, infinita                | Escala 1 → 1.15 con halo verde WhatsApp            | Botón de WhatsApp |
| `animate-fadeIn`        | `fadeIn`         | 0.5 s                        | Opacidad 0 → 1                                     | Disponible        |

Animaciones nativas de Tailwind usadas: `animate-ping` (punto del badge), `animate-pulse` (mockups de servicios), `animate-spin` (icono de carga del formulario).

## Transiciones (hover)

| Efecto                   | Clases                                                             |
| ------------------------ | ------------------------------------------------------------------ |
| Elevación de tarjeta     | `group-hover:-translate-y-2 transition-all duration-500`           |
| Zoom de imagen           | `hover:scale-105 transition-transform duration-700`                |
| Foto de equipo a color   | `grayscale group-hover:grayscale-0 transition-all duration-500`    |
| Overlay del portafolio   | `translate-y-full group-hover:translate-y-0 duration-500 ease-out` |
| Flecha "Regresar"        | `group-hover:-translate-x-1 transition-transform`                  |
| Rotación del desplegable | `group-open:rotate-180 transition-transform`                       |

Regla global: todos los `a` y `button` tienen `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`.

## Interacciones con JavaScript

| Comportamiento                   | Implementación                                                                                         | Detalles                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Texto que se escribe solo**    | [`Hero.tsx`](../src/pages/Home/sections/Hero.tsx) con Typed.js                                         | `typeSpeed: 60`, `backSpeed: 40`, `backDelay: 2000`, en bucle                                                |
| **Header al hacer scroll**       | [`useHeaderScroll`](../src/hooks/useHeaderScroll.ts)                                                   | Añade `.header-scrolled` cuando `scrollY > 20`                                                               |
| **Scroll suave a secciones**     | [`useAnchorLinks`](../src/hooks/useAnchorLinks.ts) + [`smoothScroll.ts`](../src/utils/smoothScroll.ts) | Easing cúbico de 800 ms, compensa 80 px del header; no cambia la URL                                         |
| **Anclas entre páginas**         | [`useHashScroll`](../src/hooks/useHashScroll.ts)                                                       | `/proyectos#proyecto-urba` salta a la sección y se re-alinea mientras cargan imágenes                        |
| **Resaltado de sección activa**  | [`useScrollSpy`](../src/hooks/useScrollSpy.ts)                                                         | Header (offset 120 px), índice de proyectos (200 px) y de políticas (200 px)                                 |
| **Línea de tiempo de servicios** | [`Services.tsx`](../src/pages/Home/sections/Services.tsx) con `IntersectionObserver`                   | Cada paso aparece al entrar en pantalla (`.step-active`) y la línea verde crece hasta el último paso visible |
| **Carrusel automático**          | [`Portfolio.tsx`](../src/pages/Home/sections/Portfolio.tsx)                                            | 1 px por frame, ida y vuelta; se pausa con el cursor encima o al tocar (reanuda 1 s después)                 |
| **Modal de éxito**               | [`Contact.tsx`](../src/pages/Home/sections/Contact.tsx)                                                | Se abre tras enviar el formulario correctamente                                                              |

### Pasos de servicios (`.step-active`)

Cada paso empieza con `opacity-0 translate-y-8`. Al activarse, el CSS de `index.css` los muestra:

```css
.step-active > div {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.step-active .process-icon {
  color: #548d7b;
  border-color: rgba(84, 141, 123, 0.4);
  box-shadow: 0 0 20px rgba(84, 141, 123, 0.5);
}
```

Los retardos escalonados (`delay-100`, `delay-[200ms]`) hacen que texto y mockup entren uno tras otro.

## Protección de contenido

Igual que el sitio original, en [`src/main.tsx`](../src/main.tsx) se bloquean el menú contextual (clic derecho), arrastrar y soltar, y el `<body>` tiene `select-none` (no se puede seleccionar texto).

## Buenas prácticas

- Mantén las duraciones en el rango usado (300–800 ms para transiciones, 2–2.5 s para bucles).
- Las animaciones infinitas deben ser sutiles y reservarse para llamadas a la acción.
- Si agregas animaciones nuevas, regístralas en `tailwind.config.ts` en lugar de escribir CSS suelto.
