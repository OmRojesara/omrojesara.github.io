// Portfolio content — Om Rojesara
// Strictly resume-grounded, humanized copy. No corporate fluff or fake metrics.

export const CONTENT = {
  name: "Om Rojesara",
  role: "Software Engineer",
  tagline: "Building AI-native products from idea to production.",
  subTagline:
    "I'm a software engineer based in Ahmedabad. I like working across the full product stack—building web apps, backend APIs, and AI features that real people actually use.",
  email: "rojesaraom1@gmail.com",
  phone: "+91 8154948000",
  location: "Ahmedabad, Gujarat",
  github: "https://github.com/OmRojesara",
  linkedin: "https://www.linkedin.com/in/omrojesara/",
  portfolio: "https://omrojesara.vercel.app",
  resume: "/resume.pdf",

  // Human, factual intro stats
  quickFacts: [
    { label: "Role", value: "Associate Software Engineer @ 7Span" },
    { label: "Focus", value: "Full-Stack SaaS & AI Features" },
    { label: "Education", value: "MCA @ LJ University" },
    { label: "Location", value: "Ahmedabad, India" },
  ],

  experience: [
    {
      company: "7Span",
      role: "Associate Software Engineer",
      period: "Sep 2026 — Present",
      type: "Full-time",
      summary:
        "Building AI-powered SaaS applications. I work on RAG retrieval pipelines, backend API architecture, and database design.",
      details: [
        "Developed AI SaaS features using Laravel, PostgreSQL, Redis, AWS S3, and OpenAI APIs.",
        "Built RAG pipelines with web crawling, text chunking, vector embeddings, and hybrid search.",
        "Designed backend services and database schemas for production applications.",
      ],
      stack: ["Laravel", "PostgreSQL", "Redis", "AWS S3", "OpenAI"],
    },
    {
      company: "QAsolvers Inc.",
      role: "Subject Matter Expert",
      period: "Jun 2025 — Present",
      type: "Freelance",
      summary:
        "Reviewing and validating computer science learning content across data structures, algorithms, and core programming languages.",
      details: [
        "Review educational materials for technical accuracy in Python, Java, C++, and C#.",
        "Verify DSA algorithms and OOP concept explanations.",
      ],
      stack: ["Python", "Java", "C++", "C#", "DSA", "OOP"],
    },
    {
      company: "Tymmo.ai",
      role: "Full-Stack Developer Intern",
      period: "Jul 2025 — Nov 2025",
      type: "Remote",
      summary:
        "Built web features across AI, real estate, and business management apps.",
      details: [
        "Developed full-stack features using React, Node.js, Express, and PostgreSQL.",
        "Built CRM lead capture features and optimized database query performance.",
      ],
      stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    },
    {
      company: "Tabbly.io",
      role: "PHP Developer Intern",
      period: "Sep 2024 — Oct 2024",
      type: "Remote",
      summary:
        "Focused on backend CRM feature development and database query structure.",
      details: [
        "Built lead capture modules to streamline incoming customer inquiries.",
        "Optimized MySQL database tables through index tuning and normalization.",
      ],
      stack: ["PHP", "MySQL"],
    },
  ],

  projects: [
    {
      id: "business-ops",
      name: "Business Operations Platform",
      tagline: "An internal management system for inventory, orders, and logistics.",
      category: "SaaS / Internal Tools",
      stack: ["PHP", "MySQL", "JavaScript"],
      flagship: true,
      context:
        "Managing stock levels, supplier orders, and delivery schedules manually created delays and missing inventory data.",
      built:
        "I built a central web system that handles stock alerts, order life cycles, supplier profiles, and delivery tracking in one place.",
      insight:
        "By structuring the relational schema with automated stock triggers and indexing query columns, order lookups remained instantaneous.",
      details: [
        "Centralized inventory tracking and automated stock re-order notifications.",
        "Supplier and delivery team assignment workflows.",
        "Real-time business status reporting for management.",
      ],
    },
    {
      id: "7-vachan",
      name: "7-Vachan",
      tagline: "AI-assisted destination wedding planning and vendor booking.",
      category: "AI Web App",
      stack: ["PHP", "MySQL", "OpenAI API"],
      flagship: false,
      context:
        "Couples spent weeks searching venues and estimating wedding packages.",
      built:
        "Built an automated recommendation platform that generates custom wedding packages based on budget and guest requirements.",
      insight:
        "Combined automated package calculation with admin management tools for destination vendors.",
      details: [
        "Automated venue & package estimation workflow.",
        "Social media automation and booking workflows.",
        "Admin control panel for destinations and pricing.",
      ],
    },
    {
      id: "pulsepay",
      name: "PulsePay",
      tagline: "A personal finance mobile app for expense tracking.",
      category: "Mobile App",
      stack: ["Flutter", "Dart"],
      flagship: false,
      context:
        "Expense tracking apps often feel cluttered and slow during daily use.",
      built:
        "Designed a clean cross-platform mobile app in Flutter focused on quick transaction logging and spending breakdowns.",
      insight:
        "Used a modular state architecture to keep chart renders smooth on mid-range mobile devices.",
      details: [
        "Real-time expense logging and category budgeting.",
        "Visual spending breakdowns and monthly summaries.",
      ],
    },
    {
      id: "sahajanand",
      name: "Sahajanand Ornaments",
      tagline: "E-commerce storefront for custom jewellery collections.",
      category: "E-Commerce",
      stack: ["Shopify", "JavaScript"],
      flagship: false,
      context:
        "A jewellery business needed an online catalog with fast search and product review trust signals.",
      built:
        "Configured a high-converting storefront with custom product filtering, reviews, and responsive checkout.",
      insight:
        "Optimized image loading and navigation paths to keep catalog browse times minimal.",
      details: [
        "Custom product collections and instant catalog search.",
        "Customer review widgets and responsive mobile layout.",
      ],
    },
  ],

  workflow: [
    {
      step: "01",
      title: "Understand",
      description: "Talk to users or stakeholders to clarify the actual problem before jumping into code.",
    },
    {
      step: "02",
      title: "Shape",
      description: "Sketch UI flows and define database schemas so product scope stays crisp.",
    },
    {
      step: "03",
      title: "Build",
      description: "Write full-stack code—from database queries and APIs to responsive interfaces.",
    },
    {
      step: "04",
      title: "Refine",
      description: "Test edge cases, index slow database columns, and polish user interaction details.",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "LJ University, Ahmedabad",
      period: "2024 — 2026",
      status: "Grade A+",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharaja Krishnakumarsinhji Bhavnagar University",
      period: "2020 — 2023",
      status: "Grade A+",
    },
  ],

  certifications: [
    "Generative AI Specialization (Coursera)",
    "Solutions Architecture (AWS)",
    "Intro to Software Engineering (IBM)",
    "Agile Development & Scrum (IBM)",
    "Computer Networking (Google)",
    "Software Testing (Univ. of Minnesota)",
  ],
} as const;
