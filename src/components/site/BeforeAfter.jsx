import { Container, Reveal, SectionHeading } from "./ui";
import BeforeAfterSlider from "./BeforeAfterSlider";
import beforeImage from "../../assets/before-roof.jpg";
import afterImage from "../../assets/after-roof.jpg";

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="border-y border-border bg-secondary py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Roofix Difference"
          title="See The Transformation."
          text="From weathered and tired to clean, refreshed and protected — see what a professional roof restoration can do."
        />

        <Reveal delay={0.1} className="mt-12">
          {/* Swap these two imports at the top of the file to use your own photos. */}
          <BeforeAfterSlider beforeSrc={beforeImage} afterSrc={afterImage} />
          <p className="mt-4 text-center text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Drag the handle or tap the image to compare
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
