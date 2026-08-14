import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ComingSoon } from "../components/ui/ComingSoon";
import { IconBed } from "../components/ui/icons";

export function Hospedaje() {
  return (
    <section id="hospedaje" className="bg-paper-deep px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Descanso" title="Hospedaje" />

      <Reveal delay={0.1} className="mx-auto mt-16 max-w-md">
        <ComingSoon
          icon={IconBed}
          title="Recomendaciones en camino"
          note="Estamos terminando de definir las recomendaciones de hoteles con nuestra wedding planner. Próximamente compartiremos las opciones sugeridas y, en caso de aplicar, los códigos de reserva para invitados."
        />
      </Reveal>
    </section>
  );
}
