"use client";

import { motion, useInView, useAnimation } from "motion/react";
import { useRef, useEffect } from "react";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        // reset to left, invisible
        await controls.set({ x: "-220px", opacity: 0 });
        // brief pause before each sweep
        await new Promise((r) => setTimeout(r, 800));
        if (cancelled) break;
        // sweep across
        await controls.start({
          x: "110vw",
          opacity: [0, 1, 1, 0],
          transition: {
            x: { duration: 2.8, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 2.8, times: [0, 0.08, 0.88, 1] },
          },
        });
        // pause between sweeps
        await new Promise((r) => setTimeout(r, 1600));
      }
    }

    loop();
    return () => { cancelled = true; controls.stop(); };
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "1px" }}
      aria-hidden="true"
    >
      {/* base line — always visible, very faint */}
      <div
        className="absolute inset-0 w-full"
        style={{ background: "var(--line)" }}
      />

      {/* traveling comet */}
      <motion.div
        animate={controls}
        className="absolute top-0 h-full"
        style={{
          width: "220px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--line-strong) 20%, rgba(255,255,255,0.55) 50%, var(--line-strong) 80%, transparent 100%)",
          filter: "blur(0.5px)",
          willChange: "transform",
        }}
      />

      {/* soft glow bloom sitting under the comet */}
      <motion.div
        animate={controls}
        className="absolute top-1/2 -translate-y-1/2 h-[6px] pointer-events-none"
        style={{
          width: "220px",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 70%)",
          filter: "blur(3px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
