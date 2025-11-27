export interface CourseModule {
  title: string
  duration: string
  lessons: string[]
}

export interface Course {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  level: "Beginner" | "Intermediate" | "Advanced"
  price: number
  duration: string
  students: number
  rating: number
  category: string
  instructor: {
    name: string
    title: string
    avatar: string
    bio: string
  }
  syllabus: CourseModule[]
  features: string[]
}

export const courses: Course[] = [
  {
    id: "python-advanced",
    title: "Advanced Python Development",
    description:
      "Master Python with advanced concepts including async programming, decorators, and system design patterns.",
    longDescription:
      "Take your Python skills to the next level with this comprehensive advanced course. You'll master asynchronous programming with asyncio, create powerful decorators and metaclasses, implement design patterns, build robust APIs, and learn professional debugging and testing techniques used by senior developers at top tech companies.",
    image: "/placeholder.svg?key=dxk7x",
    level: "Advanced",
    price: 99,
    duration: "40h",
    students: 3420,
    rating: 4.9,
    category: "Development",
    instructor: {
      name: "Dr. Sarah Chen",
      title: "Senior Software Engineer at Google",
      avatar: "/placeholder.svg?key=3y3hd",
      bio: "Dr. Chen has 15+ years of experience in Python development and has contributed to major open-source projects. She previously led the Python infrastructure team at Google.",
    },
    syllabus: [
      {
        title: "Advanced Python Fundamentals",
        duration: "8h",
        lessons: [
          "Memory Management & Garbage Collection",
          "Understanding Python Internals",
          "Advanced Data Structures",
          "Performance Optimization",
        ],
      },
      {
        title: "Asynchronous Programming",
        duration: "10h",
        lessons: ["Introduction to Asyncio", "Coroutines & Event Loops", "Concurrent Futures", "Building Async APIs"],
      },
      {
        title: "Metaprogramming",
        duration: "12h",
        lessons: [
          "Decorators Deep Dive",
          "Metaclasses & Descriptors",
          "Dynamic Code Generation",
          "Plugin Architectures",
        ],
      },
      {
        title: "Professional Development",
        duration: "10h",
        lessons: ["Testing Strategies", "Debugging & Profiling", "CI/CD Integration", "Production Best Practices"],
      },
    ],
    features: [
      "40+ hours of video content",
      "15 hands-on projects",
      "Certificate of completion",
      "Lifetime access",
      "Discord community access",
      "1-on-1 mentoring sessions",
    ],
  },
  {
    id: "ethical-hacking",
    title: "Zero-to-Hero Ethical Hacking",
    description:
      "Complete cybersecurity course covering penetration testing, vulnerability assessment, and ethical hacking methodologies.",
    longDescription:
      "Become a certified ethical hacker with this comprehensive course. Learn penetration testing methodologies, exploit development, web application security, network security, and social engineering. Practice in safe lab environments and prepare for industry certifications like CEH and OSCP.",
    image: "/placeholder.svg?key=g7o99",
    level: "Intermediate",
    price: 129,
    duration: "60h",
    students: 5680,
    rating: 4.8,
    category: "Cybersecurity",
    instructor: {
      name: "Marcus Rodriguez",
      title: "Security Researcher & Former NSA Analyst",
      avatar: "/placeholder.svg?key=9r13u",
      bio: "Marcus spent 8 years at the NSA before transitioning to private security consulting. He has discovered multiple zero-day vulnerabilities and trained security teams at Fortune 500 companies.",
    },
    syllabus: [
      {
        title: "Ethical Hacking Fundamentals",
        duration: "10h",
        lessons: [
          "Introduction to Ethical Hacking",
          "Legal & Ethical Considerations",
          "Setting Up Your Lab",
          "Reconnaissance Techniques",
        ],
      },
      {
        title: "Network Penetration Testing",
        duration: "15h",
        lessons: [
          "Network Scanning & Enumeration",
          "Vulnerability Assessment",
          "Exploitation Frameworks",
          "Post-Exploitation",
        ],
      },
      {
        title: "Web Application Security",
        duration: "20h",
        lessons: ["OWASP Top 10", "SQL Injection Deep Dive", "XSS & CSRF Attacks", "API Security Testing"],
      },
      {
        title: "Advanced Topics",
        duration: "15h",
        lessons: ["Wireless Security", "Social Engineering", "Mobile Security", "Report Writing"],
      },
    ],
    features: [
      "60+ hours of video content",
      "Virtual hacking labs",
      "CEH exam preparation",
      "Certificate of completion",
      "Lifetime access",
      "Bug bounty guidance",
    ],
  },
  {
    id: "cisco-ccna",
    title: "Cisco CCNA Networking Fundamentals",
    description:
      "Prepare for the CCNA certification with comprehensive networking fundamentals and hands-on lab exercises.",
    longDescription:
      "This course covers everything you need to pass the Cisco CCNA certification exam. Learn networking fundamentals, IP addressing, routing protocols, switching concepts, and network security. Practice with virtual labs using Packet Tracer and real Cisco equipment simulations.",
    image: "/placeholder.svg?key=6eho9",
    level: "Beginner",
    price: 79,
    duration: "35h",
    students: 8920,
    rating: 4.7,
    category: "Networking",
    instructor: {
      name: "James Mitchell",
      title: "CCIE #12345, Network Architect",
      avatar: "/placeholder.svg?key=qy46l",
      bio: "James is a CCIE-certified network architect with 20 years of experience designing enterprise networks. He has trained thousands of students and helped them achieve their CCNA certification.",
    },
    syllabus: [
      {
        title: "Network Fundamentals",
        duration: "8h",
        lessons: ["OSI & TCP/IP Models", "Network Topologies", "Ethernet Basics", "IP Addressing & Subnetting"],
      },
      {
        title: "Routing Technologies",
        duration: "10h",
        lessons: ["Static Routing", "OSPF Configuration", "EIGRP Fundamentals", "Route Redistribution"],
      },
      {
        title: "Switching Technologies",
        duration: "10h",
        lessons: ["VLANs & Trunking", "Spanning Tree Protocol", "EtherChannel", "Layer 3 Switching"],
      },
      {
        title: "Network Services",
        duration: "7h",
        lessons: ["DHCP & DNS", "NAT & PAT", "Network Security Basics", "Exam Preparation"],
      },
    ],
    features: [
      "35+ hours of video content",
      "Packet Tracer labs",
      "CCNA exam preparation",
      "Practice exams included",
      "Lifetime access",
      "Study group access",
    ],
  },
  {
    id: "cloud-aws",
    title: "AWS Cloud Practitioner",
    description: "Learn cloud computing fundamentals and prepare for the AWS Cloud Practitioner certification exam.",
    longDescription:
      "Start your cloud journey with AWS Cloud Practitioner certification. This course covers AWS core services, cloud concepts, security, pricing, and support. Perfect for beginners looking to break into cloud computing or professionals seeking to validate their AWS knowledge.",
    image: "/placeholder.svg?key=vxsmb",
    level: "Beginner",
    price: 69,
    duration: "25h",
    students: 12450,
    rating: 4.9,
    category: "Cloud",
    instructor: {
      name: "Emily Watson",
      title: "AWS Solutions Architect, Former AWS Employee",
      avatar: "/placeholder.svg?key=w62xu",
      bio: "Emily worked at AWS for 6 years as a Solutions Architect helping enterprise customers migrate to the cloud. She holds all AWS certifications and has trained over 10,000 students.",
    },
    syllabus: [
      {
        title: "Cloud Concepts",
        duration: "5h",
        lessons: [
          "What is Cloud Computing?",
          "AWS Global Infrastructure",
          "Cloud Deployment Models",
          "AWS Well-Architected Framework",
        ],
      },
      {
        title: "Core AWS Services",
        duration: "10h",
        lessons: ["EC2 & Compute Services", "S3 & Storage Solutions", "RDS & Database Services", "VPC & Networking"],
      },
      {
        title: "Security & Compliance",
        duration: "5h",
        lessons: [
          "IAM & Access Management",
          "Security Best Practices",
          "Compliance Programs",
          "Shared Responsibility Model",
        ],
      },
      {
        title: "Billing & Pricing",
        duration: "5h",
        lessons: ["AWS Pricing Models", "Cost Management Tools", "Support Plans", "Exam Preparation"],
      },
    ],
    features: [
      "25+ hours of video content",
      "Hands-on AWS labs",
      "Practice exams included",
      "Certificate of completion",
      "Lifetime access",
      "AWS sandbox environment",
    ],
  },
]

export function getCourse(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function getAllCourseIds(): string[] {
  return courses.map((course) => course.id)
}
