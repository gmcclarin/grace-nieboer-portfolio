import ProjectLayout from "../components/ProjectLayout";
import treesHero from "../assets/images/portfolio/trees.png";
import contactImg from "../assets/images/portfolio/contact.png";
import marquisImg from "../assets/images/portfolio/marquis.png";

export default function TreeSolutions() {
  return (
    <ProjectLayout
      title="Tyler's Tree Solutions"
      subtitle="A custom-built marketing website designed to support business expansion, streamline lead capture, and elevate brand credibility."
      heroImage={treesHero}
      liveLink="https://tylerstreesolutions.com"
      githubLink="https://github.com/gmcclarin/tyler"
    >
      {/* Client Context */}
      <section>
        <h2 className="text-2xl font-serif">Client Context</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Tyler’s Tree Solutions was expanding operations and needed a
          professional web presence to support growth. The goal was to create a
          central destination for potential customers to explore services,
          request quotes, and build trust in the brand.
        </p>
      </section>

      {/* Business Goals */}
      <section>
        <h2 className="text-2xl font-serif">Business Goals</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>Increase inbound service inquiries</li>
          <li>Clearly communicate offered services</li>
          <li>Establish credibility and professionalism</li>
          <li>Simplify quote requests through intuitive UX</li>
        </ul>
      </section>

      {/* Strategy */}
      <section>
        <h2 className="text-2xl font-serif">Strategy & Implementation</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The site was designed with conversion-first thinking. Clear service
          breakdowns, strong visual hierarchy, and a frictionless contact flow
          were prioritized.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          A streamlined contact form integrates with EmailJS to ensure fast,
          reliable lead capture without backend infrastructure overhead.
        </p>
      </section>

      {/* Technical Stack */}
      <section>
        <h2 className="text-2xl font-serif">Technical Stack</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>EmailJS</li>
          <li>Formik for form handling</li>
          <li>FontAwesome for iconography</li>
        </ul>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-2xl font-serif mb-8">Project Highlights</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[marquisImg, contactImg].map((img, i) => (
            <div key={i} className="bg-neutral-100 p-4">
              <img
                src={img}
                alt={`Tree Solutions preview ${i}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section>
        <h2 className="text-2xl font-serif">Outcome</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The final product provides a clean, mobile-responsive experience
          designed to convert visitors into qualified leads while reinforcing
          brand professionalism in a competitive local services market.
        </p>
      </section>
    </ProjectLayout>
  );
}