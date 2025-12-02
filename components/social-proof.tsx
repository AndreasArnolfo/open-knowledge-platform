"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { StaggerContainer } from "@/components/motion/stagger-container"

const companies = [
  { name: "Google", logo: "/google-logo-white.jpg" },
  { name: "Microsoft", logo: "/microsoft-logo-white.jpg" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Meta", logo: "/meta-logo-white.jpg" },
  { name: "Apple", logo: "/white-apple-logo.png" },
]

export function SocialProof() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50 bg-card/30 overflow-hidden">
      {/* Background image on the right */}
      <div className="absolute right-34 top-0 bottom-0 w-1/3 max-w-md opacity-70 pointer-events-none hidden lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/images/instructor-portrait.png"
            alt=""
            fill
            className="object-contain object-right"
            priority={false}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by <span className="text-primary font-semibold">10,000+</span> learners from top tech companies
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          staggerDelay={0.08}
          baseDelay={0.1}
        >
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={120}
              height={40}
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
