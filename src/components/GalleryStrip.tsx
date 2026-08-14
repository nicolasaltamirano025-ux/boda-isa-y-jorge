const PHOTOS = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/media/gallery/gallery-${n}.jpg`;
});

// Rendered twice back-to-back so the marquee can loop seamlessly at -50%.
const LOOP = [...PHOTOS, ...PHOTOS];

export function GalleryStrip() {
  return (
    <section className="overflow-hidden bg-paper py-16 sm:py-20">
      <p className="text-center font-sans text-[11px] uppercase tracking-widest text-gold">
        Nosotros
      </p>

      <div
        className="mt-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
        }}
      >
        <div className="flex w-max animate-gallery-scroll gap-3 sm:gap-4">
          {LOOP.map((src, i) => (
            <div key={i} className="shrink-0 border border-stone-soft bg-paper p-1">
              <img
                src={src}
                alt="Isa y Jorge"
                width={800}
                height={1000}
                className="h-[190px] w-auto object-cover sm:h-[240px]"
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
