"use client";

import React, { useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export interface CyberBackgroundWrapperProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  gridSize?: number;
  glowOpacity?: number;
  showScanline?: boolean;
}

export function CyberBackgroundWrapper({
  children,
  className = "",
  containerClassName = "",
  as: Component = "section",
  gridSize = 44,
  glowOpacity = 0.14,
  showScanline = true,
  ...props
}: CyberBackgroundWrapperProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const rafId = useRef<number | null>(null);

  // Spring physics for smooth cursor spotlight motion (motion values do not trigger re-renders)
  const spotlightX = useMotionValue(600);
  const spotlightY = useMotionValue(350);
  const spotlightSpringX = useSpring(spotlightX, { stiffness: 140, damping: 24 });
  const spotlightSpringY = useSpring(spotlightY, { stiffness: 140, damping: 24 });

  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setIsHovered(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      spotlightX.set(relX);
      spotlightY.set(relY);

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (containerRef.current) {
          const pctX = ((relX / rect.width) * 100).toFixed(1);
          const pctY = ((relY / rect.height) * 100).toFixed(1);
          containerRef.current.style.setProperty("--cursor-x", `${pctX}%`);
          containerRef.current.style.setProperty("--cursor-y", `${pctY}%`);
        }
      });
    },
    [spotlightX, spotlightY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <Component
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Visual background layer - isolated with contain to prevent paint invalidation on children */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
        style={{ contain: "layout style paint" }}
      >
        {/* Cyber Scanline Overlay */}
        {showScanline && (
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "var(--scanline)" }}
          />
        )}

        {/* Cyber Grid Pattern with Radial Cursor Mask (Driven directly by CSS Custom Properties) */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            maskImage: isHovered
              ? "radial-gradient(circle 520px at var(--cursor-x, 50%) var(--cursor-y, 50%), black 20%, transparent 80%)"
              : "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
            WebkitMaskImage: isHovered
              ? "radial-gradient(circle 520px at var(--cursor-x, 50%) var(--cursor-y, 50%), black 20%, transparent 80%)"
              : "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
          }}
        />

        {/* Interactive Cursor Spotlight Glow */}
        <motion.div
          className="absolute w-[650px] h-[650px] rounded-full blur-[115px] will-change-transform"
          style={{
            x: spotlightSpringX,
            y: spotlightSpringY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, #06b6d4 0%, #a855f7 45%, transparent 70%)",
          }}
          animate={{
            opacity: isHovered ? glowOpacity : 0.04,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Children Content Layer - interactive and layered at z-10 */}
      <div className={`relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
}

export default CyberBackgroundWrapper;
