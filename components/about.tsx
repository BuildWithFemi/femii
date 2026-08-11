"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    src: "/photos/portrait.jpg",
    alt: "Olorunfemi Jegede at an AWS event",
    caption: "@ AWS Summit",
    dotColor: "bg-green-500",
  },
  {
    src: "/photos/portrait2.jpg",
    alt: "Olorunfemi Jegede at a hackathon",
    caption: "Hackathon winner 🏆",
    dotColor: "bg-yellow-400",
  },
    {
    src: "/photos/portrait4.jpg",
    alt: "Olorunfemi Jegede at GDGoc event",
    caption: "@ Build with Gemma",
    dotColor: "bg-blue-400",
  },
  {
    src: "/photos/portrait3.jpg",
    alt: "Olorunfemi Jegede working",
    caption: "Deep in the build",
    dotColor: "bg-blue-400",
  },
];

const tags = [
  "AI Engineer",
  "ML Engineer",
  "Data Scientist ",
  "Full-Stack Dev",
  "Vibe-Coder",
];

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full px-6 py-28 md:px-16 lg:px-24"
    >
      {/* subtle diagonal grid bg — reuses diag-opacity var */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--line) 0px,
            var(--line) 1px,
            transparent 1px,
            transparent 48px
          )`,
          opacity: "var(--diag-opacity)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-10xl grid-cols-1 gap-16 lg:grid-cols-[7fr_120px_5fr] lg:gap-0 items-center">

        {/* ── LEFT: text ───────────────────────────────────────────── */}
        <div className="flex flex-col justify-center">

          {/* section label */}
          <FadeUp delay={0}>
            <p
              className="mb-4 text-xs font-thin uppercase tracking-widest"
              style={{ color: "var(--fg-ghost)" }}
            >
              About
            </p>
          </FadeUp>

          {/* heading */}
          <FadeUp delay={0.08}>
            <h2
              className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--fg-primary)" }}
            >
              Meet Femi
            </h2>
          </FadeUp>

          {/* paragraphs */}
          <FadeUp delay={0.16} className="mt-7 space-y-5">
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--fg-secondary)" }}
            >
                Too many software products suffer from a disconnect between 
                data science models and actual production code. 
                I eliminate that friction.
            </p>
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--fg-secondary)" }}
            >
              Hi, I&apos;m Olorunfemi Jegede — a 200 level CS student,
              an AI Engineer and developer from Nigeria. I engineer scalable ML pipelines and
              responsive applications that resolve core operational
              bottlenecks for teams and businesses.
            </p>
            
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--fg-secondary)" }}
            >
              I&apos;ve competed in 2 hackathons, 
              winning 1 — proof that I thrive under pressure 
              and love building things that matter fast.
              Every project I take on is aimed at that standard — clean
              architecture, production-ready web applications, and lasting impact...
            </p>
          </FadeUp>

          {/* tags */}
          <FadeUp delay={0.26} className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="pill-hover rounded-full px-4 py-1.5 text-xs font-medium"
                style={{
                  background: "var(--pill-bg)",
                  border: "1px solid var(--pill-border)",
                  color: "var(--fg-muted)",
                }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
                "var(--fg-muted)";
         }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line-strong)";
                }}
              >
                {tag}
              </span>
            ))}
          </FadeUp>
        </div>

        {/* ── CENTRE: connector line (desktop only) ──────────────── */}
        <div className="hidden lg:flex items-center justify-center self-stretch">
          <div className="relative flex w-full items-center">
            {/* dot — text side */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.25, ease, delay: 0.45 }}
              className="absolute left-0 h-1.5 w-1.5 -translate-x-[3px] rounded-full"
              style={{ background: "var(--fg-ghost)" }}
            />

            {/* line — draws left → right */}
            <svg
              width="100%"
              height="2"
              className="overflow-visible"
              aria-hidden="true"
            >
              <motion.line
                x1="6"
                y1="1"
                x2="114"
                y2="1"
                stroke="var(--line-strong)"
                strokeWidth="1"
                strokeDasharray="108"
                initial={{ strokeDashoffset: 108, opacity: 0 }}
                animate={inView ? { strokeDashoffset: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, ease, delay: 0.5 }}
              />
            </svg>

            {/* dot — photo side */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.25, ease, delay: 0.75 }}
              className="absolute right-0 h-1.5 w-1.5 translate-x-[3px] rounded-full"
              style={{ background: "var(--fg-ghost)" }}
            />
          </div>
        </div>

        {/* ── RIGHT: photo card (slideshow) ────────────────────── */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative h-[420px] w-full max-w-sm lg:max-w-none">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="absolute left-0 top-4 z-10 w-[85%] overflow-hidden rounded-2xl shadow-2xl"
              style={{
                border: "1px solid var(--line-strong)",
                background: "var(--bg-mid)",
              }}
            >
              {/* image area */}
              <div
                className="relative aspect-[3/4] w-full"
                style={{ background: "var(--bg-deep)" }}
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[activeSlide].src}
                      alt={slides[activeSlide].alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 280px"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* caption pill — cross-fades with the image */}
              <div className="absolute bottom-3 left-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`caption-${activeSlide}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease }}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(6px)",
                      color: "#fff",
                    }}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${slides[activeSlide].dotColor}`} />
                    {slides[activeSlide].caption}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* progress dots */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeSlide ? "16px" : "6px",
                      background: i === activeSlide
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
