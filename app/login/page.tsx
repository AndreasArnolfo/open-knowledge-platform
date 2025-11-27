"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { GlitchWrapper } from "@/components/motion/glitch-wrapper"
import { GlitchLink } from "@/components/motion/glitch-link"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen bg-background flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-accent/5 rounded-full blur-[80px]" />
        </div>

        <div className="mx-auto w-full max-w-sm relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-8">
            <Image
              src="/images/unnamed-removebg-preview.png"
              alt="Open-Knowledge"
              width={160}
              height={32}
              className="h-8 w-auto mb-8"
            />
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to continue your learning journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-card border-border/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <GlitchLink href="#" className="text-sm text-primary">
                  Forgot password?
                </GlitchLink>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="bg-card border-border/50 focus:border-primary pr-10 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="border-primary data-[state=checked]:bg-primary" />
              <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                Remember me for 30 days
              </Label>
            </div>

            <GlitchWrapper variant="button" disabled={isLoading}>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground glow-effect py-6"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </GlitchWrapper>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <GlitchWrapper variant="subtle">
                <Button variant="outline" className="w-full border-border/50 bg-transparent">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
              </GlitchWrapper>
              <GlitchWrapper variant="subtle">
                <Button variant="outline" className="w-full border-border/50 bg-transparent">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </GlitchWrapper>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <GlitchLink href="/signup" className="text-primary font-medium">
              Sign up for free
            </GlitchLink>
          </p>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex lg:flex-1 relative bg-card overflow-hidden">
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-lg rotate-12" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-primary/15 rounded-full" />
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-accent/15 rounded-lg -rotate-6" />
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-primary/20 rounded-full" />

          {/* Circuit lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-login" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M0 40 H30 M50 40 H80 M40 0 V30 M40 50 V80"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-primary"
                />
                <circle cx="40" cy="40" r="2" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-login)" />
          </svg>

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Unlock Your <span className="text-primary glow-text">Potential</span>
            </h2>
            <p className="text-muted-foreground">
              Join thousands of IT professionals mastering cutting-edge skills in development, cybersecurity, and
              networking.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "10K+", label: "Students" },
                { value: "150+", label: "Courses" },
                { value: "95%", label: "Success" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
