import ProjectLayout from "../components/ProjectLayout";
import aboutImg from "../assets/images/portfolio/abouttwoormore.png";
import whyImg from "../assets/images/portfolio/thewhy.png";
import meetImg from "../assets/images/portfolio/meetbrian.png";

export default function TwoOrMore() {
  return (
    <ProjectLayout
      title="Two Or More"
      subtitle="An educational and community-driven web platform built for a nonprofit organization supporting individuals who identify as belonging to two or more racial groups."
      heroImage={whyImg}
      githubLink="https://github.com/madalinefitz/Two-or-More"
    >
      {/* Client Context */}
      <section>
        <h2 className="text-2xl font-serif">Client Context</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Two or More is a nonprofit organization focused on fostering
          connection, education, and reconciliation for individuals and
          families navigating multi-ethnic identity.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The organization needed a digital space that could serve as both an
          educational resource hub and a community storytelling platform.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-serif">Mission & Vision</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The platform was designed to support meaningful dialogue, provide
          curated educational materials, and create space for personal stories.
          Every structural decision centered around clarity, accessibility, and
          emotional safety.
        </p>
      </section>

      {/* Core Features */}
      <section>
        <h2 className="text-2xl font-serif">Core Platform Features</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>
            <strong>Library:</strong> Categorized educational resources across
            digital, print, and audio formats.
          </li>
          <li>
            <strong>Stories:</strong> A submission-based storytelling section
            where community members share personal narratives.
          </li>
          <li>
            <strong>Founder Spotlight:</strong> Dedicated space introducing the
            heart and leadership behind the nonprofit.
          </li>
        </ul>
      </section>

      {/* Technical Architecture */}
      <section>
        <h2 className="text-2xl font-serif">Technical Architecture</h2>
        <ul className="mt-4 text-neutral-700 space-y-3">
          <li>React frontend</li>
          <li>Java + Spring Boot backend</li>
          <li>PostgreSQL database</li>
          <li>RESTful API design</li>
          <li>Tailwind CSS styling</li>
        </ul>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          The full-stack architecture supports scalable content management and
          future expansion of user-submitted stories and educational materials.
        </p>
      </section>

      {/* Visual Highlights */}
      <section>
        <h2 className="text-2xl font-serif mb-8">Visual Highlights</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[whyImg, aboutImg, meetImg].map((img, i) => (
            <div key={i} className="bg-neutral-100 p-4">
              <img
                src={img}
                alt={`Two Or More preview ${i}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-serif">Impact</h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          This project demonstrates the ability to build technology that serves
          mission-driven organizations. It required thoughtful UX decisions,
          scalable backend architecture, and a design system that supports
          emotionally meaningful content.
        </p>
      </section>
    </ProjectLayout>
  );
}