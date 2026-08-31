import { motion, useReducedMotion } from "motion/react";
import { Container, Button } from "./ui";
import { COMPANY } from "./site-data";
import heroImage from "../../assets/hero-roof.jpg";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  });

  return (
    <section id="home" className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Australian family home with a freshly restored charcoal tile roof"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,oklch(0.22_0.01_60/0.86)_0%,oklch(0.22_0.01_60/0.5)_45%,oklch(0.22_0.01_60/0.25)_100%)]" />

      <Container className="pt-36 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <motion.p
            {...rise(0.05)}
            className="text-[0.68rem] font-bold tracking-[0.24em] text-background/85 uppercase sm:text-[0.72rem]"
          >
            Roof Painting & Restoration Specialist
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="mt-5 text-[2.35rem] leading-[1.05] font-semibold text-background sm:text-5xl lg:text-[4.1rem]"
          >
            Restoring &amp; Protecting Aussie Roofs.
          </motion.h1>

          <motion.p
            {...rise(0.25)}
            className="mt-6 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg"
          >
            Professional roof painting and restoration services designed to refresh, protect and
            extend the life of Australian roofs.
          </motion.p>

          <motion.div {...rise(0.35)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact" variant="primary">
              Get a Free Quote
            </Button>
            <Button href="#projects" variant="outlineLight">
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            {...rise(0.45)}
            className="mt-10 flex items-center gap-4 border-t border-background/25 pt-6"
          >
            <span className="text-[0.62rem] font-bold tracking-[0.2em] text-background/60 uppercase">
              Call us
            </span>
            <a
              href={COMPANY.phoneHref}
              className="font-display text-lg font-semibold text-background transition-opacity hover:opacity-80 sm:text-xl"
            >
              {COMPANY.phone}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
