import { useReveal } from '../hooks/useReveal.js'

const items = [
  {
    icon: '💼',
    date: 'Jan 2026 — May 2026',
    title: 'GenC Program Intern — Programmer Analyst Trainee',
    org: 'Cognizant Technology Solutions Corporation',
    desc: 'Building enterprise-grade Java applications and learning real-world software engineering practices.',
  },
  {
    icon: '📡',
    date: 'Aug 2025 — Jan 2026',
    title: 'Project Intern',
    org: 'Bharat Sanchar Nigam Limited (BSNL)',
    desc: 'Worked on automated secured configuration in an IPv6 enterprise tunnelling network.',
  },
  {
    icon: '💻',
    date: 'Feb 2025',
    title: 'Java Web Development Intern',
    org: 'N Infinity Info Solutions',
    desc: 'Hands-on Java web development, strengthening core fundamentals before larger internships.',
  },
  {
    icon: '🎓',
    date: '2022 — 2026',
    title: 'B.E. Electronics & Telecommunication',
    org: 'Sinhgad College of Engineering · CGPA 9.05',
    desc: 'Final year student, balancing coursework — Department Second Topper in Academics.',
  },
]

export default function Timeline() {
  const [ref, inView] = useReveal(0.1)

  return (
    <section id="timeline" className="py-28 bg-bg-soft">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> The Path So Far
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Experience &amp; <span className="grad-text">Education</span>
        </h2>
        <p className="text-slate-400 mb-12">A timeline, because order here actually matters.</p>

        <div ref={ref} className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-violet to-brand-teal" />
          {items.map((it, i) => (
            <div
              key={it.title}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`relative pl-[70px] mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              <div className="absolute left-3.5 top-0.5 w-6 h-6 rounded-full bg-bg border-2 border-brand-cyan flex items-center justify-center text-xs">
                {it.icon}
              </div>
              <div className="rounded-xl border border-white/10 bg-surface px-5 py-5">
                <span className="block font-mono text-xs text-brand-cyan mb-1.5">{it.date}</span>
                <h4 className="font-display text-lg mb-1">{it.title}</h4>
                <div className="text-slate-400 text-sm mb-2">{it.org}</div>
                <p className="text-slate-400 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
