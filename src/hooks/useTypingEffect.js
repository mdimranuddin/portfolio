import { useEffect, useState } from 'react'

// Cycles through an array of strings with a typewriter effect
export function useTypingEffect(words, typeSpeed = 90, deleteSpeed = 50, pauseTime = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text.length + 1 === current.length) {
          // Finished typing — pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setText(current.substring(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(prev => prev + 1)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return text
}
