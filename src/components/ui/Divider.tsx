export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto h-px w-12 bg-gold/60 ${className}`} aria-hidden="true" />
  );
}
