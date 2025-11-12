import { useEffect, useRef, useState } from "react";

export default function AutoScroll({
  speed = 20,
  reverse = false,
  className = "",
  contentClassName = "",
  showScrollbarOnHover = false,
  children,
}) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId;
    let last = performance.now();
    let offset = 0;

    const getLoopHeight = () => track.scrollHeight / 2 || 1;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        const dir = reverse ? -1 : 1;
        const loopHeight = getLoopHeight();
        offset = (offset + dir * speed * dt) % loopHeight;

        // wrap offset smoothly
        if (offset < 0) offset += loopHeight;

        // use GPU-accelerated transform instead of scrollTop
        track.style.transform = `translateY(${-offset}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused, speed, reverse]);

  const scrollClasses = [
    "relative h-full overflow-hidden group",
    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
    showScrollbarOnHover
      ? "hover:[scrollbar-width:thin] hover:[&::-webkit-scrollbar]:block"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`${scrollClasses} ${className} will-change-transform transform-gpu overscroll-contain touch-none`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* gradient fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white" />

      {/* duplicated content for infinite loop */}
      <div ref={trackRef} className="will-change-transform">
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
