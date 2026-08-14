import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { IconRings, IconGlass, IconMusic } from "../components/ui/icons";

const SCHEDULE = [
  {
    time: "16:00",
    label: "Ceremonia religiosa",
    note: "Parroquia Santa Teresita del Niño Jesús",
    icon: IconRings,
  },
  {
    time: "18:30",
    label: "Cóctel y recepción",
    note: "Bienvenida y bocadillos en Terraza Interlomas",
    icon: IconGlass,
  },
  {
    time: null,
    label: "Fiesta",
    note: "",
    icon: IconMusic,
  },
] as const;

export function Programa() {
  return (
    <section id="programa" className="bg-paper px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="El día" title="Programa" />

      <div className="mx-auto mt-16 max-w-xl">
        {SCHEDULE.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <div className="flex items-center gap-6 border-t border-stone-soft py-6 first:border-t-0 sm:gap-10">
              <span className="w-16 shrink-0 font-serif text-xl text-gold sm:w-20 sm:text-2xl">
                {item.time ?? ""}
              </span>
              <item.icon className="h-10 w-10 shrink-0 text-gold" />
              <div>
                <p className="font-serif text-xl text-ink sm:text-2xl">{item.label}</p>
                {item.note && (
                  <p className="mt-1 font-sans text-sm text-ink-soft">{item.note}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center font-sans text-sm text-ink-soft">
        Los horarios están definidos, aunque podrían tener algún pequeño
        ajuste más adelante.
      </p>
    </section>
  );
}
