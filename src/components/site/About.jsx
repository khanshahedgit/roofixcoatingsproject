import { Container, Reveal, ImageReveal } from "./ui";
import aboutImage from "../../assets/about-roof.jpg";

const POINTS = [
  "Professional Roof Restoration",
  "Quality Finishes",
  "Built For Australian Conditions",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ImageReveal
            src={aboutImage}
            alt="Close detail of a newly coated tile roof"
            width={1200}
            height={1504}
            className="order-2 rounded-sm border border-border lg:order-1"
            imgClassName="aspect-4/5 lg:aspect-[4/4.6]"
          />

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">Roofix Coatings</p>
              <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.7rem]">
                A Better Roof Starts With The Right Finish.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                Roofix Coatings focuses on restoring tired roofs, improving their appearance and
                helping protect them from the Australian elements.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-border">
              {POINTS.map((p, i) => (
                <Reveal key={p} delay={0.08 * i}>
                  <div className="flex items-center gap-4 border-b border-border py-4">
                    <span className="font-display text-[0.7rem] font-bold tracking-widest text-accent">
                      0{i + 1}
                    </span>
                    <span className="font-display text-base font-medium sm:text-lg">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
