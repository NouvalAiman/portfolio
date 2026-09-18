"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseNavClass = "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300";
  const scrolledClass = "glass border-b border-border/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]";
  const transparentClass = "bg-transparent";

  return (
    <motion.nav
      className={`${baseNavClass} ${isScrolled || isOpen ? scrolledClass : transparentClass}`}
      initial={false}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Brand Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-xl font-heading font-bold tracking-tight text-foreground"
            aria-label="Go to home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(false)}
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

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`inline-block relative px-2 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "").replace("/", "")
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
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

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/services"
              className="px-6 py-2.5 text-sm font-heading font-semibold text-background bg-primary rounded-full glow-primary hover:scale-105 hover:brightness-110 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0, 229, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle (Visible only on mobile md:hidden) */}
          <div className="flex md:hidden items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-cyan-400 bg-white/5 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)] flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.92 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Glassmorphism & Cybernetic Styling */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Dropdown Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden absolute top-16 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.9)] px-6 py-6"
            >
              <nav className="flex flex-col gap-2.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "").replace("/", "");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-base font-medium transition-all ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                            : "text-gray-300 hover:text-cyan-400 hover:bg-white/5 active:bg-white/10"
                        }`}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * index, duration: 0.2 }}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-cyan-500/60 font-mono">&gt;_</span>
                      </motion.div>
                    </Link>
                  );
                })}

                {/* Mobile Order Now CTA Button */}
                <div className="pt-3 mt-1 border-t border-white/10">
                  <motion.a
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-base font-heading font-semibold text-background bg-primary rounded-full glow-primary hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,229,255,0.5)]"
                    whileTap={{ scale: 0.98 }}
                  >
                    Order Now
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}