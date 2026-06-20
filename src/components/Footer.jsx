export default function Footer() {
  return (
    <footer className="relative py-20 text-center border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grad-main opacity-[0.08] blur-3xl" />
      <p className="relative z-10 font-display font-semibold text-lg sm:text-2xl max-w-xl mx-auto mb-4 px-6">
        "Consistency beats talent when talent doesn't work hard."
      </p>
      <p className="relative z-10 font-mono text-slate-400 text-xs">
        Designed &amp; built by Ritesh Todmal · Pune, Maharashtra · © 2026
      </p>
    </footer>
  )
}
