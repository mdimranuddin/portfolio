import { useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

function ProjectCard({ project }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md
      border border-slate-100 dark:border-slate-700 card-hover flex flex-col">

      {/* Project image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Tech stack overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/80 opacity-0 hover:opacity-100
          transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-wrap gap-2 px-4 justify-center">
            {project.techStack.slice(0, 4).map(tech => (
              <span key={tech} className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.tagline}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech}
              className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300
                text-xs font-medium rounded-full">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 text-xs rounded-full">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => navigate(`/project/${project.slug}`)}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700
              text-white text-sm font-medium rounded-lg transition-colors flex-1 justify-center"
          >
            <FiArrowRight size={15} /> View Details
          </button>

          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700
                text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white
                dark:hover:bg-blue-500 transition-colors">
              <FiExternalLink size={16} />
            </a>
          )}

          <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700
              text-slate-600 dark:text-slate-300 hover:bg-slate-800 hover:text-white
              dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
            <FiGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold section-title">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto">
            Real, deployed applications — click <strong>View Details</strong> for the full breakdown.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
