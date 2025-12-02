"use client"

import { useState, useCallback, useRef, useEffect, type ReactNode } from "react"

const GLYPHS = ["⌬", "⎔", "⏣", "◬", "◇", "⬡", "░", "▒", "▓", "█", "⟁", "⟐"]

interface GlitchWrapperProps {
  children: ReactNode
  className?: string
  variant?: "button" | "card" | "subtle"
  disabled?: boolean
}

export function GlitchWrapper({ children, className = "", variant = "button", disabled = false }: GlitchWrapperProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [showGlyphs, setShowGlyphs] = useState(false)
  const [glyphs, setGlyphs] = useState<Array<{ id: number; char: string; x: number; y: number }>>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const triggerGlitch = useCallback(() => {
    if (isGlitching || disabled) return
    setIsGlitching(true)
    setShowGlyphs(true)

    // Generate more random glyphs for faster animation
    const count = variant === "subtle" ? 6 : variant === "card" ? 12 : 10
    const generateGlyphs = () => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
    }
    setGlyphs(generateGlyphs())

    // Update glyphs multiple times during animation for faster effect
    const glitchDuration = variant === "subtle" ? 300 : 400
    const glyphDuration = variant === "subtle" ? 800 : 1000
    const updateInterval = variant === "subtle" ? 60 : 80
    let updates = 0
    const maxUpdates = Math.floor(glitchDuration / updateInterval)

    intervalRef.current = setInterval(() => {
      updates++
      setGlyphs(generateGlyphs())
      
      if (updates >= maxUpdates) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setIsGlitching(false)
      }
    }, updateInterval)

    // Stop glitch animation but keep glyphs
    setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setIsGlitching(false)
    }, glitchDuration)

    // Hide glyphs after longer duration
    setTimeout(() => {
      setShowGlyphs(false)
      setGlyphs([])
    }, glyphDuration)
  }, [isGlitching, variant, disabled])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className={`relative ${className}`} onMouseEnter={triggerGlitch}>
      {/* Glitch glyphs overlay */}
      {showGlyphs && (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]">
          {glyphs.map((glyph) => (
            <span
              key={glyph.id}
              className={`absolute text-primary/60 font-mono ${isGlitching ? "animate-glyph-fade" : "animate-glyph-stay"}`}
              style={{
                left: `${glyph.x}%`,
                top: `${glyph.y}%`,
                fontSize: variant === "subtle" ? "10px" : "12px",
                transform: "translate(-50%, -50%)",
              }}
            >
              {glyph.char}
            </span>
          ))}
          {/* Scanlines - only during active glitch */}
          {isGlitching && (
            <>
              <div className="absolute h-[2px] w-full bg-primary/20 animate-scan-fast" style={{ top: "20%" }} />
              <div className="absolute h-[1px] w-full bg-primary/15 animate-scan-fast-reverse" style={{ top: "40%" }} />
              <div className="absolute h-[2px] w-full bg-primary/20 animate-scan-fast" style={{ top: "60%" }} />
              <div className="absolute h-[1px] w-full bg-primary/15 animate-scan-fast-reverse" style={{ top: "80%" }} />
            </>
          )}
        </div>
      )}

      {/* Content with subtle shift on glitch */}
      <div className={isGlitching ? "animate-micro-shift" : ""}>{children}</div>
    </div>
  )
}
