"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Database, Globe, Layers } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const keyTerms = [
  { term: "SSR", desc: "Server-Side Rendering for SEO & performance" },
  { term: "RSC", desc: "React Server Components for zero-bundle JS" },
  { term: "Clean Architecture", desc: "Separation of concerns, testable code" },
  { term: "Type-Safe APIs", desc: "End-to-end type safety with tRPC" },
  { term: "Edge Runtime", desc: "Sub-100ms latency globally" },
  { term: "Observability", desc: "Metrics, traces, logs built-in" },
];

const highlights = [
  { icon: Zap, title: "Performance First", desc: "Optimizing Core Web Vitals, bundle size, and runtime performance at every layer." },
  { icon: Shield, title: "Type Safety", desc: "End-to-end TypeScript with strict mode, Zod validation, and generated types." },
  { icon: Database, title: "Data Modeling", desc: "PostgreSQL with Prisma, Redis caching, ClickHouse for analytics." },
  { icon: Globe, title: "Global Scale", desc: "Edge deployment, CDN caching, and multi-region database replication." },
  { icon: Layers, title: "Architecture", desc: "Modular monoliths, microservices when needed, clean domain boundaries." },
  { icon: Terminal, title: "Developer Experience", desc: "Great tooling, fast feedback loops, and automated quality gates." },
];

const focusItems = [
  { label: "Next.js 15 / React 19", desc: "App Router, Server Actions, PPR" },
  { label: "Go Microservices", desc: "gRPC, NATS, Kubernetes" },
  { label: "AI Integration", desc: "Vercel AI SDK, RAG pipelines" },
  { label: "Developer Tooling", desc: "CLI tools, generators, plugins" },
  { label: "Design Systems", desc: "Tokens, components, Storybook" },
  { label: "Open Source", desc: "Contributing & maintaining" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 glass border-border/50 rounded-full text-xs font-mono text-muted mb-6"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span>About Me</span>
          </motion.span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Building <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> robust systems </span> that scale
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                I am a Full Stack Engineer with 3+ years of experience building production-grade
                web applications. My focus is on creating maintainable, performant systems that
                solve real problems for users and developers alike.
              </p>

              <p className="text-lg text-muted leading-relaxed">
                Currently exploring the intersection of <span className="text-foreground font-mono">React Server Components</span>,
                <span className="text-foreground font-mono">Edge Computing</span>, and
                <span className="text-foreground font-mono">Developer Experience</span>.
                Previously at Vercel (Next.js Commerce) and Stripe (Connect Dashboard).
              </p>

              <div className="flex flex-wrap gap-2">
                {keyTerms.map((item, index) => (
                  <motion.span
                    key={item.term}
                    className="group relative px-3 py-1.5 glass border-border/50 rounded transition-all hover:border-primary/50 hover:bg-primary/5 cursor-help"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  >
                    <span className="font-mono text-xs text-primary">{item.term}</span>
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 glass border-border/50 rounded text-xs text-muted whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      style={{ transformOrigin: "center bottom" }}
                      initial={{ scale: 0.8, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                    >
                      {item.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-border/50" />
                    </motion.div>
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <StaggerContainer staggerDelay={0.1} direction="up">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="group glass-hover p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 glass border-border/50 rounded-lg text-primary group-hover:glow-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:glow-primary transition-all"
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} direction="up" className="mt-16 pt-12 border-t border-border/30">
          <h3 className="font-heading font-semibold text-foreground mb-6 text-center">
            Currently focused on
          </h3>
          <StaggerContainer staggerDelay={0.08} direction="up">
            {focusItems.map((item) => (
              <motion.div
                key={item.label}
                className="glass-hover p-4 rounded-lg group"
              >
                <p className="font-mono text-sm text-primary mb-1">{item.label}</p>
                <p className="text-xs text-muted">{item.desc}</p>
                <motion.div
                  className="mt-3 h-0.5 bg-border/50 group-hover:bg-primary group-hover:w-full transition-all"
                  style={{ width: "40%" }}
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}