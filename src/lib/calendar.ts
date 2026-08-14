import { WEDDING } from "./wedding";

function toUtcBasic(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Boda de ${WEDDING.bride} & ${WEDDING.groom}`,
    dates: `${toUtcBasic(WEDDING.dateISO)}/${toUtcBasic(WEDDING.endISO)}`,
    details: "¡Nos vemos ahí! Más detalles en isa-jorge-wedding.vercel.app",
    location: WEDDING.city,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
