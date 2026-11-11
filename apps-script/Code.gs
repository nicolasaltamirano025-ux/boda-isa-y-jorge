// Google Apps Script vinculado al Google Sheet de RSVPs.
// Cada envío del formulario del sitio agrega una fila a la hoja "RSVPs".
// Despliegue: Implementar > Nueva implementación > Aplicación web
// (Ejecutar como: Yo, Acceso: Cualquier usuario). Ver README.md.

const HEADERS = [
  "Fecha",
  "Nombre",
  "Email",
  "Teléfono",
  "Asistencia",
  "Asistentes",
  "Acompañante",
  "Restricciones",
  "Hospedaje / transporte",
  "Comentarios",
];

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("RSVPs") || ss.insertSheet("RSVPs");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

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

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Ejecutar una vez desde el editor: crea la hoja con encabezados y dispara la autorización.
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("RSVPs") || ss.insertSheet("RSVPs");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
}
