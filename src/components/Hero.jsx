import { useEffect, useRef, useState } from 'react'
import Counter from './Counter.jsx'

const roles = [
  'Java Full Stack Developer',
  'Spring Boot Enthusiast',
  'GenC Intern @ Cognizant',
  'AI/ML Explorer',
]

const buildLog = [
  { t: 'prompt', text: '$ whoami' },
  { t: 'out', text: 'ritesh-todmal · java-full-stack-dev' },
  { t: 'prompt', text: '$ ./build.sh --profile=career' },
  { t: 'out', text: 'compiling experience...' },
  { t: 'ok', text: '✓ Cognizant GenC Internship' },
  { t: 'ok', text: '✓ BSNL + N Infinity Internships' },
  { t: 'ok', text: '✓ CGPA 9.05 · Dept. 2nd Topper' },
  { t: 'prompt', text: '$ status' },
  { t: 'ok', text: 'BUILD SUCCESSFUL — ready to ship 🚀' },
]

function useTyped() {
  const [text, setText] = useState('')
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false, timer
    const tick = () => {
      const word = roles[ri]
      if (!deleting) {
        ci++
        setText(word.slice(0, ci))
        if (ci === word.length) {
          deleting = true
          timer = setTimeout(tick, 1400)
          return
        }
      } else {
        ci--
        setText(word.slice(0, ci))
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % roles.length
        }
      }
      timer = setTimeout(tick, deleting ? 35 : 65)
    }
    tick()
    return () => clearTimeout(timer)
  }, [])
  return text
}

function Particles() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const colors = ['#3b82f6', '#8b5cf6', '#14b8a6', '#22d3ee']
    let particles = []
    let raf

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.6,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        c: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.c
        ctx.globalAlpha = 0.55
        ctx.fill()
      })
      raf = requestAnimationFrame(loop)
    }
    if (!reduced) loop()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

function Terminal() {
  const [lines, setLines] = useState([])
  useEffect(() => {
    let idx = 0
    let timeout
    function typeNext() {
      if (idx >= buildLog.length) return
      const { t, text } = buildLog[idx]
      let c = 0
      const iv = setInterval(() => {
        c++
        setLines((prev) => {
          const copy = [...prev]
          copy[idx] = { t, text: text.slice(0, c) }
          return copy
        })
        if (c >= text.length) {
          clearInterval(iv)
          idx++
          timeout = setTimeout(typeNext, 260)
        }
      }, 18)
    }
    const start = setTimeout(typeNext, 600)
    return () => {
      clearTimeout(start)
      clearTimeout(timeout)
    }
  }, [])

  const colorFor = (t) => (t === 'prompt' ? 'text-brand-cyan' : t === 'ok' ? 'text-brand-teal' : 'text-slate-200')

  return (
    <div className="rounded-2xl border border-white/10 bg-surface shadow-[0_0_40px_rgba(99,102,241,0.25)] overflow-hidden font-mono text-[13.5px] lg:rotate-y-[-4deg] lg:[transform:perspective(800px)_rotateY(-4deg)]">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-slate-400">ritesh@dev — build.sh</span>
      </div>
      <div className="p-5 min-h-[230px] text-slate-400">
        {lines.map((l, i) => (
          <div key={i} className={`mb-2 whitespace-pre-wrap ${colorFor(l.t)}`}>{l.text}</div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const typed = useTyped()

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <Particles />
      <div
        className="absolute -inset-10 z-0 pointer-events-none blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 18% 25%, rgba(59,130,246,.25), transparent 40%), radial-gradient(circle at 82% 70%, rgba(139,92,246,.22), transparent 45%), radial-gradient(circle at 50% 100%, rgba(20,184,166,.18), transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-brand-cyan" /> Portfolio / 2026
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
            Hi, I'm <span className="grad-text">Ritesh Todmal</span>
          </h1>
          <div className="font-mono text-base sm:text-lg text-slate-400 mb-6 min-h-[28px]">
            &gt; {typed}<span className="text-brand-cyan animate-blink">|</span>
          </div>
          <p className="text-slate-400 text-base max-w-md mb-9">
            Java Full Stack Developer from Pune, building reliable Spring Boot systems
            and clean RESTful APIs. Currently a GenC Intern at Cognizant — turning
            CGPA 9.05 worth of fundamentals into real shipped software.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/Ritesh_Todmal_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-grad-main shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-indigo-500/50 transition-all"
            >
              📄 View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-all"
            >
              ✉️ Contact Me
            </a>
          </div>
          <div className="flex gap-8 flex-wrap font-mono">
            <Counter target={4} label="Projects" />
            <Counter target={3} label="Internships" />
            <Counter target={9} label="CGPA x10" />
            <Counter target={4} label="Certifications" />
          </div>
        </div>

        <Terminal />
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[11px] font-mono tracking-widest z-10">
        <span>SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-brand-cyan to-transparent animate-pulse" />
      </div>
    </section>
  )
}
