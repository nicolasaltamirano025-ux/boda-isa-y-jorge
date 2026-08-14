import { WEDDING } from "../lib/wedding";
import { Amp } from "./ui/Amp";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-center">
      <p className="font-serif text-2xl text-paper">
        {WEDDING.bride} <Amp className="mx-2 text-gold-soft" /> {WEDDING.groom}
      </p>
      <p className="mt-3 font-sans text-xs tracking-wide text-paper/80">
        {WEDDING.dateLabel} · {WEDDING.city}
      </p>
    </footer>
  );
}
