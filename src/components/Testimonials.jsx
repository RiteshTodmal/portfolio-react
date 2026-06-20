import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: '"Ritesh picks up new tech stacks fast and digs into the why behind a bug instead of just patching it."',
    author: 'Mentor, Cognizant GenC',
    role: 'Technical Lead',
  },
  {
    quote: '"One of the few interns who reads documentation before asking. Reliable and detail-oriented throughout the IPv6 project."',
    author: 'Project Supervisor',
    role: 'BSNL Internship',
  },
  {
    quote: '"Built SkillBazaar from scratch and genuinely understood every layer of it when explaining the architecture."',
    author: 'Faculty Mentor',
    role: 'Final Year Project Guide',
  },
]

const badges = [
  '📜 Spring Framework — Udemy',
  '☕ Java Certification',
  '🚀 Advanced Java Certification',
  '☁️ OCI Generative AI Certification',
  '🏆 Department Second Topper',
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="py-28 bg-bg-soft">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> Kind Words
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          Testimonials &amp; <span className="grad-text">Achievements</span>
        </h2>

        <div className="min-h-[160px]">
          {testimonials.map((t, i) => (
            <div key={i} className={i === idx ? 'block animate-[fadein_.6s_ease]' : 'hidden'}>
              <p className="font-display font-medium text-lg sm:text-xl mb-5 leading-relaxed">{t.quote}</p>
              <div className="text-brand-cyan font-mono text-sm">{t.author}</div>
              <div className="text-slate-400 text-xs">{t.role}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-brand-cyan scale-125' : 'bg-surface-2'}`}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {badges.map((b) => (
            <span
              key={b}
              className="text-sm font-semibold text-slate-400 px-4 py-2.5 rounded-full border border-white/10 bg-surface"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
