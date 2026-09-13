"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Database, Globe, Zap, Shield, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  description?: string;
  mainImage?: SanityImage;
  techStack?: string[];
  githubLink?: string;
  liveLink?: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

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

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      key={project._id}
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
              {project.category && categoryIcons[project.category]}
              <p className="mt-2 font-mono text-xs text-muted uppercase tracking-wider">
                {project.category && categoryLabels[project.category]}
              </p>
            </motion.div>
          </div>
          <motion.div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {project.mainImage && (
              <Image
                src={urlFor(project.mainImage).width(800).url()}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {!project.mainImage && (
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
            )}
          </motion.div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <motion.span
              className="px-3 py-1 text-xs font-mono glass border-border/50 rounded-full transition-all group-hover:border-primary/50 group-hover:text-primary"
              whileHover={{ scale: 1.05 }}
            >
              {project._createdAt ? new Date(project._createdAt).getFullYear() : "2024"}
            </motion.span>
          </div>

          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack?.slice(0, 5).map((tech: string) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-mono glass border-border/50 rounded-full transition-all hover:border-primary/50 hover:text-primary"
                whileHover={{ scale: 1.05, y: -1 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack && project.techStack.length > 5 && (
              <motion.span
                className="px-3 py-1 text-xs font-mono glass border-border/50 rounded-full text-muted"
                whileHover={{ scale: 1.05 }}
              >
                +{project.techStack.length - 5}
              </motion.span>
            )}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border/30">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium glass border-border/50 rounded-full text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium glass border-border/50 rounded-full text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Live</span>
              </motion.a>
            )}
            <motion.a
              href={`#project-${project._id}`}
              className="ml-auto flex items-center gap-1.5 px-4 py-2 text-sm font-medium glass border-border/50 rounded-full text-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View ${project.title} details`}
            >
              <ArrowUpRight className="w-4 h-4" />
              <span className="hidden sm:inline">Details</span>
            </motion.a>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 border border-transparent rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-primary group-hover:glow-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </motion.article>
  );
}