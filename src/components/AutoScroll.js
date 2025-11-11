import { useEffect, useRef, useState } from "react";

export default function AutoScroll({
  speed = 20,
  reverse = false,
  className = "",
  contentClassName = "",
  showScrollbarOnHover = false,
  children,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let rafId;
    let last = performance.now();

    // Safari/iOS sometimes reports 0 scrollHeight at mount
    const getLoopHeight = () => track.scrollHeight / 2 || 1;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        const dir = reverse ? -1 : 1;
        const loopHeight = getLoopHeight();
        const next = (container.scrollTop + dir * speed * dt) % loopHeight;

        // safer modulo handling
        container.scrollTop =
          next < 0 ? loopHeight + next : next;
      }

      rafId = requestAnimationFrame(tick);
    };

    // Kick off after content is rendered
    const start = () => {
      cancelAnimationFrame(rafId);
      last = performance.now();
      rafId = requestAnimationFrame(tick);
    };

    // Wait a bit to ensure height is computed (prevents 0 scrollHeight)
    const timeout = setTimeout(start, 100);

    // Also observe for resizes (e.g. responsive reflows)
    const ro = new ResizeObserver(() => start());
    ro.observe(track);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [paused, speed, reverse]);

  const scrollClasses = [
    "relative h-full overflow-y-scroll group touch-pan-y",
    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
    showScrollbarOnHover
      ? "hover:[scrollbar-width:thin] hover:[&::-webkit-scrollbar]:block"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={`${scrollClasses} ${className} will-change-transform transform-gpu overflow-y-scroll overscroll-contain touch-none`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white" />

      <div ref={trackRef}>
        <div className={`flex flex-col ${contentClassName}`}>{children}</div>
        <div
          className={`flex flex-col ${contentClassName}`}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}