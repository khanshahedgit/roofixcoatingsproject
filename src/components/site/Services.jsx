import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  PaintRoller,
  Hammer,
  Droplets,
  ShieldCheck,
} from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";
import aboutImage from "../../assets/about-roof.jpg";
import whyImage from "../../assets/why-roof.jpg";
import afterImage from "../../assets/after-roof.jpg";
import project01 from "../../assets/project-01.jpg";

const SERVICES = [
  {
    n: "01",
    Icon: PaintRoller,
    title: "Roof Painting",
    text: "Transform the appearance of your roof with a durable professional finish.",
    img: afterImage,
  },
  {
    n: "02",
    Icon: Hammer,
    title: "Roof Restoration",
    text: "Restore weathered and ageing roofs while improving their overall appearance and condition.",
    img: project01,
  },
  {
    n: "03",
    Icon: Droplets,
    title: "Roof Cleaning & Preparation",
    text: "Thorough preparation to help ensure coatings adhere properly and provide a quality finish.",
    img: whyImage,
  },
  {
    n: "04",
    Icon: ShieldCheck,
    title: "Roof Protection",
    text: "Help protect your roof from harsh Australian weather and extend its usable life.",
    img: aboutImage,
  },
];

export default function Services() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll("[data-card]"));
    if (!cards.length) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  const scrollToIndex = useCallback((i) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll("[data-card]"));
    const target = cards[Math.min(cards.length - 1, Math.max(0, i))];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - 4, behavior: "smooth" });
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(active + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(active - 1);
    }
  };

  const onPointerDown = (e) => {
    if (e.pointerType === "touch") return;
    const el = trackRef.current;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.startScroll - dx;
  };

  const onPointerUp = () => {
    drag.current.down = false;
    setTimeout(() => {
      drag.current.moved = false;
    }, 0);
  };

  return (
    <section id="services" className="border-y border-border bg-secondary py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Roofing Services"
            text="Professional solutions to restore, refresh and protect your roof."
          />
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => scrollToIndex(active - 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background text-foreground transition-all duration-300 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => scrollToIndex(active + 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background text-foreground transition-all duration-300 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <Reveal className="mt-12">
          <div
            ref={trackRef}
            role="group"
            aria-label="Roofing services carousel"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {SERVICES.map((s, i) => (
              <a
                key={s.n}
                data-card
                href="#contact"
                onClick={(e) => {
                  if (drag.current.moved) e.preventDefault();
                }}
                className={`group relative flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-sm border bg-card transition-all duration-500 sm:w-[52%] lg:w-[30.5%] ${
                  active === i
                    ? "border-accent shadow-[0_0_0_1px_var(--color-accent),0_24px_60px_-34px_var(--color-accent)]"
                    : "border-border hover:border-border-strong"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.title} by Roofix Coatings`}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute top-4 right-4 rounded-sm bg-background/85 px-2.5 py-1 font-display text-[0.7rem] font-bold tracking-[0.18em] text-foreground backdrop-blur-sm">
                    {s.n}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-8 p-7 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8">
                  <div>
                    <s.Icon
                      className="h-7 w-7 text-accent transition-transform duration-500 group-hover:-translate-y-0.5"
                      strokeWidth={1.25}
                    />
                    <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                  <span className="flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-foreground/60 uppercase transition-colors duration-300 group-hover:text-accent">
                    Get A Quote
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-2.5">
          {SERVICES.map((s, i) => (
            <button
              key={s.n}
              type="button"
              aria-label={`Go to ${s.title}`}
              aria-current={active === i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                active === i ? "w-8 bg-accent" : "w-3 bg-border-strong hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
