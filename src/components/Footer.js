import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-t border-neutral-200 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-serif leading-relaxed">
          Designing and engineering digital experiences that remain human — even
          as technology accelerates.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center border-orange-700 border-2 rounded-full py-2 px-6 text-orange-700 hover:bg-orange-700 hover:text-white transition text-sm tracking-wide"
          >
            LET'S WORK TOGETHER
          </Link>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-sm tracking-wide">
          <a
            href="https://www.linkedin.com/in/gracemcclarin/"
            className="hover:opacity-60 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gmcclarin"
            className="hover:opacity-60 transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/grayce.elisabeth_/"
            className="hover:opacity-60 transition"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:grace.mcclarin@outlook.com"
            className="hover:opacity-60 transition"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>

        <p className="mt-12 text-xs text-neutral-500">
          © {new Date().getFullYear()} Grace McClarin
        </p>
      </div>
    </div>
  );
}
