# SPEC — Cabuya Web Catalog
> **Spec-Driven Development Document**  
> Versión: 1.0.0  
> Fecha: 2026-05-14  
> Responsable: Equipo Cabuya  
> Estado: ✅ Listo para ejecución en Gemini CLI

---

## ÍNDICE

1. [Visión del Producto](#1-visión-del-producto)
2. [Contexto y Problema](#2-contexto-y-problema)
3. [Objetivos y Métricas de Éxito](#3-objetivos-y-métricas-de-éxito)
4. [Público Objetivo](#4-público-objetivo)
5. [User Stories](#5-user-stories)
6. [Sistema de Diseño](#6-sistema-de-diseño)
7. [Arquitectura del Proyecto](#7-arquitectura-del-proyecto)
8. [Estructura de Carpetas](#8-estructura-de-carpetas)
9. [Wireframes Textuales](#9-wireframes-textuales)
10. [Especificación de Componentes React](#10-especificación-de-componentes-react)
11. [Flujo de Compra por WhatsApp](#11-flujo-de-compra-por-whatsapp)
12. [Comportamiento Responsive](#12-comportamiento-responsive)
13. [SEO y Performance](#13-seo-y-performance)
14. [Animaciones y Microinteracciones](#14-animaciones-y-microinteracciones)
15. [Assets y Contenido Estático](#15-assets-y-contenido-estático)
16. [Roadmap de Desarrollo](#16-roadmap-de-desarrollo)
17. [Riesgos y Mitigaciones](#17-riesgos-y-mitigaciones)
18. [Criterios de Aceptación](#18-criterios-de-aceptación)
19. [Próximos Pasos](#19-próximos-pasos)
20. [Glosario](#20-glosario)

---

## 1. VISIÓN DEL PRODUCTO

### 1.1 Declaración de Visión

**Cabuya** es una marca ecuatoriana de zapatos tradicionales originarios de Otavalo que necesita presencia digital a la altura de su herencia cultural. Este proyecto construye una **landing page / catálogo web estático** que fusiona la elegancia visual de marcas internacionales premium con el alma artesanal andina, permitiendo a los usuarios explorar modelos, seleccionar tallas y concretar compras directamente por WhatsApp.

### 1.2 Propuesta de Valor

| Atributo | Descripción |
|---|---|
| **Identidad** | Artesanía de Otavalo con presentación de marca internacional |
| **Experiencia** | Navegación premium, fluida y emocionalmente conectada |
| **Conversión** | Flujo de compra directo y sin fricción vía WhatsApp |
| **Confianza** | Diseño profesional que eleva la percepción del producto |
| **Cultura** | Narrativa visual que celebra la tradición ecuatoriana |

### 1.3 Inspiración Visual

El diseño toma como referencia estructural el sitio de **Geox** (geox.com), específicamente:
- Layout de grilla de productos con hover effects
- Hero banner de pantalla completa con overlay tipográfico
- Navegación sticky con transición de transparente a sólida al hacer scroll
- Jerarquía tipográfica limpia con peso visual bien distribuido
- Secciones con contraste alternado (blanco / fondo oscuro / fondo tierra)

Esta estructura se **reinterpreta** con la identidad Cabuya:
- Paleta cromática andina
- Tipografía que evoca calidez artesanal
- Fotografía y texturas que reflejan tejidos y materiales de Otavalo
- Micro-copy en español ecuatoriano auténtico

---

## 2. CONTEXTO Y PROBLEMA

### 2.1 Situación Actual

Cabuya es una marca artesanal sin presencia digital formal. Las ventas se realizan en ferias, mercados locales y boca a boca. Sin un canal digital:
- No hay forma de mostrar el catálogo completo
- Los clientes potenciales remotos no pueden descubrir la marca
- WhatsApp se usa de forma manual y sin estructura
- La percepción de la marca no refleja la calidad real del producto

### 2.2 Problema a Resolver

> "Los compradores interesados en zapatos artesanales ecuatorianos auténticos no tienen un punto de contacto digital donde descubrir Cabuya, explorar modelos con confianza visual y iniciar una compra de manera inmediata."

### 2.3 Solución Propuesta

Una **página web estática en React** que actúa como catálogo + landing page, con:
- Presentación visual de alto impacto
- Catálogo navegable por categorías
- Fichas de producto con selector de talla
- Botón de compra que lanza WhatsApp con mensaje estructurado
- Historia de marca que genera conexión emocional
- Totalmente responsive y de carga rápida

---

## 3. OBJETIVOS Y MÉTRICAS DE ÉXITO

### 3.1 Objetivos del Proyecto

| Prioridad | Objetivo |
|---|---|
| P0 | Publicar catálogo web funcional con mínimo 12 productos |
| P0 | Flujo WhatsApp operativo al 100% en mobile y desktop |
| P1 | Diseño aprobado por el equipo Cabuya antes de deploy |
| P1 | Lighthouse Score ≥ 90 en Performance, Accessibility y SEO |
| P2 | Tiempo de carga < 2.5s en conexión 4G |
| P2 | Tasa de rebote < 55% en los primeros 30 días |

### 3.2 KPIs de Referencia Post-Lanzamiento

- Número de clics en botón "Comprar por WhatsApp"
- Tiempo promedio en página
- Páginas por sesión
- Porcentaje de tráfico mobile vs desktop

---

## 4. PÚBLICO OBJETIVO

### 4.1 Segmentos de Usuario

#### Segmento A — Comprador Local Ecuatoriano
- **Edad:** 25–45 años
- **Ubicación:** Quito, Guayaquil, Cuenca, Otavalo
- **Motivación:** Orgullo cultural, precio justo, producto auténtico
- **Canal principal:** Mobile (WhatsApp, Instagram)
- **Comportamiento:** Exploración visual rápida, decisión emocional

#### Segmento B — Comprador Internacional / Diáspora
- **Edad:** 28–50 años
- **Ubicación:** USA, España, Europa
- **Motivación:** Nostalgia, regalo, producto único
- **Canal principal:** Desktop / Mobile
- **Comportamiento:** Busca historia de marca, quiere sentirse conectado a sus raíces

#### Segmento C — Turista / Viajero Cultural
- **Edad:** 22–55 años
- **Motivación:** Souvenir auténtico, artesanía de calidad
- **Canal principal:** Mobile
- **Comportamiento:** Decisión impulsiva, necesita información clara de tallas y precio

---

## 5. USER STORIES

### 5.1 Épicas Principales

---

#### ÉPICA 1 — Descubrimiento de la Marca

**US-001**
```
Como visitante nuevo,
quiero ver un hero visual impactante al entrar al sitio,
para entender inmediatamente qué es Cabuya y qué vende.
```
**Criterios de aceptación:**
- [ ] El hero ocupa 100vh en desktop y 85vh en mobile
- [ ] Muestra el nombre "Cabuya" con tagline visible en menos de 3 segundos
- [ ] Tiene CTA claro con texto del tipo "Explorar Colección"
- [ ] La imagen de fondo es de alta calidad y carga en < 1.5s

---

**US-002**
```
Como visitante curioso,
quiero leer la historia de la marca Cabuya,
para sentir conexión emocional y confiar en el producto.
```
**Criterios de aceptación:**
- [ ] Existe sección "Historia" con mínimo 150 palabras
- [ ] Incluye imagen o fotografía del proceso artesanal
- [ ] Menciona explícitamente Otavalo y Ecuador
- [ ] Tono cálido, auténtico, no corporativo

---

#### ÉPICA 2 — Exploración del Catálogo

**US-003**
```
Como comprador potencial,
quiero ver todos los modelos de zapatos disponibles,
para elegir el que más me guste antes de contactar.
```
**Criterios de aceptación:**
- [ ] Grid de productos muestra mínimo 12 ítems
- [ ] Cada producto tiene: imagen, nombre, precio referencial, y botón de acción
- [ ] El grid es responsive: 1 col mobile / 2 col tablet / 3-4 col desktop
- [ ] Las imágenes tienen hover effect con zoom sutil

---

**US-004**
```
Como comprador interesado,
quiero ver el detalle de un producto al hacer clic,
para conocer mejor el modelo antes de decidir.
```
**Criterios de aceptación:**
- [ ] Modal o sección expandida muestra: imagen principal, galería de ángulos, descripción, materiales
- [ ] El selector de talla está disponible en la misma vista
- [ ] Botón "Comprar por WhatsApp" está visible sin scroll adicional en mobile
- [ ] Se puede cerrar / volver al catálogo fácilmente

---

**US-005**
```
Como usuaria,
quiero poder filtrar zapatos por categoría (mujer, hombre, niño),
para encontrar rápidamente lo que busco.
```
**Criterios de aceptación:**
- [ ] Tabs o pills de filtro visibles sobre el grid
- [ ] Filtro activa sin recarga de página
- [ ] El estado activo del filtro es visualmente claro
- [ ] Filtro persiste si el usuario navega hacia abajo y vuelve

---

#### ÉPICA 3 — Compra por WhatsApp

**US-006**
```
Como comprador decidido,
quiero seleccionar talla y presionar un botón para abrir WhatsApp,
para concretar la compra sin fricciones ni formularios.
```
**Criterios de aceptación:**
- [ ] Selector de talla funciona con opciones 34–44 (configurable por producto)
- [ ] El botón "Comprar por WhatsApp" está inactivo hasta que se seleccione talla
- [ ] Al hacer clic se abre WhatsApp con mensaje precargado
- [ ] El mensaje incluye: nombre del modelo, talla seleccionada, nombre de la marca

**Formato del mensaje precargado:**
```
Hola! Me interesa comprar un par de zapatos Cabuya 🌿
Modelo: [NOMBRE DEL MODELO]
Talla: [TALLA SELECCIONADA]
¿Está disponible? ¿Cuál es el precio y cómo es el envío?
```

---

**US-007**
```
Como comprador desde mobile,
quiero que el botón de WhatsApp abra la app directamente,
para no tener que buscar el número manualmente.
```
**Criterios de aceptación:**
- [ ] En mobile el link usa `https://wa.me/[NUMERO]?text=[MENSAJE]`
- [ ] En desktop abre `https://web.whatsapp.com`
- [ ] El número de WhatsApp es configurable desde un archivo de constantes
- [ ] El mensaje está correctamente codificado (URL encoding)

---

#### ÉPICA 4 — Testimonios y Confianza

**US-008**
```
Como visitante indeciso,
quiero leer opiniones de otros compradores,
para sentir confianza antes de escribir por WhatsApp.
```
**Criterios de aceptación:**
- [ ] Sección de testimonios muestra mínimo 4 reseñas
- [ ] Cada testimonio tiene: nombre, ciudad, texto, estrella (opcional: foto)
- [ ] El carousel/slider funciona en mobile con swipe
- [ ] El diseño transmite autenticidad (no se ve generado artificialmente)

---

#### ÉPICA 5 — Navegación y UX General

**US-009**
```
Como usuario mobile,
quiero una navegación simple y accesible con menú hamburguesa,
para encontrar cualquier sección sin confundirme.
```
**Criterios de aceptación:**
- [ ] Navbar sticky visible en todo momento
- [ ] En mobile: menú hamburguesa con animación de apertura
- [ ] Links de navegación anclan a secciones de la misma página (single-page)
- [ ] Hay botón de cierre claro en el menú móvil
- [ ] El menú se cierra al seleccionar un ítem

---

**US-010**
```
Como usuario con conexión lenta,
quiero que la página cargue rápido incluso con imágenes grandes,
para no abandonar antes de ver el contenido.
```
**Criterios de aceptación:**
- [ ] Todas las imágenes usan `loading="lazy"` salvo el hero
- [ ] Hero image tiene versión WebP disponible
- [ ] Lighthouse Performance ≥ 90
- [ ] No hay bloqueo de render por scripts externos

---

## 6. SISTEMA DE DISEÑO

### 6.1 Paleta Cromática — Identidad Cabuya

La paleta combina la tierra andina con la vitalidad de los mercados de Otavalo.

#### Paleta Principal

| Nombre | Pantone | HEX | Uso |
|---|---|---|---|
| **Tierra Otavalo** | PANTONE 7527 C | `#C8B89A` | Fondos cálidos, texturas |
| **Tinta Cabuya** | PANTONE 476 C | `#3D2B1F` | Texto principal, navbar oscuro |
| **Cobre Andino** | PANTONE 7526 C | `#A0522D` | Acentos, CTA secundario |
| **Sisal Natural** | PANTONE 9182 C | `#F2EDE4` | Fondo claro base |
| **Verde Páramo** | PANTONE 7497 C | `#7B9971` | Acento natural, badges |

#### Paleta de Acción

| Nombre | Pantone | HEX | Uso |
|---|---|---|---|
| **Jade Mercado** | PANTONE 360 C | `#25D366` | Botón WhatsApp (color oficial) |
| **Índigo Textil** | PANTONE 7685 C | `#3A5A8C` | Links, hover states |
| **Oro Inca** | PANTONE 130 C | `#F5A623` | Estrellas, destacados, precio |

#### Paleta de Soporte

| Nombre | HEX | Uso |
|---|---|---|
| **Blanco Lino** | `#FAFAF8` | Fondo de tarjetas, áreas limpias |
| **Gris Niebla** | `#8A8A8A` | Texto secundario, placeholders |
| **Negro Suave** | `#1A1A1A` | Headings principales |

---

### 6.2 Tipografía

#### Fuente Principal — Headings
- **Familia:** `Playfair Display` (Google Fonts)
- **Pesos:** 400, 600, 700
- **Uso:** Títulos de sección, nombre de productos, hero tagline
- **Razón:** Evoca elegancia clásica con personalidad, conecta con artesanía premium

#### Fuente Secundaria — Body
- **Familia:** `Inter` (Google Fonts)
- **Pesos:** 300, 400, 500, 600
- **Uso:** Texto de párrafos, descripciones, navegación, botones
- **Razón:** Alta legibilidad en pantalla, neutralidad que no compite con Playfair

#### Fuente de Acento (opcional)
- **Familia:** `Lora`
- **Peso:** 400 italic
- **Uso:** Citas de testimonios, subtítulos de sección con carácter especial

#### Escala Tipográfica (base 16px)

| Token | Tamaño | Line-Height | Peso | Uso |
|---|---|---|---|---|
| `--text-xs` | 12px | 1.4 | 400 | Labels, badges |
| `--text-sm` | 14px | 1.5 | 400 | Texto secundario |
| `--text-base` | 16px | 1.6 | 400 | Body text |
| `--text-lg` | 18px | 1.5 | 500 | Subtítulos, precio |
| `--text-xl` | 22px | 1.4 | 600 | Subtítulos de sección |
| `--text-2xl` | 28px | 1.3 | 700 | Títulos de sección |
| `--text-3xl` | 38px | 1.2 | 700 | Hero subtítulo |
| `--text-4xl` | 52px | 1.1 | 700 | Hero título |
| `--text-5xl` | 72px | 1.0 | 700 | Logotipo en hero |

---

### 6.3 Espaciado y Grid

#### Sistema de Espaciado (base 4px)

| Token | Valor | Uso típico |
|---|---|---|
| `--space-1` | 4px | Gaps mínimos |
| `--space-2` | 8px | Padding interno chips |
| `--space-3` | 12px | Margen entre ícono y texto |
| `--space-4` | 16px | Padding interno cards |
| `--space-6` | 24px | Separación entre elementos |
| `--space-8` | 32px | Padding de sección interno |
| `--space-12` | 48px | Margen entre secciones |
| `--space-16` | 64px | Padding de sección mayor |
| `--space-24` | 96px | Espaciado entre secciones grandes |

#### Grid del Sistema

| Contexto | Columnas | Gap | Padding lateral |
|---|---|---|---|
| Mobile (< 768px) | 4 columnas | 16px | 20px |
| Tablet (768–1024px) | 8 columnas | 24px | 32px |
| Desktop (> 1024px) | 12 columnas | 32px | 64px |
| Max-width contenido | — | — | 1280px |

---

### 6.4 Sombras y Bordes

```css
--shadow-sm:   0 1px 3px rgba(61, 43, 31, 0.08);
--shadow-md:   0 4px 16px rgba(61, 43, 31, 0.12);
--shadow-lg:   0 8px 32px rgba(61, 43, 31, 0.16);
--shadow-xl:   0 16px 48px rgba(61, 43, 31, 0.20);

--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-full: 9999px;
```

---

### 6.5 Tokens de Componentes

```css
/* Botones */
--btn-primary-bg:      #3D2B1F;
--btn-primary-text:    #FAFAF8;
--btn-primary-hover:   #5A3F2E;
--btn-whatsapp-bg:     #25D366;
--btn-whatsapp-text:   #FFFFFF;
--btn-whatsapp-hover:  #1EAA52;

/* Tarjetas */
--card-bg:             #FFFFFF;
--card-border:         rgba(200, 184, 154, 0.30);
--card-radius:         var(--radius-lg);
--card-shadow:         var(--shadow-md);
--card-shadow-hover:   var(--shadow-xl);

/* Navegación */
--nav-bg-transparent:  transparent;
--nav-bg-solid:        rgba(61, 43, 31, 0.97);
--nav-text:            #FAFAF8;
--nav-height:          72px;
```

---

## 7. ARQUITECTURA DEL PROYECTO

### 7.1 Stack Tecnológico

| Capa | Tecnología | Justificación |
|---|---|---|
| Framework | React 18 | Ecosistema maduro, componentización |
| Build Tool | Vite 5 | HMR rápido, build optimizado |
| Estilos | CSS Modules + CSS Variables | Sin dependencias extra, escalable |
| Routing | Sin router (single-page) | Es una landing page de una sola vista |
| Animaciones | CSS transitions + Intersection Observer API | Nativo, sin librerías pesadas |
| Deploy | Vercel / Netlify / GitHub Pages | Estático, gratuito, CDN global |
| Assets | /public/assets/ | Servidos como archivos estáticos |

### 7.2 Principios de Arquitectura

1. **Página estática pura:** Sin backend, sin base de datos, sin API propia
2. **Datos como constantes:** Los productos se definen en archivos `/src/data/*.js`
3. **Un solo archivo de configuración:** `src/config/brand.js` centraliza número de WhatsApp, nombre de marca, redes sociales
4. **Componentización granular:** Cada UI element es su propio componente reutilizable
5. **Cero dependencias de UI:** No usar component libraries externas (Material UI, Chakra, etc.)
6. **Mobile-first CSS:** Todos los estilos base aplican a mobile, las media queries escalan hacia arriba

---

## 8. ESTRUCTURA DE CARPETAS

```
cabuya-web/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   │   ├── hero-main.webp
│   │   │   │   ├── hero-main-mobile.webp
│   │   │   │   └── hero-bg-pattern.svg
│   │   │   ├── products/
│   │   │   │   ├── product-001/
│   │   │   │   │   ├── main.webp
│   │   │   │   │   ├── angle-01.webp
│   │   │   │   │   ├── angle-02.webp
│   │   │   │   │   └── detail.webp
│   │   │   │   └── product-002/ ...
│   │   │   ├── brand/
│   │   │   │   ├── logo.svg
│   │   │   │   ├── logo-white.svg
│   │   │   │   ├── logo-dark.svg
│   │   │   │   └── favicon.ico
│   │   │   ├── story/
│   │   │   │   ├── artisans-01.webp
│   │   │   │   ├── workshop.webp
│   │   │   │   └── otavalo-market.webp
│   │   │   └── team/
│   │   │       └── testimonial-avatars/
│   │   └── videos/
│   │       ├── hero-loop.mp4          (opcional: video de fondo en hero)
│   │       ├── craftsmanship.mp4      (opcional: proceso artesanal)
│   │       └── README.md              (guía de formatos y compresión)
│   ├── og-image.jpg                   (Open Graph para redes sociales)
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Navbar.module.css
│   │   │   │   └── MobileMenu.jsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Hero.module.css
│   │   │   ├── FeaturedCatalog/
│   │   │   │   ├── FeaturedCatalog.jsx
│   │   │   │   └── FeaturedCatalog.module.css
│   │   │   ├── TraditionalCollection/
│   │   │   │   ├── TraditionalCollection.jsx
│   │   │   │   └── TraditionalCollection.module.css
│   │   │   ├── BrandStory/
│   │   │   │   ├── BrandStory.jsx
│   │   │   │   └── BrandStory.module.css
│   │   │   ├── Testimonials/
│   │   │   │   ├── Testimonials.jsx
│   │   │   │   └── Testimonials.module.css
│   │   │   └── ContactCTA/
│   │   │       ├── ContactCTA.jsx
│   │   │       └── ContactCTA.module.css
│   │   │
│   │   ├── ui/
│   │   │   ├── ProductCard/
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   └── ProductCard.module.css
│   │   │   ├── ProductModal/
│   │   │   │   ├── ProductModal.jsx
│   │   │   │   └── ProductModal.module.css
│   │   │   ├── SizeSelector/
│   │   │   │   ├── SizeSelector.jsx
│   │   │   │   └── SizeSelector.module.css
│   │   │   ├── WhatsAppButton/
│   │   │   │   ├── WhatsAppButton.jsx
│   │   │   │   └── WhatsAppButton.module.css
│   │   │   ├── CategoryFilter/
│   │   │   │   ├── CategoryFilter.jsx
│   │   │   │   └── CategoryFilter.module.css
│   │   │   ├── TestimonialCard/
│   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   └── TestimonialCard.module.css
│   │   │   ├── SectionHeader/
│   │   │   │   ├── SectionHeader.jsx
│   │   │   │   └── SectionHeader.module.css
│   │   │   ├── Badge/
│   │   │   │   └── Badge.jsx
│   │   │   ├── ImageGallery/
│   │   │   │   ├── ImageGallery.jsx
│   │   │   │   └── ImageGallery.module.css
│   │   │   └── FloatingWhatsApp/
│   │   │       ├── FloatingWhatsApp.jsx
│   │   │       └── FloatingWhatsApp.module.css
│   │   │
│   │   └── common/
│   │       ├── AnimatedSection.jsx    (wrapper con Intersection Observer)
│   │       ├── LazyImage.jsx          (img con lazy load + placeholder)
│   │       └── SEOHead.jsx            (meta tags, OG)
│   │
│   ├── data/
│   │   ├── products.js                (array de todos los productos)
│   │   ├── categories.js              (definición de categorías)
│   │   ├── testimonials.js            (testimonios estáticos)
│   │   └── brand-story.js             (contenido de la sección historia)
│   │
│   ├── config/
│   │   └── brand.js                   (NÚMERO WA, nombre, redes, colores base)
│   │
│   ├── hooks/
│   │   ├── useScrolled.js             (detectar si el usuario hizo scroll)
│   │   ├── useIntersection.js         (Intersection Observer hook)
│   │   └── useMediaQuery.js           (detección de breakpoints)
│   │
│   ├── utils/
│   │   ├── whatsapp.js                (generar URL de WhatsApp)
│   │   ├── formatters.js              (formatear precios, tallas)
│   │   └── classNames.js             (utility para combinar clases CSS)
│   │
│   ├── styles/
│   │   ├── globals.css                (CSS variables, reset, base styles)
│   │   ├── typography.css             (escala tipográfica)
│   │   └── animations.css             (keyframes globales)
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html                         (con meta tags SEO base)
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 9. WIREFRAMES TEXTUALES

### 9.1 Vista Desktop (> 1024px)

```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVBAR [sticky]                                                       │
│ [LOGO cabuya]    Colección   Historia   Testimonios   [WhatsApp CTA] │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                          HERO SECTION                                │
│                  [Imagen full-width con overlay]                     │
│                                                                       │
│              ──────────────────────────────────                      │
│              Zapatos que cuentan una historia                        │
│                   CABUYA                                             │
│          Artesanía de Otavalo para el mundo                         │
│                                                                       │
│              [ Explorar Colección → ]                               │
│                                                                       │
│                   ↓ scroll                                           │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FEATURED CATALOG                                                      │
│                                                                       │
│  [Título sección]  "Colección Destacada"                            │
│  [Filtros]  [ Todos ] [ Mujer ] [ Hombre ] [ Niños ]               │
│                                                                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │  IMG    │  │  IMG    │  │  IMG    │  │  IMG    │             │
│  │         │  │         │  │         │  │         │             │
│  │[NUEVO]  │  │         │  │[POPULAR]│  │         │             │
│  ├─────────┤  ├─────────┤  ├─────────┤  ├─────────┤             │
│  │ Modelo  │  │ Modelo  │  │ Modelo  │  │ Modelo  │             │
│  │ $45.00  │  │ $52.00  │  │ $48.00  │  │ $60.00  │             │
│  │ [Ver +] │  │ [Ver +] │  │ [Ver +] │  │ [Ver +] │             │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘             │
│                                                                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│     ...           ...           ...           ...                    │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ TRADITIONAL COLLECTION  [fondo oscuro Tinta Cabuya]                 │
│                                                                       │
│   [Imagen grande izq.]       [Texto derecha]                        │
│   [artesanos trabajando]     Colección Tradicional                  │
│                              Tejidos, fibras naturales              │
│                              y técnicas centenarias...              │
│                                                                       │
│                              [ Ver Colección → ]                    │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ BRAND STORY                                                           │
│                                                                       │
│    [Texto izq. 50%]               [Imagen der. 50%]                 │
│                                                                       │
│    Nuestra Historia               [foto Otavalo]                    │
│    ─────────────────                                                 │
│    Desde las faldas del...                                           │
│    volcán Imbabura, los                                              │
│    artesanos de Otavalo...                                           │
│                                                                       │
│    [ Conocer más → ]                                                │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ TESTIMONIALS  [fondo Sisal Natural]                                  │
│                                                                       │
│          "Lo que dicen nuestros clientes"                           │
│                                                                       │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐│
│   │ ★★★★★           │  │ ★★★★★           │  │ ★★★★★           ││
│   │ "Increíbles..."  │  │ "Los usé en..."  │  │ "Calidad y..."  ││
│   │                  │  │                  │  │                  ││
│   │ [avatar]         │  │ [avatar]         │  │ [avatar]         ││
│   │ María G. · Quito │  │ Carlos R. · NYC  │  │ Ana P. · Madrid ││
│   └──────────────────┘  └──────────────────┘  └──────────────────┘│
│                                                                       │
│                    [ ← ]     [ ● ○ ○ ○ ]     [ → ]                │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ CONTACT CTA  [fondo Cobre Andino degradado]                          │
│                                                                       │
│                ¿Listo para tu par de Cabuya?                        │
│         Escríbenos por WhatsApp y te asesoramos                     │
│                                                                       │
│              [ 💬 Chatear por WhatsApp ]                            │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                                │
│                                                                       │
│  [LOGO blanco]        Colección       Síguenos                      │
│  Zapatos artesanales  › Mujer         [IG] [FB] [TT]               │
│  de Otavalo, Ecuador  › Hombre                                       │
│                       › Niños         📍 Otavalo, Ecuador           │
│                                       📞 +593 XX XXX XXXX          │
│  ─────────────────────────────────────────────────────────────────  │
│  © 2026 Cabuya · Hecho con amor en Otavalo · Todos los derechos   │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 9.2 Vista Mobile (< 768px)

```
┌─────────────────────────┐
│ NAVBAR                   │
│ [LOGO]        [≡ MENÚ]  │
└─────────────────────────┘

┌─────────────────────────┐
│       HERO               │
│  [Imagen full height]   │
│                          │
│   CABUYA                │
│   Artesanía de           │
│   Otavalo para           │
│   el mundo               │
│                          │
│  [ Explorar → ]         │
└─────────────────────────┘

┌─────────────────────────┐
│ CATALOG                  │
│ [Todos][Mujer][Hombre]  │
│ [Niños]                 │
│                          │
│ ┌─────────┐ ┌─────────┐│
│ │  IMG    │ │  IMG    ││
│ │ Modelo  │ │ Modelo  ││
│ │ $45.00  │ │ $52.00  ││
│ │ [Ver +] │ │ [Ver +] ││
│ └─────────┘ └─────────┘│
│                          │
│ ┌─────────┐ ┌─────────┐│
│    ...         ...      │
└─────────────────────────┘

┌─────────────────────────┐
│ TRADICIONAL              │
│  [Imagen grande]         │
│                          │
│  Colección               │
│  Tradicional             │
│  [texto...]             │
│  [ Ver Más → ]          │
└─────────────────────────┘

┌─────────────────────────┐
│ HISTORIA                 │
│  [Imagen Otavalo]        │
│                          │
│  Nuestra Historia        │
│  [texto...]             │
└─────────────────────────┘

┌─────────────────────────┐
│ TESTIMONIOS              │
│ [swipe carousel]         │
│  ★★★★★                 │
│  "Increíbles..."         │
│  María G. · Quito       │
│   ← [ ● ○ ○ ] →        │
└─────────────────────────┘

┌─────────────────────────┐
│ CTA WHATSAPP             │
│  ¿Listo para tu par?    │
│  [ 💬 WhatsApp ]        │
└─────────────────────────┘

┌─────────────────────────┐
│ FOOTER                   │
│  [LOGO]                  │
│  Otavalo, Ecuador        │
│  [IG] [FB] [TT]         │
│  © 2026 Cabuya          │
└─────────────────────────┘

╔═════════════════════════╗
║ [💬] FLOATING WA BUTTON ║  ← siempre visible al hacer scroll
╚═════════════════════════╝
```

---

### 9.3 Wireframe — Modal de Producto

```
┌─────────────────────────────────────────────────────────────┐
│ OVERLAY (rgba(0,0,0,0.6)) backdrop                          │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                    [× Cerrar]          │  │
│  │                                                         │  │
│  │  [Imagen principal 60%]  │  [Info del producto 40%]   │  │
│  │  ──────────────────       │                             │  │
│  │                           │  Alpargata Imbabura        │  │
│  │  [Galería thumbs]         │  Colección Tradicional     │  │
│  │  [●][○][○][○]            │  ─────────────────────     │  │
│  │                           │  $52.00 USD                │  │
│  │                           │                             │  │
│  │                           │  Materiales:               │  │
│  │                           │  · Yute natural            │  │
│  │                           │  · Suela de caucho         │  │
│  │                           │  · Acabado artesanal       │  │
│  │                           │                             │  │
│  │                           │  Seleccionar Talla:        │  │
│  │                           │  [34][35][36][37][38]      │  │
│  │                           │  [39][40][41][42][43]      │  │
│  │                           │                             │  │
│  │                           │  [● Talla 38 seleccionada] │  │
│  │                           │                             │  │
│  │                           │  [ 💬 Comprar por          │  │
│  │                           │       WhatsApp ]           │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. ESPECIFICACIÓN DE COMPONENTES REACT

### 10.1 Componentes de Layout

---

#### `<Navbar />`

**Archivo:** `src/components/layout/Navbar/Navbar.jsx`

**Props:** ninguna (usa config de `brand.js` y hook `useScrolled`)

**Estado interno:**
- `isMenuOpen: boolean` — controla el menú mobile

**Comportamiento:**
- Inicia con `background: transparent`
- Al hacer scroll > 50px transiciona a fondo sólido (`--nav-bg-solid`) con transición CSS suave
- En mobile (<768px): muestra hamburguesa, oculta links
- Al abrir menú mobile: anima apertura desde arriba, bloquea scroll del body
- Los links hacen scroll suave a las secciones (anchor `#id`)

**Elementos:**
```
Logo (SVG) | Links de navegación | Botón WhatsApp (desktop) | Botón hamburguesa (mobile)
```

---

#### `<Footer />`

**Archivo:** `src/components/layout/Footer/Footer.jsx`

**Props:** ninguna

**Secciones:**
1. Columna izquierda: logo blanco + descripción corta
2. Columna central: links de navegación rápida
3. Columna derecha: íconos de redes sociales + datos de contacto
4. Barra inferior: copyright

---

### 10.2 Componentes de Sección

---

#### `<Hero />`

**Archivo:** `src/components/sections/Hero/Hero.jsx`

**Props:** ninguna (contenido estático o desde `brand.js`)

**Elementos:**
- `<div>` contenedor full-viewport con imagen de fondo
- Overlay gradiente oscuro (bottom-heavy)
- Título principal en `Playfair Display` bold
- Subtítulo en `Inter` light italic
- `<CTAButton>` que hace scroll a `#catalog`
- Indicador "scroll" animado (chevron o línea)

**Variante con video (opcional):**
- Si existe `hero-loop.mp4`, usar `<video autoplay muted loop>` como background
- Fallback a imagen si video no carga

---

#### `<FeaturedCatalog />`

**Archivo:** `src/components/sections/FeaturedCatalog/FeaturedCatalog.jsx`

**Props:** ninguna (importa datos de `src/data/products.js`)

**Estado interno:**
- `activeCategory: string` — categoría activa del filtro ('all' | 'women' | 'men' | 'kids')
- `selectedProduct: object | null` — producto seleccionado para el modal

**Comportamiento:**
- Filtra `products.js` por `activeCategory`
- Al hacer clic en una tarjeta, abre `<ProductModal>` con el producto como prop
- Animación de entrada al entrar en viewport (fade + translateY)

**Layout:** CSS Grid con `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`

---

#### `<TraditionalCollection />`

**Archivo:** `src/components/sections/TraditionalCollection/TraditionalCollection.jsx`

**Diseño:** Full-width split — imagen izquierda / texto derecho (invertido en mobile: texto abajo)

**Contenido estático:**
- Título: "Colección Tradicional"
- Párrafo corto sobre la tradición textil de Otavalo
- Badge con "Hecho a mano"
- CTA secundario

---

#### `<BrandStory />`

**Archivo:** `src/components/sections/BrandStory/BrandStory.jsx`

**Diseño:** Texto izquierda / imagen derecha con fondo blanco

**Contenido desde:** `src/data/brand-story.js`

**Elementos:**
- Sección heading con etiqueta decorativa "Nuestra Historia"
- Párrafos de texto
- Pull-quote destacado en `Lora italic`
- Imagen con clip-path o border-radius asimétrico para diferenciación visual

---

#### `<Testimonials />`

**Archivo:** `src/components/sections/Testimonials/Testimonials.jsx`

**Props:** ninguna (datos de `src/data/testimonials.js`)

**Estado interno:**
- `activeIndex: number` — índice del slide activo

**Comportamiento:**
- Desktop: muestra 3 cards simultáneamente
- Tablet: muestra 2 cards
- Mobile: muestra 1 card con swipe (CSS scroll snap o gesture manual)
- Navegación por bullets y flechas
- Auto-play opcional cada 5 segundos con pausa on-hover

---

#### `<ContactCTA />`

**Archivo:** `src/components/sections/ContactCTA/ContactCTA.jsx`

**Diseño:** Full-width con fondo gradiente Cobre Andino

**Elementos:**
- Título invitacional
- Subtítulo breve
- `<WhatsAppButton>` con mensaje genérico (sin modelo específico)

---

### 10.3 Componentes UI

---

#### `<ProductCard />`

**Archivo:** `src/components/ui/ProductCard/ProductCard.jsx`

**Props:**
```javascript
{
  id: string,
  name: string,
  price: number,
  image: string,          // ruta desde /public
  category: string,
  badge?: string,         // 'Nuevo' | 'Popular' | 'Edición Limitada'
  isAvailable: boolean,
  onClick: (product) => void
}
```

**Comportamiento:**
- Hover: imagen hace zoom sutil (scale 1.05), sombra aumenta
- Badge aparece en esquina superior izquierda si existe
- Si no disponible: grayscale + "Agotado"

---

#### `<ProductModal />`

**Archivo:** `src/components/ui/ProductModal/ProductModal.jsx`

**Props:**
```javascript
{
  product: {
    id: string,
    name: string,
    price: number,
    images: string[],      // array de imágenes
    description: string,
    materials: string[],
    sizes: number[],       // ej: [36,37,38,39,40,41]
    category: string
  } | null,
  onClose: () => void
}
```

**Estado interno:**
- `activeImageIndex: number`
- `selectedSize: number | null`

**Comportamiento:**
- Si `product === null`, no renderiza
- `Escape` key cierra el modal
- Click en overlay cierra el modal
- Botón WhatsApp deshabilitado hasta que `selectedSize !== null`
- Al seleccionar talla activa el botón y cambia su estado visual

---

#### `<SizeSelector />`

**Archivo:** `src/components/ui/SizeSelector/SizeSelector.jsx`

**Props:**
```javascript
{
  sizes: number[],
  selectedSize: number | null,
  onSelect: (size: number) => void
}
```

**Render:** Grid de botones cuadrados con la talla. Estado `selected` con fondo oscuro y texto blanco.

---

#### `<WhatsAppButton />`

**Archivo:** `src/components/ui/WhatsAppButton/WhatsAppButton.jsx`

**Props:**
```javascript
{
  productName?: string,    // si es undefined: mensaje genérico
  size?: number,           // si es undefined: botón deshabilitado
  disabled?: boolean,
  variant?: 'default' | 'floating' | 'hero'
}
```

**Comportamiento:**
- Construye la URL usando `utils/whatsapp.js`
- Abre en nueva pestaña
- En mobile detecta si hay WhatsApp instalado (best-effort con deeplink)

---

#### `<CategoryFilter />`

**Props:**
```javascript
{
  categories: { id: string, label: string }[],
  active: string,
  onChange: (categoryId: string) => void
}
```

---

#### `<TestimonialCard />`

**Props:**
```javascript
{
  text: string,
  author: string,
  city: string,
  rating: number,     // 1-5
  avatar?: string
}
```

---

#### `<SectionHeader />`

**Props:**
```javascript
{
  label?: string,         // etiqueta pequeña superior (ej: "Colección")
  title: string,
  subtitle?: string,
  align?: 'left' | 'center' | 'right'
}
```

---

#### `<FloatingWhatsApp />`

Botón flotante siempre visible en la esquina inferior derecha (aparece tras 2s de carga).

**Comportamiento:**
- Aparece con `position: fixed; bottom: 24px; right: 24px`
- Tooltip "¿Necesitas ayuda?" al hover
- Mensaje genérico precargado
- Se oculta cuando el modal de producto está abierto

---

#### `<AnimatedSection />`

**Props:**
```javascript
{
  children: ReactNode,
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight',
  delay?: number         // milisegundos
}
```

**Comportamiento:** Usa `IntersectionObserver`. Cuando el elemento entra en el viewport, aplica la clase CSS de animación.

---

#### `<LazyImage />`

**Props:**
```javascript
{
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string
}
```

**Comportamiento:**
- Muestra placeholder con color de fondo mientras carga
- Usa `loading="lazy"` nativo del navegador
- Fade-in suave al cargar

---

### 10.4 Datos — Estructura de `products.js`

```javascript
// src/data/products.js

export const products = [
  {
    id: "cab-001",
    name: "Alpargata Imbabura",
    slug: "alpargata-imbabura",
    price: 45.00,
    currency: "USD",
    category: "women",         // 'women' | 'men' | 'kids'
    badge: "Nuevo",            // null si no aplica
    isAvailable: true,
    images: [
      "/assets/images/products/product-001/main.webp",
      "/assets/images/products/product-001/angle-01.webp",
      "/assets/images/products/product-001/angle-02.webp",
    ],
    description: "Diseño clásico de Otavalo con materiales naturales...",
    materials: ["Yute natural", "Suela de caucho", "Hilos de algodón"],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    featured: true
  },
  // ... más productos
];
```

---

### 10.5 Configuración de Marca — `brand.js`

```javascript
// src/config/brand.js

export const brand = {
  name: "Cabuya",
  tagline: "Artesanía de Otavalo para el mundo",
  whatsapp: {
    number: "593XXXXXXXXX",    // número sin + ni espacios
    defaultMessage: "Hola! Me interesa conocer los zapatos Cabuya 🌿 ¿Me pueden dar más información?"
  },
  social: {
    instagram: "https://instagram.com/cabuya.ec",
    facebook: "https://facebook.com/cabuya.ec",
    tiktok: null
  },
  location: "Otavalo, Imbabura, Ecuador",
  email: "hola@cabuya.ec"
};
```

---

## 11. FLUJO DE COMPRA POR WHATSAPP

### 11.1 Diagrama de Flujo

```
USUARIO                            SISTEMA                         WHATSAPP
   │                                  │                                │
   ├─── Navega al catálogo ──────────►│                                │
   │                                  │ Renderiza grid de productos    │
   │◄─────────────────────────────────┤                                │
   │                                  │                                │
   ├─── Hace clic en producto ───────►│                                │
   │                                  │ Abre ProductModal              │
   │◄─────────────────────────────────┤                                │
   │                                  │                                │
   ├─── Selecciona talla (ej: 39) ───►│                                │
   │                                  │ Activa WhatsAppButton          │
   │◄─────────────────────────────────┤                                │
   │                                  │                                │
   ├─── Click "Comprar por WA" ──────►│                                │
   │                                  │ Genera URL con mensaje         │
   │                                  │ encodeURIComponent(msg)        │
   │                                  ├──── Abre nueva pestaña ───────►│
   │                                  │     wa.me/593XX?text=...       │
   │◄───────────────────────────────────────────────────────────────────┤
   │    WhatsApp abierto con mensaje  │                                │
   │    precargado listo para enviar  │                                │
```

### 11.2 Construcción del Mensaje

**Función en `src/utils/whatsapp.js`:**

```javascript
export function buildWhatsAppURL(productName, size, whatsappNumber) {
  const message = 
    `Hola! Me interesa comprar un par de zapatos Cabuya 🌿\n` +
    `*Modelo:* ${productName}\n` +
    `*Talla:* ${size}\n` +
    `¿Está disponible? ¿Cuál es el precio y cómo es el envío?`;
  
  const encodedMessage = encodeURIComponent(message);
  const baseURL = isMobile() 
    ? `https://wa.me/${whatsappNumber}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
  
  return `${baseURL}?text=${encodedMessage}`;
}

function isMobile() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent);
}
```

**Mensaje resultado (preview):**
```
Hola! Me interesa comprar un par de zapatos Cabuya 🌿
*Modelo:* Alpargata Imbabura
*Talla:* 39
¿Está disponible? ¿Cuál es el precio y cómo es el envío?
```

### 11.3 Estados del Botón WhatsApp en Modal

| Estado | Visual | Condición |
|---|---|---|
| `disabled` | Fondo gris, cursor no-drop | `selectedSize === null` |
| `active` | Fondo verde `#25D366`, cursor pointer | `selectedSize !== null` |
| `hover` | Fondo verde oscuro `#1EAA52` | Mouse sobre botón activo |
| `loading` | Spinner breve | (opcional) 300ms antes de abrir WA |

---

## 12. COMPORTAMIENTO RESPONSIVE

### 12.1 Breakpoints

```css
/* Mobile first — los estilos base son para mobile */

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop pequeño */
@media (min-width: 1024px) { ... }

/* Desktop grande */
@media (min-width: 1280px) { ... }

/* Desktop XL */
@media (min-width: 1536px) { ... }
```

### 12.2 Comportamiento por Sección

| Sección | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Navbar** | Logo + hamburguesa | Logo + hamburguesa | Logo + links + CTA |
| **Hero** | Imagen, texto centrado, 85vh | Imagen, texto centrado, 90vh | Imagen, texto izquierda, 100vh |
| **Catalog Grid** | 2 columnas | 3 columnas | 4 columnas |
| **Product Filters** | Scroll horizontal | Flex wrap | Flex inline |
| **Product Modal** | Full screen bottom-sheet | Centrado 80vw | Centrado 900px max |
| **Traditional Coll.** | Imagen arriba, texto abajo | Imagen arriba, texto abajo | Split 50/50 |
| **Brand Story** | Imagen arriba, texto abajo | Split 50/50 | Split 50/50 |
| **Testimonials** | 1 card (swipe) | 2 cards | 3 cards |
| **Contact CTA** | Stacked | Stacked | Inline |
| **Footer** | 1 columna stacked | 2 columnas | 3 columnas + barra |
| **Floating WA** | Visible, bottom-right | Visible | Visible |

### 12.3 Comportamiento del Menú Mobile

```
Estado cerrado:
┌──────────────────────────┐
│ [LOGO]          [≡]      │
└──────────────────────────┘

Estado abierto (slide from top):
┌──────────────────────────┐
│ [LOGO]          [×]      │
├──────────────────────────┤
│   Colección              │
│   Historia               │
│   Testimonios            │
│   [ 💬 WhatsApp ]        │
└──────────────────────────┘
(fondo opaco, scroll del body bloqueado)
```

---

## 13. SEO Y PERFORMANCE

### 13.1 Meta Tags en `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cabuya — Zapatos Artesanales de Otavalo, Ecuador</title>
  <meta name="description" content="Descubre los zapatos artesanales de Cabuya, elaborados a mano en Otavalo, Ecuador. Tradición andina, calidad premium. Compra directamente por WhatsApp." />
  <meta name="keywords" content="zapatos artesanales, Otavalo, Ecuador, cabuya, alpargatas, zapatos tradicionales, artesanía ecuatoriana" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Cabuya — Zapatos Artesanales de Otavalo" />
  <meta property="og:description" content="Artesanía de Otavalo para el mundo. Zapatos únicos, hechos a mano." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://cabuya.ec" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  
  <!-- Preconnect para Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/assets/images/brand/favicon.ico" />
</head>
```

### 13.2 Estrategia de Performance

| Técnica | Implementación |
|---|---|
| Lazy loading images | `loading="lazy"` en todas excepto hero |
| WebP format | Todas las imágenes en formato `.webp` |
| Hero image preload | `<link rel="preload" as="image" href="hero-main.webp">` |
| Google Fonts optimizado | `display=swap` para evitar FOIT |
| CSS critico inline | Los estilos del hero y navbar en `<style>` en el `<head>` |
| Code splitting | Vite lo hace automáticamente por dynamic imports |
| Tree shaking | Habilitado por defecto en Vite |
| Compresión de assets | `vite-plugin-imagemin` o compresión manual previa |

---

## 14. ANIMACIONES Y MICROINTERACCIONES

### 14.1 Principios

- **Sutiles y funcionales:** Las animaciones deben añadir valor, no distraer
- **Performance-first:** Solo `transform` y `opacity` para garantizar 60fps
- **Respetar `prefers-reduced-motion`:** Desactivar animaciones si el usuario lo configura así

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 14.2 Catálogo de Animaciones

| Nombre | Trigger | Efecto | Duración |
|---|---|---|---|
| `fadeUp` | Entrada al viewport | `opacity: 0 → 1` + `translateY(24px → 0)` | 600ms ease-out |
| `fadeIn` | Entrada al viewport | `opacity: 0 → 1` | 500ms ease |
| `heroReveal` | Carga de página | `opacity: 0 → 1` + scale sutil | 1000ms |
| `navSlideDown` | Menú mobile abierto | `translateY(-100% → 0)` | 300ms ease-out |
| `modalReveal` | Apertura de modal | `opacity: 0 → 1` + `scale(0.95 → 1)` | 250ms ease-out |
| `cardHover` | Hover en tarjeta | `scale(1 → 1.02)` + sombra | 200ms ease |
| `imageZoom` | Hover en imagen | `scale(1 → 1.08)` (dentro de overflow hidden) | 400ms ease |
| `buttonPulse` | WhatsApp button | Pulse ring en verde | 2s loop |
| `floatingBounce` | Floating WA button | `translateY(0 → -6px → 0)` | 2s loop |

---

## 15. ASSETS Y CONTENIDO ESTÁTICO

### 15.1 Imágenes Requeridas

#### Hero
| Archivo | Dimensiones | Descripción |
|---|---|---|
| `hero-main.webp` | 1920×1080px | Imagen principal del hero (desktop) |
| `hero-main-mobile.webp` | 768×1024px | Versión mobile del hero |

#### Productos (por cada producto)
| Archivo | Dimensiones | Descripción |
|---|---|---|
| `main.webp` | 800×800px | Foto principal, fondo blanco/neutro |
| `angle-01.webp` | 800×800px | Ángulo lateral |
| `angle-02.webp` | 800×800px | Ángulo superior / suela |
| `detail.webp` | 800×800px | Detalle del material / tejido |

#### Marca / Historia
| Archivo | Dimensiones | Descripción |
|---|---|---|
| `logo.svg` | Vectorial | Logo principal (colores completos) |
| `logo-white.svg` | Vectorial | Logo en blanco (para navbar oscuro y footer) |
| `artisans-01.webp` | 1200×800px | Foto artesanos trabajando |
| `otavalo-market.webp` | 1200×800px | Foto mercado de Otavalo |

### 15.2 Placeholder de Productos (para desarrollo)

Mientras no se tienen fotos reales, usar `https://picsum.photos/800/800?random=[N]` o imágenes de Unsplash con búsqueda "handmade shoes ecuador".

### 15.3 Contenido de Texto — Guía de Tono

**Voz de la marca Cabuya:**
- ✅ Auténtica, cálida, orgullosa de sus raíces
- ✅ Accesible, no elitista
- ✅ Evoca textura, artesanía, historia
- ❌ No corporativa
- ❌ No genérica ni artificial
- ❌ No exagerada ni sobre-prometedora

**Ejemplos de copy:**
- ✅ "Cada par lleva consigo el saber de generaciones"
- ✅ "Hechos con las manos, sentidos con el alma"
- ❌ "Los mejores zapatos del mercado"
- ❌ "Calidad incomparable y precio inmejorable"

---

## 16. ROADMAP DE DESARROLLO

### Fase 0 — Setup (Día 1) — Estimado: 2h
- [ ] Crear proyecto con `npm create vite@latest cabuya-web -- --template react`
- [ ] Instalar dependencias mínimas
- [ ] Configurar estructura de carpetas
- [ ] Crear archivos de datos (`products.js`, `testimonials.js`, `brand.js`)
- [ ] Configurar CSS globals con variables de diseño
- [ ] Crear `index.html` con meta tags SEO

### Fase 1 — Diseño Base (Día 1–2) — Estimado: 4h
- [ ] Implementar sistema de CSS variables
- [ ] Crear componentes base: `SectionHeader`, `LazyImage`, `Badge`, `AnimatedSection`
- [ ] Implementar `WhatsAppButton` con lógica de URL
- [ ] Crear `SizeSelector`

### Fase 2 — Layout y Navegación (Día 2) — Estimado: 3h
- [ ] Implementar `Navbar` con scroll behavior y mobile menu
- [ ] Implementar `Footer`
- [ ] Crear `Layout` wrapper
- [ ] Implementar `FloatingWhatsApp`

### Fase 3 — Secciones Principales (Día 3–4) — Estimado: 8h
- [ ] `Hero` section con imagen/video de fondo
- [ ] `FeaturedCatalog` con grid y filtros
- [ ] `ProductCard` con hover effects
- [ ] `ProductModal` completo con galería y selector de talla
- [ ] Integración del flujo WhatsApp en modal

### Fase 4 — Secciones de Contenido (Día 4–5) — Estimado: 4h
- [ ] `TraditionalCollection` section
- [ ] `BrandStory` section
- [ ] `Testimonials` con carousel mobile
- [ ] `ContactCTA` section

### Fase 5 — Animaciones y Polish (Día 5) — Estimado: 3h
- [ ] Implementar `AnimatedSection` con IntersectionObserver
- [ ] Aplicar animaciones de entrada a todas las secciones
- [ ] Pulir hover effects en tarjetas
- [ ] Animación de apertura del modal
- [ ] Animación del floating button

### Fase 6 — Responsive y QA (Día 6) — Estimado: 4h
- [ ] Test en mobile (360px, 375px, 414px)
- [ ] Test en tablet (768px, 1024px)
- [ ] Test en desktop (1280px, 1440px, 1920px)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Verificar flujo WhatsApp completo en mobile y desktop

### Fase 7 — Performance y Deploy (Día 7) — Estimado: 2h
- [ ] Optimizar imágenes (convertir a WebP, comprimir)
- [ ] Auditoría Lighthouse → Score ≥ 90
- [ ] Build de producción: `npm run build`
- [ ] Deploy a Vercel/Netlify
- [ ] Verificar que el sitio funciona con dominio real

**Estimación Total: ~30 horas de desarrollo**

---

## 17. RIESGOS Y MITIGACIONES

| ID | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| R01 | Assets fotográficos no disponibles o de baja calidad | Alta | Alto | Usar placeholders de alta calidad en Unsplash/Picsum durante desarrollo; escalar la solicitud de fotos reales como blocker |
| R02 | Número de WhatsApp no configurado o incorrecto | Media | Alto | Centralizar en `brand.js`, documentar claramente, hacer test de flujo completo antes de deploy |
| R03 | Catálogo sin precios reales definidos | Media | Medio | Usar precio referencial; en el mensaje WA el usuario pregunta el precio explícitamente |
| R04 | Rendimiento degradado por imágenes sin optimizar | Media | Medio | Documentar proceso de optimización en `/public/assets/videos/README.md` |
| R05 | Safari iOS bugs con posición fixed del navbar o modal | Media | Medio | Testear específicamente en iPhone Safari; usar `-webkit-` prefixes donde necesario |
| R06 | WhatsApp Web no funciona correctamente en algunos navegadores | Baja | Bajo | Ofrecer botón de copia del mensaje como fallback |
| R07 | Cambio de identidad de marca durante el desarrollo | Baja | Alto | Congelar paleta y naming en `brand.js` y confirmar con cliente antes de Fase 3 |
| R08 | Tallas no estandarizadas por producto | Media | Bajo | Definir tallas por producto en `products.js`; Si no se sabe, usar rango general 35–44 |

---

## 18. CRITERIOS DE ACEPTACIÓN

### 18.1 Funcionales (MUST)

| Criterio | Cómo verificar |
|---|---|
| ✅ La página carga correctamente en Chrome, Firefox y Safari | QA manual en 3 navegadores |
| ✅ El catálogo muestra mínimo 12 productos | Contar ítems en `products.js` |
| ✅ Los filtros de categoría funcionan sin recargar | Click en cada filtro y observar |
| ✅ El modal de producto se abre y cierra correctamente | Test en desktop y mobile |
| ✅ El selector de talla actualiza el estado del botón WA | Click en talla y verificar activación del botón |
| ✅ El botón WhatsApp abre con el mensaje correcto | Verificar URL generada y mensaje en WA |
| ✅ El mensaje incluye modelo, talla y marca | Revisar mensaje precargado en WhatsApp |
| ✅ La navegación por anchors funciona con scroll suave | Click en cada link de nav |
| ✅ El menú mobile abre y cierra correctamente | Test en viewport < 768px |
| ✅ El botón flotante de WhatsApp es visible al hacer scroll | Scroll down 200px |

### 18.2 No Funcionales (SHOULD)

| Criterio | Herramienta | Umbral |
|---|---|---|
| Lighthouse Performance | Chrome DevTools Lighthouse | ≥ 90 |
| Lighthouse Accessibility | Chrome DevTools Lighthouse | ≥ 90 |
| Lighthouse SEO | Chrome DevTools Lighthouse | ≥ 90 |
| Tiempo de carga (4G simulado) | Chrome DevTools Network | < 2.5s |
| No errores en consola | Chrome DevTools Console | 0 errores |
| Funciona sin JavaScript (contenido base) | Deshabilitar JS en devtools | Texto e imágenes visibles |

### 18.3 Diseño (MUST)

| Criterio |
|---|
| ✅ La paleta cromática definida en este spec está aplicada correctamente |
| ✅ Las tipografías `Playfair Display` e `Inter` se cargan correctamente |
| ✅ El diseño es visualmente consistente en mobile, tablet y desktop |
| ✅ Los espaciados siguen el sistema de 4px base |
| ✅ Los botones de WhatsApp tienen el color verde oficial `#25D366` |
| ✅ No hay texto cortado o desbordado en ningún breakpoint |

---

## 19. PRÓXIMOS PASOS

### Inmediatos (antes de iniciar desarrollo)

1. **Confirmar número de WhatsApp de negocio** → Actualizar `brand.js`
2. **Definir catálogo inicial de 12 productos** → Completar `products.js` con nombres, precios y categorías
3. **Conseguir fotografías de producto** → Idealmente fondo blanco/neutro, 800×800px mínimo
4. **Conseguir fotografías de hero y marca** → Fotos de Otavalo, artesanos, proceso de fabricación
5. **Revisar y aprobar el copy** → Textos de historia de marca, descripciones de producto, testimonios
6. **Definir dominio** → `cabuya.ec` o similar

### Post-Lanzamiento (V2)

- Integrar Google Analytics 4 para tracking de clics en WhatsApp
- Añadir sección de "Novedades" o "Blog" con artículos sobre artesanía
- Implementar búsqueda de productos
- Añadir página de detalle de producto con URL única (React Router)
- Integrar mapa con ubicación de la tienda física
- Versión en inglés (i18n básico)
- Formulario de lista de espera para tallas agotadas

### Escalabilidad a Futuro (V3+)

- Migrar datos de productos a CMS headless (Contentful, Sanity, Notion)
- Añadir sistema de favoritos con localStorage
- Implementar pasarela de pago (Stripe, PayPal) si el volumen lo justifica
- App móvil con React Native

---

## 20. GLOSARIO

| Término | Definición |
|---|---|
| **Cabuya** | Fibra natural extraída del agave, usada ancestralmente en Ecuador para artesanías y calzado |
| **Otavalo** | Ciudad y mercado artesanal del norte de Ecuador, reconocido mundialmente por sus tejidos |
| **SDD** | Spec-Driven Development — metodología donde se escribe la especificación completa antes de codificar |
| **Hero** | Sección superior de la página, generalmente de pantalla completa, con imagen o video de impacto |
| **Modal** | Ventana superpuesta al contenido principal para mostrar detalle de un elemento |
| **CTA** | Call to Action — botón o elemento que invita al usuario a realizar una acción específica |
| **Floating button** | Botón con posición fija en la pantalla, siempre visible independientemente del scroll |
| **Intersection Observer** | API nativa del navegador para detectar cuándo un elemento entra o sale del viewport |
| **WebP** | Formato de imagen moderno de Google, más liviano que JPEG/PNG con calidad equivalente |
| **Lighthouse** | Herramienta de auditoría web de Google integrada en Chrome DevTools |
| **CSS Modules** | Sistema de alcance local para estilos CSS en proyectos React, evita conflictos de nombres |
| **URL encoding** | Proceso de convertir caracteres especiales a formato seguro para URLs (ej: espacio = `%20`) |

---

> **Documento generado para uso en Gemini CLI**  
> Este spec está diseñado para ser consumido directamente por Gemini CLI como contexto de proyecto.  
> Cada sección es autocontenida y puede ser referenciada individualmente durante el desarrollo.  
>  
> **Instrucción para Gemini CLI:**  
> Usa este documento como fuente de verdad absoluta. No tomes decisiones de diseño, arquitectura o funcionalidad que contradigan este spec. Si encuentras ambigüedad, consulta la sección más relevante de este documento antes de implementar.

---

*© 2026 Cabuya — Spec v1.0.0 — Todos los derechos reservados*
