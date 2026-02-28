export default function Footer() {
    return (
      <div className="border-t border-neutral-200 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed">
            Designing and engineering digital experiences that remain human —
            even as technology accelerates.
          </p>

          <div className="mt-12 flex justify-center gap-8 text-sm tracking-wide">
            <a href="#" className="hover:opacity-60 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:opacity-60 transition">
              GitHub
            </a>
            <a href="#" className="hover:opacity-60 transition">
              Instagram
            </a>
            <a href="#" className="hover:opacity-60 transition">
              Email
            </a>
          </div>

          <p className="mt-12 text-xs text-neutral-500">
            © {new Date().getFullYear()} Grace McClarin
          </p>
        </div>
      </div>
    )
}