interface VenueCardProps {
  label: string;
  name: string;
  address: string;
  mapsQuery: string;
}

export function VenueCard({ label, name, address, mapsQuery }: VenueCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  return (
    <div className="border border-stone-soft p-8 text-center sm:p-10">
      <p className="font-sans text-[11px] uppercase tracking-widest text-gold">{label}</p>
      <p className="mt-3 font-serif text-xl text-ink">{name}</p>
      <p className="mt-2 font-sans text-sm text-ink-soft">{address}</p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block font-sans text-[11px] uppercase tracking-widest text-gold underline decoration-gold/40 underline-offset-4 transition-colors duration-300 hover:text-ink"
      >
        Ver en el mapa
      </a>
    </div>
  );
}
