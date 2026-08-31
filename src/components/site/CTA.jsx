import { Container, Reveal, Button } from "./ui";
import { COMPANY } from "./site-data";

export default function CTA() {
  return (
    <section className="border-b border-border bg-sand py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.8rem]">
            Ready To Give Your Roof A New Life?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 sm:text-[1.0625rem]">
            Talk to Roofix Coatings about your roof painting or restoration project.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="#contact" variant="dark">
              Get Your Free Quote
            </Button>
            <Button href={COMPANY.phoneHref} variant="outline">
              Call {COMPANY.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
