import { Play } from "lucide-react";
import { motion } from "motion/react";
import { Container, Reveal, SectionHeading } from "./ui";
import project01 from "../../assets/project-01.jpg";
import project02 from "../../assets/project-02.jpg";
import project03 from "../../assets/project-03.jpg";

/**
 * To use real footage, replace the <img> thumbnail inside each card with:
 * <video src={...} poster={thumb} controls className="h-full w-full object-cover" />
 */
const PROJECTS = [
  { id: "VIDEO_PLACEHOLDER_01", title: "Project One", location: "Australia", thumb: project01 },
  { id: "VIDEO_PLACEHOLDER_02", title: "Project Two", location: "Australia", thumb: project02 },
  { id: "VIDEO_PLACEHOLDER_03", title: "Project Three", location: "Australia", thumb: project03 },
];

export default function RecentProjects() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Recent Work"
          title="Recent Projects"
          text="See the difference a professional roof restoration can make."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={0.08 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full overflow-hidden rounded-sm border border-border bg-card shadow-card"
              >
                {/* 16:9 video area — replace with a <video> element later */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={p.thumb}
                    alt={`${p.title} — restored Australian residential roof`}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
                  <span className="absolute top-4 left-4 rounded-sm bg-background/85 px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.18em] uppercase">
                    Roof Restoration
                  </span>
                  <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-background/70 bg-background/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Play className="h-5 w-5 translate-x-0.5 text-background" fill="currentColor" />
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4 p-6">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 truncate text-sm text-muted-foreground">
                      Australian Residential Project
                    </p>
                  </div>
                  <span className="shrink-0 text-[0.62rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    {p.location}
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
