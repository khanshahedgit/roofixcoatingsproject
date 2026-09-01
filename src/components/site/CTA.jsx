import { Phone, ArrowRight } from "lucide-react";
import { Container, Reveal, Button } from "./ui";
import { COMPANY } from "./site-data";
import heroImage from "../../assets/hero-roof.jpg";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border bg-slate-deep py-24 text-slate-deep-foreground sm:py-28 lg:py-32">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-deep via-slate-deep/85 to-slate-deep/55"
      />

      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-accent uppercase">
            Free Estimate
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-[3rem]">
            Ready For A Roof You Can Count On?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-deep-foreground/75 sm:text-[1.0625rem]">
            Talk to Roofix Coatings about your roof painting or restoration project.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">
              Get Your Free Quote
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button href={COMPANY.phoneHref} variant="outlineLight">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              Call {COMPANY.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
