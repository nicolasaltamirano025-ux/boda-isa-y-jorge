import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Amp } from "./ui/Amp";

const LINKS = [
  { href: "#programa", label: "Programa" },
  { href: "#como-llegar", label: "Cómo llegar" },
  { href: "#hospedaje", label: "Hospedaje" },
  { href: "#que-hacer", label: "Recomendaciones de viaje" },
  { href: "#mesa-regalos", label: "Mesa de regalos" },
  { href: "#dress-code", label: "Dress code" },
  { href: "#rsvp", label: "RSVP" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  function handleNavigate(href: string) {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollTop() {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-stone-soft bg-paper px-6 py-4 sm:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTop();
          }}
          className="font-serif text-lg text-ink"
        >
          I<Amp className="mx-1 text-gold" />J
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="font-sans text-[11px] uppercase tracking-widest text-ink"
        >
          Menú
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 font-sans text-[11px] uppercase tracking-widest text-paper sm:right-8"
            >
              Cerrar
            </button>

            <nav className="flex flex-col items-center gap-6">
              {LINKS.map((link, index) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavigate(link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-2xl italic text-paper/90 transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
