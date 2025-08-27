import { useEffect, useRef, useState } from "react";

export default function AutoScroll ({speed, reverse, className, contentClassName, showScrollBarOnHover, children}) {

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

    // Auto-scroll loop using native scrollTop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;
    let last = performance.now();

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused && !prefersReduced && container && trackRef.current) {
        const loopHeight = trackRef.current.scrollHeight / 2; // one full copy
        if (loopHeight > 0) {
          const dir = reverse ? -1 : 1;
          let next = container.scrollTop + dir * speed * dt;

          // wrap within one copy height for seamless loop
          if (next >= loopHeight) next -= loopHeight;
          if (next < 0) next += loopHeight;

          container.scrollTop = next;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused, speed, reverse]);

   const scrollClasses = [
    "relative h-full overflow-y-auto group",
    // hide scrollbar by default; still scrollable
    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
    // optionally reveal on hover
    showScrollBarOnHover ? "hover:[scrollbar-width:thin] hover:[&::-webkit-scrollbar]:block" : "",
  ]
    .filter(Boolean)
    .join(" ");

return (
    <div
      ref={containerRef}
      className={[scrollClasses, className].join(" ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onFocus={() => setPaused(true)}      // keyboard users
      onBlur={() => setPaused(false)}
    >
      {/* top/bottom fades for polish */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t" />

      {/* Track with duplicated content for infinite loop */}
      <div ref={trackRef}>
        <div className={["flex flex-col", contentClassName].join(" ")}>{children}</div>
        <div className={["flex flex-col", contentClassName].join(" ")} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}