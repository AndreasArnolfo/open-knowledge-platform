"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Award, TrendingUp, Play, ChevronRight } from "lucide-react"
import { GlitchWrapper } from "@/components/motion/glitch-wrapper"

const enrolledCourses = [
  {
    id: "python-advanced",
    title: "Advanced Python Development",
    image: "/placeholder.svg?key=s2wnb",
    progress: 65,
    totalLessons: 48,
    completedLessons: 31,
    lastAccessed: "2 hours ago",
    category: "Development",
    nextLesson: "Coroutines & Event Loops",
  },
  {
    id: "ethical-hacking",
    title: "Zero-to-Hero Ethical Hacking",
    image: "/placeholder.svg?key=4gm94",
    progress: 32,
    totalLessons: 64,
    completedLessons: 20,
    lastAccessed: "1 day ago",
    category: "Cybersecurity",
    nextLesson: "SQL Injection Deep Dive",
  },
  {
    id: "cisco-ccna",
    title: "Cisco CCNA Networking Fundamentals",
    image: "/placeholder.svg?key=vkd09",
    progress: 88,
    totalLessons: 40,
    completedLessons: 35,
    lastAccessed: "3 days ago",
    category: "Networking",
    nextLesson: "Network Security Basics",
  },
]

const stats = [
  {
    label: "Courses Enrolled",
    value: "3",
    icon: BookOpen,
    change: "+1 this month",
  },
  {
    label: "Hours Learned",
    value: "47",
    icon: Clock,
    change: "+12 this week",
  },
  {
    label: "Certificates",
    value: "1",
    icon: Award,
    change: "2 in progress",
  },
  {
    label: "Current Streak",
    value: "7",
    icon: TrendingUp,
    change: "days",
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, <span className="text-primary">Alex</span>
            </h1>
            <p className="mt-2 text-muted-foreground">Continue your learning journey where you left off.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                      <p className="text-xs text-primary mt-1">{stat.change}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* My Courses */}
          <Card className="bg-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-foreground">
                My <span className="text-primary">Courses</span>
              </CardTitle>
              <Link href="/courses">
                <GlitchWrapper variant="subtle">
                  <Button variant="ghost" className="text-primary">
                    Browse More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </GlitchWrapper>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-border/50 bg-background hover:border-primary/30 transition-colors"
                  >
                    {/* Course Image */}
                    <div className="relative w-full sm:w-48 aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 hover:opacity-100 transition-opacity">
                        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                          <Play className="h-6 w-6 ml-0.5" />
                        </button>
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 mb-2">
                            {course.category}
                          </Badge>
                          <h3 className="font-semibold text-foreground">{course.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">Last accessed: {course.lastAccessed}</p>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mt-4 flex-1">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            {course.completedLessons} / {course.totalLessons} lessons
                          </span>
                          <span className="text-primary font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      {/* Next Lesson */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Next up: </span>
                          <span className="text-foreground">{course.nextLesson}</span>
                        </div>
                        <Link href={`/courses/${course.id}`}>
                          <GlitchWrapper variant="button">
                            <Button size="sm" className="bg-primary text-primary-foreground">
                              Continue
                              <Play className="ml-2 h-4 w-4" />
                            </Button>
                          </GlitchWrapper>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card border-border/50 mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Recent <span className="text-primary">Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "7-Day Streak",
                    description: "Learned for 7 consecutive days",
                    icon: "🔥",
                    earned: true,
                  },
                  {
                    title: "Python Master",
                    description: "Complete the Python course",
                    icon: "🐍",
                    earned: false,
                    progress: 65,
                  },
                  {
                    title: "Network Ninja",
                    description: "Complete CCNA certification",
                    icon: "🥷",
                    earned: false,
                    progress: 88,
                  },
                ].map((achievement) => (
                  <div
                    key={achievement.title}
                    className={`p-4 rounded-lg border ${
                      achievement.earned ? "border-primary/50 bg-primary/5" : "border-border/50 bg-background"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <p className={`font-medium ${achievement.earned ? "text-primary" : "text-foreground"}`}>
                          {achievement.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {!achievement.earned && achievement.progress && (
                          <Progress value={achievement.progress} className="h-1 mt-2" />
                        )}
                      </div>
                      {achievement.earned && <Badge className="bg-primary/20 text-primary border-0">Earned</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
