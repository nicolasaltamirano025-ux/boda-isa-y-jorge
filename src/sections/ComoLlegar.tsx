import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TravelVideo } from "../components/TravelVideo";
import { VenueCard } from "../components/VenueCard";
import { VENUES } from "../lib/wedding";

export function ComoLlegar() {
  return (
    <section id="como-llegar" className="bg-paper px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Cómo llegar" title="Rumbo a la boda" />

      <Reveal delay={0.1} className="mt-16">
        <TravelVideo />
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
        <Reveal delay={0.1}>
          <VenueCard {...VENUES.ceremony} />
        </Reveal>
        <Reveal delay={0.18}>
          <VenueCard {...VENUES.reception} />
        </Reveal>
      </div>
    </section>
  );
}
