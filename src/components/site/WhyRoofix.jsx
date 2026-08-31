import { Check } from "lucide-react";
import { Container, Reveal, ImageReveal, Button } from "./ui";
import whyImage from "../../assets/why-roof.jpg";

const BULLETS = [
  "Careful preparation",
  "Professional application",
  "Attention to detail",
  "Quality-focused workmanship",
  "Suitable for Australian homes and conditions",
];

export default function WhyRoofix() {
  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <ImageReveal
            src={whyImage}
            alt="Roofing tradesperson spray applying a roof coating"
            width={1200}
            height={1408}
            className="rounded-sm border border-border"
            imgClassName="aspect-4/5 lg:aspect-[4/4.3]"
          />

          <div>
            <Reveal>
              <p className="eyebrow">Why Roofix Coatings</p>
              <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.6rem]">
                Quality Work. Proper Preparation. A Finish That Lasts.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                Roof restoration is about more than simply applying a new colour. Proper
                preparation, careful application and attention to detail all contribute to a
                professional result.
              </p>
            </Reveal>

            <ul className="mt-9 space-y-3">
              {BULLETS.map((b, i) => (
                <Reveal key={b} delay={0.06 * i}>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span className="text-[0.95rem] text-foreground/85">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.15}>
              <Button href="#contact" variant="dark" className="mt-10">
                Talk To Roofix
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
