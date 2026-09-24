import { motion } from "framer-motion";
import { PARENTS, WEDDING } from "../lib/wedding";
import { Amp } from "../components/ui/Amp";

function CornerMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute h-5 w-5 text-ink/25 ${className}`}
      aria-hidden="true"
    >
      <path d="M0 0 L24 0" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M0 0 L0 24" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function ParentsColumn({
  parents,
  className,
}: {
  parents: (typeof PARENTS)["bride"];
  className: string;
}) {
  return (
    <div className={`font-serif text-[13px] leading-relaxed text-ink-soft sm:text-sm ${className}`}>
      {parents.map((parent) => (
        <p key={parent.name}>
          {parent.name}
          {parent.deceased && (
            <>
              <span className="ml-1 text-gold" aria-hidden="true">†</span>
              <span className="sr-only"> (q. e. p. d.)</span>
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(88svh-4.5rem)] flex-col overflow-hidden bg-paper px-6">
      <div className="pointer-events-none absolute inset-4 border border-ink/10 sm:inset-8" aria-hidden="true" />
      <CornerMark className="left-4 top-4 sm:left-8 sm:top-8" />
      <CornerMark className="right-4 top-4 rotate-90 sm:right-8 sm:top-8" />
      <CornerMark className="bottom-4 left-4 -rotate-90 sm:bottom-8 sm:left-8" />
      <CornerMark className="bottom-4 right-4 rotate-180 sm:bottom-8 sm:right-8" />

      <div className="relative flex flex-1 items-center justify-center py-12 sm:py-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs tracking-wide text-ink-soft">
            Nos casamos
          </p>

          <h1 className="mt-6 font-serif text-[clamp(3rem,11vw,7.5rem)] leading-[0.95] text-ink">
            {WEDDING.bride}
            <Amp className="mx-4 text-gold sm:mx-6" />
            {WEDDING.groom}
          </h1>

          <div className="mt-8 h-px w-10 bg-gold/60" aria-hidden="true" />

          <p className="mt-8 font-sans text-sm tracking-[0.15em] text-ink">
            {WEDDING.dateLabel}
          </p>
          <p className="mt-2 font-serif text-lg italic text-ink-soft">
            {WEDDING.city}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto flex w-full max-w-2xl justify-between gap-6 px-4 pb-12 sm:px-0 sm:pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <ParentsColumn parents={PARENTS.bride} className="text-left" />
        <ParentsColumn parents={PARENTS.groom} className="text-right" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-ink/0 via-ink/30 to-ink/0"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        aria-hidden="true"
      />
    </section>
  );
}
