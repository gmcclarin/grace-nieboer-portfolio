import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function ProjectLayout({
  title,
  subtitle,
  heroImage,
  children,
  liveLink,
  githubLink,
}) {
  return (
    <div className="bg-white text-black">
      <Navigation fontColor="black" />
      <Link className="underline text-sm p-5" to="/portfolio">{`<<< Back to Portfolio`}</Link>
      {/* HERO */}
      <section className="px-6 md:px-8 pt-28 pb-16 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </section>

      {/* HERO IMAGE */}
      {heroImage && (
        <section className="px-6 md:px-8 pb-24">
          <div className="max-w-6xl mx-auto aspect-[16/9] overflow-hidden">
            <img
              src={heroImage}
              alt={title}
              className="max-h-[75vh] w-auto object-contain"
            />
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="px-6 md:px-8 pb-32">
        <div className="max-w-3xl mx-auto space-y-16">
          {children}
        </div>
      </section>

      {/* LINKS */}
      {(liveLink || githubLink) && (
        <section className="px-6 md:px-8 pb-32 border-t border-neutral-200">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm tracking-wide">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
              >
                Live Project →
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
              >
                View on GitHub →
              </a>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}