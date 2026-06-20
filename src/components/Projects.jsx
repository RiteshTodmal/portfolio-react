import { useReveal } from '../hooks/useReveal.js'

const projects = [
  {
    icon: '📚',
    title: 'SkillBazaar',
    date: 'Nov 2024',
    desc: 'Advanced Java e-learning marketplace — instructors upload courses, students enroll and learn, built MVC-style with Agile practices.',
    tags: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL'],
  },
  {
    icon: '🛒',
    title: 'Ecom — The Shopping Cart',
    date: 'Aug 2025',
    desc: 'Full-stack e-commerce platform with product catalog, cart, and checkout. Auth via Spring Security 6.0, persistence via Spring Data JPA.',
    tags: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL'],
  },
  {
    icon: '👁️',
    title: 'EyeX — Eye Tracking AI',
    date: 'Jan 2026',
    desc: 'Real-time eye tracking & cognitive load analyzer using image processing and computer vision, tuned for detection accuracy.',
    tags: ['Python', 'Computer Vision', 'AI/ML'],
  },
  {
    icon: '⚡',
    title: 'Smart Energy Meter',
    date: 'Personal Project',
    desc: 'IoT-based energy monitoring system with a live web dashboard for real-time consumption tracking.',
    tags: ['IoT', 'Arduino', 'ESP8266'],
  },
]

export default function Projects() {
  const [ref, inView] = useReveal(0.1)

  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> Selected Work
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Projects <span className="grad-text">Showcase</span>
        </h2>
        <p className="text-slate-400 max-w-lg mb-12">
          A few things I've built, broken, and rebuilt better.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <div
              key={p.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group rounded-2xl overflow-hidden border border-white/10 bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_24px_48px_-24px_rgba(99,102,241,0.4)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div className="relative h-40 flex items-center justify-center text-4xl border-b border-white/10 bg-gradient-to-br from-surface-2 to-surface overflow-hidden">
                <div className="absolute w-[160%] h-[160%] bg-grad-main opacity-20 blur-3xl transition-transform duration-700 group-hover:rotate-[25deg] group-hover:scale-110" />
                <span className="relative z-10">{p.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                  <span className="text-xs text-slate-500 font-mono">{p.date}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface-2 text-brand-cyan border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 text-sm font-semibold text-slate-400">
                  <a href="#" className="hover:text-brand-cyan transition-colors">⭐ GitHub</a>
                  <a href="#" className="hover:text-brand-cyan transition-colors">↗ Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
