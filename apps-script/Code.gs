// Google Apps Script — pega este código completo en Extensions > Apps Script
// de tu Google Sheet, y despliega como Web App (ver README.md en esta carpeta).

const WEDDING = {
  bride: "Isa",
  groom: "Jorge",
  dateStart: "20270220T160000", // hora local CDMX
  dateEnd: "20270221T020000",
  city: "Ciudad de México",
  siteUrl: "https://isayjorge.es",
};

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RSVPs") ||
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    new Date(),
    body.nombre || "",
    body.email || "",
    body.telefono || "",
    body.asistencia || "",
    body.asistentes || "",
    body.acompanante || "",
    body.restricciones || "",
    body.hospedaje || "",
    body.comentarios || "",
  ]);

  if (body.email && String(body.asistencia).indexOf("Sí") === 0) {
    sendConfirmationEmail(body);
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendConfirmationEmail(body) {
  const nombre = body.nombre || "";
  const ics = buildIcs();
  const subject = `Confirmado: la boda de ${WEDDING.bride} & ${WEDDING.groom}`;
  const htmlBody = `
    <p>Hola ${nombre},</p>
    <p>Confirmamos tu asistencia a la boda de ${WEDDING.bride} & ${WEDDING.groom}.</p>
    <p><strong>20 de febrero de 2027</strong><br>${WEDDING.city}</p>
    <p>Adjuntamos un evento de calendario (.ics) para que lo agregues donde prefieras.</p>
    <p>Toda la información sigue disponible en <a href="${WEDDING.siteUrl}">${WEDDING.siteUrl}</a>.</p>
    <p>¡Nos vemos pronto!</p>
  `;

  MailApp.sendEmail({
    to: body.email,
    subject: subject,
    htmlBody: htmlBody,
    attachments: [
      Utilities.newBlob(ics, "text/calendar", "boda-isa-jorge.ics"),
    ],
  });
}

function buildIcs() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Isa & Jorge Wedding//ES",
    "BEGIN:VEVENT",
    `DTSTART;TZID=America/Mexico_City:${WEDDING.dateStart}`,
    `DTEND;TZID=America/Mexico_City:${WEDDING.dateEnd}`,
    `SUMMARY:Boda de ${WEDDING.bride} & ${WEDDING.groom}`,
    `LOCATION:${WEDDING.city}`,
    `DESCRIPTION:Más información en ${WEDDING.siteUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
