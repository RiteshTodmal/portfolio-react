import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(form.email.trim())) errs.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setStatus({ type: 'ok', text: '✓ Message ready — connect Formspree or EmailJS to actually deliver it.' })
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus({ type: 'error', text: 'Please fix the errors above.' })
    }
  }

  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> Let's Talk
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">
          Get In <span className="grad-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="text-slate-400 mb-7">
              Have a role, project, or just want to talk Spring Boot architecture over chai?
              My inbox is always open.
            </p>
            <div className="flex flex-col gap-3.5 mb-8">
              <a
                href="mailto:riteshtodmal.scoe.entc@gmail.com"
                className="flex items-center gap-3 font-semibold text-sm px-4.5 py-3.5 rounded-xl bg-surface border border-white/10 hover:border-brand-cyan hover:translate-x-1 transition-all"
              >
                📧 riteshtodmal.scoe.entc@gmail.com
              </a>
              <a
                href="tel:+919322876566"
                className="flex items-center gap-3 font-semibold text-sm px-4.5 py-3.5 rounded-xl bg-surface border border-white/10 hover:border-brand-cyan hover:translate-x-1 transition-all"
              >
                📞 +91-9322876566
              </a>
              <a
                href="https://linkedin.com/in/ritesh-todmal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-semibold text-sm px-4.5 py-3.5 rounded-xl bg-surface border border-white/10 hover:border-brand-cyan hover:translate-x-1 transition-all"
              >
                💼 linkedin.com/in/ritesh-todmal
              </a>
            </div>
            <div className="flex gap-3.5">
              {[
                ['🐙', 'https://github.com/RiteshTodmal'],
                ['💼', 'https://linkedin.com/in/ritesh-todmal'],
                ['✉️', 'mailto:riteshtodmal.scoe.entc@gmail.com'],
              ].map(([icon, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11.5 h-11.5 w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-white/10 text-lg hover:-translate-y-1 hover:border-brand-cyan hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-2">Name</label>
              <input
                id="name" name="name" value={form.name} onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
              />
              {errors.name && <div className="text-rose-400 text-xs mt-1.5">{errors.name}</div>}
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-2">Email</label>
              <input
                id="email" name="email" value={form.email} onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
              />
              {errors.email && <div className="text-rose-400 text-xs mt-1.5">{errors.email}</div>}
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-2">Message</label>
              <textarea
                id="message" name="message" value={form.message} onChange={handleChange}
                rows={5} placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-surface text-sm focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
              />
              {errors.message && <div className="text-rose-400 text-xs mt-1.5">{errors.message}</div>}
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-full font-semibold text-sm bg-grad-main hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 transition-all"
            >
              Send Message →
            </button>
            {status && (
              <div className={`mt-3.5 text-sm font-mono ${status.type === 'ok' ? 'text-brand-teal' : 'text-rose-400'}`}>
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
