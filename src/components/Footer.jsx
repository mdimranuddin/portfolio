import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiHeart } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { href: personal.social.github,   icon: FiGithub,   label: 'GitHub'   },
    { href: personal.social.linkedin,  icon: FiLinkedin, label: 'LinkedIn' },
    { href: personal.social.twitter,   icon: FiTwitter,  label: 'Twitter'  },
    { href: personal.social.facebook,  icon: FiFacebook, label: 'Facebook' },
  ]

  const navLinks = [
    { label: 'Home',       href: '#home'       },
    { label: 'About',      href: '#about'      },
    { label: 'Skills',     href: '#skills'     },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Contact',    href: '#contact'    },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8
          border-b border-slate-700">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold gradient-text mb-1">
              {personal.shortName}<span className="text-blue-500">.</span>dev
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              {personal.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-blue-600
                  text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart size={13} className="text-red-500" /> using React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
