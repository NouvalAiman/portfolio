"use client";

import { motion } from "framer-motion";
import { Zap, Database, Layers, Code, Server } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const keyTerms = [
  { term: "Next.js", desc: "Modern React framework with App Router" },
  { term: "Laravel", desc: "Robust PHP framework for backend" },
  { term: "Tailwind CSS", desc: "Utility-first CSS framework" },
  { term: "RESTful API", desc: "Standardized API communication" },
  { term: "MySQL", desc: "Relational database management" },
];

const highlights = [
  { 
    icon: Zap, 
    title: "Performance & UI", 
    desc: "Building fast, mobile-first, and highly responsive interfaces using Tailwind CSS and Next.js." 
  },
  { 
    icon: Code, 
    title: "Clean Code", 
    desc: "Writing maintainable and readable code following standard development practices." 
  },
  { 
    icon: Database, 
    title: "Data Management", 
    desc: "Designing solid relational databases using MySQL and Laravel Eloquent ORM." 
  },
  { 
    icon: Server, 
    title: "API Integration", 
    desc: "Connecting frontends and backends seamlessly via RESTful APIs and JSON." 
  },
  { 
    icon: Layers, 
    title: "MVC Architecture", 
    desc: "Structuring applications cleanly separating logic, data, and presentation using Laravel." 
  },
  { 
    icon: Zap, 
    title: "Continuous Learning", 
    desc: "Always exploring new tools, libraries, and best practices to improve my craft." 
  },
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
          
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Building <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> reliable web applications </span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                I am a Full Stack Developer passionate about building clean, responsive, and user-friendly web applications. My focus is on creating functional systems that solve real problems.
              </p>

              <p className="text-lg text-muted leading-relaxed">
                Currently focusing on the intersection of modern frontend frameworks like Next.js and robust backend architectures with Laravel. I enjoy bridging the gap between visually appealing interfaces and solid database logic.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {keyTerms.map((item, index) => (
                  <motion.span
                    key={item.term}
                    className="group relative px-4 py-1.5 glass border-border/50 rounded-full transition-all hover:border-primary/50 hover:bg-primary/5 hover:glow-primary cursor-help"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  >
                    <span className="font-mono text-xs text-primary">{item.term}</span>
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 glass border-border/50 rounded-xl text-xs text-muted whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 shadow-lg"
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
                  className="group glass-hover p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 glass border-border/50 rounded-xl text-primary group-hover:glow-primary transition-all"
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
      </div>
    </section>
  );
}