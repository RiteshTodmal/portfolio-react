import { useReveal } from '../hooks/useReveal.js'

const stack = [
  ['☕', 'Java'], ['🧠', 'Adv. Java'], ['🗄️', 'SQL'], ['🔵', 'C'],
  ['🐍', 'Python'], ['🤖', 'AI/ML'], ['🍃', 'Spring'], ['🚀', 'Spring Boot'],
  ['🔗', 'REST APIs'], ['🧩', 'Microservices'], ['🧱', 'Hibernate'], ['⚛️', 'React'],
  ['🌐', 'HTML'], ['🎨', 'CSS'], ['⚡', 'JavaScript'], ['🔌', 'JDBC'],
  ['🔧', 'Git'], ['🐙', 'GitHub'], ['🗃️', 'MySQL'], ['📮', 'Postman'],
  ['💡', 'IntelliJ'], ['🌑', 'Eclipse'], ['🖥️', 'VS Code'],
]

export default function Skills() {
  const [ref, inView] = useReveal(0.1)

  return (
    <section id="skills" className="py-28 bg-bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> Toolbox
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Tech <span className="grad-text">Stack</span>
        </h2>
        <p className="text-slate-400 max-w-lg mb-12">
          Languages, frameworks, and tools I reach for when building something real.
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {stack.map(([icon, name], i) => (
            <div
              key={name}
              style={{ transitionDelay: `${i * 25}ms` }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-surface py-6 text-xs font-semibold text-slate-400 transition-all hover:-translate-y-1.5 hover:border-brand-cyan hover:text-white hover:bg-surface-2 hover:shadow-[0_12px_24px_-12px_rgba(34,211,238,0.3)]"
            >
              <span className="text-2xl">{icon}</span>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
