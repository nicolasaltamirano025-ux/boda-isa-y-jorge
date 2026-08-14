// The couple's ampersand — a traditional, clearly-legible "&", never a decorative swash.
export function Amp({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif font-semibold ${className}`} style={{ fontVariationSettings: '"opsz" 144' }}>
      &amp;
    </span>
  );
}
