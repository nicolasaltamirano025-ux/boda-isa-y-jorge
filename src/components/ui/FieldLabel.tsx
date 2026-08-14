export function FieldLabel({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="block font-sans text-xs tracking-wide text-ink">
      {children}
    </label>
  );
}
