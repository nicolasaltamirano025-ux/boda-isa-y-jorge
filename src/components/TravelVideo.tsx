export function TravelVideo() {
  return (
    <div className="mx-auto w-full max-w-3xl border border-stone-soft p-2">
      <video
        className="aspect-video w-full object-cover"
        src="/media/viaje-madrid-cdmx.mp4"
        poster="/media/viaje-madrid-cdmx-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <p className="sr-only">
        Ruta aérea de Madrid a Ciudad de México. Estamos a unas 9 horas de
        vuelo.
      </p>
    </div>
  );
}
