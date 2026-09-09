import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

const BANK_DETAILS = [
  { label: "Titular", value: "Jorge Saceda Hernández" },
  { label: "Banco", value: "Banco Santander España" },
  { label: "IBAN", value: "ES41 0049 6103 9429 1612 5058" },
  { label: "SWIFT/BIC", value: "BSCHESMMXXX" },
] as const;

export function MesaRegalos() {
  return (
    <section id="mesa-regalos" className="bg-paper-deep px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Un gesto" title="Mesa de regalos" />

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-md text-center">
        <p className="font-sans text-sm leading-relaxed text-ink-soft">
          Su presencia y compañía son el mejor regalo que podemos recibir. Para
          quienes deseen tener un gesto adicional con nosotros, hemos dejado
          una mesa de regalos a su disposición.
        </p>

        <a
          href="https://www.elcorteingles.es/listas/bodamas/eventos/ikxzcf-boda-de-jorge-y-isabel-galguera-pintado/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-ink/35 px-8 py-3 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          Ver mesa de regalos en El Corte Inglés
        </a>
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-sm border border-stone-soft p-8 text-center sm:p-10">
        <p className="font-sans text-[11px] uppercase tracking-widest text-gold">
          Cuenta bancaria
        </p>
        <dl className="mt-5 space-y-3">
          {BANK_DETAILS.map((item) => (
            <div key={item.label}>
              <dt className="font-sans text-xs text-ink-soft">{item.label}</dt>
              <dd className="mt-0.5 font-serif text-base text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
