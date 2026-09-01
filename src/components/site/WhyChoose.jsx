import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Brush, MapPin, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Container, Reveal, Button } from "./ui";
import whyImage from "../../assets/why-roof.jpg";
import afterImage from "../../assets/after-roof.jpg";
import aboutImage from "../../assets/about-roof.jpg";

const FEATURES = [
  {
    Icon: Brush,
    title: "Professional Finish",
    text: "Attention to detail from preparation through final coating.",
  },
  {
    Icon: MapPin,
    title: "Australian Conditions",
    text: "Roof solutions designed with Australian homes and weather in mind.",
  },
  {
    Icon: ShieldCheck,
    title: "Reliable Workmanship",
    text: "A professional approach with quality at every stage.",
  },
  {
    Icon: Sparkles,
    title: "Roof Transformation",
    text: "Refresh the appearance and improve the protection of your roof.",
  },
];

export default function WhyChoose() {
  const reduced = useReducedMotion();
  const wrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);
  const ySmall = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 30]);

  return (
    <section
      className="overflow-hidden bg-slate-deep py-20 text-slate-deep-foreground sm:py-28 lg:py-32"
      ref={wrapRef}
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Layered imagery */}
          <div className="relative">
            <motion.div
              style={{ y: yMain }}
              className="overflow-hidden rounded-sm border border-slate-deep-foreground/15"
            >
              <img
                src={whyImage}
                alt="Roofix Coatings tradesperson applying a roof coating"
                loading="lazy"
                className="aspect-4/5 w-full object-cover sm:aspect-[4/4.4]"
              />
            </motion.div>

            <motion.div
              style={{ y: ySmall }}
              className="absolute -bottom-6 -right-2 w-[42%] overflow-hidden rounded-sm border border-slate-deep-foreground/20 shadow-elegant sm:-right-6 sm:w-[38%]"
            >
              <img
                src={afterImage}
                alt="Restored roof after a Roofix Coatings finish"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </motion.div>

            <motion.div
              style={{ y: ySmall }}
              className="absolute -top-5 -left-2 hidden w-[30%] overflow-hidden rounded-sm border border-slate-deep-foreground/20 shadow-elegant sm:block sm:-left-6"
            >
              <img
                src={aboutImage}
                alt="Close detail of freshly coated roof tiles"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </motion.div>

            {/* Floating trust cards (factual, non-numeric) */}
            <motion.div
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-1 max-w-[11rem] rounded-sm border border-slate-deep-foreground/15 bg-background/95 p-4 shadow-elegant backdrop-blur-sm sm:-right-8"
            >
              <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.4} />
              <p className="mt-2.5 font-display text-sm font-semibold text-foreground">
                Roof Painting &amp; Restoration
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Specialist work, start to finish.
              </p>
            </motion.div>

            <motion.div
              animate={reduced ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-8 left-0 max-w-[11rem] rounded-sm border border-slate-deep-foreground/15 bg-background/95 p-4 shadow-elegant backdrop-blur-sm sm:-left-4"
            >
              <MapPin className="h-5 w-5 text-accent" strokeWidth={1.4} />
              <p className="mt-2.5 font-display text-sm font-semibold text-foreground">
                Built For Aussie Weather
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Coatings suited to local conditions.
              </p>
            </motion.div>
          </div>

          {/* Editorial benefits */}
          <div className="mt-10 lg:mt-0">
            <Reveal>
              <p className="text-[0.7rem] font-bold tracking-[0.22em] text-accent uppercase">
                Why Homeowners Choose Roofix
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.8rem]">
                Built To Protect What Matters Most.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-deep-foreground/70">
                Professional from preparation to final finish — with quality at every stage.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-10 gap-y-px sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={0.06 * i}>
                  <div className="group border-t border-slate-deep-foreground/15 py-7">
                    <f.Icon
                      className="h-6 w-6 text-accent transition-transform duration-500 group-hover:-translate-y-1"
                      strokeWidth={1.3}
                    />
                    <div className="mt-4 h-px w-8 bg-accent transition-all duration-500 group-hover:w-16" />
                    <h3 className="mt-4 font-display text-lg font-semibold transition-transform duration-500 group-hover:translate-x-1">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-slate-deep-foreground/70 transition-transform duration-500 group-hover:translate-x-1">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <Button href="#contact" variant="primary" className="mt-12">
                See Why Homeowners Trust Roofix
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
