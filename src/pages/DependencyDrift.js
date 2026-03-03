import ProjectLayout from "../components/ProjectLayout";
import driftImage from "../assets/images/portfolio/dep-drift.png"

export default function DependencyDrift() {
  return (
    <ProjectLayout
      title="Dependency Drift Detector"
      subtitle="A full-stack developer tool for identifying dependency mismatch and production risk."
      heroImage={driftImage}
      githubLink="https://github.com/yourrepo"
    >
      
      <div>
        <h2 className="text-2xl font-serif">The Problem</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Dependency drift between declared and resolved packages can lead to
          environment inconsistencies and production instability.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif">Architecture</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Built using Hexagonal Architecture to isolate domain logic from
          external concerns such as filesystem access and GitHub integrations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-serif">Tech Stack</h2>
        <ul className="mt-4 text-neutral-700 space-y-2">
          <li>Node.js + TypeScript</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>React frontend (WIP)</li>
        </ul>
      </div>

    </ProjectLayout>
  );
}