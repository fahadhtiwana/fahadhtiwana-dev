"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingEffect({
  text,
  className = "",
  speed = 50,
  delay = 1000,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else {
      // Blink cursor for a bit then hide
      const timer = setTimeout(() => setShowCursor(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [displayedText, text, speed, started])

  // Cursor blink
  const [cursorVisible, setCursorVisible] = useState(true)
  useEffect(() => {
    if (!showCursor) return
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [showCursor])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayedText}
      {showCursor && (
        <span
          className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
          style={{ opacity: cursorVisible ? 1 : 0 }}
        />
      )}
    </motion.span>
  )
}
