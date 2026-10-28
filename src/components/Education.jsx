import { education } from '../data/portfolioData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiCalendar, FiMapPin, FiBook } from 'react-icons/fi'

export default function Education() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold section-title">Education</h2>
        </div>

        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} relative`}>
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900" />

          <div className="space-y-10">
            {education.map((item, idx) => (
              <div key={item.id} className="relative flex gap-6 sm:gap-10 pl-12 sm:pl-20">
                {/* Circle on the timeline */}
                <div className={`absolute left-0 sm:left-4 w-8 h-8 rounded-full flex items-center justify-center
                  font-bold text-white text-sm shadow-lg
                  ${idx === 0 ? 'bg-blue-600' : 'bg-slate-400 dark:bg-slate-600'}`}>
                  {idx + 1}
                </div>

                {/* Card */}
                <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6
                  border border-slate-100 dark:border-slate-700 card-hover shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {item.degree}
                      </h3>
                      <p className="text-blue-500 font-semibold mt-0.5">{item.institution}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${item.status === 'Ongoing'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300'}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} className="text-blue-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={14} className="text-blue-400" />
                      <span>{item.location}</span>
                    </div>
                    {item.grade && (
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-semibold">🎓</span>
                        <span>{item.grade}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-600">
                      <FiBook size={14} className="text-blue-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item.courses}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
