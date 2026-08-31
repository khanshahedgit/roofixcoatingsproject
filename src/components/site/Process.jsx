import { Container, Reveal, SectionHeading } from "./ui";

const STEPS = [
  { n: "01", title: "Inspection", text: "Assess the roof and understand what it needs." },
  { n: "02", title: "Preparation", text: "Prepare the surface properly before coating." },
  {
    n: "03",
    title: "Restoration",
    text: "Carry out the restoration and coating work with care.",
  },
  {
    n: "04",
    title: "Final Finish",
    text: "Complete the project with a clean professional finish.",
  },
];

export default function Process() {
  return (
    <section className="border-y border-border bg-secondary py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A Straightforward Process. A Better Result."
        />

        <div className="mt-14">
          {/* Desktop horizontal timeline / mobile vertical timeline */}
          <div className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            <div className="absolute top-3 left-[7px] hidden h-px w-full bg-border lg:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="relative flex gap-5 lg:block">
                  <div className="relative flex flex-col items-center lg:block">
                    <span className="relative z-10 block h-[15px] w-[15px] shrink-0 rounded-full border border-accent bg-background" />
                    {i < STEPS.length - 1 ? (
                      <span className="mt-1 w-px flex-1 bg-border lg:hidden" />
                    ) : null}
                  </div>
                  <div className="pb-2 lg:mt-7">
                    <span className="font-display text-[0.72rem] font-bold tracking-[0.2em] text-accent">
                      {s.n}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
