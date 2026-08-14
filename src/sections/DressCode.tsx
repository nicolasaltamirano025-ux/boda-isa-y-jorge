import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

const LOOKS = [
  { src: "/media/dresscode/traje-oscuro.jpg", label: "Traje oscuro" },
  { src: "/media/dresscode/vestido-largo.jpg", label: "Vestido largo" },
  { src: "/media/dresscode/vestido-cocktail.jpg", label: "Vestido cocktail" },
] as const;

export function DressCode() {
  return (
    <section id="dress-code" className="bg-paper px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Código de vestimenta" title="Formal elegante" />

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-md text-center">
        <div className="flex justify-center gap-10 font-sans text-sm text-ink-soft sm:gap-16">
          <div>
            <p className="font-serif text-lg text-ink">Hombres</p>
            <p className="mt-1">Traje oscuro</p>
          </div>
          <div>
            <p className="font-serif text-lg text-ink">Mujeres</p>
            <p className="mt-1">Vestido largo o de cocktail</p>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        {LOOKS.map((look, index) => (
          <Reveal key={look.src} delay={0.15 + index * 0.08}>
            <div className="border border-stone-soft p-2">
              <img
                src={look.src}
                alt={look.label}
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <p className="mt-3 pb-1 text-center font-sans text-[11px] uppercase tracking-widest text-gold">
                {look.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-md text-center">
        <div className="mx-auto h-px w-8 bg-gold/60" aria-hidden="true" />

        <p className="mt-10 font-serif text-base italic text-ink-soft">
          El blanco queda reservado para la novia.
        </p>
      </Reveal>
    </section>
  );
}
