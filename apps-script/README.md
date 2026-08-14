# Google Sheet + confirmación por correo (RSVP)

Esto hace que cada RSVP se guarde como fila en un Google Sheet tuyo, y que
si el invitado confirma asistencia, le llegue un correo con los datos del
evento y un archivo de calendario adjunto.

## Pasos (una sola vez)

1. Crea un Google Sheet nuevo (en la cuenta de Google donde quieran ver los RSVPs).
2. Renombra la primera hoja a `RSVPs` y agrega esta fila de encabezados en A1:
   `Fecha | Nombre | Email | Teléfono | Asistencia | Asistentes | Acompañante | Restricciones | Hospedaje | Comentarios`
3. Ve a `Extensiones > Apps Script`.
4. Borra el contenido de `Code.gs` y pega el contenido del archivo `Code.gs` de esta carpeta.
5. Arriba a la derecha: `Implementar > Nueva implementación`.
6. Tipo: `Aplicación web`. Ejecutar como: `Yo`. Quién tiene acceso: `Cualquier usuario`.
7. Autoriza los permisos que pida Google (son tu propio Sheet y tu propio Gmail).
8. Copia la URL que te da ("URL de la aplicación web") y pásamela.

Con esa URL, la agrego como `VITE_SHEET_WEBHOOK_URL` en el proyecto y quedan
conectados el Sheet y el correo de confirmación.
