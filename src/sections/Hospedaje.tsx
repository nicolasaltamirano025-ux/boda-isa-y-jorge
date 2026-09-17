import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { HotelCard } from "../components/HotelCard";

const HOTELS = [
  {
    name: "City Express Plus by Marriott Ciudad de México Interlomas",
    address: "Blvd. Palmas Hills 1-2, Valle de las Palmas, 52787 Huixquilucan, Estado de México",
    dates: "14 al 25 de febrero de 2027",
    code: "ISABEL Y JORGE",
    mapsQuery: "City Express Plus by Marriott Ciudad de México Interlomas, Blvd. Palmas Hills 1-2, Huixquilucan",
  },
  {
    name: "Live Aqua Ciudad de México Bosques de las Lomas",
    address: "Paseo de los Tamarindos 98, Bosques de las Lomas, 05120 Ciudad de México",
    dates: "15 al 22 de febrero de 2027",
    mapsQuery: "Live Aqua Ciudad de México Bosques de las Lomas, Paseo de los Tamarindos 98",
  },
] as const;

export function Hospedaje() {
  return (
    <section id="hospedaje" className="bg-paper-deep px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Descanso" title="Hospedaje" />

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {HOTELS.map((hotel, index) => (
          <Reveal key={hotel.name} delay={0.1 + index * 0.08}>
            <HotelCard {...hotel} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
