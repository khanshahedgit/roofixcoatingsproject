import { ArrowUpRight, PaintRoller, Hammer, Droplets, ShieldCheck } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const SERVICES = [
  {
    n: "01",
    Icon: PaintRoller,
    title: "Roof Painting",
    text: "Transform the appearance of your roof with a durable professional finish.",
  },
  {
    n: "02",
    Icon: Hammer,
    title: "Roof Restoration",
    text: "Restore weathered and ageing roofs while improving their overall appearance and condition.",
  },
  {
    n: "03",
    Icon: Droplets,
    title: "Roof Cleaning & Preparation",
    text: "Thorough preparation to help ensure coatings adhere properly and provide a quality finish.",
  },
  {
    n: "04",
    Icon: ShieldCheck,
    title: "Roof Protection",
    text: "Help protect your roof from harsh Australian weather and extend its usable life.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Roofing Services"
          text="Professional solutions to restore, refresh and protect your roof."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={0.07 * i}>
              <a
                href="#contact"
                className="group flex h-full flex-col justify-between gap-10 bg-card p-7 transition-colors duration-300 hover:bg-background sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <s.Icon
                      className="h-7 w-7 text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
                      strokeWidth={1.25}
                    />
                    <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-muted-foreground">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
