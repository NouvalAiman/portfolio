"use client";

import { useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const spotlightX = useMotionValue(600);
  const spotlightY = useMotionValue(300);
  const springX = useSpring(spotlightX, { stiffness: 140, damping: 24 });
  const springY = useSpring(spotlightY, { stiffness: 140, damping: 24 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      spotlightX.set(x);
      spotlightY.set(y);
      setMousePos({ x, y });
      if (!isHovered) setIsHovered(true);
    },
    [isHovered, spotlightX, spotlightY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#050505]"
      aria-labelledby="about-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Dark Canvas */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Background Visual Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Scanline Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "var(--scanline)" }}
        />

        {/* Dynamic Flashlight / Cursor-Revealed Cyber Grid (Torch Effect) */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage: isHovered
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
              : "radial-gradient(0px circle at 0px 0px, transparent 0%, transparent 100%)",
            WebkitMaskImage: isHovered
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
              : "radial-gradient(0px circle at 0px 0px, transparent 0%, transparent 100%)",
          }}
        />

        {/* Interactive Cursor Spotlight Glow */}
        <motion.div
          className="absolute top-0 left-0 w-[650px] h-[650px] rounded-full blur-[120px] transition-opacity duration-300"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isHovered ? 0.14 : 0.05,
            background:
              "radial-gradient(circle, #06b6d4 0%, #a855f7 50%, transparent 70%)",
          }}
        />
      </div>

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