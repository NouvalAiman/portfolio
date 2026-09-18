"use client";

import { motion } from "framer-motion";
import { Mail, Heart, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { socialLinks, siteConfig } from "@/data/portfolio";

function getSocialIcon(icon: string) {
  switch (icon) {
    case "github":
      return <FaGithub className="w-5 h-5" />;
    case "linkedin":
      return <FaLinkedin className="w-5 h-5" />;
    case "instagram":
      return <FaInstagram className="w-5 h-5" />;
    case "mail":
      return <Mail className="w-5 h-5" />;
    default:
      return <Mail className="w-5 h-5" />;
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 pt-16 pb-8">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,26,26,0.3)_0%,_transparent_70%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl font-heading font-bold tracking-tight">
                Nouval Aiman
              </span>
              <span className="text-xs font-mono text-primary/70">.dev</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Building scalable web applications with modern technologies. Specialized in React, Next.js, TypeScript, and cloud-native architectures.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass border border-border/50 text-muted hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
                  aria-label={link.platform}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Footer navigation"
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">Navigate</h3>
            <ul className="space-y-3">
              {[
                { label: "Work", href: "/#work" },
                { label: "Skills", href: "/#skills" },
                { label: "Experience", href: "/#experience" },
                { label: "Contact", href: "/#contact" },
              ].map((item, index) => (
                <motion.li key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}>
<a
                  href={item.href}
                  className="text-sm text-muted hover:text-primary transition-colors font-mono"
                >
                  {" > "}{item.label}
                </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Laravel",
                "Next.js",
                "React",
                "TypeScript",
                "PostgreSQL",
                "php",
                "Tailwind",
                "MySQL",

              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3.5 py-1 text-xs font-mono glass border-border/50 text-muted hover:text-primary hover:border-primary/50 transition-all rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * (index + 1), duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted font-mono">
                <Mail className="w-4 h-4 text-primary/70" />
                <a href="mailto:nouvalaiman51@gmail.com" className="hover:text-primary transition-colors">nouvalaiman51@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted font-mono">
                <Terminal className="w-4 h-4 text-primary/70" />
                <span>Available for freelance</span>
              </li>
              <li className="flex items-center gap-2 text-muted font-mono">
                <Heart className="w-4 h-4 text-primary/70" />
                <span>Open to opportunities</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-border/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted font-mono">
              &copy; {currentYear} {siteConfig.name}. Built with Next.js 16 & Framer Motion.
            </p>

            <div className="flex items-center gap-4">
              <motion.div
                className="flex items-center gap-2 px-3.5 py-1.5 glass border-border/50 rounded-full"
                animate={{
                  opacity: [1, 0.6, 1],
                  boxShadow: ["0 0 8px rgba(34, 197, 94, 0.3)", "0 0 20px rgba(34, 197, 94, 0.5)", "0 0 8px rgba(34, 197, 94, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-xs font-mono text-green-500">System Online</span>
              </motion.div>

              <motion.div className="flex items-center gap-1 text-xs text-muted font-mono">
                <span>deployed on</span>
                <motion.span
                  className="text-primary font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Vercel
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}