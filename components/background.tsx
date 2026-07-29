"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden" style={{ background: "var(--bg-base)" }}>
      
      {/* ── Ambient Orbs (Extremely slow and subtle) ── */}
      <motion.div
        className="absolute left-[-10%] top-[-10%] h-[70vw] w-[70vw] mix-blend-screen blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--line-strong) 0%, transparent 60%)",
          opacity: 0.15,
        }}
        animate={{
          x: ["0%", "30%", "-10%", "0%"],
          y: ["0%", "20%", "40%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute right-[-10%] bottom-[-20%] h-[60vw] w-[60vw] mix-blend-screen blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--fg-ghost) 0%, transparent 60%)",
          opacity: 0.1,
        }}
        animate={{
          x: ["0%", "-40%", "10%", "0%"],
          y: ["0%", "-30%", "20%", "0%"],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Diagonal Mesh Grid ── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: "var(--diag-opacity)",
          backgroundImage: `
            repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 100px),
            repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 100px)
          `,
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)"
        }}
      />

      {/* ── Interactive Mouse Glow ── */}
      <div
        className="absolute inset-0 mix-blend-screen transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 50%)`,
        }}
      />
    </div>
  );
}
