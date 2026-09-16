"use client";

import React, { useState, useCallback } from "react";
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
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  // Spring physics for smooth cursor spotlight motion
  const spotlightX = useMotionValue(600);
  const spotlightY = useMotionValue(350);
  const spotlightSpringX = useSpring(spotlightX, { stiffness: 140, damping: 24 });
  const spotlightSpringY = useSpring(spotlightY, { stiffness: 140, damping: 24 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      spotlightX.set(relX);
      spotlightY.set(relY);

      setCursorPos({
        x: Math.round((relX / rect.width) * 100),
        y: Math.round((relY / rect.height) * 100),
      });

      if (!isHovered) setIsHovered(true);
    },
    [isHovered, spotlightX, spotlightY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Visual background layer - non-interactive and layered at z-0 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Cyber Scanline Overlay */}
        {showScanline && (
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "var(--scanline)" }}
          />
        )}

        {/* Cyber Grid Pattern with Radial Cursor Mask (Hero-style matrix) */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            maskImage: isHovered
              ? `radial-gradient(circle 520px at ${cursorPos.x}% ${cursorPos.y}%, black 20%, transparent 80%)`
              : "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 520px at ${cursorPos.x}% ${cursorPos.y}%, black 20%, transparent 80%)`
              : "radial-gradient(ellipse 65% 55% at 50% 45%, black 15%, transparent 75%)",
          }}
        />

        {/* Interactive Cursor Spotlight Glow (Neon cyan #06b6d4 & purple #a855f7) */}
        <motion.div
          className="absolute w-[650px] h-[650px] rounded-full blur-[115px]"
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
