import ProjectLayout from "../components/ProjectLayout";
import deploysightImg from "../assets/images/portfolio/deploysight2.png";

export default function DeploySight() {
  return (
    <ProjectLayout
      title="Deploy Sight"
      subtitle="A lightweight DevOps visibility platform giving small engineering teams essential insight into their deployments — without the weight of traditional tooling."
      heroImage={deploysightImg}
      githubLink="https://github.com/gmcclarin/deploysight"
    >
      {/* Problem */}
      <section>
        <h2 className="text-2xl font-serif">The Problem</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Modern teams ship across several platforms at once — Netlify here, GitHub
          Actions there, AWS somewhere else. Every one of them reports its own
          deployments perfectly well, and none of them report anyone else's.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          So the simplest questions get answered by opening four dashboards: what
          shipped, where did it ship, did it succeed, and when.
        </p>
      </section>

      {/* Approach */}
      <section>
        <h2 className="text-2xl font-serif">Approach</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Deploy Sight ingests deployment webhooks from each provider, normalizes
          them into one shared model, and persists them. The dashboard reads back a
          single source of truth: summary cards for total, successful, failed, and
          in-flight deployments, above a table of every deployment with its repo,
          branch, environment, status, commit, and timestamp.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The surface area is deliberately narrow — the questions a small team
          actually asks, answered in one place.
        </p>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-serif">Architecture</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Every hosting provider emits a different webhook payload. Deploy Sight
          keeps that difference at the edge: a ports-and-adapters layer defines a
          single <span className="italic">WebhookParser</span> contract, each
          provider gets an adapter that satisfies it, and a registry resolves the
          right one per request.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Everything past that boundary speaks one normalized deployment model, so
          the domain logic stays provider-agnostic and adding a platform means
          adding an adapter — not touching the core.
        </p>
      </section>

      {/* Technical */}
      <section>
        <h2 className="text-2xl font-serif">Technical Implementation</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>TypeScript across the full stack</li>
          <li>Node.js + Express API with a repository and service layer</li>
          <li>PostgreSQL via TypeORM, containerized with Docker Compose</li>
          <li>Webhook ingestion from Netlify and GitHub Actions</li>
          <li>React 19 + Vite frontend</li>
          <li>Material UI with MUI X DataGrid for the deployment table</li>
          <li>TanStack Query + Axios for server state</li>
          <li>ngrok for local webhook testing</li>
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
