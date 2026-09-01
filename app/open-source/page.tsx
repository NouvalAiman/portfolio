"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Eye, Package, Terminal, Check, Clock, Zap, Heart, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const metrics = [
  { label: "Total Stars", value: "2.8k", change: "+12%", icon: Star, color: "primary" },
  { label: "Total Forks", value: "420", change: "+8%", icon: GitBranch, color: "secondary" },
  { label: "Total Views", value: "156k", change: "+23%", icon: Eye, color: "primary" },
  { label: "Packages", value: "12", change: "+2", icon: Package, color: "secondary" },
  { label: "Contributors", value: "48", change: "+5", icon: Heart, color: "primary" },
  { label: "Commits (30d)", value: "342", change: "+18%", icon: Zap, color: "secondary" },
];

const packages = [
  { name: "@holiq/ui-core", version: "2.4.1", desc: "Core UI primitives with zero dependencies", installs: "45k/week", license: "MIT" },
  { name: "@holiq/hooks", version: "1.8.0", desc: "Collection of 50+ React hooks for state, effects & lifecycle", installs: "78k/week", license: "MIT" },
  { name: "@holiq/form", version: "3.1.2", desc: "Type-safe form validation with Zod integration", installs: "23k/week", license: "MIT" },
  { name: "@holiq/animations", version: "1.2.0", desc: "Framer Motion wrappers for common animations", installs: "12k/week", license: "MIT" },
  { name: "@holiq/cli", version: "0.9.5", desc: "Project scaffolding & code generation CLI", installs: "5k/week", license: "MIT" },
  { name: "@holiq/config", version: "1.0.3", desc: "Shared ESLint, TypeScript & Prettier configs", installs: "31k/week", license: "MIT" },
];

const prs = [
  { id: 247, title: "feat: Add React 19 support to ui-core", author: "holiq", status: "merged", branch: "feat/react-19", date: "2 hours ago", labels: ["feature", "breaking-change"] },
  { id: 245, title: "fix: Memory leak in useEventListener hook", author: "contributor-john", status: "merged", branch: "fix/memory-leak", date: "1 day ago", labels: ["bug", "performance"] },
  { id: 243, title: "docs: Update API reference for form v3", author: "holiq", status: "merged", branch: "docs/form-v3", date: "3 days ago", labels: ["documentation"] },
  { id: 241, title: "feat: Add staggerChildren variant to animations", author: "jane-dev", status: "open", branch: "feat/stagger", date: "5 days ago", labels: ["feature", "enhancement"] },
  { id: 239, title: "refactor: Simplify CLI template engine", author: "holiq", status: "closed", branch: "refactor/cli", date: "1 week ago", labels: ["refactor", "cli"] },
  { id: 237, title: "test: Add integration tests for form validation", author: "test-bot", status: "merged", branch: "test/form-integration", date: "2 weeks ago", labels: ["testing", "ci"] },
];

export default function OpenSourcePage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyCommand = (pkg: string) => {
    navigator.clipboard.writeText(`npm install ${pkg}`);
    setCopied(pkg);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" aria-labelledby="opensource-heading">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--scanline)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1} direction="up" className="text-center mb-16">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 glass border-border/50 rounded-full text-xs font-mono text-muted mb-6"
              >
                <FaGithub className="w-4 h-4 text-primary" />
                <span>Open Source</span>
              </motion.span>
              <h1 id="opensource-heading" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground mb-4">
                Open Source <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Dashboard </span>
              </h1>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                Tracking contributions, packages, and community impact across all public repositories.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <StaggerContainer staggerDelay={0.1} direction="up">
                {metrics.map((metric, index) => (
                  <motion.article
                    key={metric.label}
                    className="glass-hover p-6 rounded-xl group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 glass border-border/50 rounded-lg"
                        style={{ backgroundColor: metric.color === "primary" ? "rgba(0, 229, 255, 0.1)" : "rgba(176, 38, 255, 0.1)" }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                      >
                        <metric.icon className="w-6 h-6" style={{ color: metric.color === "primary" ? "var(--primary)" : "var(--secondary)" }} />
                      </motion.div>
                      <span className="font-mono text-xs text-muted">+{metric.change}</span>
                    </div>
                    <motion.div
                      className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {metric.value}
                    </motion.div>
                    <p className="text-sm text-muted font-mono">{metric.label}</p>
                  </motion.article>
                ))}
              </StaggerContainer>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" className="mb-16">
              <div className="glass-hover rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-border/30 flex items-center justify-between">
                  <h2 className="font-heading font-semibold text-foreground flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    Managed Packages
                  </h2>
                  <span className="font-mono text-xs text-muted">{packages.length} packages</span>
                </div>
                <div className="p-6">
                  <StaggerContainer staggerDelay={0.08} direction="left">
                    {packages.map((pkg) => (
                      <motion.div
                        key={pkg.name}
                        className="group flex items-center justify-between p-4 glass border-border/50 rounded-lg transition-all hover:border-primary/50 hover:bg-primary/5"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <code className="font-mono text-primary text-sm">{pkg.name}</code>
                            <span className="px-2 py-0.5 text-xs font-mono glass border-border/50 rounded"
                              style={{ backgroundColor: pkg.name.includes("ui-core") || pkg.name.includes("form") || pkg.name.includes("cli") ? "rgba(0, 229, 255, 0.1)" : "rgba(176, 38, 255, 0.1)" }}
                            >
                              v{pkg.version}
                            </span>
                            <span className="px-2 py-0.5 text-xs font-mono glass border-border/50 rounded text-muted">{pkg.license}</span>
                          </div>
                          <p className="text-sm text-muted">{pkg.desc}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted font-mono">
                            <span className="flex items-center gap-1">
                              <Terminal className="w-3 h-3" />
                              {pkg.installs}
                            </span>
                          </div>
                        </div>
                        <motion.button
                          onClick={() => copyCommand(pkg.name)}
                          className="flex items-center gap-2 px-4 py-2 glass border-border/50 rounded-lg text-sm font-mono text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`Copy npm install command for ${pkg.name}`}
                        >
                          <Terminal className="w-4 h-4" />
                          <span className="hidden sm:inline">Install</span>
                          <AnimatePresence>
                            {copied === pkg.name && (
                              <motion.span
                                key="copied"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="text-primary flex items-center gap-1"
                              >
                                <Check className="w-4 h-4" />
                                Copied!
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="glass-hover rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-border/30 flex items-center justify-between">
                  <h2 className="font-heading font-semibold text-foreground flex items-center gap-2">
                    <FaGithub className="w-5 h-5 text-primary" />
                    Recent Pull Requests
                  </h2>
                  <span className="font-mono text-xs text-muted">{prs.length} recent</span>
                </div>
                <div className="p-6">
                  <StaggerContainer staggerDelay={0.06} direction="up">
                    {prs.map((pr) => (
                      <motion.div
                        key={pr.id}
                        className="group flex items-start gap-4 p-4 glass border-border/50 rounded-lg transition-all hover:border-primary/50 hover:bg-primary/5"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-shrink-0 w-12 text-right">
                          <motion.span
                            className="font-mono text-muted text-sm"
                            whileHover={{ scale: 1.1, color: "var(--primary)" }}
                          >
                            #{pr.id}
                          </motion.span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-heading font-medium text-foreground truncate">{pr.title}</h3>
                            <motion.span
                              className={`px-2 py-0.5 text-xs font-mono rounded border ${
                                pr.status === "merged"
                                  ? "bg-green-500/10 text-green-500 border-green-500/30"
                                  : pr.status === "open"
                                  ? "bg-primary/10 text-primary border-primary/30"
                                  : "bg-muted/10 text-muted border-muted/30"
                              }`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {pr.status}
                            </motion.span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted font-mono">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {pr.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaGithub className="w-3 h-3" />
                              {pr.branch}
                            </span>
                            <span className="flex items-center gap-1">
                              <Terminal className="w-3 h-3" />
                              {pr.author}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {pr.labels.map((label) => (
                              <motion.span
                                key={label}
                                className="px-2 py-0.5 text-xs font-mono glass border-border/50 rounded hover:border-primary/50 hover:text-primary transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                {label}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up" className="mt-12 text-center">
              <motion.a
                href="https://github.com/holiq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass border-border/50 text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub className="w-5 h-5" />
                View All Repositories on GitHub
              </motion.a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";