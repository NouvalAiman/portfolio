"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Code, Database, Globe, Zap, Shield, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const categoryIcons: Record<string, React.ReactNode> = {
  web: <Globe className="w-4 h-4" />,
  mobile: <Terminal className="w-4 h-4" />,
  api: <Database className="w-4 h-4" />,
  tool: <Zap className="w-4 h-4" />,
  other: <Shield className="w-4 h-4" />,
};

const categoryLabels: Record<string, string> = {
  web: "Web App",
  mobile: "Mobile",
  api: "API Service",
  tool: "Dev Tool",
  other: "Other",
};

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 glass border-border/50 rounded-full text-xs font-mono text-muted mb-6"
          >
            <Code className="w-4 h-4 text-primary" />
            <span>Selected Work</span>
          </motion.span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Projects </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <StaggerContainer staggerDelay={0.1} direction="up">
            {allProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="group relative glass-hover rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
                    />
                    <motion.div
                      className="absolute inset-0 bg-[linear-gradient(135deg,var(--background)_0%,transparent_50%,var(--background)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-center p-8"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * index, duration: 0.4 }}
                      >
                        {categoryIcons[project.category]}
                        <p className="mt-2 font-mono text-xs text-muted uppercase tracking-wider">
                          {categoryLabels[project.category]}
                        </p>
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute inset-0 transition-transform duration-700 ease-out"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      {project.image && (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {!project.image && (
                        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
                      )}
                    </motion.div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <motion.span
                        className="px-2 py-1 text-xs font-mono glass border-border/50 rounded transition-all group-hover:border-primary/50 group-hover:text-primary"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.year}
                      </motion.span>
                      {project.featured && (
                        <motion.span
                          className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 * index, type: "spring" }}
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono glass border-border/50 rounded transition-all hover:border-primary/50 hover:text-primary"
                          whileHover={{ scale: 1.05, y: -1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 5 && (
                        <motion.span
                          className="px-2 py-1 text-xs font-mono glass border-border/50 rounded text-muted"
                          whileHover={{ scale: 1.05 }}
                        >
                          +{project.techStack.length - 5}
                        </motion.span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium glass border-border/50 rounded-lg text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FaGithub className="w-4 h-4" />
                          <span className="hidden sm:inline">Code</span>
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium glass border-border/50 rounded-lg text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Live</span>
                        </motion.a>
                      )}
                      <motion.a
                        href={`#project-${project.id}`}
                        className="ml-auto flex items-center gap-1.5 px-3 py-2 text-sm font-medium glass border-border/50 rounded-lg text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View ${project.title} details`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        <span className="hidden sm:inline">Details</span>
                      </motion.a>
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 border border-transparent rounded-xl pointer-events-none transition-all duration-500 group-hover:border-primary group-hover:glow-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </FadeIn>

        <FadeIn delay={0.4} direction="up" className="mt-12 text-center">
          <motion.a
            href="#all-projects"
            className="inline-flex items-center gap-2 px-6 py-3 glass border-border/50 text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}