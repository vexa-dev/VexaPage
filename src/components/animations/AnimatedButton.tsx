"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export type AnimatedButtonProps<T extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<T> &
    MotionProps & {
      children?: React.ReactNode;
      as?: T;
      className?: string;
      shineColor?: string;
    };

/**
 * AnimatedButton (Vengeance UI)
 * - Animated CTA button with synchronized text shine & border beam effect
 * - Polymorphic support (can render as <button>, <a>, or React Router <Link>)
 * - Optimized for VEXA's dark obsidian and emerald palette
 */
export function AnimatedButton<T extends React.ElementType = "button">({
  children = "Browse Components",
  className = "",
  as,
  shineColor,
  ...rest
}: AnimatedButtonProps<T>) {
  const Component = as || "button";
  const isButton = Component === "button";

  return (
    <Component
      {...(isButton ? { type: "button" } : {})}
      {...(rest as any)}
      className={cn(
        "group inline-flex items-center justify-center px-6 py-3 rounded-lg relative overflow-hidden",
        "bg-[#09090b] border border-[#27272a] hover:border-[#3f3f46]",
        "text-white font-medium text-sm sm:text-base tracking-normal",
        "hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out",
        "shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      style={
        {
          "--shine": shineColor || "rgba(255, 255, 255, 0.66)",
        } as React.CSSProperties
      }
    >
      {/* Text with moving shine mask */}
      <style>{`
        @property --mask-x {
          syntax: '<percentage>';
          initial-value: 100%;
          inherits: false;
        }
      `}</style>
      <motion.span
        className="flex items-center justify-center gap-2.5 h-full w-full relative z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
        }}
        initial={{ ["--mask-x" as any]: "100%" } as any}
        animate={{ ["--mask-x" as any]: "-100%" } as any}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        {children}
      </motion.span>

      {/* Border shine effect that traces along the border perimeter */}
      <motion.span
        className="block absolute inset-0 rounded-[inherit] p-px pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={{ backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
    </Component>
  );
}

export default AnimatedButton;
