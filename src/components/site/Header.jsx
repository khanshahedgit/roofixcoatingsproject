import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "./ui";
import { COMPANY, NAV_LINKS } from "./site-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/92 py-2.5 shadow-[0_1px_20px_-12px_oklch(0.25_0.02_60/0.35)] backdrop-blur-md"
          : "border-b border-transparent py-4"
      }`}
    >
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#home" className="min-w-0" onClick={() => setOpen(false)}>
            <span className="block font-display text-lg leading-none font-bold tracking-tight sm:text-xl">
              {COMPANY.name}
            </span>
            <span className="mt-1 block truncate text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {COMPANY.descriptor}
            </span>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 xl:flex">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-[0.82rem] font-semibold text-foreground/80 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden shrink-0 rounded-sm bg-accent px-5 py-3 text-[0.72rem] font-bold tracking-[0.14em] text-accent-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 sm:inline-flex"
            >
              Get a Free Quote
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center xl:hidden"
            >
              <span className="relative block h-3.5 w-6">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-0 left-0 block h-[1.5px] w-6 bg-foreground"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[6px] left-0 block h-[1.5px] w-6 bg-foreground"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-[12px] left-0 block h-[1.5px] w-6 bg-foreground"
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-background xl:hidden"
          >
            <Container className="py-6">
              <nav className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                    className="border-b border-border py-3.5 font-display text-lg font-medium"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-center rounded-sm bg-accent px-6 py-4 text-[0.75rem] font-bold tracking-[0.14em] text-accent-foreground uppercase"
              >
                Get a Free Quote
              </a>
              <a
                href={COMPANY.phoneHref}
                className="mt-3 block text-center text-sm font-semibold text-muted-foreground"
              >
                {COMPANY.phone}
              </a>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
