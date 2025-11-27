"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getCourse } from "@/lib/courses"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Users, Star, Play, CheckCircle, BookOpen } from "lucide-react"
import { GlitchWrapper } from "@/components/motion/glitch-wrapper"

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const course = getCourse(id)

  if (!course) {
    notFound()
  }

  const levelColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/90 text-primary-foreground">{course.category}</Badge>
                <Badge variant="outline" className={levelColors[course.level]}>
                  {course.level}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">{course.title}</h1>

              <p className="text-lg text-muted-foreground mb-6">{course.longDescription}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-foreground font-medium">{course.rating}</span>
                  rating
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {course.students.toLocaleString()} students
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {course.duration} total
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {course.syllabus.reduce((acc, mod) => acc + mod.lessons.length, 0)} lessons
                </span>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50">
                <Image
                  src={course.instructor.avatar || "/placeholder.svg"}
                  alt={course.instructor.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>
            </div>

            {/* Video Preview & Enroll Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg border border-border/50 bg-card overflow-hidden">
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-muted">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <button className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground glow-effect hover:scale-105 transition-transform">
                      <Play className="h-8 w-8 ml-1" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">${course.price}</span>
                    <span className="text-muted-foreground line-through">${Math.round(course.price * 1.5)}</span>
                  </div>

                  <Link href="/signup">
                    <GlitchWrapper variant="button">
                      <Button className="w-full bg-primary text-primary-foreground glow-effect py-6 text-base mb-4">
                        Enroll Now
                      </Button>
                    </GlitchWrapper>
                  </Link>

                  <p className="text-center text-sm text-muted-foreground mb-6">30-day money-back guarantee</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Course <span className="text-primary">Syllabus</span>
            </h2>

            <Accordion type="multiple" defaultValue={[course.syllabus[0]?.title]} className="space-y-4">
              {course.syllabus.map((module, index) => (
                <AccordionItem
                  key={module.title}
                  value={module.title}
                  className="rounded-lg border border-border/50 bg-card px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{module.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {module.lessons.length} lessons • {module.duration}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-3 pl-12">
                      {module.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-center gap-3 text-muted-foreground">
                          <Play className="h-4 w-4 text-primary" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Instructor Bio */}
          <div className="lg:max-w-3xl mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              About the <span className="text-primary">Instructor</span>
            </h2>

            <div className="p-6 rounded-lg border border-border/50 bg-card">
              <div className="flex items-start gap-6">
                <Image
                  src={course.instructor.avatar || "/placeholder.svg"}
                  alt={course.instructor.name}
                  width={96}
                  height={96}
                  className="rounded-full shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{course.instructor.name}</h3>
                  <p className="text-primary mb-4">{course.instructor.title}</p>
                  <p className="text-muted-foreground">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Enroll Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 p-4 z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-bold text-primary">${course.price}</span>
          </div>
          <Link href="/signup" className="flex-1">
            <GlitchWrapper variant="button">
              <Button className="w-full bg-primary text-primary-foreground glow-effect">Enroll Now</Button>
            </GlitchWrapper>
          </Link>
        </div>
      </div>

      <div className="pb-24 lg:pb-0">
        <Footer />
      </div>
    </main>
  )
}
