"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Data ──────────────────────────────────────────────────────────── */

const stackColumns = [
  {
    category: "Core Intelligence",
    skills: [
      { name: "Python",      icon: "🐍" },
      { name: "Scikit-learn",icon: "🤖" },
      { name: "XGBoost",     icon: "⚡" },
      { name: "LangChain",   icon: "🔗" },
      { name: "Gemini API",  icon: "✨" },
      { name: "Pandas",      icon: "🐼" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", icon: "⚛️" },
      { name: "TypeScript",      icon: "📘" },
      { name: "Tailwind CSS",    icon: "🎨" },
      { name: "Framer Motion",   icon: "🎞️" },
      { name: "HTML / CSS",      icon: "🌐" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Node.js",   icon: "🟢" },
      { name: "FastAPI",   icon: "🚀" },
      { name: "Streamlit", icon: "📊" },
      { name: "SQL",       icon: "🗄️" },
      { name: "NumPy",     icon: "🔢" },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Git / GitHub", icon: "🐙" },
      { name: "Docker",       icon: "🐳" },
      { name: "Vercel",       icon: "▲" },
      { name: "Bash",         icon: "💻" },
      { name: "REST APIs",    icon: "🔌" },
    ],
  },
];

const experience = [
    {
    period: "2026 — Present",
    title: "CS Student",
    company: "Lagos State University (200 Level)",
    description:
      "Pursuing a Computer Science degree while simultaneously shipping real-world AI and software projects beyond the curriculum.",
    current: true,
  },

  {
    period: "2026 — Present",
    title: "AI Engineer & Full-Stack Developer",
    company: "Independent / Freelance",
    description:
      "Building AI-powered products and full-stack applications for clients. Shipped MyRight ADR platform, ML crime prediction model, and multiple production web apps.",
    current: false,
  },
  {
    period: "2026 - Present",
    title: "Hackathon Competitor",
    company: "Google, AWS & Community Events",
    description:
      "Competed in 2 hackathons, winning 1. Built and shipped functional products under tight deadlines — proof of speed, focus, and cross-functional execution.",
    current: false,
  },
    {
    period: "2025",
    title: "Data Analyst",
    company: "Independent / Freelancer",
    description:
      "Applied training knowledege to real client work — by analysing and visualising their business data to drive clarity and decisions.",
    current: false,
  },
    {
    period: "2024",
    title: "Tech Trianing",
    company: "Sidmach Technologies",
    description:
      "I broke into tech in 2024, with the help of a government initiative program, NextGen. This was when I discorverd my drive for AI and Data Science.",
    current: false,
  },
];

/* ── Animated bar ──────────────────────────────────────────────────── */
function SkillBar({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Random-ish width between 55–100% for visual rhythm (seeded by delay)
  const width = 55 + ((delay * 137) % 45);

  return (
    <div
      ref={ref}
      className="relative h-px flex-shrink-0"
      style={{ width: "80px", background: "var(--line)" }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full"
        style={{ background: "var(--fg-muted)" }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${width}%` } : {}}
        transition={{ duration: 0.8, ease, delay }}
      />
    </div>
  );
}

/* ── Stack column ──────────────────────────────────────────────────── */
function StackColumn({
  col,
  colDelay,
}: {
  col: (typeof stackColumns)[0];
  colDelay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      {/* Category label + rule */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease, delay: colDelay }}
        className="mb-4"
      >
        <p
          className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--fg-ghost)" }}
        >
          {col.category}
        </p>
        <div className="h-px w-full" style={{ background: "var(--line-strong)" }} />
      </motion.div>

      {/* Skill rows */}
      <div className="flex flex-col gap-3">
        {col.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: colDelay + 0.08 + i * 0.06 }}
            className="flex items-center justify-between gap-3"
          >
            {/* Icon + name */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-base leading-none flex-shrink-0">{skill.icon}</span>
              <span
                className="text-sm truncate"
                style={{ color: "var(--fg-secondary)" }}
              >
                {skill.name}
              </span>
            </div>

            {/* Animated bar */}
            <SkillBar delay={colDelay + 0.15 + i * 0.06} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Experience timeline ───────────────────────────────────────────── */
function ExperienceLog() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="mt-40">
      {/* Section label + rule */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease }}
        className="mb-10"
      >
        <p
          className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--fg-ghost)" }}
        >
          Timeline
        </p>
        <div className="h-px w-full" style={{ background: "var(--line-strong)" }} />
      </motion.div>

      {/* Timeline entries */}
      <div className="relative flex flex-col gap-12 pl-8">
        {/* vertical spine container */}
        <div ref={timelineRef} className="absolute left-[3px] top-[6px] bottom-[6px] w-px">
          {/* Static spine background */}
          <motion.div
            className="absolute inset-0 w-full"
            style={{ background: "var(--line-strong)" }}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1, ease, delay: 0.2 }}
          />

          {/* Active spine fill (leaves trail behind the dot) */}
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ background: "var(--fg-primary)", height: dotTop }}
          />

          {/* Traveling pulsing dot */}
          <motion.div
            className="absolute -left-[3.5px] h-2 w-2 rounded-full"
            style={{
              top: dotTop,
              background: "var(--fg-primary)",
              boxShadow: "0 0 10px 2px var(--fg-primary)",
              outline: "2px solid var(--bg-base)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {experience.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease, delay: 0.25 + i * 0.12 }}
            className="relative"
          >
            {/* Content */}
            <p
              className="mb-1.5 font-display text-sm"
              style={{ color: "var(--fg-ghost)" }}
            >
              {exp.period}
            </p>
            <h3
              className="font-display text-lg font-normal"
              style={{ color: "var(--fg-primary)" }}
            >
              {exp.title}
            </h3>
            <p
              className="mb-1.5 font-display text-sm font-normal"
              style={{ color: "var(--fg-ghost)" }}
            >
              {exp.company}
            </p>
            <p
              className="font-display text-sm leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-muted)" }}
            >
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────── */
export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="relative mx-auto max-w-7xl">

        {/* ── Header ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <p
            className="mb-2 text-xs font-thin uppercase tracking-widest"
            style={{ color: "var(--fg-ghost)" }}
          >
            Stack
          </p>
          <h2
            className="font-display text-4xl font-medium tracking-tight sm:text-4xl"
            style={{ color: "var(--fg-primary)" }}
          >
            Technical Stack
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--fg-muted)" }}
          >
            Tools of the trade.
          </p>
        </motion.div>

        {/* ── 4-column skill grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stackColumns.map((col, i) => (
            <StackColumn
              key={col.category}
              col={col}
              colDelay={0.05 + i * 0.1}
            />
          ))}
        </div>

        {/* ── Experience log ────────────────────────────────────── */}
        <ExperienceLog />

      </div>
    </section>
  );
}
