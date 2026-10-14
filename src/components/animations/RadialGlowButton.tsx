"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type RadialGlowButtonProps<T extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    children?: React.ReactNode;
    className?: string;
  };

export function RadialGlowButton<T extends React.ElementType = "button">({
  as,
  children = "Get Extension",
  className,
  ...props
}: RadialGlowButtonProps<T>) {
  const Component = as || "button";
  const isButton = Component === "button";

  return (
    <div className="relative inline-block">
      <style>{`
        @property --rg-pos-x { syntax: '<percentage>'; initial-value: 40%; inherits: false; }
        @property --rg-pos-y { syntax: '<percentage>'; initial-value: 140%; inherits: false; }
        @property --rg-spread-x { syntax: '<percentage>'; initial-value: 130%; inherits: false; }
        @property --rg-spread-y { syntax: '<percentage>'; initial-value: 170%; inherits: false; }
        @property --rg-color-1 { syntax: '<color>'; initial-value: #020805; inherits: false; }
        @property --rg-color-2 { syntax: '<color>'; initial-value: #0a1f18; inherits: false; }
        @property --rg-color-3 { syntax: '<color>'; initial-value: #17382e; inherits: false; }
        @property --rg-color-4 { syntax: '<color>'; initial-value: #285447; inherits: false; }
        @property --rg-color-5 { syntax: '<color>'; initial-value: #010403; inherits: false; }
        @property --rg-border-angle { syntax: '<angle>'; initial-value: 180deg; inherits: true; }
        @property --rg-border-color-1 { syntax: '<color>'; initial-value: hsla(162, 45%, 45%, 0.4); inherits: true; }
        @property --rg-border-color-2 { syntax: '<color>'; initial-value: hsla(162, 30%, 20%, 0.2); inherits: true; }
        @property --rg-stop-1 { syntax: '<percentage>'; initial-value: 37.35%; inherits: false; }
        @property --rg-stop-2 { syntax: '<percentage>'; initial-value: 61.36%; inherits: false; }
        @property --rg-stop-3 { syntax: '<percentage>'; initial-value: 78.42%; inherits: false; }
        @property --rg-stop-4 { syntax: '<percentage>'; initial-value: 93.52%; inherits: false; }
        @property --rg-stop-5 { syntax: '<percentage>'; initial-value: 100%; inherits: false; }

        .rg-button {
          --transition: 0.25s;
          --spark: 1.8s;
          --speed: 1.2s;
          --cut: 1px;
          --bg: radial-gradient(
            var(--rg-spread-x) var(--rg-spread-y) at var(--rg-pos-x) var(--rg-pos-y),
            var(--rg-color-1) var(--rg-stop-1),
            var(--rg-color-2) var(--rg-stop-2),
            var(--rg-color-3) var(--rg-stop-3),
            var(--rg-color-4) var(--rg-stop-4),
            var(--rg-color-5) var(--rg-stop-5)
          );
          
          position: relative;
          min-width: 160px;
          min-height: 51px;
          padding: 16px 30px;
          border: none;
          border-radius: 14px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          line-height: 19px;
          color: #f1f7f4;
          background: var(--bg);
          cursor: pointer;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.95);
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px -4px rgba(2, 8, 5, 0.8);
          transition: 
            --rg-pos-x .75s, --rg-pos-y .75s,
            --rg-spread-x .75s, --rg-spread-y .75s,
            --rg-color-1 .75s, --rg-color-2 .75s, --rg-color-3 .75s, --rg-color-4 .75s, --rg-color-5 .75s,
            --rg-border-angle .75s, --rg-border-color-1 .75s, --rg-border-color-2 .75s,
            --rg-stop-1 .75s, --rg-stop-2 .75s, --rg-stop-3 .75s, --rg-stop-4 .75s, --rg-stop-5 .75s,
            box-shadow .3s ease,
            transform .2s ease;
        }

        .rg-button:hover {
          --rg-pos-x: 0%;
          --rg-pos-y: 120%;
          --rg-spread-x: 110.24%;
          --rg-spread-y: 110.2%;
          --rg-color-1: #030d08;
          --rg-color-2: #10b981;
          --rg-color-3: #059669;
          --rg-color-4: #047857;
          --rg-stop-1: 0%;
          --rg-stop-2: 12%;
          --rg-stop-3: 38%;
          --rg-stop-4: 72%;
          --rg-stop-5: 150%;
          --rg-border-angle: 190deg;
          --rg-border-color-1: hsla(160, 84%, 45%, 0.75);
          --rg-border-color-2: hsla(160, 60%, 25%, 0.4);
          --button-line-opacity: 0.85;
          box-shadow: 0 0 24px -2px rgba(16, 185, 129, 0.4), 0 4px 16px rgba(0, 0, 0, 0.6);
          transform: translateY(-2px);
        }

        .rg-button:active {
          transform: translateY(1px);
        }

        .rg-button::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background-image: linear-gradient(var(--rg-border-angle), var(--rg-border-color-1), var(--rg-border-color-2));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .rg-label {
          position: relative;
          z-index: 1;
        }

        .rg-bg {
          position: absolute;
          inset: var(--cut);
          background: var(--bg);
          border-radius: inherit;
          transition: background var(--transition), opacity var(--transition);
        }

        .rg-shine {
          position: absolute;
          inset: 0;
          container-type: size;
          border-radius: inherit;
          mix-blend-mode: soft-light;
          opacity: var(--button-line-opacity, 0);
          transition: opacity 0.3s;
          overflow: visible;
          pointer-events: none;
        }

        .rg-shine span {
          position: absolute;
          inset: 0;
          height: 100cqh;
          aspect-ratio: 1;
          animation: rg-slide var(--speed) ease-in-out infinite alternate;
          overflow: visible;
        }

        .rg-shine span::before {
          content: "";
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from calc(270deg - (90deg * 0.5)),
            transparent 0,
            #10b981 90deg,
            transparent 90deg
          );
          animation: rg-spin calc(var(--speed) * 2) infinite linear;
        }

        @keyframes rg-spin {
          0% { rotate: 0deg; }
          15%, 35% { rotate: 90deg; }
          65%, 85% { rotate: 270deg; }
          100% { rotate: 360deg; }
        }

        @keyframes rg-slide {
          to { transform: translate(calc(100cqw - 100%), 0); }
        }
      `}</style>

      <Component
        className={cn("rg-button", className)}
        {...(isButton ? { type: "button" } : {})}
        {...(props as any)}
      >
        <span className="rg-shine" aria-hidden="true">
          <span></span>
        </span>
        <span className="rg-bg" aria-hidden="true"></span>
        <span className="rg-label flex items-center justify-center gap-2.5">{children}</span>
      </Component>
    </div>
  );
}

export default RadialGlowButton;
