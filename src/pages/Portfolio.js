import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import interiors from "../assets/images/portfolio/inspired-interiors-home.avif";
import githubgenerator from "../assets/images/portfolio/githubgenerator.png";
import trees from "../assets/images/portfolio/trees.png";
import twoOrMore from "../assets/images/portfolio/tomhome.png";
import depdrift from "../assets/images/portfolio/dep-drift.png";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <Navigation fontColor="black" />
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
            description="Full-stack intreior design application designed for exploration, inspiration, and planning."
            imageUrl={interiors}
          />
          <ProjectCard
            title="Dependency Drift"
            description="A full-stack developer tool that detects dependency drift between declared and resolved packages. Designed using Hexagonal Architecture to isolate domain logic and surface production risk early."
            imageUrl={depdrift}
            path="/portfolio/dependency-drift"
          />

          <ProjectCard
            title="Github Special README generator"
            description="A polished web app for generating structured, styled GitHub profile READMEs with live markdown preview, guided prompts, and export-ready formatting."
            imageUrl={githubgenerator}
          />
          <ProjectCard
          title="Tylers Tree Solutions"
          description="A custom site built for a local tree service company, designed to showcase their services and attract new customers."
           imageUrl={trees}
           />
           <ProjectCard
           title="Two Or More"
           description="A custom application designed for a grass-roots organization in Michigan" 
           imageUrl={twoOrMore}
           />
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ProjectCard = ({ title, description, imageUrl, path }) => (
  <div className="snap-start flex-shrink-0 w-[65vw] md:w-[35vw] lg:w-[28vw group cursor-pointer transition-all duration-500">
    {/* Image Container */}
    <div className="aspect-[4/3] overflow-hidden flex items-center">
    <Link to={path}>
      <img
        src={imageUrl}
        alt={title}
    className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
      /></Link>
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
