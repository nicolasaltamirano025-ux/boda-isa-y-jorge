import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

export function DressCode() {
  return (
    <section id="dress-code" className="bg-paper px-6 py-16 sm:py-24">
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

      <Reveal delay={0.18} className="mx-auto mt-14 max-w-xl">
        <img
          src="/media/dresscode/looks.webp"
          alt="Traje oscuro y vestido largo, ilustración del código de vestimenta"
          width={900}
          height={806}
          className="mx-auto h-auto w-full max-w-md"
          loading="lazy"
          decoding="async"
        />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-md text-center">
        <div className="mx-auto h-px w-8 bg-gold/60" aria-hidden="true" />

        <p className="mt-10 font-serif text-base italic text-ink-soft">
          El blanco queda reservado para la novia.
        </p>
      </Reveal>
    </section>
  );
}
