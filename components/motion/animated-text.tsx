"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  wordDelay?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  wordDelay = 0.08,
  duration = 0.4,
  as: Component = "span",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(" ")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Component ref={ref as any} className={cn("inline", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: `opacity ${duration}s ease-out ${delay + index * wordDelay}s, transform ${duration}s ease-out ${delay + index * wordDelay}s`,
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Component>
  )
}
