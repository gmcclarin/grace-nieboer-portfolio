import ProjectLayout from "../components/ProjectLayout";
import interiorsImg from "../assets/images/portfolio/inspired-interiors-home.avif";

export default function InspiredInteriors() {
  return (
    <ProjectLayout
      title="Inspired Interiors"
      subtitle="A full-stack interior design platform built for exploration, inspiration, and project planning."
      heroImage={interiorsImg}
      liveLink="https://your-live-link.com"
      githubLink="https://github.com/your-repo"
    >
      {/* Vision */}
      <section>
        <h2 className="text-2xl font-serif">Vision</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Inspired Interiors was designed to help users explore curated design
          ideas, save inspiration, and organize concepts into actionable plans.
        </p>
      </section>

      {/* Problem */}
      <section>
        <h2 className="text-2xl font-serif">The Problem</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Interior design inspiration is often scattered across multiple platforms.
          Users lack a centralized tool to discover, curate, and plan cohesive
          spaces.
        </p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="text-2xl font-serif">Solution</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          This application combines browsing, filtering, and project-saving
          functionality within a clean, responsive interface. Users can explore
          styles, create boards, and organize design ideas into structured plans.
        </p>
      </section>

      {/* Tech */}
      <section>
        <h2 className="text-2xl font-serif">Technical Stack</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>React frontend</li>
          <li>Node.js + Express backend</li>
          <li>Database-driven content architecture</li>
          <li>RESTful API design</li>
        </ul>
      </section>

      {/* Outcome */}
      <section>
        <h2 className="text-2xl font-serif">Outcome</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The project demonstrates full-stack capability, API integration,
          database modeling, and user-centered design thinking.
        </p>
      </section>
    </ProjectLayout>
  );
}