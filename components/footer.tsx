"use client"

import Image from "next/image"
import { GlitchLink } from "@/components/motion/glitch-link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/images/unnamed-removebg-preview.png"
              alt="Open-Knowledge"
              width={140}
              height={28}
              className="h-7 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Premium e-learning for the next generation of IT professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <GlitchLink href="/courses" className="hover:text-primary transition-colors">
                  Development
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="/courses" className="hover:text-primary transition-colors">
                  Cybersecurity
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="/courses" className="hover:text-primary transition-colors">
                  Networking
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="/courses" className="hover:text-primary transition-colors">
                  Cloud
                </GlitchLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  About Us
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  Careers
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  Blog
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  Contact
                </GlitchLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </GlitchLink>
              </li>
              <li>
                <GlitchLink href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </GlitchLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Open-Knowledge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
