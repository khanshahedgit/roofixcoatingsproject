import { Container, Reveal } from "./ui";

const FEATURES = [
  {
    title: "Professional Finish",
    text: "Attention to detail from preparation through final coating.",
  },
  {
    title: "Australian Conditions",
    text: "Roof solutions designed with Australian homes and weather in mind.",
  },
  {
    title: "Reliable Workmanship",
    text: "A professional approach with quality at every stage.",
  },
  {
    title: "Roof Transformation",
    text: "Refresh the appearance and improve the protection of your roof.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-deep py-20 text-slate-deep-foreground sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-accent uppercase">
            Why Homeowners Choose Roofix
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.8rem]">
            Professional From Preparation To Final Finish.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-slate-deep-foreground/15 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.07 * i}>
              <div className="h-full bg-slate-deep px-0 py-8 sm:px-8">
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-deep-foreground/70">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
