import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import placeholder1 from "../assets/images/portfolio/twoormorebackground.png";

export default function Portfolio() {
  return (
    <div>
      <Navigation fontColor="black" />
      {/* HERO */}
      {/* HERO */}
      <section className="px-6 md:px-8 pt-24 pb-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight">
          Work
        </h1>
      </section>

      {/*  horizontal x-scrolling projects grid*/}
      <section className="overflow-x-auto no-scrollbar">
        <div className="flex gap-8 px-6 md:px-8 pb-24 snap-x snap-mandatory">
          <ProjectCard
            title="Inspired Interiors"
            description="Full-stack application designed for clarity, accessibility, and scale."
            imageUrl={placeholder1}
          />
          <ProjectCard
            title="Design System"
            description="Modular UI system built with structure and restraint."
            imageUrl="/project2.jpg"
          />

          <ProjectCard
            title="Cloud Migration"
            description="AWS-based architecture focused on reliability and governance."
            imageUrl="/project3.jpg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ProjectCard = ({ title, description, imageUrl }) => (
  <div className="snap-start flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] group cursor-pointer transition-all duration-500">
    {/* Image Container */}
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Text Reveal */}
    <div className="mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
      <h2 className="text-2xl font-serif">{title}</h2>
      <p className="mt-2 text-neutral-600 leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  </div>
);
