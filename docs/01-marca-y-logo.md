# 01 · Marca y logo

## Nombre

- Se escribe siempre **VEXA**, en mayúsculas.
- Nombre completo en textos legales: **VEXA Software Agency**.
- Dominio: **vexa.space**.

## Logotipo

El isotipo es una **"V" estilizada dentro de un anillo circular**, con el trazo derecho de la V en verde de marca.

| Archivo                                                                   | Fondo del logo                | Uso en el sitio                              |
| ------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------- |
| [`public/img/vexa-fondo-negro.svg`](../public/img/vexa-fondo-negro.svg)   | Transparente, trazos blancos  | Header, hero y footer (sobre fondos oscuros) |
| [`public/img/vexa-fondo-blanco.svg`](../public/img/vexa-fondo-blanco.svg) | Círculo blanco, trazos negros | Favicon (pestaña del navegador)              |

Colores internos del SVG:

| Elemento                 | Versión fondo negro | Versión fondo blanco    |
| ------------------------ | ------------------- | ----------------------- |
| Anillo y trazo izquierdo | `#FFFFFF`           | `#000000` (por defecto) |
| Trazo derecho de la V    | `#498974`           | `#498974`               |
| Fondo                    | transparente        | círculo `#FFFFFF`       |

> **Nota:** el verde del logo (`#498974`) es ligeramente más oscuro que el color `primary`
> de la interfaz (`#548D7B`). Es intencional para el archivo vectorial; en la UI usa siempre `primary`.

### Cómo se muestra

```tsx
{/* Header */}
<img alt="VEXA Logo" className="h-10 w-10 object-contain rounded-full" src="/img/vexa-fondo-negro.svg" />
<span className="font-display font-extrabold text-2xl tracking-tight text-white">VEXA</span>
```

| Ubicación | Tamaño del logo                                                                                | Wordmark al lado                         |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Header    | `h-10 w-10` (40 px)                                                                            | `text-2xl font-extrabold tracking-tight` |
| Footer    | `h-8 w-8` (32 px)                                                                              | `text-xl font-extrabold tracking-tight`  |
| Hero      | `h-48 w-48` → `md:h-72 md:w-72` (192 → 288 px), con sombra `shadow-[0_0_30px_rgba(0,0,0,0.5)]` | —                                        |

### Reglas de uso

- Sobre fondos oscuros usa `vexa-fondo-negro.svg`; sobre fondos claros, `vexa-fondo-blanco.svg`.
- Mantén siempre `object-contain` y `rounded-full` para no recortar el anillo.
- No cambies los colores del SVG, no lo deformes ni le agregues efectos distintos a la sombra del hero.
- Deja al menos un espacio libre equivalente a ¼ del diámetro alrededor del logo.

## Eslogan y mensajes clave

| Uso                          | Texto                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| Badge del hero               | "Innovación Digital de Elite"                                                       |
| Título principal (hero)      | "VEXA: _[palabra animada]_ en Software a tu Medida"                                 |
| Palabras animadas (Typed.js) | Innovación · Evolución · Resultados · Tecnología                                    |
| Descripción del footer       | "Construyendo la próxima generación de productos digitales con precisión y pasión." |

> El README usa "Élite" (con tilde, forma recomendada por la RAE) y el sitio "Elite".
> Conviene unificarlo si se edita el hero.

## Tono de voz

- **Idioma:** español, tuteando al visitante ("Cuéntanos", "Escríbenos", "Te ayudamos").
- **Personalidad:** joven, técnica y segura, sin sonar arrogante ("Talento Joven, Soluciones Robustas").
- **Enfoque:** beneficios concretos para el negocio del cliente (crecimiento, eficiencia, control) antes que la tecnología.
- **Textos legales** (políticas): registro formal, tratando al usuario de "usted".
- Frases cortas en títulos; los párrafos descriptivos pueden ser más largos (2–3 líneas).
