import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";
import { getIcon } from "@/lib/get-icon";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const Icon = getIcon(project.icon);

  return (
    <main className="min-h-screen px-6 pb-28 pt-28 md:px-16 lg:px-24">

      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-60 mb-10"
        style={{ color: "var(--fg-muted)" }}
      >
        <ArrowLeft size={14} /> Back to Works
      </Link>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">

        {/* ── LEFT ───────────────────────────────────────────────── */}
        <div>

          {/* Hero — thumbnail if available, icon fallback otherwise */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: project.accentColor,
              border: "1px solid var(--line-strong)",
              minHeight: "320px",
            }}
          >
            {project.thumbnail ? (
              <>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                {/* bottom gradient so text/badges above remain readable */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)",
                  }}
                  aria-hidden="true"
                />
                {/* role badge */}
                {project.role && (
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
              </>
            ) : (
              <div className="flex items-center justify-center p-16" style={{ minHeight: "320px" }}>
                <div
                  className="absolute h-48 w-48 rounded-full opacity-25 blur-3xl"
                  style={{ background: "var(--fg-primary)" }}
                  aria-hidden="true"
                />
                <Icon size={72} strokeWidth={1.1} style={{ color: "var(--fg-primary)", position: "relative" }} />
              </div>
            )}
          </div>

          {/* Title + description */}
          <h1
            className="font-display mt-8 text-4xl font-medium tracking-tight sm:text-4xl"
            style={{ color: "var(--fg-primary)" }}
          >
            {project.title}
          </h1>
          <p
            className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--fg-secondary)" }}
          >
            {project.description}
          </p>

          {/* Problem / Solution */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2
                className="font-display mb-3 text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--fg-primary)" }}
              >
                The Problem
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {project.problem}
              </p>
            </div>
            <div>
              <h2
                className="font-display mb-3 text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--fg-primary)" }}
              >
                The Solution
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT sidebar ──────────────────────────────────────── */}
        <div className="flex flex-col gap-8">

          {/* Technologies */}
          <div>
            <p
              className="mb-3 text-[10px] font-medium uppercase tracking-widest"
              style={{ color: "var(--fg-ghost)" }}
            >
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: "var(--pill-bg)",
                    border: "1px solid var(--pill-border)",
                    color: "var(--fg-muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Performance metrics */}
          {project.metrics.length > 0 && (
            <div>
              <p
                className="mb-3 text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--fg-ghost)" }}
              >
                Performance
              </p>
              <div className="flex flex-col divide-y" style={{ borderColor: "var(--line)" }}>
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between py-3">
                    <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                      {m.label}
                    </span>
                    <span className="font-display text-sm font-bold" style={{ color: "var(--fg-primary)" }}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--fg-primary)",
                  color: "var(--bg-base)",
                }}
              >
                <ExternalLink size={14} /> Visit Deployment
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-200 hover:opacity-80"
                style={{
                  background: "var(--pill-bg)",
                  border: "1px solid var(--pill-border)",
                  color: "var(--fg-secondary)",
                }}
              >
                <ExternalLink size={14} /> View on GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
