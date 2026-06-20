import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

export default function Counter({ target, label }) {
  const [ref, inView] = useReveal(0.4)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let cur = 0
    const step = Math.max(1, Math.ceil(target / 60))
    const t = setInterval(() => {
      cur += step
      if (cur >= target) {
        cur = target
        clearInterval(t)
      }
      setVal(cur)
    }, 25)
    return () => clearInterval(t)
  }, [inView, target])

  return (
    <div ref={ref}>
      <b className="block font-display text-2xl">{val}</b>
      <span className="text-xs uppercase tracking-wider text-slate-400">{label}</span>
    </div>
  )
}
