import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

// ThemeProvider wraps the whole app so every component can read/set the theme
export function ThemeProvider({ children }) {
  // Read saved theme from localStorage, default to 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook — use this in any component: const { theme, toggleTheme } = useTheme()
export function useTheme() {
  return useContext(ThemeContext)
}
