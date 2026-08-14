import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { Amp } from "./ui/Amp";

const SESSION_KEY = "ij-2027-access";
const SITE_PASSWORD = "galleta2023";

function hasAccess(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "granted";
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(hasAccess);
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (value.trim().toLowerCase() === SITE_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "granted");
      setUnlocked(true);
    } else {
      setInvalid(true);
      setTimeout(() => setInvalid(false), 900);
    }
  }

  return (
    <>
      <AnimatePresence>
        {!unlocked && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-paper px-6"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex w-full max-w-xs flex-col items-center text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-3xl tracking-wide text-ink">
                I<Amp className="mx-2 text-gold" />J
              </p>
              <div className="mt-4 h-px w-8 bg-gold/60" aria-hidden="true" />
              <p className="mt-4 font-sans text-[11px] uppercase tracking-widest text-ink-soft">
                20 · 02 · 2027
              </p>

              <form onSubmit={handleSubmit} className="mt-12 w-full">
                <label htmlFor="site-password" className="sr-only">
                  Contraseña de acceso
                </label>
                <motion.input
                  id="site-password"
                  type="password"
                  autoComplete="off"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Contraseña"
                  animate={invalid ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full border-0 border-b border-stone bg-transparent pb-3 text-center font-sans text-sm tracking-widest text-ink placeholder:text-stone focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-10 w-full border border-ink/20 py-3 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  Ingresar
                </button>
              </form>

              <p className="mt-8 font-sans text-[11px] leading-relaxed text-ink-soft/80">
                Invitación privada.
                <br />
                La contraseña está en tu invitación.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {unlocked && children}
    </>
  );
}
