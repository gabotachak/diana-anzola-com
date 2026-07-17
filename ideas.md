# Plan de mejora — sitio de doble propósito

## Visión

El sitio sirve a **dos audiencias distintas** que llegan con intenciones opuestas:

| Audiencia | Qué busca | Qué la convence |
|-----------|-----------|-----------------|
| **Cliente** (prioridad) | Resolver un problema legal ya | "¿Resuelve MI caso? ¿Confío? ¿Cómo la contacto?" |
| **Empleador** (mantener) | Evaluar una candidata | Trayectoria, cargos, rigor, CV descargable |

Problema actual: el sitio está escrito **solo** para el empleador (currículum online:
timeline de empleos, "recontratada por mérito", "blindar a la entidad"). El cliente
llega y no encuentra servicios, confianza ni una vía de contacto de baja fricción.

**Estrategia:** una sola página que **abre para el cliente** (servicios + confianza +
CTA) y **desciende hacia el perfil profesional** (experiencia + educación + CV) para
el empleador. Nadie se va confundido; cada audiencia encuentra su parte.

---

## Arquitectura de la página (nuevo orden de secciones)

```
┌─ NAV ───────────────────────────────────────────────┐
│ Logo · Servicios · Experiencia · Contacto · WhatsApp │  (+ "Hoja de Vida" para empleador)
├─ HERO (dual) ───────────────────────────────────────┤
│ Titular orientado a cliente + subtítulo profesional  │
│ CTA principal: WhatsApp (pre-llenado) · Consulta      │
├─ 01 SERVICIOS / ÁREAS  ← NUEVA, para cliente ────────┤
│ Tarjetas por problema en lenguaje del cliente + CTA   │
├─ 02 CÓMO TRABAJO  ← NUEVA, para cliente ─────────────┤
│ Proceso 1-2-3-4 + honorarios/consulta                 │
├─ 03 TESTIMONIOS / CASOS  ← NUEVA, para cliente ──────┤
│ Prueba social                                         │
├─ 04 EXPERIENCIA  ← existente, reetiquetada ──────────┤
│ Timeline (sirve a ambos: autoridad + empleo)          │
├─ 05 FORMACIÓN + IDIOMAS  ← existente ────────────────┤
├─ 06 HABILIDADES / ÁREAS DE PRÁCTICA  ← existente ────┤
├─ 07 CONTACTO  ← mejorado ────────────────────────────┤
│ Formulario + tarjetas + vCard + CV                    │
├─ WhatsApp flotante (fijo, todo el scroll)  ← NUEVO ──┤
└─ FOOTER ─────────────────────────────────────────────┘
```

Regla de oro: **primero el cliente** (arriba, lo que decide una contratación),
**después el perfil** (abajo, lo que valida un empleador). El CV descargable es el
puente que satisface por completo a la audiencia de empleo sin robar espacio al cliente.

---

## FASE 1 — Reorientar al cliente (alto impacto, sin backend)

### 1.1 Hero de doble lectura
- **Titular** orientado a beneficio del cliente, no al cargo.
  Ej.: "Defiendo tus derechos laborales, pensionales y de familia" +
  subtítulo profesional "Abogada · +14 años · Bogotá".
- **Bio reescrita en segunda persona** (hoy habla como empleada). Enfoque:
  qué problema resuelve para ti, no a quién le blindó la entidad.
- Mantener el badge "+14 años" (sirve a ambas audiencias).
- Archivos: `src/data/profile.ts` (nuevo campo `heroTitle`, `bioClient`),
  `src/components/Portfolio.astro` (hero).

### 1.2 Sección "Servicios / Áreas de práctica" (NUEVA)
Tarjetas en lenguaje del cliente. Cada una: problema + qué hace ella + CTA.
- "¿Te despidieron sin justa causa?" → Derecho Laboral
- "Problemas con tu pensión, EPS o incapacidad" → Seguridad Social / Tutelas
- "Divorcio, sucesión o custodia" → Derecho de Familia
- "Necesitas cobrar una deuda" → Procesos ejecutivos
- "Contratos y asesoría para tu empresa" → Corporativo / Laboral
- Datos: nuevo `export const services` en `profile.ts`.
- Render: nueva sección en `Portfolio.astro`; reutilizar estilo de `edu-card`.

### 1.3 WhatsApp flotante + mensajes pre-llenados
- Botón flotante fijo (esquina inferior derecha), visible en todo el scroll.
- Todos los links de WhatsApp con `?text=` pre-llenado para bajar fricción.
  Ej.: `https://wa.me/573107507846?text=Hola%20Diana,%20necesito%20asesoría%20en...`
- Cada tarjeta de servicio pasa su propio texto ("...asesoría laboral").
- Archivos: `Portfolio.astro` (componente flotante + helper de link),
  opcional helper en `profile.ts`.

### 1.4 Reetiquetar secciones existentes
- "01 Experiencia Laboral" → sigue, pero baja en el orden (ahora ~04).
- Renumerar las etiquetas `section-num` según el nuevo orden.
- "Habilidades" → "Áreas de práctica y habilidades" (ya lo dice; mantener).

---

## FASE 2 — Confianza / credibilidad (barreras de decisión)

### 2.1 Foto profesional real
Reemplazar el monograma "DA" del hero (ya marcado pendiente en README). En servicios
legales la foto genera confianza inmediata. Prioridad alta.
- Archivo: `public/` (imagen optimizada) + `Portfolio.astro` (hero).

### 2.2 Tarjeta profesional verificable
- Número de **Tarjeta Profesional de Abogado** visible (señal de legitimidad).
- Opcional: enlace al Registro Nacional de Abogados (SIRNA).
- Datos: `profile.ts` → `contact` o nuevo `credentials`.

### 2.3 Sección "Cómo trabajo" (NUEVA)
Reduce la incertidumbre del cliente ansioso:
1. Escribes → 2. Consulta inicial → 3. Evaluación del caso → 4. Propuesta y honorarios.
- Una frase sobre honorarios/primera valoración (la opacidad total frena).
- Datos: nuevo `export const process` en `profile.ts`.

### 2.4 Testimonios / casos de éxito (NUEVA)
- 3–5 testimonios (inicial del nombre + tipo de caso), o
- casos anonimizados ("Logré el reintegro de un trabajador despedido...",
  "Tutela fallada a favor en X días").
- Datos: nuevo `export const testimonials` en `profile.ts`.

---

## FASE 3 — SEO local (que la encuentren buscando abogado)

### 3.1 Schema.org LegalService / Attorney
Hoy el JSON-LD es solo `Person`. Añadir tipo `LegalService` / `Attorney` con
`areaServed` (Bogotá), `priceRange`, horarios, `knowsAbout`.
- Archivo: `src/layouts/Layout.astro` (bloque `jsonLd`).

### 3.2 Keywords en títulos y H1
Clientes buscan "abogado laboral Bogotá", "abogado tutela pensión".
- `<title>` y `<h1>` con "Abogada Laboral en Bogotá".
- Descripciones meta con frases de búsqueda reales.
- Archivos: `Layout.astro`, `Portfolio.astro`.

### 3.3 Imagen Open Graph
`twitter:card` es `summary` y no hay imagen OG → el link se ve pobre al compartir
por WhatsApp/redes. Añadir imagen OG (foto + nombre + "Abogada · Bogotá").
- Archivos: `public/og-image.jpg`, `Layout.astro` (meta `og:image`).

### 3.4 Google Business Profile (fuera del sitio, ROI máximo)
Canal #1 de captación legal local. Crear perfil, enlazarlo desde el sitio, pedir
reseñas. No es código, pero es la palanca de mayor retorno para un abogado local.

### 3.5 (Opcional) Páginas por servicio para SEO
Una ruta por área: `/derecho-laboral`, `/tutelas-salud`, `/derecho-familia`.
Cada una rankea por su keyword. Astro lo permite con rutas estáticas + `profile.ts`.
Considerar solo si se invierte en SEO en serio (mantiene más superficie que indexar).

---

## FASE 4 — Conversión y medición

### 4.1 Formulario de solicitud de consulta
Reemplaza/complementa el `mailto`. Campos: nombre, teléfono, tipo de caso, mensaje.
- Sin backend: **Formspree**, **Web3Forms** o **Netlify Forms** (encaja con estático).
- Nota: el deploy actual es GitHub Pages → usar servicio externo (Formspree/Web3Forms),
  no Netlify Forms (requiere hosting Netlify).
- Archivos: nueva sección en `Portfolio.astro`.

### 4.2 Analítica
Sin medición no se sabe qué funciona ni cuántos clic-a-WhatsApp hay.
- **Plausible** o **Umami** (privacidad-friendly, sin banner de cookies) o GA4.
- Medir: visitas, clics a WhatsApp, envíos de formulario, descargas de CV.
- Archivo: `Layout.astro` (script).

---

## FASE 5 — Autoridad a mediano plazo (contenido)

### 5.1 Blog / artículos legales
"¿Cómo poner una tutela por salud?", "Qué hacer si te despiden sin justa causa".
Tráfico orgánico + demostración de experticia.
- **Astro Content Collections** encaja perfecto (Markdown, tipado).

### 5.2 FAQ
Preguntas comunes + rich snippets en Google (schema `FAQPage`).

### 5.3 Recurso descargable ("lead magnet")
"Guía: qué hacer si te despiden" a cambio del email → base de contactos.

---

## FASE 6 — Correcciones de marca / detalles visuales

### 6.1 Logo del nav parte mal el apellido compuesto
Hoy pinta "Tachak" en dorado y "Diana Anzola" en azul (`Portfolio.astro:19-21`),
separando "Tachak" como si fuera aparte. Pero **"Anzola Tachak" es el apellido
completo (compuesto)** — el corte de color lo hace ver roto. Opciones:
- Acento dorado solo en **"Diana"** (nombre de pila), "Anzola Tachak" completo en azul.
- O todo en un color con dorado en un punto/separador.
Regla: nunca cortar el color dentro del apellido compuesto.

### 6.2 Otros detalles técnicos
- **Accesibilidad**: revisar contraste de `--dim` sobre `--bg` y foco de teclado.
- **Fuentes**: hoy Google Fonts vía `@import` (bloquea render). Considerar
  autoalojar Fraunces/Inter o usar `<link>` con `preload` para mejorar LCP.
- **Multiidioma**: "Inglés en progreso" + estancia en Montreal sugieren posible
  público bilingüe; probablemente innecesario para captación local. Baja prioridad.

---

## FASE 7 — Correo profesional `abogada@diana-anzola.com` (reenvío gratis)

Objetivo: recibir en el Gmail existente los correos enviados a
`abogada@diana-anzola.com`, y poder **responder** desde esa dirección. Costo $0.
No es un buzón nuevo; es reenvío (Cloudflare) + "enviar como" (Gmail).

### Parte A — Reenvío en Cloudflare (recepción)

Requisito: el dominio `diana-anzola.com` debe usar los **nameservers de Cloudflare**.
Hoy el DNS apunta A → GitHub Pages; al pasar a Cloudflare se migran esos registros A
(no se pierde el sitio) y se añaden los MX del correo. Conviven sin problema.

1. Crear cuenta gratis en **cloudflare.com** → **Add a site** → `diana-anzola.com`.
2. Cloudflare escanea el DNS actual. Verificar que estén los registros A de GitHub
   Pages (185.199.108–111.153) y el CNAME `www`. Si falta alguno, añadirlo:
   - `A  @  185.199.108.153`
   - `A  @  185.199.109.153`
   - `A  @  185.199.110.153`
   - `A  @  185.199.111.153`
   - `CNAME  www  <usuario>.github.io`
3. Cloudflare da **2 nameservers** (ej. `xxx.ns.cloudflare.com`). Entrar al
   **registrador** donde se compró el dominio y reemplazar los nameservers por esos.
   Propagación: minutos a ~24 h.
4. En Cloudflare, esperar a que el dominio quede **Active** (correo de confirmación).
5. Panel del dominio → **Email** → **Email Routing** → **Get started / Enable**.
   Cloudflare añade solo los registros MX + SPF necesarios (aceptar).
6. **Destination addresses** → añadir el Gmail personal → Gmail recibe un correo de
   verificación → clic en el enlace para confirmar.
7. **Routing rules** → **Create address**:
   - Custom address: `abogada@diana-anzola.com`
   - Action: **Send to** → el Gmail verificado.
   - (Opcional) activar **catch-all** → todo `*@diana-anzola.com` cae al mismo Gmail.
8. Probar: enviar un correo desde otra cuenta a `abogada@diana-anzola.com` →
   debe llegar al Gmail.

### Parte B — "Enviar como" en Gmail (respuesta)

Para que las respuestas salgan desde `abogada@diana-anzola.com` (no desde el Gmail).
Como el reenvío de Cloudflare no envía, Gmail manda vía su propio SMTP.

1. Gmail → ⚙ **Ver toda la configuración** → pestaña **Cuentas e importación**.
2. **Enviar como** → **Añadir otra dirección de correo**.
3. Nombre: `Diana Anzola Tachak` · Correo: `abogada@diana-anzola.com` ·
   dejar marcado **Tratar como alias**.
4. Servidor SMTP: usar el de Gmail:
   - Servidor: `smtp.gmail.com` · Puerto: `587` · TLS.
   - Usuario: el Gmail completo · Contraseña: **contraseña de aplicación** (no la normal).
   - Generar la contraseña de aplicación en: cuenta de Google → **Seguridad** →
     **Verificación en 2 pasos** (debe estar activa) → **Contraseñas de aplicaciones**.
5. Gmail envía un código de verificación a `abogada@diana-anzola.com` → como ya se
   reenvía al Gmail, el código **llega al mismo Gmail** → pegarlo para confirmar.
6. (Opcional) **Cuentas e importación** → "Al responder a un mensaje" →
   **Responder desde la dirección a la que se envió** → así responde automáticamente
   como `abogada@diana-anzola.com` cuando le escriben a esa dirección.
7. Al redactar, en el campo **De** elegir `abogada@diana-anzola.com`.

### Notas
- **Solo reenvío**: no hay bandeja separada; todo vive en el Gmail actual. Suficiente
  para captación. Si algún día quiere buzón propio, migrar a Zoho/Google Workspace
  (cambia MX, el "enviar como" deja de necesitarse).
- **Entregabilidad**: enviar vía SMTP de Gmail mantiene buena reputación. El SPF que
  pone Cloudflare cubre la recepción; para envío, Gmail firma con su DKIM.
- Alias extra sin costo: crear más reglas (`contacto@`, `citas@`) apuntando al mismo
  Gmail cuando se quiera.

---

## Roadmap sugerido (orden de ejecución)

1. **Fase 1** completa — reorienta el sitio al cliente (mayor impacto por esfuerzo).
2. **Fase 6.1** — arreglo rápido del logo (trivial, va junto a Fase 1).
3. **Fase 2** — foto real, tarjeta profesional, "cómo trabajo", testimonios.
4. **Fase 3** — SEO local (schema, keywords, OG) + Google Business Profile.
5. **Fase 4** — formulario + analítica.
6. **Fase 5** — blog/FAQ cuando haya tiempo para contenido sostenido.

Cada fase deja el sitio funcional y desplegable; se pueden hacer de forma incremental.
El CV descargable y la sección Experiencia se mantienen intactos en todo momento →
la utilidad de **portafolio para empleo nunca se pierde**.
</content>
