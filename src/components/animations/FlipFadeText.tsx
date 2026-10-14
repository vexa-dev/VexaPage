"use client";

import { useMemo, memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FlipFadeTextProps {
  /**
   * The text to animate with 3D flip-fade on scroll
   */
  text?: string;
  /**
   * Backwards-compatible words array (uses first word if provided)
   */
  words?: string[];
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Additional CSS classes for the text
   */
  textClassName?: string;
  /**
   * Animation duration for each letter in seconds
   * @default 0.55
   */
  letterDuration?: number;
  /**
   * Stagger delay between letters on enter in seconds
   * @default 0.025
   */
  staggerDelay?: number;
  /**
   * Delay before the entire animation starts in seconds
   * @default 0
   */
  delay?: number;
  /**
   * Whether to animate only once when scrolled into view
   * @default false
   */
  once?: boolean;
  /**
   * Viewport trigger threshold
   * @default 0.2
   */
  amount?: number | "some" | "all";
}

// Memoized Letter component with 3D flip, blur and fade
const Letter = memo(function Letter({
  char,
  letterDuration,
}: {
  char: string;
  letterDuration: number;
}) {
  return (
    <motion.span
      style={{ transformStyle: "preserve-3d" }}
      variants={{
        initial: {
          rotateX: 90,
          y: 22,
          opacity: 0,
          filter: "blur(8px)",
          transition: {
            duration: 0.15,
            ease: "easeOut",
          },
        },
        animate: {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: letterDuration,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
});

/**
 * FlipFadeText (Vengeance UI Scroll Animation)
 * Triggers a 3D perspective letter-by-letter flip and blur-fade reveal
 * every time the element scrolls into view.
 */
export function FlipFadeText({
  text,
  words,
  className,
  textClassName,
  letterDuration = 0.55,
  staggerDelay = 0.025,
  delay = 0,
  once = false,
  amount = 0.2,
}: FlipFadeTextProps) {
  const content = text || (words && words.length > 0 ? words[0] : "");
  const wordsList = useMemo(() => content.split(" "), [content]);

  return (
    <motion.span
      className={cn(
        "inline-flex flex-wrap items-center leading-tight tracking-tight",
        className,
      )}
      style={{ perspective: "1000px" }}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount, margin: "-20px" }}
      variants={{
        initial: { opacity: 1 },
        animate: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {wordsList.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          <span className={cn("inline-flex", textClassName)}>
            {word.split("").map((char, cIdx) => (
              <Letter
                key={`${char}-${wIdx}-${cIdx}`}
                char={char}
                letterDuration={letterDuration}
              />
            ))}
          </span>
          {wIdx < wordsList.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}

export default FlipFadeText;
