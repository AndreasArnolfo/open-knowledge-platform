"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { AnimatedText } from "@/components/motion/animated-text"
import { StaggerContainer } from "@/components/motion/stagger-container"
import { GlitchWrapper } from "@/components/motion/glitch-wrapper"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      {/* Animated circuit lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 H40 M60 50 H100 M50 0 V40 M50 60 V100"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-primary"
              />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <ScrollReveal delay={0.1} duration={0.5}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Now featuring AI-powered learning paths
            </div>
          </ScrollReveal>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <AnimatedText text="Master the Future of" className="text-foreground block" delay={0.2} wordDelay={0.08} />
            <br />
            <span className="inline-block">
              <AnimatedText text="IT." className="text-primary glow-text" delay={0.6} wordDelay={0.1} />
            </span>{" "}
            <AnimatedText text="Code, Secure, Connect." className="text-foreground" delay={0.7} wordDelay={0.1} />
          </h1>

          <ScrollReveal delay={1} duration={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Premium e-learning for Developers, Cybersecurity Experts, and Network Professionals. Build real-world
              skills with hands-on labs and expert instruction.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1.2} duration={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/courses">
                <GlitchWrapper variant="button">
                  <Button size="lg" className="bg-primary text-primary-foreground glow-effect px-8 py-6 text-base">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </GlitchWrapper>
              </Link>
              <Link href="/signup">
                <GlitchWrapper variant="button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 text-foreground px-8 py-6 text-base bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Button>
                </GlitchWrapper>
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1} baseDelay={1.4}>
            {[
              { value: "10,000+", label: "Active Learners" },
              { value: "150+", label: "Expert Courses" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
