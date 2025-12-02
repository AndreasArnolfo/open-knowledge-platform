"use client"

import { CourseCard } from "@/components/course-card"
import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { StaggerContainer } from "@/components/motion/stagger-container"

const featuredCourses = [
  {
    id: "python-advanced",
    title: "Advanced Python Development",
    description:
      "Master Python with advanced concepts including async programming, decorators, and system design patterns.",
    image: "/python-dark-theme.png",
    video: "/videos/python-course.mp4",
    level: "Advanced" as const,
    price: 99,
    duration: "40h",
    students: 3420,
    rating: 4.9,
    category: "Development",
  },
  {
    id: "ethical-hacking",
    title: "Zero-to-Hero Ethical Hacking",
    description:
      "Complete cybersecurity course covering penetration testing, vulnerability assessment, and ethical hacking methodologies.",
    image: "/cybersecurity-hacking-terminal-dark-neon.jpg",
    video: "/videos/ethical-hacking-course.mp4",
    level: "Intermediate" as const,
    price: 129,
    duration: "60h",
    students: 5680,
    rating: 4.8,
    category: "Cybersecurity",
  },
  {
    id: "cisco-ccna",
    title: "Cisco CCNA Networking Fundamentals",
    description:
      "Prepare for the CCNA certification with comprehensive networking fundamentals and hands-on lab exercises.",
    image: "/network-infrastructure-server-room-dark-blue.jpg",
    video: "/videos/cisco-ccna-course.mp4",
    level: "Beginner" as const,
    price: 79,
    duration: "35h",
    students: 8920,
    rating: 4.7,
    category: "Networking",
  },
  {
    id: "cloud-aws",
    title: "AWS Cloud Practitioner",
    description: "Learn cloud computing fundamentals and prepare for the AWS Cloud Practitioner certification exam.",
    image: "/cloud-computing-aws-infrastructure-dark.jpg",
    video: "/videos/aws-cloud-course.mp4",
    level: "Beginner" as const,
    price: 69,
    duration: "25h",
    students: 12450,
    rating: 4.9,
    category: "Cloud",
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Popular <span className="text-primary">Now</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Start your journey with our most popular courses, trusted by thousands of IT professionals worldwide.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1} baseDelay={0}>
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
