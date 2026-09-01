"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ delay = 0, duration = 0.6, direction = "up", children, className = "", ...props }, ref) => {
    const directionMap = {
      up: { y: 30 },
      down: { y: -30 },
      left: { x: 30 },
      right: { x: -30 },
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, ...directionMap[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";