import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#timeline'],
  ['GitHub', '#stats'],
  ['Contact', '#contact'],
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono font-semibold text-lg">
          &lt;<span className="text-brand-cyan">RT</span>/&gt;
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-white transition-colors relative group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-grad-main group-hover:w-full transition-all" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-white/10 bg-surface flex items-center justify-center hover:border-brand-cyan transition-all hover:rotate-12"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-slate-300 bg-bg border-t border-white/10">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-1">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
