import { Reveal } from "../components/ui/Reveal";
import { useCountdown } from "../lib/useCountdown";
import { WEDDING } from "../lib/wedding";

const UNITS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

export function Countdown() {
  const time = useCountdown(WEDDING.dateISO);

  return (
    <section className="bg-ink px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-sans text-[11px] uppercase tracking-widest text-gold">
          Cuenta regresiva
        </p>
        <p className="mt-4 font-serif text-2xl italic text-paper/80">
          Faltan pocos días para celebrarlo juntos
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-16 flex max-w-2xl justify-center divide-x divide-paper/15">
        {UNITS.map((unit) => (
          <div key={unit.key} className="flex flex-1 flex-col items-center px-3 sm:px-8">
            <span className="font-serif text-[clamp(2rem,6vw,3.5rem)] leading-none text-paper tabular-nums">
              {String(time[unit.key]).padStart(2, "0")}
            </span>
            <span className="mt-3 font-sans text-[10px] tracking-widest text-paper/60">
              {unit.label}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
