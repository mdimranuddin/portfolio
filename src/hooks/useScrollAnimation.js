import { useEffect, useRef, useState } from 'react'

// Returns a ref and a boolean (isVisible).
// Attach the ref to any element — it becomes visible when it enters the viewport.
// Usage: const [ref, isVisible] = useScrollAnimation()
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stop watching once visible (animate only once)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => { if (el) observer.unobserve(el) }
  }, [threshold])

  return [ref, isVisible]
}
