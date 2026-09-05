"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, Database, Heart, Users, Globe, FolderGit2, Server, Brain } from "lucide-react";
import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const techSkills = skills.filter((s) => s.category !== "soft");
const softSkills = skills.filter((s) => s.category === "soft");

const categoryOrder = ["frontend", "backend", "database", "deployment"];
const categoryLabels: Record<string, { label: string; icon: React.ReactNode }> = {
  frontend: { label: "Frontend", icon: <Terminal className="w-4 h-4" /> },
  backend: { label: "Backend", icon: <Zap className="w-4 h-4" /> },
  database: { label: "Database", icon: <Database className="w-4 h-4" /> },
  deployment: { label: "Deployment & Tools", icon: <Server className="w-4 h-4" /> },
};

const learningItems = [
  "TALL Stack (Tailwind, Alpine, Laravel, Livewire)",
  "Web Performance",
  "UI/UX Trends",
  "System Architecture",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> proficiency </span> & soft skills
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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
                  <div key={cat} className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted mb-2">
                      {categoryLabels[cat].icon}
                      <span className="font-heading font-semibold text-foreground">{categoryLabels[cat].label}</span>
                    </div>
                    <StaggerContainer staggerDelay={0.06} direction="left">
                      {catSkills.map((skill) => (
                        <motion.div key={skill.id}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs text-muted w-10 text-right">{skill.proficiency}%</span>
                              <span className="font-medium text-sm text-foreground">{skill.name}</span>
                            </div>
                          </div>
                          <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{ backgroundColor: skill.color || "#00E5FF" }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1.2 }}
                            />
                            <motion.div
                              className="absolute inset-y-0 left-0 rounded-full opacity-30"
                              style={{ backgroundColor: skill.color || "#00E5FF" }}
                              animate={{ width: ["0%", "100%", "100%"] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </StaggerContainer>
                  </div>
                );
              })}
            </StaggerContainer>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <h3 className="flex items-center gap-3 font-heading font-semibold text-foreground mb-8">
              <Heart className="w-6 h-6 text-secondary" />
              <span>Soft Skills</span>
            </h3>
            <div className="glass-hover p-6 rounded-xl">
              <StaggerContainer staggerDelay={0.08} direction="up">
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="group flex items-center gap-4 p-3 glass border-border/50 rounded-lg transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <motion.span
                      className="font-mono text-primary text-lg group-hover:scale-110 transition-transform"
                      whileHover={{ x: 4 }}
                    >
                      {" > "}
                    </motion.span>
                    <span className="font-medium text-foreground flex-1">{skill.name}</span>
                    <motion.div
                      className="flex items-center gap-1 font-mono text-xs text-muted"
                      whileHover={{ scale: 1.05 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className={`w-1.Selected Work
Featured Projects5 h-1.5 rounded transition-colors ${
                            i < skill.proficiency / 20 ? "bg-primary" : "bg-border/30"
                          }`}
                          animate={{ scale: i < skill.proficiency / 20 ? [1, 1.2, 1] : 1 }}
                          transition={{ delay: i * 0.1, repeat: Infinity, duration: 1.5 }}
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
                <StaggerContainer staggerDelay={0.05} direction="left">
                  {learningItems.map((item) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1.5 text-xs font-mono glass border-border/50 rounded transition-all hover:border-secondary/50 hover:bg-secondary/5 hover:text-secondary"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </StaggerContainer>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}