"use client";

import { useState, useEffect, useCallback, Fragment } from "react";
import type { Variants } from "framer-motion";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  MousePointerClick,
  Terminal,
  Code,
  Rocket,
  Sparkles,
} from "lucide-react";

export interface StatItem {
  label: string;
  value?: string;
  icon?: string;
}

export interface HeroProps {
  animatedTitles?: string[];
  statsBar?: StatItem[];
}

const defaultAnimatedTitles = [
  "Building Scalable Web Systems",
  "Full-Stack Next.js & Laravel Architect",
  "IoT & Embedded Systems Engineer",
];

const defaultStatsBar: StatItem[] = [
  { label: "Years Exp", value: "3+", icon: "rocket" },
  { label: "Projects", value: "2+", icon: "code" },
  { label: "Open Source", value: "", icon: "mouse" },
];

function getStatIcon(icon?: string) {
  const normalized = icon?.toLowerCase() || "";
  if (normalized === "rocket") {
    return <Rocket className="w-4 h-4 text-primary transition-transform group-hover:-translate-y-0.5" />;
  }
  if (normalized === "code" || normalized === "terminal") {
    return <Terminal className="w-4 h-4 text-primary transition-transform group-hover:rotate-6" />;
  }
  if (normalized === "sparkle" || normalized === "sparkles") {
    return <Sparkles className="w-4 h-4 text-primary transition-transform group-hover:rotate-12" />;
  }
  if (normalized === "mouse" || normalized === "click") {
    return <MousePointerClick className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />;
  }
  return <Terminal className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
      mass: 0.8,
    },
  },
};

export function Hero({ animatedTitles, statsBar }: HeroProps = {}) {
  const activeTitles =
    animatedTitles && animatedTitles.length > 0
      ? animatedTitles
      : defaultAnimatedTitles;

  const activeStats =
    statsBar && statsBar.length > 0 ? statsBar : defaultStatsBar;

  // --- 1. Spotlight & Mouse Coordinate Tracking ---
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  // 3D Perspective Tilt Values
  const mouseTiltX = useMotionValue(0);
  const mouseTiltY = useMotionValue(0);
  const tiltSpringX = useSpring(mouseTiltX, { stiffness: 120, damping: 22 });
  const tiltSpringY = useSpring(mouseTiltY, { stiffness: 120, damping: 22 });
  const rotateX = useTransform(tiltSpringY, [-250, 250], [5, -5]);
  const rotateY = useTransform(tiltSpringX, [-350, 350], [-5, 5]);

  // Spotlight Coordinates
  const spotlightX = useMotionValue(600);
  const spotlightY = useMotionValue(350);
  const spotlightSpringX = useSpring(spotlightX, { stiffness: 160, damping: 26 });
  const spotlightSpringY = useSpring(spotlightY, { stiffness: 160, damping: 26 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      spotlightX.set(relX);
      spotlightY.set(relY);

      mouseTiltX.set(relX - rect.width / 2);
      mouseTiltY.set(relY - rect.height / 2);

      setCursorPos({
        x: Math.round(relX),
        y: Math.round(relY),
      });

      if (!isHovered) setIsHovered(true);
    },
    [isHovered, mouseTiltX, mouseTiltY, spotlightX, spotlightY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseTiltX.set(0);
    mouseTiltY.set(0);
  }, [mouseTiltX, mouseTiltY]);

  // --- 2. Dynamic Typewriter Effect ---
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const safeIndex = phraseIndex % activeTitles.length;
    const currentPhrase = activeTitles[safeIndex] || "";
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 35);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % activeTitles.length);
        }, 400);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, activeTitles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Dark Canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Cyber Scanline Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{ backgroundImage: "var(--scanline)" }}
      />

      {/* Subtle Cyber Grid Pattern with Radial Cursor Mask */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: isHovered
            ? `radial-gradient(circle 520px at ${cursorPos.x}px ${cursorPos.y}px, black 20%, transparent 80%)`
            : "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle 520px at ${cursorPos.x}px ${cursorPos.y}px, black 20%, transparent 80%)`
            : "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
        }}
      />

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[110px]"
        style={{
          x: spotlightSpringX,
          y: spotlightSpringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 0.16 : 0.07,
          background:
            "radial-gradient(circle, #06b6d4 0%, #a855f7 45%, transparent 70%)",
        }}
      />

      {/* Floating Ambient Glow 1: Neon Cyan Orb */}
      <motion.div
        className="pointer-events-none absolute top-1/4 -left-12 sm:left-1/6 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-cyan-500/12 blur-[130px]"
        animate={{
          x: [-30, 35, -20, -30],
          y: [-25, 25, -15, -25],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Ambient Glow 2: Electric Purple Orb */}
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-12 sm:right-1/6 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full bg-purple-600/12 blur-[130px]"
        animate={{
          x: [30, -35, 20, 30],
          y: [20, -25, 25, 20],
          scale: [1.1, 0.95, 1.15, 1.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Kinetic 3D Tilt Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter leading-[1.05] mb-4"
          >
            <span className="bg-gradient-to-r from-foreground via-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.25)]">
              Nouval Aiman
            </span>
          </motion.h1>

          {/* Dynamic Typewriter Subtitle */}
          <motion.div variants={itemVariants}>
            <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center mb-6">
              <span className="sr-only">
                {activeTitles.join(" | ")}
              </span>
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium tracking-tight flex items-center text-center justify-center"
                aria-hidden="true"
              >
                <span className="text-primary mr-2 font-mono text-lg sm:text-2xl select-none font-bold">
                  &gt;
                </span>
                <span className="bg-gradient-to-r from-foreground via-white to-primary bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-6 sm:h-8 ml-1.5 bg-primary animate-pulse shadow-[0_0_10px_#00E5FF]" />
              </p>
            </div>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-mono"
          >
            Crafting high-performance web applications with Laravel, React, Next.js, TypeScript & Go.
            <br className="hidden sm:inline" />{" "}
            Obsessed with clean architecture, developer experience & runtime performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button: View Work with Shimmer & Neon Glow */}
            <motion.a
              href="#projects"
              className="relative group px-8 py-4 bg-primary text-background font-heading font-semibold text-base rounded-full overflow-hidden shadow-[0_0_25px_rgba(0,229,255,0.4)]"
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 0 45px rgba(0, 229, 255, 0.75), 0 0 90px rgba(0, 229, 255, 0.35)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Automated Sweeping Shimmer Beam */}
              <motion.span
                className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-22deg] pointer-events-none"
                animate={{
                  x: ["-180%", "320%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 3.2,
                  ease: "easeInOut",
                }}
              />

              {/* Hover Gradient Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <span className="relative flex items-center gap-2 z-10">
                View Work
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </motion.a>

            {/* Secondary Button: GitHub with Neon Border & Terminal Angle Icon */}
            <motion.a
              href="https://github.com/NouvalAiman"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-8 py-4 glass border border-border/80 text-foreground font-heading font-semibold text-base rounded-full overflow-hidden hover:border-primary/70 hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 0 35px rgba(176, 38, 255, 0.35), 0 0 15px rgba(0, 229, 255, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Dynamic Neon Border Accent on Hover */}
              <span className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/60 group-hover:shadow-[inset_0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300 pointer-events-none" />

              <span className="relative flex items-center gap-2.5 z-10">
                <Code className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-primary" />
                <span>GitHub</span>
                <span className="text-xs font-mono text-muted/60 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                  &gt;_
                </span>
              </span>
            </motion.a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-14 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-7 py-3 rounded-full glass border border-border/50 text-sm text-muted font-mono shadow-[0_0_25px_rgba(0,0,0,0.4)] backdrop-blur-md hover:border-primary/30 transition-colors"
          >
            {activeStats.map((stat, idx) => {
              const textContent = stat.value
                ? `${stat.value} ${stat.label}`.trim()
                : stat.label;
              const dotColor =
                idx % 2 === 1 ? "bg-primary/40" : "bg-secondary/40";

              return (
                <Fragment key={idx}>
                  {idx > 0 && (
                    <div className={`w-1 h-1 rounded-full ${dotColor}`} />
                  )}
                  <div className="flex items-center gap-2 group cursor-default">
                    {getStatIcon(stat.icon)}
                    <span className="text-foreground/90 font-medium">
                      {textContent}
                    </span>
                  </div>
                </Fragment>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator with Looping Gradient Pulse */}
      <motion.div
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-xs z-20 pointer-events-none select-none"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span className="tracking-widest uppercase text-[10px] text-muted font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          Scroll to explore
        </span>

        {/* Vertical Track with Looping Gradient Light Pulse */}
        <div className="relative w-5 h-9 rounded-full border border-border/70 glass flex items-start justify-center p-1 overflow-hidden shadow-[0_0_12px_rgba(0,229,255,0.15)]">
          {/* Guide Track Center Line */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Infinite Looping Gradient Pulse Drop */}
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-primary via-cyan-300 to-secondary shadow-[0_0_10px_#00E5FF]"
            animate={{
              y: [0, 18, 18],
              opacity: [0, 1, 0],
              scaleY: [0.8, 1.25, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}