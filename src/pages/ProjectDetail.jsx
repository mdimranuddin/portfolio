import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/portfolioData'
import {
  FiArrowLeft, FiExternalLink, FiGithub,
  FiLayers, FiCheckCircle, FiAlertCircle, FiTrendingUp
} from 'react-icons/fi'

export default function ProjectDetail() {
  const { slug }   = useParams()
  const navigate   = useNavigate()
  const project    = projects.find(p => p.slug === slug)

  // Scroll to top when page loads
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  // 404 state
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4
        bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-16">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <button onClick={() => navigate('/')}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <FiArrowLeft /> Back to Portfolio
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400
            hover:text-blue-500 transition-colors mb-8 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8 h-64 sm:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title + links */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">
              {project.title}
            </h1>
            <p className="text-blue-500 font-medium text-lg">{project.tagline}</p>
          </div>
          <div className="flex gap-3">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700
                  text-white text-sm font-semibold rounded-xl transition-colors shadow-md">
                <FiExternalLink size={15} /> Live Demo
              </a>
            )}
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700
                dark:bg-slate-700 dark:hover:bg-slate-600
                text-white text-sm font-semibold rounded-xl transition-colors shadow-md">
              <FiGithub size={15} /> GitHub Repo
            </a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm
          border border-slate-100 dark:border-slate-700 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
            <FiLayers className="text-blue-500" /> Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech}
                className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300
                  text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm
          border border-slate-100 dark:border-slate-700 mb-6">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
            📋 Project Description
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key features */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm
          border border-slate-100 dark:border-slate-700 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
            <FiCheckCircle className="text-green-500" /> Key Features
          </h2>
          <ul className="space-y-2.5">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <FiCheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm
          border border-slate-100 dark:border-slate-700 mb-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
            <FiAlertCircle className="text-orange-500" /> Challenges Faced
          </h2>
          <ul className="space-y-2.5">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <FiAlertCircle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Future improvements */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm
          border border-slate-100 dark:border-slate-700 mb-10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
            <FiTrendingUp className="text-purple-500" /> Potential Improvements & Future Plans
          </h2>
          <ul className="space-y-2.5">
            {project.improvements.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                <FiTrendingUp size={16} className="text-purple-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom nav */}
        <div className="flex justify-between flex-wrap gap-4">
          <button onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-blue-500
              text-blue-500 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-colors">
            <FiArrowLeft /> Back to Portfolio
          </button>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700
                text-white font-semibold rounded-xl transition-colors shadow-md">
              <FiExternalLink /> View Live App
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
