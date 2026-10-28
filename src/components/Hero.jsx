import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiDownload, FiArrowDown } from 'react-icons/fi'
import { personal } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'

export default function Hero() {
  const typedText = useTypingEffect(personal.designations)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
        bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-16"
    >
      {/* Background decoration circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left — Text */}
          <div className="flex-1 text-center md:text-left animate-fade-up">
            <p className="text-blue-500 font-semibold text-lg mb-2 tracking-wide">
              👋 Hello, I&apos;m
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Typing animation */}
            <div className="h-10 mb-4 flex items-center justify-center md:justify-start">
              <span className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                {typedText}
                <span className="animate-blink text-blue-500 ml-0.5">|</span>
              </span>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700
                  text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30
                  transition-all duration-200 hover:-translate-y-0.5"
              >
                <FiDownload size={18} />
                Download Resume
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500
                  font-semibold rounded-lg hover:bg-blue-500 hover:text-white
                  transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { href: personal.social.github,   icon: FiGithub,   label: 'GitHub'   },
                { href: personal.social.linkedin,  icon: FiLinkedin, label: 'LinkedIn' },
                { href: personal.social.facebook,  icon: FiFacebook, label: 'Facebook' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full bg-slate-200 dark:bg-slate-700
                    text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white
                    dark:hover:bg-blue-500 transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-30 scale-105" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden
                border-4 border-blue-500/50 shadow-2xl shadow-blue-500/20">
                {personal.photo ? (
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder gradient avatar — replace with your real photo
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700
                    flex items-center justify-center">
                    <span className="text-white text-7xl font-bold select-none">
                      {personal.shortName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* Status badge */}
              <div className="absolute bottom-4 right-0 bg-white dark:bg-slate-800
                px-3 py-1.5 rounded-full shadow-lg text-sm font-medium
                flex items-center gap-2 border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-700 dark:text-slate-300">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-500 transition-colors animate-bounce-slow">
        <FiArrowDown size={28} />
      </a>
    </section>
  )
}
