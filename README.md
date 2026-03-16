# 📘 Manual de Usuario — Grupo Dip Landing Page

Bienvenido al manual de referencia del sitio web oficial de **Grupo Dip C.A.**
Este documento está dirigido al cliente y al equipo responsable del mantenimiento del sitio.

---

## 🗺️ Mapa del Sitio

```
grupodip.com/
├── /                   → Página de Inicio (Home)
│   ├── Hero            — Presentación principal y llamada a la acción
│   ├── Estadísticas    — Años de trayectoria, proyectos y toneladas de acero
│   ├── Patrocinadores  — Logos de aliados/clientes
│   ├── Servicios       — Tarjetas de los 6 servicios principales
│   ├── Showcase        — Por qué elegir Grupo Dip
│   └── CTA             — Llamada final a cotizar
│
├── /about              → Nosotros
│   ├── Historia        — Texto de presentación de la empresa
│   ├── Misión y Visión — Pilares fundamentales
│   └── Valores         — 6 valores corporativos
│
├── /contact            → Contacto
│   ├── Datos de contacto — Teléfono, email y dirección
│   └── Formulario      — Nombre, teléfono y mensaje
│
└── /404                → Página no encontrada
```

---

## 🎨 Paleta de Colores

### Colores Principales

| Token | Color | HEX aproximado | Uso |
|---|---|---|---|
| `primary` | 🔵 Azul corporativo | `#3B5BDB` | Botones, links, badges activos |
| `navy` | 🔷 Azul marino | `#0F1C3F` | Fondos oscuros de secciones hero |
| `background` | ⬜ Blanco puro | `#FFFFFF` | Fondo general del sitio |
| `foreground` | ⬛ Negro casi puro | `#111111` | Texto principal |
| `secondary` | 🌫️ Gris muy claro | `#F7F7F7` | Fondos alternativos de sección |
| `muted` | 🌫️ Gris claro | `#F7F7F7` | Fondos de inputs y elementos apagados |
| `muted-foreground` | 🔘 Gris medio | `#737373` | Texto secundario, subtítulos |
| `border` | ➖ Gris borde | `#E8E8E8` | Bordes de tarjetas e inputs |
| `destructive` | 🔴 Rojo error | `#DC2626` | Mensajes de error en formularios |

### Modo Oscuro (Dark Mode)

El sitio incluye soporte completo para **modo oscuro**. Se activa mediante el botón de luna/sol en la barra de navegación.

| Token | Valor en oscuro |
|---|---|
| `background` | Negro casi puro (`#111111`) |
| `foreground` | Blanco casi puro (`#FAFAFA`) |
| `card` | Gris muy oscuro (`#1C1C1C`) |
| `primary` | Se mantiene azul corporativo |

> **Nota:** El color primario azul (`primary`) es el color de marca de Grupo Dip y se mantiene igual en ambos modos.

---

## 🔤 Tipografía

| Aspecto | Valor |
|---|---|
| **Fuente principal** | **Public Sans** (variable) |
| **Pesos disponibles** | 100 (Thin) → 900 (Black) |
| **Estilo** | Normal |
| **Carga** | Local (auto-alojada, no depende de Google Fonts) |
| **Fallback** | `sans-serif` |

### Escala tipográfica recomendada

| Elemento | Uso |
|---|---|
| `font-bold text-4xl md:text-6xl` | Títulos hero principales |
| `font-semibold text-2xl md:text-3xl` | Títulos de sección |
| `font-medium text-lg` | Subtítulos y descripciones |
| `font-normal text-base` | Texto corriente |
| `font-normal text-sm text-muted-foreground` | Texto de apoyo, pie de página |

---

## 📞 Datos de Contacto del Sitio

Estos datos están centralizados en `src/constants.ts` y se usan en todo el sitio:

| Campo | Valor |
|---|---|
| **Empresa** | Grupo Dip C.A. |
| **Correo** | grupodipcaproyectos@gmail.com |
| **WhatsApp** | +58 414-243-8870 |
| **Teléfonos oficina** | +58 212-472-6046 / +58 212-472-7746 / +58 212-472-3109 |
| **Dirección** | Calle 9 con Av. El Parque, Urb. La Paz, El Paraíso, Caracas - Venezuela |
| **Instagram** | [@grupodipcaproyectos](https://instagram.com/grupodipcaproyectos) |
| **Fundación** | 2012 |
| **Proyectos completados** | 150+ |

> 🛠️ Para actualizar cualquiera de estos datos, editar el archivo `src/constants.ts`.

---

## 📄 Páginas y Contenido Editable

### Textos del sitio

Todo el contenido de texto está centralizado en archivos de traducción con soporte para **Español** e **Inglés**:

| Archivo | Idioma |
|---|---|
| `src/locales/es.json` | 🇻🇪 Español (idioma principal) |
| `src/locales/en.json` | 🇺🇸 Inglés |

El botón de cambio de idioma está disponible en la barra de navegación.

### Estructura de textos

```
es.json
├── navbar       → Menú de navegación y botón CTA
├── footer       → Descripción, copyright y enlaces del pie
├── home
│   ├── hero     → Título principal, descripción y botones
│   ├── stats    → Etiquetas de estadísticas
│   ├── services → Tarjetas de servicios (título y descripción)
│   ├── showcase → Sección "¿Por qué elegirnos?"
│   └── cta      → Sección de llamada a la acción final
├── about
│   ├── hero     → Historia de la empresa
│   ├── pillars  → Misión y Visión
│   └── values   → 6 valores corporativos
└── contact      → Etiquetas del formulario y datos de contacto
```

---

## 🖼️ Imágenes y Recursos Visuales

| Archivo | Descripción | Ubicación |
|---|---|---|
| `hero.webp` | Imagen principal del banner | `public/hero.webp` |
| `logo.webp` | Logotipo de la empresa | `public/logo.webp` |
| Showcase (4 img) | Fotos de proyectos realizados | `public/showcase/` |
| About Us | Foto institucional | `public/aboutUs/` |
| Sponsors (5 logos) | Logos de clientes/aliados | `public/sponsors/` |

> **Formato recomendado:** `.webp` para mejor rendimiento web.
> **Resolución recomendada:** Hero → 1920×1080px mínimo. Logos → fondo transparente PNG/WebP.

---

## 🌐 SEO y Indexación

### Meta tags por página

| Página | Título | Descripción |
|---|---|---|
| Inicio `/` | Grupo Dip \| Empresa de Construcción e Ingeniería en Venezuela | Especialistas en metalurgia, obras civiles... |
| Nosotros `/about` | Nosotros \| Grupo Dip C.A. — Empresa de Construcción en Venezuela | Historia de la empresa fundada en 2012... |
| Contacto `/contact` | Contacto \| Grupo Dip C.A. — Cotiza tu Proyecto de Construcción | Contáctanos para cotizar tu proyecto... |

### Sitemap

Disponible en: `https://proyectosgrupodip.com/sitemap.xml`

### Datos estructurados (JSON-LD)

El sitio incluye marcado estructurado para motores de búsqueda:
- 🏢 **Organization** — Información corporativa
- 📍 **LocalBusiness** — Negocio local con dirección y horario
- 🌐 **WebSite** — Información del sitio web

---

## ⚙️ Mantenimiento Técnico

### ¿Cómo actualizar datos de la empresa?

1. Abrir `src/constants.ts`
2. Modificar el valor correspondiente
3. Hacer deploy del sitio

### ¿Cómo actualizar textos?

1. Abrir `src/locales/es.json` (o `en.json` para inglés)
2. Editar el texto deseado
3. Hacer deploy del sitio

### ¿Cómo actualizar imágenes?

1. Reemplazar el archivo en `public/` con el mismo nombre y formato `.webp`
2. Hacer deploy del sitio

### ¿Cómo hacer deploy?

El sitio está alojado en **Netlify** y se despliega automáticamente al hacer push a la rama `main` del repositorio.

---

## 📊 Analytics y Seguimiento

| Herramienta | ID | Para qué sirve |
|---|---|---|
| Google Analytics 4 | `G-15JEE66G3X` | Visitas, sesiones, páginas vistas |

> Para ver el tráfico del sitio: [analytics.google.com](https://analytics.google.com)

---

## 🔗 URLs Importantes

| Recurso | URL |
|---|---|
| Sitio web | https://proyectosgrupodip.com |
| Sitemap | https://proyectosgrupodip.com/sitemap.xml |
| Robots | https://proyectosgrupodip.com/robots.txt |
| Google Search Console | https://search.google.com/search-console |
| Google Analytics | https://analytics.google.com |

---

## 📧 Mails

- cotizaciones@proyectosgrupodip.com
- administracion@proyectosgrupodip.com
- ventas@proyectosgrupodip.com
- asesorias@proyectosgrupodip.com

*Manual generado para Grupo Dip C.A. — Actualizado en Marzo 2026.*
