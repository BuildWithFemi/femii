import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { getIcon } from "@/lib/get-icon";

export const metadata = {
  title: "Projects",
  description: "All projects by Olorunfemi Jegede.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-28 pt-28 md:px-16 lg:px-24">

      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-70 mb-12"
        style={{ color: "var(--fg-muted)" }}
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--fg-ghost)" }}>
          All Work
        </p>
        <h1 className="font-display text-4xl font-medium tracking-tight" style={{ color: "var(--fg-primary)" }}>
          Projects
        </h1>
        <p className="mt-3 max-w-lg text-sm" style={{ color: "var(--fg-muted)" }}>
          Every project I&apos;ve shipped — from ML pipelines to full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = getIcon(project.icon);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl"
              style={{
                background: project.accentColor,
                border: "1px solid var(--line-strong)",
                minHeight: "240px",
              }}
            >
              {/* Visual area — thumbnail or icon */}
              <div className="relative overflow-hidden" style={{ minHeight: "150px" }}>
                {project.thumbnail ? (
                  <>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* gradient so bottom info stays readable */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)",
                      }}
                      aria-hidden="true"
                    />
                    {/* role badge */}
                    {project.role && (
                      <span
                        className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest"
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
                  <div className="flex h-full items-center justify-center" style={{ minHeight: "150px" }}>
                    <div
                      className="absolute h-32 w-32 rounded-full opacity-20 blur-3xl"
                      style={{ background: "var(--fg-primary)" }}
                      aria-hidden="true"
                    />
                    <Icon
                      size={38}
                      strokeWidth={1.2}
                      style={{ color: "var(--fg-primary)", position: "relative" }}
                    />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-base font-bold" style={{ color: "var(--fg-primary)" }}>
                      {project.title}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                      {project.summary}
                    </p>
                  </div>
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
                    style={{ background: "var(--pill-bg)", border: "1px solid var(--line-strong)", color: "var(--fg-muted)" }}
                  >
                    <ArrowUpRight size={13} />
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--fg-ghost)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
