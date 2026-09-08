"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, MousePointerClick, Terminal, Code, Rocket } from "lucide-react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-200, 200], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--scanline)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--radial-glow)" }} />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--primary-glow) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)`,
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        > 
          

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Nouval Aiman
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal bg-gradient-to-r from-muted to-foreground/60 bg-clip-text text-transparent">
              Building scalable systems
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-mono text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Crafting high-performance web applications with Laravel, React, Next.js, TypeScript & Go.
            {"\n"}
            Obsessed with clean architecture, developer experience & runtime performance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="relative group px-8 py-4 bg-primary text-background font-heading font-semibold text-base rounded-lg overflow-hidden glow-primary"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0, 229, 255, 0.5), 0 0 80px rgba(0, 229, 255, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              style={{ transformOrigin: "center center" }}
            >
              <span className="relative flex items-center gap-2 z-10">
                View Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>

            <motion.a
              href="https://github.com/NouvalAiman"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-8 py-4 glass border-border/50 text-foreground font-heading font-semibold text-base rounded-lg overflow-hidden hover:border-primary/50 hover:text-primary transition-all"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(176, 38, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex items-center gap-2 z-10">
                <Code className="w-5 h-5" />
                GitHub
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-12 text-sm text-muted font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary/70" />
              <span>3+ Years Exp</span>
            </div>
            <div className="w-px h-6 bg-border/50" />
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary/70" />
              <span>50+ Projects</span>
            </div>
            <div className="w-px h-6 bg-border/50" />
            <div className="flex items-center gap-2">
              <MousePointerClick className="w-4 h-4 text-primary/70" />
              <span>Open Source</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            className="w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}