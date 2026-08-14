import type { ComponentType, SVGProps } from "react";

interface ComingSoonProps {
  title: string;
  note: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

// Editorial treatment for content that isn't ready yet — never a bare "coming soon" label.
export function ComingSoon({ title, note, icon: IconComponent }: ComingSoonProps) {
  return (
    <div className="border border-stone-soft px-8 py-14 text-center sm:px-16 sm:py-20">
      {IconComponent && <IconComponent className="mx-auto mb-6 h-12 w-12 text-gold" />}
      <p className="font-serif text-2xl italic text-ink sm:text-3xl">{title}</p>
      <div className="mx-auto mt-6 h-px w-8 bg-gold/60" aria-hidden="true" />
      <p className="mx-auto mt-6 max-w-sm font-sans text-sm leading-relaxed text-ink-soft">
        {note}
      </p>
    </div>
  );
}
