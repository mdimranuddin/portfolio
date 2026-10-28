import { skills } from '../data/portfolioData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function SkillBar({ name, level, isVisible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-blue-500">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 skill-bar-fill"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ title, emoji, items, isVisible }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md
      border border-slate-100 dark:border-slate-700 card-hover">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h3>
      {items.map(skill => (
        <SkillBar key={skill.name} {...skill} isVisible={isVisible} />
      ))}
    </div>
  )
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold section-title">Technical Skills</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto">
            Technologies I work with — skills proven by real shipped projects.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          <SkillCategory title="Frontend"  emoji="🎨" items={skills.frontend} isVisible={isVisible} />
          <SkillCategory title="Backend"   emoji="⚙️" items={skills.backend}  isVisible={isVisible} />
          <SkillCategory title="Tools"     emoji="🛠️" items={skills.tools}    isVisible={isVisible} />
        </div>
      </div>
    </section>
  )
}
