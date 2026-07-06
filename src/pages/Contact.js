import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full border-b border-neutral-300 bg-transparent py-3 focus:outline-none focus:border-orange-700 transition placeholder:text-neutral-400";

  return (
    <div>
      <Seo
        title="Let's Work Together"
        description="Get in touch about a website or web app for your business. Based in Rochester, NY — working with clients everywhere."
        path="/contact"
      />
      <Navigation fontColor="black" />

      {/* HERO */}
      <section className="px-6 md:px-8 pt-24 pb-12 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight">
          Let's work together.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
          Tell me a little about your project — a new website, an update to an
          existing one, or an idea you're not sure how to build yet. I'll get
          back to you within a day or two.
        </p>
      </section>

      {/* FORM */}
      <section className="px-6 md:px-8 pb-32 max-w-4xl mx-auto">
        {status === "success" ? (
          <div className="py-16">
            <p className="text-2xl md:text-3xl font-serif">
              Thank you — your message is on its way.
            </p>
            <p className="mt-4 text-neutral-600">
              I'll be in touch soon. Talk to you shortly!
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-2xl space-y-8"
          >
            {/* Netlify form plumbing */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm tracking-wide text-neutral-500 mb-1">
                Name
              </label>
              <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm tracking-wide text-neutral-500 mb-1">
                Email
              </label>
              <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm tracking-wide text-neutral-500 mb-1">
                Business or organization <span className="text-neutral-400">(optional)</span>
              </label>
              <input id="business" name="business" type="text" className={inputClasses} placeholder="Where you work or what you run" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm tracking-wide text-neutral-500 mb-1">
                What are you looking for?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className={inputClasses}
                placeholder="A few sentences about your project, timeline, or idea"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center border-orange-700 border-2 rounded-full py-2 px-6 text-orange-700 hover:bg-orange-700 hover:text-white transition disabled:opacity-50"
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </button>
              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  Something went wrong — please try again, or email me directly at{" "}
                  <a href="mailto:grace.mcclarin@outlook.com" className="underline">
                    grace.mcclarin@outlook.com
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
