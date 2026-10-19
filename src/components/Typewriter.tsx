'use client'

import { useState, useEffect } from 'react'

const texts = [
  'Fullstack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Open Source Contributor',
]

export default function Typewriter() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const target = texts[currentIndex]
    const speed = isDeleting ? 40 : 90

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < target.length) {
          setCurrentText(target.slice(0, currentText.length + 1))
        } else {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 2200)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, isPaused])

  return (
    <span className="text-orange-400">
      {currentText}
      <span className="inline-block w-0.5 h-7 bg-orange-500 ml-0.5 align-middle animate-pulse" />
    </span>
  )
}
