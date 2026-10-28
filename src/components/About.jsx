import { personal, about } from '../data/portfolioData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold section-title">About Me</h2>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-12 items-start`}
        >
          {/* Left — photo + quick facts */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-blue-500/30">
              {personal.photo ? (
                <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">{personal.shortName.charAt(0)}</span>
                </div>
              )}
            </div>

            {/* Quick facts */}
            <div className="w-full bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 space-y-3">
              {[
                { label: 'Name',     value: personal.name },
                { label: 'Email',    value: personal.email },
                { label: 'Location', value: personal.location },
                { label: 'Status',   value: '🟢 Open to Work' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-wrap gap-2">
                  <span className="font-semibold text-blue-500 min-w-[70px]">{label}:</span>
                  <span className="text-slate-600 dark:text-slate-300 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio text */}
          <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                🚀 My Journey
              </h3>
              <p>{about.journey}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                💻 Work I Enjoy
              </h3>
              <p>{about.workType}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                ⚡ Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {about.hobbies.map(h => (
                  <span key={h.label}
                    className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 dark:bg-blue-900/30
                      text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {h.icon} {h.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                🎯 Personality
              </h3>
              <p>{about.personality}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
