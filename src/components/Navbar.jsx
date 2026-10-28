import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { personal } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Education',  href: '#education'  },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen]     = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const location = useLocation()

  // Show shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const onScroll = () => {
      const scrollY = window.scrollY + 100
      sections.forEach((sec, i) => {
        if (sec && scrollY >= sec.offsetTop) setActiveLink(NAV_LINKS[i].href)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setActiveLink(href)
  }

  // Don't show nav links on project detail pages
  const isDetailPage = location.pathname.startsWith('/project/')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md'
        : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="font-bold text-xl gradient-text">
            {personal.shortName}<span className="text-blue-500">.</span>dev
          </Link>

          {/* Desktop nav links */}
          {!isDetailPage && (
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${activeLink === link.href
                      ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Right: dark mode toggle + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile hamburger */}
            {!isDetailPage && (
              <button
                onClick={() => setMenuOpen(prev => !prev)}
                className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && !isDetailPage && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block px-6 py-3 text-sm font-medium transition-colors
                ${activeLink === link.href
                  ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
