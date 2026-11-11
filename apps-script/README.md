# Google Sheet de RSVPs

Cada RSVP enviado desde el sitio se guarda como una fila en un Google Sheet,
además del correo que manda Web3Forms. El Sheet es el respaldo permanente:
el plan gratis de Web3Forms solo muestra los últimos 30 días.

## Dónde vive

- Sheet: "RSVP Boda Isa & Jorge", en el Drive de Nicolás, compartido como
  editor con isayjorge2027@gmail.com.
  https://docs.google.com/spreadsheets/d/162P36DB0NpxrENpBHk-XLNj9osiSXW4cUYWQW8LxJZs/edit
- Conectado desde el 2026-11-11. Los RSVP anteriores a esa fecha no están en
  el Sheet salvo los agregados a mano.

## Cómo está conectado

- El Sheet tiene una hoja llamada `RSVPs` (si no existe, el script la crea
  con los encabezados la primera vez).
- `Code.gs` vive en `Extensiones > Apps Script` de ese Sheet, desplegado como
  Aplicación web (Ejecutar como: Yo, Acceso: Cualquier usuario).
- La URL de esa aplicación web va en la variable `VITE_SHEET_WEBHOOK_URL`
  (en `.env` local y en Vercel > Environment Variables). El formulario
  (`src/sections/RSVP.tsx`) le hace POST en cada envío.

## Si cambias el script

Después de editar `Code.gs` en Apps Script hay que ir a
`Implementar > Gestionar implementaciones > Editar > Versión: Nueva` para que
la URL publicada use el código nuevo (la URL no cambia).
