import Counter from './Counter.jsx'
import { useReveal } from '../hooks/useReveal.js'

const GITHUB_USERNAME = 'RiteshTodmal'

export default function GithubStats() {
  const [ref, inView] = useReveal(0.1)

  return (
    <section id="stats" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-brand-cyan font-mono text-sm uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-brand-cyan" /> Open Source Activity
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          GitHub <span className="grad-text">Stats</span>
        </h2>
        <p className="text-slate-400 max-w-lg mb-12">
          Live snapshot of my coding activity, streaks, and contributions.
        </p>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {[
            ['Commits', 450],
            ['Stars Earned', 28],
            ['Repositories', 14],
            ['Day Streak', 9],
          ].map(([label, val]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-surface text-center py-7">
              <div className="font-display font-extrabold text-3xl grad-text">
                {inView ? <Counter target={val} label={label} /> : <span>0</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true`}
            alt="GitHub stats"
            className="w-full rounded-xl border border-white/10"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true`}
            alt="GitHub streak"
            className="w-full rounded-xl border border-white/10"
          />
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${GITHUB_USERNAME}&theme=tokyonight&no-frame=true&row=1&column=6`}
            alt="GitHub trophies"
            className="w-full rounded-xl border border-white/10 md:col-span-2"
          />
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true`}
            alt="GitHub activity graph"
            className="w-full rounded-xl border border-white/10 md:col-span-2"
          />
        </div>
      </div>
    </section>
  )
}
