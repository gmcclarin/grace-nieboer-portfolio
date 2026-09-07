import ProjectLayout from "../components/ProjectLayout";
import deploysightImg from "../assets/images/portfolio/deploysight2.png";

export default function DeploySight() {
  return (
    <ProjectLayout
      title="Deploy Sight"
      subtitle="A lightweight DevOps visibility platform giving small engineering teams essential insight into their deployments — without the weight of traditional tooling."
      heroImage={deploysightImg}
    >
      {/* Problem */}
      <section>
        <h2 className="text-2xl font-serif">The Problem</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Enterprise observability platforms are built for enterprise teams. For a
          small engineering group, they arrive with configuration overhead, pricing
          tiers, and dashboards full of signals nobody asked for.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Meanwhile the questions those teams actually ask are simple: what shipped,
          when did it ship, did it succeed, and what changed since the last release?
        </p>
      </section>

      {/* Approach */}
      <section>
        <h2 className="text-2xl font-serif">Approach</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Deploy Sight narrows the surface area deliberately. It tracks deployments
          across environments and surfaces them as a clear, chronological picture of
          release health — status, duration, frequency, and failures — rather than a
          wall of metrics.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The result is a tool a team can adopt in an afternoon and still trust six
          months later.
        </p>
      </section>

      {/* Technical */}
      <section>
        <h2 className="text-2xl font-serif">Technical Implementation</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>React + Material UI CSS frontend</li>
          <li>Node.js + Express API</li>
          <li>PostgreSQL for deployment history and environment state</li>
          <li>CI/CD pipeline integration for deployment events</li>
          <li>Environment-aware views for staging and production</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section>
        <h2 className="text-2xl font-serif">Why It Matters</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Visibility shouldn't be a privilege of scale. Deploy Sight treats
          restraint as a design decision — the value is in what it leaves out as
          much as what it shows.
        </p>
      </section>
    </ProjectLayout>
  );
}
