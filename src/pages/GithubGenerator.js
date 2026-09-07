import ProjectLayout from "../components/ProjectLayout";
import githubImg from "../assets/images/portfolio/githubgenerator.png";

export default function GithubGenerator() {
  return (
    <ProjectLayout
      title="GitHub Profile README Generator"
      subtitle="A structured web application for crafting polished, aesthetic GitHub profile READMEs with live preview and guided self-branding."
      heroImage={githubImg}
      liveLink="https://generate-github-profile-readme.netlify.app/"
      githubLink="https://github.com/gmcclarin/github-readme-generator"
    >
      {/* Problem */}
      <section>
        <h2 className="text-2xl font-serif">The Problem</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          A developer’s GitHub profile is often their first impression — yet
          most profiles are inconsistently formatted, difficult to structure, or
          built from static templates without personalization.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Developers need a guided, structured way to present themselves clearly
          without fighting Markdown syntax.
        </p>
      </section>

      {/* Approach */}
      <section>
        <h2 className="text-2xl font-serif">Approach</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          This application provides a modular form-driven interface for building
          profile sections — About, Skills, Projects, Stats, and Social Links —
          while rendering a live Markdown preview in real time.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The experience balances usability and structure, reducing friction
          while encouraging thoughtful self-presentation.
        </p>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-serif">Technical Implementation</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>React + Tailwind CSS frontend</li>
          <li>React Hook Form for performant form state management</li>
          <li>Context API for cross-section state sharing</li>
          <li>react-markdown for real-time preview rendering</li>
          <li>Deployed on Netlify</li>
        </ul>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-serif">Why It Matters</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          This project focuses on developer experience. It treats a GitHub
          profile as a designed interface — not just a markdown file — blending
          UI structure with personal branding.
        </p>
      </section>
    </ProjectLayout>
  );
}
