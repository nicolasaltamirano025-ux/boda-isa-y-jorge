interface HotelCardProps {
  name: string;
  address: string;
  dates: string;
  code?: string;
  mapsQuery: string;
}

export function HotelCard({ name, address, dates, code, mapsQuery }: HotelCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  return (
    <div className="border border-stone-soft p-8 text-center sm:p-10">
      <p className="font-serif text-xl text-ink">{name}</p>
      <p className="mt-2 font-sans text-sm text-ink-soft">{address}</p>

      <div className="mx-auto mt-5 h-px w-8 bg-gold/60" aria-hidden="true" />

      <p className="mt-5 font-sans text-[11px] uppercase tracking-widest text-gold">
        Tarifa especial para invitados
      </p>
      <p className="mt-2 font-sans text-sm text-ink-soft">{dates}</p>
      <p className="mt-1 font-sans text-sm text-ink-soft">
        {code ? (
          <>Código: <span className="text-ink">{code}</span></>
        ) : (
          "Código de reserva: pendiente de confirmar"
        )}
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block border border-ink/35 px-6 py-2.5 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
      >
        Ver hotel
      </a>
    </div>
  );
}
