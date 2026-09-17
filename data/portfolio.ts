import type { Project, Skill, Experience, SocialLink, NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Portfolio",
  title: "Nouval — Full Stack Engineer",
  description: "Building scalable web applications with modern technologies. Specialized in React, Next.js, TypeScript, and cloud-native architectures.",
  url: "https://nouval.dev",
  ogImage: "/og-image.png",
  author: "Nouval",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/NouvalAiman", icon: "github" },
    { platform: "LinkedIn", url: "https://id.linkedin.com/in/nouval-aiman-a93321417", icon: "linkedin" },
    { platform: "Instagram", url: "https://www.instagram.com/palll_aimannnnn?igsi=bWEweXFpdjRmYmJ0", icon: "instagram" },
    { platform: "Email", url: "mailto:nouvalaiman51@gmail.com", icon: "mail" },
  ],
  navItems: [
    { label: "Work", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Nebula Commerce",
    description: "Headless e-commerce platform with real-time inventory, multi-vendor support, and AI-powered recommendations.",
    longDescription: "A full-featured headless commerce solution built with Next.js 14, tRPC, and PostgreSQL. Features include real-time inventory synchronization across multiple vendors, AI-driven product recommendations using embeddings, flexible pricing rules engine, and a headless CMS for content management. Handles 10k+ concurrent users with sub-100ms p95 latency.",
    image: "/projects/nebula-commerce.png",
    tags: ["E-commerce", "Real-time", "AI/ML", "Headless CMS"],
    techStack: ["Next.js 14", "tRPC", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS", "TypeScript", "Vercel", "Pinecone"],
    githubUrl: "https://github.com/NouvalAiman/nebula-commerce",
    liveUrl: "https://nebula-commerce.demo",
    featured: true,
    category: "web",
    year: 2024,
  },
  {
    id: "2",
    title: "Aether Analytics",
    description: "Real-time analytics dashboard with custom query builder, WebSocket streaming, and exportable reports.",
    longDescription: "Internal analytics platform processing 50M+ events/day. Features a visual query builder with drag-and-drop interface, real-time WebSocket data streaming, scheduled report generation with PDF/CSV exports, and role-based access control. Built with a microservices architecture using Go for ingestion and Node.js for API.",
    image: "/projects/aether-analytics.png",
    tags: ["Analytics", "Real-time", "Dashboard", "Microservices"],
    techStack: ["React", "Next.js", "Go", "ClickHouse", "WebSocket", "gRPC", "Kubernetes", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/ lAiman/aether-analytics",
    featured: true,
    category: "web",
    year: 2023,
  },
  {
    id: "3",
    title: "Void CI/CD",
    description: "Self-hosted CI/CD pipeline with DAG-based execution, artifact management, and GitOps deployment.",
    longDescription: "Lightweight CI/CD system inspired by GitHub Actions and GitLab CI. Supports DAG-based pipeline definitions, parallel job execution with resource limits, artifact storage with S3-compatible backends, and GitOps-style deployments to Kubernetes. Written in Rust for performance, with a React-based dashboard.",
    image: "/projects/void-cicd.png",
    tags: ["DevOps", "CI/CD", "Rust", "Kubernetes"],
    techStack: ["Rust", "Actix Web", "PostgreSQL", "Redis", "Docker", "Kubernetes", "React", "TypeScript", "NATS"],
    githubUrl: "https://github.com/NouvalAiman/void-cicd",
    liveUrl: "https://void-cicd.demo",
    featured: true,
    category: "tool",
    year: 2024,
  },
  {
    id: "4",
    title: "Stellar Design System",
    description: "Accessible component library with 60+ components, dark mode, theming, and React Server Components support.",
    longDescription: "Production-grade design system used across 5+ products. Includes 60+ accessible components (WCAG 2.1 AA), CSS-in-JS theming with design tokens, React Server Components compatibility, Storybook documentation, visual regression testing, and automated versioning with Changesets. Supports both Tailwind CSS and vanilla CSS implementations.",
    image: "/projects/stellar-design-system.png",
    tags: ["Design System", "Components", "Accessibility", "RSC"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Vitest", "Playwright", "Changesets", "TurboRepo"],
    githubUrl: "https://github.com/NouvalAiman/stellar-design-system",
    liveUrl: "https://stellar-ui.dev",
    featured: false,
    category: "tool",
    year: 2023,
  },
  {
    id: "5",
    title: "Quantum Task Manager",
    description: "Collaborative task management with real-time sync, offline-first architecture, and conflict resolution.",
    longDescription: "Offline-first task manager using CRDTs for conflict-free replication. Features real-time collaboration with presence indicators, rich text editing with TipTap, custom workflows with kanban/list/calendar views, and end-to-end encryption for sensitive workspaces. Built with Electron for desktop and PWA for web.",
    image: "/projects/quantum-tasks.png",
    tags: ["Productivity", "Real-time", "Offline-first", "CRDT"],
    techStack: ["React", "Electron", "Yjs", "IndexedDB", "WebRTC", "TipTap", "TypeScript", "Tauri"],
    githubUrl: "https://github.com/NouvalAiman/quantum-tasks",
    featured: false,
    category: "web",
    year: 2022,
  },
  {
    id: "6",
    title: "Orbit API Gateway",
    description: "High-performance API gateway with rate limiting, authentication, request transformation, and observability.",
    longDescription: "Edge API gateway handling 1M+ requests/minute. Features include adaptive rate limiting with token buckets, JWT/OAuth2/OIDC authentication, request/response transformation with Lua scripts, distributed tracing with OpenTelemetry, and canary deployments. Written in Go with plugin architecture.",
    image: "/projects/orbit-gateway.png",
    tags: ["API Gateway", "Performance", "Security", "Observability"],
    techStack: ["Go", "gRPC", "Lua", "Redis", "OpenTelemetry", "Prometheus", "Envoy", "Kubernetes"],
    githubUrl: "https://github.com/NouvalAiman/orbit-gateway",
    featured: false,
    category: "api",
    year: 2023,
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "Next.js / React", category: "frontend", proficiency: 80, color: "#61DAFB" },
  { id: "2", name: "Tailwind CSS", category: "frontend", proficiency: 70, color: "#06B6D4" },
  { id: "3", name: "JavaScript / TypeScript", category: "frontend", proficiency: 70, color: "#3178C6" },

  // Backend
  { id: "4", name: "Laravel / PHP", category: "backend", proficiency: 85, color: "#F55247" },
  { id: "5", name: "RESTful APIs & JSON", category: "backend", proficiency: 70, color: "#E10098" },
  { id: "6", name: "Next.js Server Actions", category: "backend", proficiency: 70, color: "#61DAFB" },

  // Database
  { id: "7", name: "MySQL / MariaDB", category: "database", proficiency: 85, color: "#4479A1" },
  { id: "8", name: "PostgreSQL", category: "database", proficiency: 70, color: "#4169E1" },

  // Deployment & Tools
  { id: "9", name: "Git / GitHub", category: "deployment", proficiency: 85, color: "#F05032" },
  { id: "10", name: "Vercel / Shared Hosting / VPS", category: "deployment", proficiency: 85, color: "#000000" },

  // Soft Skills
  { id: "11", name: "Problem Solving & Debugging", category: "soft", proficiency: 90 },
  { id: "12", name: "Client Communication", category: "soft", proficiency: 88 },
  { id: "13", name: "Time Management & Delivery", category: "soft", proficiency: 90 },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Junior Full-Stack Developer",
    company: "Freelance / Independent",
    location: "Remote",
    startDate: "2024-01",
    endDate: "Present",
    description: [
      "Building custom web applications and professional portfolios with a strong focus on clean code and performance.",
      "Designed and developed highly responsive and interactive web portfolios using Next.js.",
      "Built secure and scalable backend architectures using Laravel and MySQL for seamless data management."
    ],
    techStack: ["Next.js", "React", "TypeScript", "Laravel", "PHP", "MySQL", "Tailwind CSS", "Sanity CMS", "Git"],
    type: "freelance",
    highlights: [
      "Designed and developed highly responsive and interactive web portfolios using Next.js.",
      "Built secure and scalable backend architectures using Laravel and MySQL for seamless data management."
    ],
  },
  {
    id: "2",
    role: "Web Developer",
    company: "SMK Miftahul Jannah",
    location: "Remote",
    startDate: "2023-01",
    endDate: "2024-12",
    description: [
      "Developed a functional digital platform for the school to improve information accessibility.",
      "Engineered a responsive school website ensuring a seamless user experience across desktop and mobile devices.",
      "Implemented secure database operations and interactive UI elements using modern web technologies."
    ],
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"],
    type: "full-time",
    highlights: [
      "Engineered a responsive school website ensuring a seamless user experience across desktop and mobile devices.",
      "Implemented secure database operations and interactive UI elements using modern web technologies."
    ],
  },
];

export const socialLinks: SocialLink[] = siteConfig.socialLinks;
export const navItems: NavItem[] = siteConfig.navItems;