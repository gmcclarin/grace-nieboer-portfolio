import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import portrait from "../assets/images/home/me.jpeg";

export default function About() {
  return (
    <div>
      <Navigation fontColor="black" />
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <p className="text-4xl md:text-6xl font-serif leading-tight tracking-tight">
          I’ve always worked in systems — first with people, now with
          technology.
        </p>

        <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-600 max-w-2xl mx-auto">
          My work bridges human understanding and technical execution, shaped by
          a career that began in public administration and evolved into software
          engineering.
        </p>
      </section>

      {/* Narrative */}

      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="aspect-[4/5] w-full">
          <img
            src={portrait}
            alt="Portrait"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div>
          <p className="text-xl font-serif leading-relaxed">
            Before tech, I worked in employee relations — helping people
            navigate conflict, policy, and organizational change.
          </p>

          <p className="mt-6 leading-relaxed text-neutral-700">
            With a Master’s degree in Public Administration, my early career
            focused on understanding how institutions function and how decisions
            impact real people. I spent years in HR resolving workplace
            challenges, interpreting systems, and designing fair, structured
            outcomes.
          </p>

          <p className="mt-6 leading-relaxed text-neutral-700">
            In 2022, I made a deliberate shift into software engineering —
            completing an intensive full-stack development bootcamp and earning
            my certification. What began as curiosity quickly became clarity.
          </p>
        </div>
      </section>

      {/* standalone */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-serif leading-tight">
            It was the most decisive career move I’ve made — and the right one.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-neutral-700">
            Four years into tech, I’ve found the intersection where design,
            engineering, and human-centered thinking meet. I don’t see code as
            separate from people — I see it as infrastructure for experience.
          </p>
        </div>
      </section>

      {/* technical credibility */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-2xl">Software Engineering</p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Full-stack development across modern frameworks, building scalable
              and maintainable applications from interface to infrastructure.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl">Cloud Foundations</p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              AWS Certified Cloud Practitioner, with a focus on reliability,
              architecture, and thoughtful system design.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl">Human Systems</p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              A background in employee relations and public administration that
              informs how I think about scale, governance, and the human impact
              of technology.
            </p>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="py-32 px-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-3xl font-serif leading-tight">How I work</p>
          </div>

          <div>
            <p className="leading-relaxed text-neutral-700">
              I value clarity over noise, structure over trend, and thoughtful
              iteration over speed for its own sake. My background in employee
              relations taught me how to listen carefully and solve problems
              without ego — skills that translate directly into technical work.
            </p>

            <p className="mt-6 leading-relaxed text-neutral-700">
              Whether collaborating with a team or building independently, I aim
              to create environments where decisions are intentional and
              outcomes feel steady, considered, and resilient.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
