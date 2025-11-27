"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock, Users, Star } from "lucide-react"

interface CourseCardProps {
  id: string
  title: string
  description: string
  image: string
  level: "Beginner" | "Intermediate" | "Advanced"
  price: number
  duration: string
  students: number
  rating: number
  category: string
}

const GLITCH_CHARS = "⌬⎔⏣⏢◬◇◈⬡⬢⎊⌖⌗⍟⎈⏚⏛⌬░▒▓█▀▄▌▐■□▢▣▤▥▦▧▨▩⊞⊟⊠⊡"

export function CourseCard({
  id,
  title,
  description,
  image,
  level,
  price,
  duration,
  students,
  rating,
  category,
}: CourseCardProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchChars, setGlitchChars] = useState<string[]>([])

  const levelColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return

    setIsGlitching(true)

    // Generate random hieroglyph characters
    const chars: string[] = []
    for (let i = 0; i < 12; i++) {
      chars.push(GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
    }
    setGlitchChars(chars)

    // End glitch effect after 300ms
    setTimeout(() => {
      setIsGlitching(false)
      setGlitchChars([])
    }, 300)
  }, [isGlitching])

  return (
    <Link href={`/courses/${id}`}>
      <Card
        className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300"
        onMouseEnter={triggerGlitch}
      >
        <div
          className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-75 ${
            isGlitching ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Floating hieroglyphs */}
          {glitchChars.map((char, i) => (
            <span
              key={i}
              className="absolute font-mono text-primary/80 animate-glitch-char"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 30}%`,
                fontSize: `${14 + Math.random() * 10}px`,
                animationDelay: `${i * 20}ms`,
                textShadow: "0 0 8px oklch(0.7 0.2 220 / 0.8)",
              }}
            >
              {char}
            </span>
          ))}

          {/* Horizontal glitch lines */}
          <div className="absolute left-0 right-0 top-[30%] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-glitch-line" />
          <div className="absolute left-0 right-0 top-[60%] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-glitch-line-reverse" />
        </div>

        <div
          className={`absolute inset-0 z-20 pointer-events-none rounded-lg transition-opacity duration-50 ${
            isGlitching ? "opacity-100" : "opacity-0"
          }`}
          style={{
            boxShadow: "inset 2px 0 0 oklch(0.75 0.18 195 / 0.7), inset -2px 0 0 oklch(0.65 0.2 330 / 0.6)",
          }}
        />

        <div
          className={`absolute inset-0 z-10 pointer-events-none bg-primary/5 rounded-lg ${
            isGlitching ? "animate-glitch-flash" : "opacity-0"
          }`}
        />

        {/* Card content */}
        <div className={`relative ${isGlitching ? "animate-glitch-shift" : ""}`}>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">{category}</Badge>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={levelColors[level]}>
                {level}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                {rating}
              </div>
            </div>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
          </CardContent>
          <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {students.toLocaleString()}
              </span>
            </div>
            <span className="text-lg font-bold text-primary">${price}</span>
          </CardFooter>
        </div>
      </Card>
    </Link>
  )
}
