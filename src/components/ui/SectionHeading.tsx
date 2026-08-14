interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, align = "center" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <p className="font-sans text-[11px] uppercase tracking-widest text-gold">
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] text-ink text-balance ${isCenter ? "mx-auto" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
