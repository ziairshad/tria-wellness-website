"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, amount: 0.2 },
};

type AnimatedSectionProps = HTMLMotionProps<"section">;

export function AnimatedSection({ className, children, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      {...animationProps}
      {...props}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.section>
  );
}
