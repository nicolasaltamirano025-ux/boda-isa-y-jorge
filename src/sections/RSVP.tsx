import { useState, type FormEvent } from "react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FieldLabel } from "../components/ui/FieldLabel";
import { WEDDING } from "../lib/wedding";
import { googleCalendarUrl } from "../lib/calendar";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const SHEET_WEBHOOK_URL = import.meta.env.VITE_SHEET_WEBHOOK_URL as string | undefined;

type Attendance = "si" | "no" | null;
type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border-0 border-b border-ink/30 bg-transparent py-2 font-sans text-sm text-ink placeholder:text-stone focus:border-gold focus:outline-none";

function ToggleOption({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 border px-4 py-3 font-sans text-sm tracking-wide transition-colors duration-300 ${
        active
          ? "border-gold bg-gold text-paper"
          : "border-ink/35 text-ink hover:border-gold hover:text-gold"
      }`}
    >
      {children}
    </button>
  );
}

export function RSVP() {
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [lodgingHelp, setLodgingHelp] = useState<boolean | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const asistenciaLabel = attendance === "si" ? "Sí asistirá" : "No podrá asistir";
    const hospedajeLabel =
      lodgingHelp === null ? "Sin especificar" : lodgingHelp ? "Sí, quiere ayuda con hospedaje/transporte" : "No, gracias";

    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `RSVP — ${data.get("nombre")}`);
    data.append("asistencia", asistenciaLabel);
    data.append("hospedaje", hospedajeLabel);

    setStatus("sending");

    // Best-effort mirror to the Sheet + guest confirmation email — never blocks the RSVP itself.
    if (SHEET_WEBHOOK_URL) {
      fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify({
          nombre: formData.get("nombre"),
          email: formData.get("email"),
          telefono: formData.get("telefono"),
          asistencia: asistenciaLabel,
          asistentes: formData.get("asistentes"),
          acompanante: formData.get("acompanante"),
          restricciones: formData.get("restricciones"),
          hospedaje: hospedajeLabel,
          comentarios: formData.get("comentarios"),
        }),
      }).catch(() => {});
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section id="rsvp" className="bg-paper-deep px-6 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-md text-center">
          <p className="font-serif text-3xl italic text-ink">Gracias.</p>
          <p className="mt-6 font-sans text-sm leading-relaxed text-ink-soft">
            Recibimos tu confirmación. Nos hace muchísima ilusión celebrar
            contigo este día.
          </p>
          {attendance === "si" && (
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block border border-ink/35 px-8 py-3 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Agregar a Google Calendar
            </a>
          )}
        </Reveal>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-paper-deep px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Confirmación" title="RSVP" />

      <Reveal delay={0.1} className="mx-auto mt-6 max-w-md text-center">
        <p className="font-sans text-sm text-ink-soft">
          Antes del {WEDDING.rsvpDeadlineLabel}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-14 max-w-md border border-stone-soft bg-paper p-8 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <FieldLabel htmlFor="nombre">Nombre completo</FieldLabel>
            <input id="nombre" name="nombre" required className={inputClass} />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
            <div>
              <FieldLabel htmlFor="telefono">Teléfono</FieldLabel>
              <input id="telefono" name="telefono" type="tel" className={inputClass} placeholder="Opcional" />
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="asistencia">Asistencia</FieldLabel>
            <div id="asistencia" className="mt-3 flex gap-3">
              <ToggleOption active={attendance === "si"} onClick={() => setAttendance("si")}>
                Ahí estaré
              </ToggleOption>
              <ToggleOption active={attendance === "no"} onClick={() => setAttendance("no")}>
                No podré asistir
              </ToggleOption>
            </div>
          </div>

          {attendance === "si" && (
            <>
              <div>
                <FieldLabel htmlFor="asistentes">Número de asistentes</FieldLabel>
                <input
                  id="asistentes"
                  name="asistentes"
                  type="number"
                  min={1}
                  defaultValue={1}
                  className={inputClass}
                />
              </div>

              <div>
                <FieldLabel htmlFor="acompanante">Acompañante</FieldLabel>
                <input id="acompanante" name="acompanante" className={inputClass} placeholder="Nombre (opcional)" />
              </div>

              <div>
                <FieldLabel htmlFor="restricciones">Restricciones alimentarias</FieldLabel>
                <textarea
                  id="restricciones"
                  name="restricciones"
                  rows={2}
                  className={`${inputClass} resize-none`}
                  placeholder="Opcional"
                />
              </div>

              <div>
                <FieldLabel htmlFor="hospedaje">¿Necesitas ayuda con hospedaje o transporte?</FieldLabel>
                <div id="hospedaje" className="mt-3 flex gap-3">
                  <ToggleOption active={lodgingHelp === true} onClick={() => setLodgingHelp(true)}>
                    Sí
                  </ToggleOption>
                  <ToggleOption active={lodgingHelp === false} onClick={() => setLodgingHelp(false)}>
                    No
                  </ToggleOption>
                </div>
              </div>
            </>
          )}

          <div>
            <FieldLabel htmlFor="comentarios">Mensaje o comentarios</FieldLabel>
            <textarea
              id="comentarios"
              name="comentarios"
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="Opcional"
            />
          </div>

          <button
            type="submit"
            disabled={!attendance || status === "sending"}
            className="w-full border border-ink/35 py-4 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors duration-300 hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "sending" ? "Enviando…" : "Enviar confirmación"}
          </button>

          {status === "error" && (
            <p className="text-center font-sans text-xs text-gold">
              No pudimos enviar tu confirmación. Por favor escríbenos directamente a{" "}
              <a href={`mailto:${WEDDING.rsvpEmail}`} className="underline">
                {WEDDING.rsvpEmail}
              </a>
              .
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}
