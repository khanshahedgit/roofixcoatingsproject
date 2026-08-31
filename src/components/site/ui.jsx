import { motion, useReducedMotion } from "motion/react";

/** Shared section container. */
export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Fade/rise reveal on scroll. Respects prefers-reduced-motion. */
export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Image with a subtle clip reveal. */
export function ImageReveal({ src, alt, className = "", imgClassName = "", ...rest }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={reduced ? false : { clipPath: "inset(0 0 12% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName}`}
        {...rest}
      />
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left", className = "" }) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
          {text}
        </p>
      ) : null}
    </div>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.8rem] font-bold tracking-[0.13em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const styles = {
  primary: "bg-accent text-accent-foreground hover:brightness-95 hover:-translate-y-0.5",
  dark: "bg-primary text-primary-foreground hover:bg-slate-deep hover:-translate-y-0.5",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:border-foreground hover:-translate-y-0.5",
  outlineLight:
    "border border-slate-deep-foreground/35 text-slate-deep-foreground hover:border-slate-deep-foreground hover:-translate-y-0.5",
};

export function Button({ as = "a", variant = "primary", className = "", children, ...rest }) {
  const Tag = as;
  return (
    <Tag className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
