"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlitchLink } from "@/components/motion/glitch-link"
import { GlitchWrapper } from "@/components/motion/glitch-wrapper"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/unnamed-removebg-preview.png"
              alt="Open-Knowledge"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            <GlitchLink href="/courses" className="text-sm text-muted-foreground hover:text-primary">
              Courses
            </GlitchLink>
            <GlitchLink href="/courses" className="text-sm text-muted-foreground hover:text-primary">
              Categories
            </GlitchLink>
            <GlitchLink href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">
              Dashboard
            </GlitchLink>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/login">
              <GlitchWrapper variant="subtle">
                <Button variant="ghost" className="text-foreground">
                  Login
                </Button>
              </GlitchWrapper>
            </Link>
            <Link href="/signup">
              <GlitchWrapper variant="button">
                <Button className="bg-primary text-primary-foreground glow-effect">Get Started</Button>
              </GlitchWrapper>
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            <GlitchLink
              href="/courses"
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </GlitchLink>
            <GlitchLink
              href="/courses"
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </GlitchLink>
            <GlitchLink
              href="/dashboard"
              className="block py-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </GlitchLink>
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login">
                <GlitchWrapper variant="subtle">
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </GlitchWrapper>
              </Link>
              <Link href="/signup">
                <GlitchWrapper variant="button">
                  <Button className="w-full bg-primary text-primary-foreground glow-effect">Get Started</Button>
                </GlitchWrapper>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
