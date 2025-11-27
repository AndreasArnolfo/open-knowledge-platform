import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { FeaturedCourses } from "@/components/featured-courses"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/motion/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SocialProof />
        <FeaturedCourses />
        <Footer />
      </main>
    </PageTransition>
  )
}
