# CLAUDE.md

Guía para trabajar en este proyecto con Claude Code. Está en español porque así trabaja el cliente/dueño del sitio.

## Qué hace la app

Sitio web de la boda de **Isa & Jorge** (20 de febrero de 2027, Ciudad de México). Es un one-pager editorial, protegido con una sola contraseña compartida para todos los invitados, con estas secciones en orden:

1. **Hero** — nombres, fecha, ciudad.
2. **Nosotros** — tira de fotos de la pareja que se mueve sola (marquee, sin scroll manual).
3. **Cuenta regresiva** — días/horas/min/seg hasta la boda (fondo azul marino).
4. **Programa** — horario del día (ceremonia, cóctel, fiesta).
5. **Cómo llegar** — video propio del viaje Madrid→CDMX + tarjetas de las dos sedes (ceremonia y recepción) con link a Google Maps.
6. **Hospedaje** — bloque "próximamente" (aún sin hoteles confirmados).
7. **Recomendaciones de viaje** — texto + botón para descargar el PDF de la guía de viaje.
8. **Mesa de regalos** — botón a El Corte Inglés + datos de cuenta bancaria.
9. **Código de vestimenta** — texto + galería de 3 looks (traje oscuro, vestido largo, vestido cocktail).
10. **RSVP** — formulario que envía por Web3Forms, con mirror opcional a Google Sheet.

El sitio es **solo en español**, no tiene versión en otro idioma.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config vía `@theme` en `src/index.css`, no hay `tailwind.config.js`)
- **Framer Motion** para las animaciones (fades y reveals sutiles, nada llamativo)
- Sin backend propio: el RSVP pega directo a la API de Web3Forms desde el cliente, y opcionalmente a un Google Apps Script (ver abajo)
- Sin router (una sola página, navegación por anclas `#id`)
- `oxlint` para lint (`npm run lint`)

No hay suite de tests. Para verificar cambios: `npm run dev`, revisar en el navegador, y `npx tsc --noEmit` (o `npm run build`) para chequear tipos antes de hacer deploy.

## Archivos clave

- **`src/lib/wedding.ts`** — fuente única de verdad de los datos de la boda: nombres, fecha (`WEDDING.dateISO`), deadline de RSVP, email de contacto, y las direcciones de las dos sedes (`VENUES`). Si algo de esto cambia, se edita solo aquí.
- **`src/App.tsx`** — orden de las secciones en la página. Todo cuelga de `<PasswordGate>`.
- **`src/components/PasswordGate.tsx`** — la contraseña está hardcodeada ahí (`galleta2023`), guardada en `sessionStorage` una vez desbloqueada.
- **`src/index.css`** — todos los design tokens: paleta de colores, tipografías, la única fuente de verdad de "cómo se ve el sitio". Ver sección de diseño abajo.
- **`src/sections/*.tsx`** — un archivo por sección de la página (nombre del archivo = nombre de la sección).
- **`src/components/ui/*`** — piezas compartidas: `SectionHeading` (el patrón eyebrow + título que usan casi todas las secciones), `Reveal` (wrapper de animación al hacer scroll), `ComingSoon` (bloque "próximamente" reutilizable), `FieldLabel` (labels del formulario RSVP), `icons.tsx` (íconos de línea hechos a mano, no hay librería de íconos), `Amp.tsx` (el símbolo "&" tradicional entre los nombres), `Divider.tsx`.
- **`src/components/GalleryStrip.tsx`** — la tira de fotos que se mueve sola; la animación (`@keyframes gallery-scroll`) vive en `index.css`.
- **`apps-script/Code.gs`** + **`apps-script/README.md`** — código para Google Apps Script (fuera de este repo, se pega manualmente en un Google Sheet del cliente). Guarda cada RSVP como fila y manda confirmación por correo con .ics adjunto. No se despliega con este proyecto; son instrucciones para que el cliente lo configure aparte.
- **`public/media/`** — fotos y video reales (galería "Nosotros", looks de código de vestimenta, video del viaje). `public/guia-viaje-isa-y-jorge.pdf` es la guía de viaje descargable.

## Diseño / estética

Esto es lo más importante a respetar — el cliente ha sido muy explícito en que **no debe verse como una plantilla genérica de boda ni como algo hecho con IA**.

**Paleta** (tokens en `src/index.css`, dentro de `@theme`):
- `--color-paper` (blanco roto) / `--color-paper-deep` (crema) — fondos, alternan entre secciones
- `--color-ink` (azul marino) / `--color-ink-soft` — texto
- `--color-stone` / `--color-stone-soft` — bordes, azul grisáceo
- `--color-gold` / `--color-gold-soft` — acento, dorado suave

**Tipografía:** Fraunces (serif, títulos) + Inter (sans, cuerpo). Cargadas por Google Fonts en `index.html`. El símbolo "&" entre los nombres usa Fraunces en redonda y peso alto (no itálica) vía el componente `Amp` — es una decisión de diseño explícita, no un descuido.

**Regla de mayúsculas:** solo el texto en dorado (`text-gold`, los "eyebrows" tipo `SectionHeading`) va en `uppercase`. Todo el resto del texto (párrafos, labels de formulario, notas) va en mayúscula/minúscula normal. Los botones/CTAs con borde son la excepción — esos sí se quedan en uppercase como convención de UI.

**Otras reglas de estilo aprendidas por feedback directo del cliente:**
- Sin esquinas redondeadas, sin sombras, sin gradientes llamativos — todo con bordes finos (`border-stone-soft`) y espacio en blanco generoso.
- Sin iconografía genérica de librería — todos los íconos son SVG de una sola línea, hechos a mano en `icons.tsx`.
- Animaciones mínimas: fades y reveals al hacer scroll (`Reveal.tsx`), nada más. El marquee de fotos es la única animación continua del sitio.
- Antes de cambiar el tono/estilo de un texto largo, revisar cómo está tratado el resto del sitio — el cliente ha pedido varias veces bajarle el tono a bloques que se veían "demasiado en mayúsculas" o "planos".

## Variables de entorno

Van en un archivo `.env` en la raíz (no está en el repo, hay que crearlo — ver `.env.example`):

```
VITE_WEB3FORMS_KEY=
VITE_SHEET_WEBHOOK_URL=
```

- **`VITE_WEB3FORMS_KEY`** — access key de [Web3Forms](https://web3forms.com), necesaria para que el formulario RSVP envíe correos de verdad. Sin esto, el formulario falla silenciosamente y muestra un mensaje de respaldo con un `mailto:`.
- **`VITE_SHEET_WEBHOOK_URL`** — URL del Google Apps Script desplegado (ver `apps-script/README.md`). Opcional: si no está configurada, el sitio funciona igual, solo no se guarda el mirror en Sheet ni se manda la confirmación con calendario al invitado.

Estas mismas variables están configuradas en el proyecto de Vercel (Settings → Environment Variables) para producción. Si cambian, hay que actualizarlas ahí también, no solo en `.env` local.

## Deploy

El sitio se despliega a Vercel, **sin conectar el repo de GitHub** — el flujo es deploy manual desde la CLI:

```bash
npx vercel --prod
```

Esto sube el proyecto `fully-promoted-qro/isa-jorge-wedding` en Vercel. El dominio de producción es **isayjorge.es** (registrado en GoDaddy, con un registro DNS tipo A apuntando a Vercel), con alias también en `isa-jorge-wedding.vercel.app`.

Para desarrollo local:

```bash
npm install
npm run dev     # http://localhost:5190 (puerto fijo, ver .claude/launch.json si existe)
```

**Importante:** aunque el código ahora vive en GitHub, el deploy sigue siendo manual vía `vercel --prod` después de cada cambio — GitHub aquí es solo control de versiones, no dispara despliegues automáticos.
