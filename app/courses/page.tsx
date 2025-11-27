"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { GlitchWrapper } from "@/components/motion/glitch-wrapper"

const allCourses = [
  {
    id: "python-advanced",
    title: "Advanced Python Development",
    description:
      "Master Python with advanced concepts including async programming, decorators, and system design patterns.",
    image: "/placeholder.svg?key=k7vds",
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
    image: "/placeholder.svg?key=bxzex",
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
    image: "/placeholder.svg?key=hvctc",
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
    image: "/placeholder.svg?key=68h5c",
    level: "Beginner" as const,
    price: 69,
    duration: "25h",
    students: 12450,
    rating: 4.9,
    category: "Cloud",
  },
  {
    id: "javascript-fullstack",
    title: "Full-Stack JavaScript Mastery",
    description:
      "Build modern web applications with React, Node.js, and MongoDB. From frontend to backend in one course.",
    image: "/placeholder.svg?key=7u4af",
    level: "Intermediate" as const,
    price: 119,
    duration: "55h",
    students: 6780,
    rating: 4.8,
    category: "Development",
  },
  {
    id: "network-security",
    title: "Network Security Fundamentals",
    description: "Learn to protect networks from cyber threats with firewalls, IDS/IPS, and security protocols.",
    image: "/placeholder.svg?key=yvt8o",
    level: "Intermediate" as const,
    price: 89,
    duration: "30h",
    students: 4230,
    rating: 4.6,
    category: "Cybersecurity",
  },
  {
    id: "docker-kubernetes",
    title: "Docker & Kubernetes for DevOps",
    description: "Master containerization and orchestration for modern cloud-native application deployment.",
    image: "/placeholder.svg?key=1a4g9",
    level: "Advanced" as const,
    price: 109,
    duration: "45h",
    students: 5120,
    rating: 4.9,
    category: "Cloud",
  },
  {
    id: "linux-admin",
    title: "Linux System Administration",
    description: "Become a Linux expert with system administration, shell scripting, and server management.",
    image: "/placeholder.svg?key=7d3lp",
    level: "Beginner" as const,
    price: 79,
    duration: "40h",
    students: 9340,
    rating: 4.7,
    category: "Networking",
  },
  {
    id: "malware-analysis",
    title: "Malware Analysis & Reverse Engineering",
    description: "Deep dive into malware analysis techniques, reverse engineering, and threat intelligence.",
    image: "/placeholder.svg?key=lfghw",
    level: "Advanced" as const,
    price: 149,
    duration: "50h",
    students: 2340,
    rating: 4.8,
    category: "Cybersecurity",
  },
]

const categories = ["Development", "Cybersecurity", "Networking", "Cloud"]
const levels = ["Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 200])

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesSearch =
        search === "" ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase())

      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)

      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level)

      const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice
    })
  }, [search, selectedCategories, selectedLevels, priceRange])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedLevels([])
    setPriceRange([0, 200])
    setSearch("")
  }

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedLevels.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 200 ||
    search !== ""

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-3">
              <Checkbox
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
                className="border-primary data-[state=checked]:bg-primary"
              />
              <Label
                htmlFor={`cat-${category}`}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Level */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Skill Level</h3>
        <div className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center gap-3">
              <Checkbox
                id={`level-${level}`}
                checked={selectedLevels.includes(level)}
                onCheckedChange={() => toggleLevel(level)}
                className="border-primary data-[state=checked]:bg-primary"
              />
              <Label
                htmlFor={`level-${level}`}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
              >
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
        <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={10} className="mb-4" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {hasActiveFilters && (
        <GlitchWrapper variant="subtle">
          <Button
            variant="outline"
            className="w-full border-primary/50 text-primary bg-transparent"
            onClick={clearFilters}
          >
            <X className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        </GlitchWrapper>
      )}
    </div>
  )

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              Course <span className="text-primary">Catalog</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive library of courses designed to accelerate your IT career.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border/50 focus:border-primary"
              />
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden border-border/50 bg-transparent">
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background border-border/50">
                <SheetHeader>
                  <SheetTitle className="text-foreground">Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 rounded-lg border border-border/50 bg-card p-6">
                <h2 className="font-semibold text-foreground mb-6">Filters</h2>
                <FilterContent />
              </div>
            </aside>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-primary font-medium">{filteredCourses.length}</span> courses
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-muted-foreground">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No courses found</p>
                    <p className="text-sm mt-2">Try adjusting your filters or search term</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
