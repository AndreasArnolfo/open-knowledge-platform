"use client"

import { useEffect, useRef, useState, Children, isValidElement, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
  duration?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  baseDelay = 0,
  duration = 0.5,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn(className)}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity ${duration}s ease-out ${baseDelay + index * staggerDelay}s, transform ${duration}s ease-out ${baseDelay + index * staggerDelay}s`,
              }}
            >
              {child}
            </div>
          )
        }
        return child
      })}
    </div>
  )
}
