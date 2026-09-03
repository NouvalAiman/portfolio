"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseNavClass = "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300";
  const scrolledClass = "glass border-b border-border/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]";
  const transparentClass = "bg-transparent";

  return (
    <motion.nav
      className={`${baseNavClass} ${isScrolled ? scrolledClass : transparentClass}`}
      initial={false}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-xl font-heading font-bold tracking-tight text-foreground"
            aria-label="Go to home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nouval Aiman
            </span>
            <motion.span
              className="text-xs font-mono text-primary/70 opacity-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              .dev
            </motion.span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`inline-block relative px-2 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "").replace("/", "") ? "text-primary" : "text-muted hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                >
                  {item.label}
                  <AnimatePresence mode="wait">
                    {activeSection === item.href.replace("#", "").replace("/", "") && (
                      <motion.div
                        key="indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary glow-primary"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/services"
              className="px-5 py-2 text-sm font-medium text-background bg-primary rounded-lg glow-primary hover:scale-105 hover:brightness-110 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.a>
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label="Open menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 glass border-l border-border/50 md:hidden flex flex-col p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between mb-12">
              <motion.a
                href="#home"
                className="flex items-center gap-2 text-xl font-heading font-bold tracking-tight text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Nouval
                </span>
              </motion.a>
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <nav className="flex-1 flex flex-col gap-6">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`inline-block px-4 py-3 text-lg font-medium rounded-lg transition-all ${
                      activeSection === item.href.replace("#", "").replace("/", "") ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted hover:text-foreground hover:bg-white/5"
                    }`}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * (index + 1), duration: 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              <motion.a
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-3 text-center text-base font-medium text-background bg-primary rounded-lg glow-primary hover:brightness-110 transition-all"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (navItems.length + 1), duration: 0.3 }}
              >
                Order Now
              </motion.a>
            </nav>

            <div className="pt-8 border-t border-border/30">
              <p className="text-xs font-mono text-muted mb-4">System Status</p>
              <div className="flex items-center gap-3 text-sm">
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.4, 1], boxShadow: ["0 0 4px #22c55e", "0 0 12px #22c55e", "0 0 4px #22c55e"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-green-500 font-mono">Online</span>
                <span className="text-muted">v1.0.0</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}