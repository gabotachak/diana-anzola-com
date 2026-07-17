# diana-anzola.com

Portafolio profesional de **Diana Milena Anzola Tachak**, abogada especialista
en Derecho Laboral y Seguridad Social. Sitio estático construido con Astro +
Tailwind CSS v4.

## Stack

- [Astro](https://astro.build) — generador de sitio estático
- [Tailwind CSS v4](https://tailwindcss.com) — estilos
- Sin backend, sin base de datos: todo el contenido vive en `src/data/profile.ts`

## Estructura

```
src/
  components/Portfolio.astro   # todas las secciones de la página
  data/profile.ts              # contenido: experiencia, educación, contacto
  layouts/Layout.astro         # <head>, SEO, JSON-LD
  pages/index.astro            # ensambla Portfolio.astro
  pages/404.astro
  styles/global.css            # paleta, tipografía, componentes CSS
public/
  CNAME                        # dominio personalizado (diana-anzola.com)
  cv-diana-anzola-tachak.pdf   # hoja de vida descargable
  diana-anzola.vcf             # vCard para "Guardar contacto"
```

## Editar contenido

Toda la información (experiencia laboral, educación, habilidades, datos de
contacto) está en `src/data/profile.ts`. No hay CMS: para actualizar el sitio,
edita ese archivo y vuelve a desplegar.

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila a `./dist/` |
| `npm run preview` | Previsualiza el build localmente |

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que compila el
sitio y lo publica en GitHub Pages con el dominio personalizado
`diana-anzola.com` (archivo `public/CNAME`).

Para que el dominio funcione, configura en el proveedor de DNS:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<usuario>.github.io` |

Y en GitHub: **Settings → Pages → Custom domain** → `diana-anzola.com` →
habilitar "Enforce HTTPS" una vez el DNS propague.

## Pendiente

- Reemplazar el monograma "DA" del hero por una foto real cuando esté
  disponible.
