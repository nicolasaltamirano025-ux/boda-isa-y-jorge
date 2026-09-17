import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

export function RecomendacionesViaje() {
  return (
    <section id="que-hacer" className="bg-paper px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Ciudad de México" title="Recomendaciones de viaje" />

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
        <div className="space-y-4 font-sans text-sm leading-relaxed text-ink-soft sm:text-base">
          <p>
            Para quienes viajan desde fuera de México, preparamos un PDF con
            una pequeña guía de la ciudad: lugares para visitar, restaurantes
            recomendados, tips prácticos y recomendaciones que pueden
            ayudarles a organizar mejor su viaje.
          </p>
          <p>
            La Ciudad de México es maravillosa: llena de historia, cultura,
            comida increíble y rincones muy especiales. Esperamos que esta
            guía les ayude a disfrutarla al máximo antes o después de la
            boda.
          </p>
        </div>

        <a
          href="/guia-viaje-isa-y-jorge.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-ink/20 px-8 py-3 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          Descargar guía de viaje
        </a>
      </Reveal>
    </section>
  );
}
