"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, CheckCircle, MapPin, Star } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="experience-heading"
      ref={timelineRef}
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground"
          >
            Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Journey </span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* GARIS TIMELINE UTAMA */}
          <motion.div
            className="absolute left-1/3 lg:left-48 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, var(--border-subtle), var(--primary), var(--border-subtle))",
            }}
          >
            <motion.div
              className="absolute left-1/2 top-0 w-px h-full -translate-x-1/2 rounded-full"
              style={{
                background: "linear-gradient(to bottom, var(--primary), var(--secondary))",
                boxShadow: "0 0 20px var(--primary-glow), 0 0 40px var(--primary-glow)",
                transformOrigin: "top center",
                scaleY: lineProgress,
              }}
            />
            <motion.div
              className="absolute left-1/2 top-full w-3 h-3 -translate-x-1/2 rounded-full border-2"
              style={{
                borderColor: "var(--primary)",
                background: "var(--background)",
                boxShadow: "0 0 15px var(--primary-glow), 0 0 30px var(--primary-glow)",
              }}
              animate={{
                translateY: [0, -8, 0],
                boxShadow: [
                  "0 0 15px var(--primary-glow)",
                  "0 0 30px var(--primary-glow), 0 0 50px var(--secondary-glow)",
                  "0 0 15px var(--primary-glow)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="relative space-y-16">
            <FadeIn delay={0.2} direction="up">
              <StaggerContainer staggerDelay={0.15} direction="up">
                {experiences.map((exp, index) => (
                  <motion.article
                    key={exp.id}
                    className="relative flex gap-8"
                  >
                    {/* BAGIAN KIRI (TANGGAL & TITIK NEON) */}
                    <div className="relative flex-shrink-0 w-1/3 lg:w-48 text-right pr-8">
                      {/* TITIK NEON KECIL */}
                      <div className="absolute -right-2 top-4 w-4 h-4 rounded-full border-4 z-10 flex-shrink-0"
                        style={{
                          borderColor: "var(--primary)",
                          background: "var(--background)",
                          boxShadow: "0 0 0 4px var(--background), 0 0 15px var(--primary-glow)",
                        }}
                      >
                        <motion.div
                          className="w-full h-full rounded-full"
                          style={{ background: "var(--primary)" }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="font-mono text-xs text-primary font-semibold">
                          {exp.startDate} — {exp.endDate}
                        </p>
                        <p className="font-mono text-xs text-muted">{exp.location}</p>
                        <motion.span
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono glass border-border/50 rounded"
                          whileHover={{ scale: 1.05 }}
                          style={{ backgroundColor: exp.type === "full-time" ? "rgba(0, 229, 255, 0.1)" : "rgba(176, 38, 255, 0.1)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: exp.type === "full-time" ? "var(--primary)" : "var(--secondary)" }} />
                          {exp.type}
                        </motion.span>
                      </div>
                    </div>

                    {/* BAGIAN KANAN (KARTU KONTEN) */}
                    <div className="flex-1 glass-hover p-6 lg:p-8 rounded-xl min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="flex items-center gap-2 text-primary font-medium">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </p>
                        </div>
                        {exp.highlights && exp.highlights.length > 0 && (
                          <motion.div
                            className="flex flex-col gap-1.5"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            {exp.highlights.map((highlight) => (
                              <motion.div
                                key={highlight}
                                className="flex items-center gap-2 px-3 py-1.5 glass border-border/50 rounded-lg text-xs text-primary"
                                whileHover={{ x: 4 }}
                              >
                                <CheckCircle className="w-3 h-3 flex-shrink-0" />
                                <span className="font-mono">{highlight}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      <p className="text-muted leading-relaxed mb-6">
                        {exp.description[0]}
                      </p>

                      {exp.description.length > 1 && (
                        <motion.ul
                          className="space-y-2 mb-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 }}
                        >
                          {exp.description.slice(1).map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="font-mono text-primary text-lg leading-tight">{" >"}</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}

                      <StaggerContainer staggerDelay={0.05} direction="left">
                        {exp.techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono glass border-border/50 rounded transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                            whileHover={{ scale: 1.05, y: -1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </StaggerContainer>
                    </div>
                  </motion.article>
                ))}
              </StaggerContainer>
            </FadeIn>

            <FadeIn delay={0.5} direction="up" className="text-center py-8">
              <motion.a
                href="https://linkedin.com/in/nouval-aiman-a93321417"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass border-border/50 text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="w-5 h-5" />
                View Full Timeline on LinkedIn
                <motion.span
                  className="w-5 h-5 flex items-center justify-center"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Star className="w-5 h-5 text-secondary" />
                </motion.span>
              </motion.a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}