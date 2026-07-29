"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { getIcon } from "@/lib/get-icon";
import { useTheme } from "next-themes";

const ease = [0.22, 1, 0.36, 1] as const;

// Show first 3 on homepage
const preview = projects.slice(0, 3);
const [featured, ...rest] = preview;

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="relative w-full px-6 py-28 md:px-16 lg:px-24">

      {/* Header row */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p
            className="mb-2 text-xs font-thin uppercase tracking-widest"
            style={{ color: "var(--fg-ghost)" }}
          >
            Work
          </p>
          <h2
            className="font-display text-4xl font-medium tracking-tight sm:text-4xl"
            style={{ color: "var(--fg-primary)" }}
          >
            Selected Works
          </h2>
          <p className="mt-2 max-w-md text-sm" style={{ color: "var(--fg-muted)" }}>
            Engineering high-impact solutions for complex real-world problems.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 self-start rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 sm:self-auto"
          style={{
            background: "var(--pill-bg)",
            border: "1px solid var(--pill-border)",
            color: "var(--fg-secondary)",
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
          View All <ArrowUpRight size={13} />
        </Link>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.0fr_0.75fr]">

        {/* Featured card — large left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
        >
          <ProjectCard project={featured} large />
        </motion.div>

        {/* Two small cards — stacked right */}
        <div className="grid grid-cols-1 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ── Individual card ─────────────────────────────────────────────── */
function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0];
  large?: boolean;
}) {
  const Icon = getIcon(project.icon);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Default to dark mode styling during SSR to prevent flash, then resolve to correct theme.
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl"
      style={{
        background: isDark ? project.accentColor : "var(--card-bg)",
        border: "1px solid var(--line-strong)",
        minHeight: large ? "480px" : "220px",
      }}
    >
      {/* Visual area — thumbnail image OR icon */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden"
        style={{ minHeight: large ? "340px" : "130px" }}
      >
        {project.thumbnail ? (
          <>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* gradient overlay so bottom text stays readable */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)",
              }}
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <div
              className="absolute h-40 w-40 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--fg-primary)" }}
              aria-hidden="true"
            />
            <Icon
              size={large ? 52 : 36}
              strokeWidth={1.2}
              style={{ color: "var(--fg-primary)", position: "relative" }}
            />
          </>
        )}

        {/* Role badge — top-left, only on large card */}
        {large && project.role && (
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {project.role}
          </span>
        )}
      </div>

      {/* Bottom info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              className="font-display text-lg font-bold leading-snug"
              style={{ color: "var(--fg-primary)" }}
            >
              {project.title}
            </h3>
            <p
              className="mt-1 text-xs leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              {project.summary}
            </p>
          </div>

          {/* Arrow button */}
          <span
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--line-strong)",
              color: "var(--fg-muted)",
            }}
          >
            <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Tech tags — only on large card */}
        {large && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-colors"
                style={{
                  background: "var(--pill-bg)",
                  border: "1px solid var(--pill-border)",
                  color: "var(--fg-ghost)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
