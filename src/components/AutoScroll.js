export default function AutoScroll({
  speed = "med",
  className = "",
  contentClassName = "",
  children,
  reverse
}) {
  const speedClass =
    speed === "slow"
      ? "animate-marquee-slow"
      : speed === "fast"
      ? "animate-marquee-fast"
      : "animate-marquee-med";

  const dir = reverse ? "[animation-direction:reverse]" : "";

  return (
    <div
      className={[
        "group relative h-full overflow-hidden",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-10",
        "before:bg-gradient-to-b before:from-white before:to-transparent",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-10",
        "after:bg-gradient-to-t after:from-white after:to-transparent",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "will-change-transform [transform:translateZ(0)]", // smoother on Chrome
          speedClass,
          dir,
          // pause on hover; respect reduced motion
          "group-hover:[animation-play-state:paused] motion-reduce:animate-none",
        ].join(" ")}
      >
        <div className={["flex flex-col", contentClassName].join(" ")}>
          {children}
        </div>

        {/* Duplicate for seamless loop */}
        <div
          className={["flex flex-col", contentClassName].join(" ")}
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}
