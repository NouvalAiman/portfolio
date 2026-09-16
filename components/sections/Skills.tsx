"use client";

import { useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Terminal,
  Zap,
  Database,
  Heart,
  Server,
  Brain,
  Code2,
  Radar,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const techSkills = skills.filter((s) => s.category !== "soft");
const softSkills = skills.filter((s) => s.category === "soft");

const categoryOrder = ["frontend", "backend", "database", "deployment"];
const categoryLabels: Record<string, { label: string; icon: React.ReactNode }> = {
  frontend: { label: "Frontend", icon: <Terminal className="w-4 h-4 text-primary" /> },
  backend: { label: "Backend", icon: <Zap className="w-4 h-4 text-secondary" /> },
  database: { label: "Database", icon: <Database className="w-4 h-4 text-cyan-400" /> },
  deployment: { label: "Deployment & Tools", icon: <Server className="w-4 h-4 text-emerald-400" /> },
};

interface SkillBrandConfig {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  gradientClass: string;
  glowColor: string;
}

const skillBrandMap: Record<string, SkillBrandConfig> = {
  "Next.js / React": {
    icon: SiNextdotjs,
    iconColor: "text-cyan-400",
    gradientClass: "from-cyan-400 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    iconColor: "text-teal-400",
    gradientClass: "from-teal-400 to-cyan-400",
    glowColor: "rgba(20, 184, 166, 0.4)",
  },
  "JavaScript / TypeScript": {
    icon: SiTypescript,
    iconColor: "text-amber-400",
    gradientClass: "from-amber-400 to-blue-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
  },
  "Laravel / PHP": {
    icon: SiLaravel,
    iconColor: "text-red-500",
    gradientClass: "from-red-500 to-rose-600",
    glowColor: "rgba(239, 68, 68, 0.4)",
  },
  "RESTful APIs & JSON": {
    icon: SiPostman,
    iconColor: "text-emerald-400",
    gradientClass: "from-emerald-400 to-teal-400",
    glowColor: "rgba(52, 211, 153, 0.4)",
  },
  "Next.js Server Actions": {
    icon: SiNextdotjs,
    iconColor: "text-violet-400",
    gradientClass: "from-slate-300 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  "MySQL / MariaDB": {
    icon: SiMysql,
    iconColor: "text-sky-400",
    gradientClass: "from-sky-500 to-blue-600",
    glowColor: "rgba(14, 165, 233, 0.4)",
  },
  "PostgreSQL": {
    icon: SiPostgresql,
    iconColor: "text-blue-500",
    gradientClass: "from-blue-600 to-indigo-600",
    glowColor: "rgba(37, 99, 235, 0.4)",
  },
  "Git / GitHub": {
    icon: SiGit,
    iconColor: "text-orange-500",
    gradientClass: "from-orange-500 to-amber-600",
    glowColor: "rgba(249, 115, 22, 0.4)",
  },
  "Vercel / Shared Hosting / VPS": {
    icon: SiVercel,
    iconColor: "text-zinc-100",
    gradientClass: "from-zinc-100 to-cyan-400",
    glowColor: "rgba(255, 255, 255, 0.35)",
  },
};

function getSkillBrand(name: string): SkillBrandConfig {
  if (skillBrandMap[name]) return skillBrandMap[name];
  if (name.includes("Next.js Server Actions")) return skillBrandMap["Next.js Server Actions"];
  if (name.includes("Next.js") || name.includes("React")) return skillBrandMap["Next.js / React"];
  if (name.includes("Tailwind")) return skillBrandMap["Tailwind CSS"];
  if (name.includes("JavaScript") || name.includes("TypeScript")) return skillBrandMap["JavaScript / TypeScript"];
  if (name.includes("Laravel") || name.includes("PHP")) return skillBrandMap["Laravel / PHP"];
  if (name.includes("RESTful") || name.includes("API")) return skillBrandMap["RESTful APIs & JSON"];
  if (name.includes("MySQL") || name.includes("MariaDB")) return skillBrandMap["MySQL / MariaDB"];
  if (name.includes("PostgreSQL")) return skillBrandMap["PostgreSQL"];
  if (name.includes("Git")) return skillBrandMap["Git / GitHub"];
  if (name.includes("Vercel") || name.includes("VPS")) return skillBrandMap["Vercel / Shared Hosting / VPS"];

  return {
    icon: Code2,
    iconColor: "text-primary",
    gradientClass: "from-cyan-400 to-blue-500",
    glowColor: "rgba(0, 229, 255, 0.4)",
  };
}

const learningItems = [
  "TALL Stack (Tailwind, Alpine, Laravel, Livewire)",
  "Web Performance",
  "UI/UX Trends",
  "System Architecture",
];

const focusedItems = [
  {
    title: "Next.js & React",
    desc: "Mastering App Router, Server Actions, and component reusability.",
  },
  {
    title: "Laravel Ecosystem",
    desc: "Deep diving into API development, Eloquent relationships, and Filament for admin panels.",
  },
  {
    title: "Web Performance",
    desc: "Learning how to optimize loading times, images, and Core Web Vitals.",
  },
  {
    title: "UI/UX Fundamentals",
    desc: "Improving my design sense to build more intuitive and accessible user experiences.",
  },
];

export function Skills() {
  // --- Background Cursor Spotlight & Torch Grid ---
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
      id="skills"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#050505]"
      aria-labelledby="skills-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Dark Canvas */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Scanline Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: "var(--scanline)" }}
      />

      {/* Dynamic Flashlight / Cursor-Revealed Cyber Grid (Torch Effect) */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ${
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

      {/* Background Cursor Spotlight (Hanya di layer background, pointer-events-none) */}
      <motion.div
        className="pointer-events-none absolute w-[650px] h-[650px] rounded-full blur-[120px] transition-opacity duration-300 z-0"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 0.15 : 0.05,
          background:
            "radial-gradient(circle, #06b6d4 0%, #a855f7 50%, transparent 70%)",
        }}
      />

      {/* Static Content Container (NO tilt, NO 3D transform, NO shifting) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              proficiency
            </span>{" "}
            & soft skills
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Tech Stack Column (Left) */}
          <FadeIn delay={0.2} direction="left">
            <h3 className="flex items-center gap-3 font-heading font-semibold text-foreground mb-8">
              <Terminal className="w-6 h-6 text-primary" />
              <span>Tech Stack</span>
            </h3>
            <StaggerContainer staggerDelay={0.12} direction="up">
              {categoryOrder.map((cat) => {
                const catSkills = techSkills.filter((s) => s.category === cat);
                if (catSkills.length === 0) return null;
                return (
                  <div key={cat} className="space-y-4 mb-6 last:mb-0">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted mb-2">
                      {categoryLabels[cat].icon}
                      <span className="font-heading font-semibold text-foreground">
                        {categoryLabels[cat].label}
                      </span>
                    </div>
                    <StaggerContainer staggerDelay={0.06} direction="left">
                      {catSkills.map((skill) => {
                        const brand = getSkillBrand(skill.name);
                        const BrandIcon = brand.icon;

                        return (
                          <motion.div
                            key={skill.id}
                            className="group p-2.5 -mx-2.5 rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
                          >
                            <div className="flex items-center justify-between mb-2">
                              {/* Brand Icon & Tech Name */}
                              <div className="flex items-center gap-2.5">
                                <div className="flex items-center justify-center w-6 h-6 rounded-md bg-white/[0.03] border border-border/60 shadow-xs group-hover:border-primary/40 transition-colors">
                                  <BrandIcon
                                    className={`w-3.5 h-3.5 ${brand.iconColor} transition-transform duration-200 group-hover:scale-110`}
                                  />
                                </div>
                                <span className="font-medium text-sm text-foreground group-hover:text-white transition-colors">
                                  {skill.name}
                                </span>
                              </div>

                              {/* Proficiency Value */}
                              <span className="font-mono text-xs font-semibold text-muted group-hover:text-foreground transition-colors">
                                {skill.proficiency}%
                              </span>
                            </div>

                            {/* Horizontal Progress Bar (Brand Gradient Stripe) */}
                            <div className="relative h-2 bg-border/30 rounded-full overflow-hidden border border-border/20">
                              <motion.div
                                className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${brand.gradientClass}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                  type: "spring",
                                  stiffness: 90,
                                  damping: 15,
                                  duration: 1.2,
                                }}
                                style={{
                                  boxShadow: `0 0 10px ${brand.glowColor}`,
                                }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </StaggerContainer>
                  </div>
                );
              })}
            </StaggerContainer>
          </FadeIn>

          {/* Soft Skills Column (Right) */}
          <FadeIn delay={0.3} direction="right">
            <h3 className="flex items-center gap-3 font-heading font-semibold text-foreground mb-8">
              <Heart className="w-6 h-6 text-secondary" />
              <span>Soft Skills</span>
            </h3>
            <div className="glass-hover p-6 rounded-2xl">
              <StaggerContainer staggerDelay={0.08} direction="up">
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="group flex items-center gap-4 p-3.5 glass border-border/50 rounded-xl transition-all hover:border-primary/50 hover:bg-primary/5 mb-3 last:mb-0"
                  >
                    <motion.span
                      className="font-mono text-primary text-lg group-hover:scale-110 transition-transform font-bold"
                      whileHover={{ x: 4 }}
                    >
                      {" > "}
                    </motion.span>
                    <span className="font-medium text-foreground flex-1">
                      {skill.name}
                    </span>
                    <motion.div
                      className="flex items-center gap-1.5 font-mono text-xs text-muted"
                      whileHover={{ scale: 1.05 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            i < skill.proficiency / 20
                              ? "bg-primary shadow-[0_0_8px_rgba(0,229,255,0.6)]"
                              : "bg-border/40"
                          }`}
                          animate={{
                            scale: i < skill.proficiency / 20 ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            delay: i * 0.1,
                            repeat: Infinity,
                            duration: 1.5,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </StaggerContainer>

              <FadeIn delay={0.4} direction="up" className="mt-8">
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-secondary" />
                  Always Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {learningItems.map((item) => (
                    <motion.span
                      key={item}
                      className="px-3.5 py-1.5 text-xs font-mono glass border-border/50 rounded-full transition-all hover:border-secondary/50 hover:bg-secondary/5 hover:text-secondary hover:shadow-[0_0_15px_rgba(176,38,255,0.2)]"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Currently Focused On Sub-section */}
            <FadeIn delay={0.45} direction="up" className="mt-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full bg-cyan-400 opacity-60" />
                  <Radar className="w-5 h-5 text-primary relative z-10" />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                  <span>Currently Focused On</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {focusedItems.map((item) => (
                  <motion.div
                    key={item.title}
                    className="group relative p-4 rounded-xl glass border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:bg-white/[0.04] shadow-xs"
                    whileHover={{ y: -2 }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-primary font-bold text-sm select-none group-hover:translate-x-0.5 transition-transform">
                          &gt;
                        </span>
                        <h4 className="font-mono text-xs font-semibold text-foreground group-hover:text-primary transition-colors tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted leading-relaxed font-sans pl-3.5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Futuristic mini gradient accent bar */}
                    <div className="mt-3.5 pt-2 border-t border-border/30 pl-3.5">
                      <div className="relative h-1 w-full bg-border/40 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-2/5 group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}