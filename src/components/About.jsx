import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const skills = [
  { name: 'Java', pct: 88 },
  { name: 'Spring Boot', pct: 80 },
  { name: 'SQL / MySQL', pct: 82 },
  { name: 'JavaScript', pct: 62 },
  { name: 'REST APIs', pct: 78 },
]

function SkillBar({ name, pct, inView }) {
  return (
    <div className="grid grid-cols-[120px_1fr_44px] items-center gap-4 text-sm">
      <span className="font-mono font-semibold">{name}</span>
      <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-grad-main skill-fill"
          style={{ width: inView ? `${pct}%` : '0%' }}
        />
      </div>
      <span className="text-right text-slate-400 font-mono">{pct}%</span>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useReveal(0.2)

  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> Who I Am
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          About <span className="grad-text">Me</span>
        </h2>

        <div ref={ref} className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-surface aspect-[4/5] group">
            <img src="/profile.png" alt="Ritesh Todmal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-grad-main opacity-0 group-hover:opacity-25 mix-blend-overlay transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 bg-bg/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 font-mono text-xs">
              📍 Pune, Maharashtra · Open to opportunities
            </div>
          </div>

          <div>
            <p className="text-slate-400 mb-4">
              I'm <strong className="text-slate-100">Ritesh Todmal</strong>, a final-year
              ENTC Engineering student at Sinhgad College of Engineering with a{' '}
              <strong className="text-slate-100">9.05 CGPA</strong> and a habit of
              turning coursework into shipped software. My focus is Java full-stack
              development — Spring, Spring Boot, REST APIs, and MySQL — with growing
              experience in microservices and Hibernate.
            </p>
            <p className="text-slate-400 mb-4">
              I'm currently a <strong className="text-slate-100">GenC Program Intern (Programmer Analyst Trainee)
              at Cognizant</strong>, having previously worked on an{' '}
              <strong className="text-slate-100">IPv6 enterprise tunneling security project at BSNL</strong>{' '}
              and as a <strong className="text-slate-100">Java Web Development Intern at N Infinity Info Solutions</strong>.
            </p>
            <p className="text-slate-400 mb-8">
              Outside of internships, I build full projects end-to-end — from an
              e-learning marketplace to an AI-based eye-tracking system — because the
              fastest way I've found to actually learn a framework is to ship
              something real with it.
            </p>

            <div className="flex flex-col gap-5">
              {skills.map((s) => (
                <SkillBar key={s.name} {...s} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
