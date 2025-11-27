"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Link from "next/link"

const GLYPHS = "⌬⎔⏣◬◇⬡░▒▓"

interface GlitchLinkProps {
  href: string
  children: string
  className?: string
  onClick?: () => void
}

export function GlitchLink({ href, children, className = "", onClick }: GlitchLinkProps) {
  const [displayText, setDisplayText] = useState(children)
  const [isGlitching, setIsGlitching] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const originalText = children

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return
    setIsGlitching(true)

    let iterations = 0
    const maxIterations = 8

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, index) => {
            if (index < iterations / 2) return originalText[index]
            if (char === " ") return " "
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join(""),
      )

      iterations++

      if (iterations >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(originalText)
        setIsGlitching(false)
      }
    }, 30)
  }, [isGlitching, originalText])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <Link href={href} className={`relative inline-block ${className}`} onMouseEnter={triggerGlitch} onClick={onClick}>
      <span className="font-mono">{displayText}</span>
      {isGlitching && <span className="absolute bottom-0 left-0 h-[1px] w-full bg-primary animate-scan-horizontal" />}
    </Link>
  )
}
