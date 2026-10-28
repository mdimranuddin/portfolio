import { experience } from '../data/portfolioData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold section-title">Experience</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6">
            My professional and open-source work so far.
          </p>
        </div>

        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} relative`}>
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900" />

          <div className="space-y-10">
            {experience.map((item) => (
              <div key={item.id} className="relative flex gap-6 sm:gap-10 pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-4 w-8 h-8 rounded-full bg-blue-600
                  flex items-center justify-center shadow-lg">
                  <FiBriefcase size={14} className="text-white" />
                </div>

                <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6
                  border border-slate-100 dark:border-slate-700 shadow-sm card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {item.title}
                      </h3>
                      <p className="text-blue-500 font-semibold mt-0.5">{item.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={13} className="text-blue-400" /> {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} className="text-blue-400" /> {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
