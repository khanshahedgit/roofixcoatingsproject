import { Container } from "./ui";
import { COMPANY, NAV_LINKS } from "./site-data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="block font-display text-xl font-bold tracking-tight">
              {COMPANY.name}
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{COMPANY.tagline}</p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/75 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a
              href={COMPANY.phoneHref}
              className="text-sm text-foreground/75 transition-colors hover:text-accent"
            >
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm break-all text-foreground/75 transition-colors hover:text-accent"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
