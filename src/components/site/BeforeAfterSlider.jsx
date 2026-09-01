import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightweight, dependency-free before/after image comparison slider.
 * Replace `beforeSrc` / `afterSrc` with your own images — nothing else to change.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Roof before restoration",
  afterAlt = "Roof after restoration",
  initial = 50,
}) {
  const [pos, setPos] = useState(initial);
  const frameRef = useRef(null);
  const draggingRef = useRef(false);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={frameRef}
      role="slider"
      tabIndex={0}
      aria-label="Before and after roof restoration comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className="relative aspect-[16/9] w-full touch-none overflow-hidden rounded-sm border border-border-strong bg-muted select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      style={{ cursor: "ew-resize" }}
    >
      {/* BEFORE image (underneath) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* AFTER image (clipped on top) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute top-4 left-4 rounded-sm bg-foreground/55 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] text-background uppercase backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-sm bg-foreground/55 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] text-background uppercase backdrop-blur-sm">
        After
      </span>

      {/* Divider + handle */}
      <div
        className={`pointer-events-none absolute top-0 bottom-0 w-px bg-background/85 ${
          dragging ? "" : "transition-[left] duration-300 ease-out"
        }`}
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-border-strong bg-background text-foreground shadow-elegant sm:h-13 sm:w-13">
          <ChevronLeft aria-hidden="true" className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" />
          <ChevronRight aria-hidden="true" className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" />
        </div>
      </div>
    </div>
  );
}
