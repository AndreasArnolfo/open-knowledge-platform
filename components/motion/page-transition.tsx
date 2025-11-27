"use client"

import { useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease-out",
      }}
    >
      {children}
    </div>
  )
}
