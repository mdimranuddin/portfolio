import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700
        text-white rounded-full shadow-lg hover:shadow-blue-500/40
        transition-all duration-200 hover:-translate-y-1 animate-fade-in"
    >
      <FiArrowUp size={20} />
    </button>
  )
}
