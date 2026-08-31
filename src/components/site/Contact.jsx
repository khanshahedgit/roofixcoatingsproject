import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Container, Reveal } from "./ui";
import { COMPANY } from "./site-data";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "suburb", label: "Suburb", type: "text", required: false },
];

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thanks — your enquiry has been noted.", {
      description: "We'll get back to you as soon as possible.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.6rem]">
              Let&rsquo;s Talk About Your Roof
            </h2>

            <div className="mt-10 border-t border-border">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-4 border-b border-border py-5 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span className="font-display text-lg font-medium">{COMPANY.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 border-b border-border py-5 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span className="min-w-0 truncate font-display text-lg font-medium">
                  {COMPANY.email}
                </span>
              </a>
              <div className="flex items-center gap-4 border-b border-border py-5">
                <MapPin className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span className="font-display text-lg font-medium">{COMPANY.name}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-sm border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <label key={f.name} className="block">
                    <span className="mb-2 block text-[0.68rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                      {f.label}
                    </span>
                    <input
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      autoComplete="on"
                      className={inputClass}
                    />
                  </label>
                ))}
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-[0.68rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  Tell us about your roof
                </span>
                <textarea name="message" rows={5} className={`${inputClass} resize-y`} />
              </label>

              <button
                type="submit"
                className="mt-6 w-full rounded-sm bg-accent px-6 py-4 text-[0.75rem] font-bold tracking-[0.14em] text-accent-foreground uppercase transition-all duration-300 hover:brightness-95 active:scale-[0.99]"
              >
                Request A Free Quote
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {submitted
                  ? "Thanks — we'll get back to you as soon as possible."
                  : "We'll get back to you as soon as possible."}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
