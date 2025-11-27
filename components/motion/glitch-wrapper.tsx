"use client"

import { useState, useCallback, type ReactNode } from "react"

const GLYPHS = ["⌬", "⎔", "⏣", "◬", "◇", "⬡", "░", "▒", "▓", "█", "⟁", "⟐"]

interface GlitchWrapperProps {
  children: ReactNode
  className?: string
  variant?: "button" | "card" | "subtle"
  disabled?: boolean
}

export function GlitchWrapper({ children, className = "", variant = "button", disabled = false }: GlitchWrapperProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glyphs, setGlyphs] = useState<Array<{ id: number; char: string; x: number; y: number }>>([])

  const triggerGlitch = useCallback(() => {
    if (isGlitching || disabled) return
    setIsGlitching(true)

    // Generate random glyphs
    const count = variant === "subtle" ? 4 : variant === "card" ? 8 : 6
    const newGlyphs = Array.from({ length: count }, (_, i) => ({
      id: i,
      char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setGlyphs(newGlyphs)

    // Clear after animation
    const duration = variant === "subtle" ? 200 : 300
    setTimeout(() => {
      setIsGlitching(false)
      setGlyphs([])
    }, duration)
  }, [isGlitching, variant, disabled])

  return (
    <div className={`relative ${className}`} onMouseEnter={triggerGlitch}>
      {/* Glitch glyphs overlay */}
      {isGlitching && (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]">
          {glyphs.map((glyph) => (
            <span
              key={glyph.id}
              className="absolute text-primary/60 font-mono animate-glyph-fade"
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
          {/* Scanlines */}
          <div className="absolute h-[2px] w-full bg-primary/20 animate-scan-fast" style={{ top: "30%" }} />
          <div className="absolute h-[1px] w-full bg-primary/15 animate-scan-fast-reverse" style={{ top: "70%" }} />
        </div>
      )}

      {/* Content with subtle shift on glitch */}
      <div className={isGlitching ? "animate-micro-shift" : ""}>{children}</div>
    </div>
  )
}
