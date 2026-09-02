"use client";

import { motion } from "framer-motion";
import { FileText, Clock, ArrowRight, ExternalLink, ChevronRight, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const categories = [
  { slug: "engineering", label: "Engineering", color: "primary", count: 12 },
  { slug: "architecture", label: "Architecture", color: "secondary", count: 8 },
  { slug: "performance", label: "Performance", color: "primary", count: 6 },
  { slug: "tooling", label: "Tooling", color: "secondary", count: 5 },
  { slug: "career", label: "Career", color: "primary", count: 4 },
];

const posts = [
  {
    slug: "building-type-safe-apis-with-trpc",
    title: "Building Type-Safe APIs with tRPC and Next.js 15",
    excerpt: "A deep dive into end-to-end type safety using tRPC v11 with the App Router. Covering procedures, middleware, and React Query integration patterns.",
    category: "engineering",
    date: "2024-12-15",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "react-server-components-in-production",
    title: "React Server Components in Production: Lessons Learned",
    excerpt: "Real-world patterns and pitfalls when migrating a large codebase to RSC. Includes data fetching strategies, streaming, and client boundary decisions.",
    category: "architecture",
    date: "2024-11-28",
    readTime: "15 min",
    featured: true,
  },
  {
    slug: "optimizing-core-web-vitals-nextjs",
    title: "Optimizing Core Web Vitals in Next.js Applications",
    excerpt: "Practical techniques for improving LCP, INP, and CLS. From font optimization to streaming SSR and selective hydration strategies.",
    category: "performance",
    date: "2024-11-10",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "building-a-design-system-from-scratch",
    title: "Building a Design System from Scratch with Storybook",
    excerpt: "Architecture decisions, token management, component APIs, and publishing workflows. How we built a system used across 5 products.",
    category: "tooling",
    date: "2024-10-22",
    readTime: "18 min",
    featured: false,
  },
  {
    slug: "from-junior-to-staff-engineer",
    title: "From Junior to Staff Engineer: A 5-Year Retrospective",
    excerpt: "Technical growth, soft skills, mentorship, and the transition from IC to tech lead. Honest reflections on what actually matters.",
    category: "career",
    date: "2024-10-05",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "edge-computing-patterns-nextjs",
    title: "Edge Computing Patterns with Next.js Middleware",
    excerpt: "Authentication, geo-routing, A/B testing, and bot protection at the edge. When to use Edge Runtime vs Node.js Runtime.",
    category: "architecture",
    date: "2024-09-18",
    readTime: "14 min",
    featured: false,
  },
  {
    slug: "database-scaling-postgresql",
    title: "Scaling PostgreSQL: Partitioning, Read Replicas & Caching",
    excerpt: "Handling 100M+ rows with declarative partitioning, logical replication for read replicas, and Redis caching layers.",
    category: "performance",
    date: "2024-08-30",
    readTime: "16 min",
    featured: false,
  },
  {
    slug: "typescript-strict-mode-best-practices",
    title: "TypeScript Strict Mode: Best Practices for Large Codebases",
    excerpt: "Enabling strict mode incrementally, utility types for API contracts, and taming any with branded types and type predicates.",
    category: "engineering",
    date: "2024-08-12",
    readTime: "11 min",
    featured: false,
  },
  {
    slug: "monorepo-management-turborepo",
    title: "Monorepo Management with Turborepo and pnpm",
    excerpt: "Remote caching, task orchestration, dependency graph optimization, and publishing workflows for multi-package repositories.",
    category: "tooling",
    date: "2024-07-25",
    readTime: "13 min",
    featured: false,
  },
  {
    slug: "accessibility-in-react-applications",
    title: "Accessibility in React Applications: Beyond the Basics",
    excerpt: "ARIA patterns, focus management, screen reader testing, and building accessible custom components without libraries.",
    category: "engineering",
    date: "2024-07-08",
    readTime: "9 min",
    featured: false,
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" aria-labelledby="journal-heading">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "var(--scanline)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />
          <div className="absolute inset-0 opacity-5">
            <pre className="text-primary/5 font-mono text-xs leading-relaxed p-8 select-none pointer-events-none" style={{ fontFamily: "var(--font-mono)" }}>
{`// Journal - Technical Notes
const articles = [
  { title: "Type-Safe APIs", status: "published" },
  { title: "RSC Patterns", status: "published" },
  { title: "Web Vitals", status: "draft" },
  { title: "Design Systems", status: "published" },
];

articles.forEach(article => {
  if (article.status === "published") {
    deploy(article);
  }
});`}
            </pre>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1} direction="up" className="mb-16">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 glass border-border/50 rounded-full text-xs font-mono text-muted mb-6"
              >
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Journal</span>
              </motion.span>
              <h1 id="journal-heading" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground mb-4">
                Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Journal </span>
              </h1>
              <p className="text-muted max-w-2xl text-lg">
                Deep dives into engineering, architecture, and the craft of building software.
                {posts.length} articles and counting.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter by category">
                <motion.button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 font-mono text-sm rounded-lg border transition-all ${
                    activeCategory === "all"
                      ? "bg-primary text-background border-primary"
                      : "glass border-border/50 text-muted hover:border-primary/50 hover:text-primary"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  role="tab"
                  aria-selected={activeCategory === "all"}
                  aria-controls="posts-panel"
                >
                  All <span className="ml-1 px-2 py-0.5 text-xs font-mono glass border-border/50 rounded">{posts.length}</span>
                </motion.button>
                {categories.map((cat) => (
                  <motion.button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-4 py-2 font-mono text-sm rounded-lg border transition-all ${
                      activeCategory === cat.slug
                        ? `bg-${cat.color} text-background border-${cat.color}`
                        : "glass border-border/50 text-muted hover:border-primary/50 hover:text-primary"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    role="tab"
                    aria-selected={activeCategory === cat.slug}
                    aria-controls="posts-panel"
                  >
                    {cat.label} <span className="ml-1 px-2 py-0.5 text-xs font-mono glass border-border/50 rounded">{cat.count}</span>
                  </motion.button>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <div id="posts-panel" role="tabpanel" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaggerContainer staggerDelay={0.08} direction="up">
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.slug}
                      className="glass-hover group flex flex-col h-full overflow-hidden"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ backgroundImage: "linear-gradient(135deg, var(--primary-glow) 0%, transparent 50%, var(--secondary-glow) 100%)" }} />
                        <div className="absolute top-4 left-4 right-4 flex justify-between">
                          <motion.span
                            className={`px-2.5 py-1 text-xs font-mono rounded border ${
                              post.category === "engineering" || post.category === "performance" || post.category === "career"
                                ? "bg-primary/10 text-primary border-primary/30"
                                : "bg-secondary/10 text-secondary border-secondary/30"
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {categories.find(c => c.slug === post.category)?.label}
                          </motion.span>
                          {post.featured && (
                            <motion.span
                              className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded"
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", delay: 0.2 }}
                            >
                              Featured
                            </motion.span>
                          )}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-muted font-mono mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <motion.h2
                          className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {post.title}
                        </motion.h2>

                        <p className="text-muted leading-relaxed mb-6 flex-1">
                          {post.excerpt}
                        </p>

                        <motion.div
                          className="flex items-center justify-between pt-4 border-t border-border/30"
                        >
                          <motion.button
                            className="flex items-center gap-1.5 px-3 py-2 glass border-border/50 rounded-lg text-sm font-medium text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                            whileHover={{ scale: 1.02, x: 2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </motion.button>
                          <div className="flex items-center gap-2">
                            <motion.a
                              href={`https://github.com/nouval/journal/blob/main/posts/${post.slug}.mdx`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 glass border-border/50 rounded-lg text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View source for ${post.title}`}
                            >
                              <FaGithub className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              href={`/journal/${post.slug}`}
                              className="p-2 glass border-border/50 rounded-lg text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`Share ${post.title}`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </motion.article>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            {filteredPosts.length === 0 && (
              <FadeIn delay={0.4} direction="up" className="text-center py-16 glass-hover rounded-xl">
                <FileText className="w-12 h-12 text-muted mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">No articles found</h3>
                <p className="text-muted">Try selecting a different category.</p>
              </FadeIn>
            )}

            <FadeIn delay={0.4} direction="up" className="mt-16 pt-12 border-t border-border/30">
              <StaggerContainer staggerDelay={0.1} direction="up">
                <motion.div
                  className="text-center p-6 glass-hover rounded-xl"
                >
                  <motion.div
                    className="p-3 glass border-border/50 rounded-lg text-primary mx-auto w-fit mb-4"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <FileText className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">RSS Feed</h3>
                  <p className="text-sm text-muted mb-4">Subscribe to get new articles directly in your feed reader.</p>
                  <motion.a
                    href="/rss.xml"
                    className="inline-flex items-center gap-1.5 px-4 py-2 glass border-border/50 rounded-lg text-sm font-mono text-muted hover:border-primary/50 hover:text-primary transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Subscribe
                  </motion.a>
                </motion.div>

                <motion.div
                  className="text-center p-6 glass-hover rounded-xl"
                >
                  <motion.div
                    className="p-3 glass border-border/50 rounded-lg text-secondary mx-auto w-fit mb-4"
                    whileHover={{ scale: 1.1, rotate: -3 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Open Source</h3>
                  <p className="text-sm text-muted mb-4">All articles are open source. Contribute corrections or translations.</p>
                  <motion.a
                    href="https://github.com/nouval/journal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 glass border-border/50 rounded-lg text-sm font-mono text-muted hover:border-secondary/50 hover:text-secondary transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    View Repository
                  </motion.a>
                </motion.div>

                <motion.div
                  className="text-center p-6 glass-hover rounded-xl"
                >
                  <motion.div
                    className="p-3 glass border-border/50 rounded-lg text-primary mx-auto w-fit mb-4"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Newsletter</h3>
                  <p className="text-sm text-muted mb-4">Monthly digest of new articles, project updates, and curated links.</p>
                  <motion.button
                    className="inline-flex items-center gap-1.5 px-4 py-2 glass border-border/50 rounded-lg text-sm font-mono text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                    whileHover={{ scale: 1.02 }}
                    disabled
                  >
                    <ExternalLink className="w-4 h-4" />
                    Coming Soon
                  </motion.button>
                </motion.div>
              </StaggerContainer>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";