"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import * as React from "react";

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants"> {
  staggerDelay?: number;
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const containerVariants: Record<string, { opacity: number; transition?: { staggerChildren: number; delayChildren: number } }> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Record<string, { opacity: number; y?: number; transition?: { duration: number; ease?: number[] } }> = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

type DirectionVariant = {
  hidden: { opacity: number; x?: number; y?: number };
  visible: { opacity: number; x?: number; y?: number; transition?: { duration: number } };
};

const directionVariants: Record<string, DirectionVariant> = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  down: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  left: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  right: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
};

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ staggerDelay = 0.1, children, className = "", direction = "up", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          const childElement = child as React.ReactElement<Record<string, unknown>>;
          return React.cloneElement(childElement, {
            variants: directionVariants[direction] || itemVariants,
            key: child.key ?? index,
            style: { ...(childElement.props.style as React.CSSProperties), transitionDelay: index * staggerDelay },
          });
        })}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";