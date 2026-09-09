import type { SVGProps } from "react";

// Custom single-stroke line icons — same weight as the Hero corner marks.
// Never a generic icon-font glyph.

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconRings(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="14" r="5.2" />
      <circle cx="15" cy="14" r="5.2" />
    </Icon>
  );
}

export function IconGlass(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M6 4h12l-5 9.5v6.5" />
      <path d="M9 20h6" />
      <path d="M12 13.5v6.5" />
      <path d="M6.8 8h10.4" />
    </Icon>
  );
}

export function IconMusic(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M9 18V5.5L19 4v12.5" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </Icon>
  );
}
