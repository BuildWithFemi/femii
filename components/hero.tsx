"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-28 text-center">

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease, delay: 0.5 }}
        className="font-display max-w-2xl text-5xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-6xl"
        style={{ color: "var(--fg-primary)" }}
      >
        Hey, I&apos;m{" "}
        <span style={{ color: "var(--fg-secondary)" }}>Olorunfemi Jegede.</span>
      </motion.h1>

      {/* Role / tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="mt-7 text-base font-medium tracking-wide sm:text-lg"
        style={{ color: "var(--fg-muted)" }}
      >
        AI-Enginner&nbsp;·&nbsp;Developer&nbsp;·&nbsp;Open-Source Builder
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
        className="mt-8 max-w-xl text-sm leading-relaxed sm:text-base"
        style={{ color: "var(--fg-muted)" }}
      >
        I engineer scalable ML pipelines 
        and responsive full-stack applications 
        to resolve core operational bottlenecks.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.42 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-3"
      >
        <Link
          href="projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-display tracking-tight transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
          style={{
            background: "var(--fg-primary)",
            color: "var(--bg-base)",
          }}
        >
        Projects <ArrowRight size={14} />
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium font-display tracking-tight transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"          
            style={{
            background: "var(--pill-bg)",
            border: "1px solid var(--line-strong)",
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
          View CV <ArrowRight size={14} />
        </a>
      </motion.div>
      

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.55 }}
        className="mt-12 flex flex-col items-center gap-5"
      >
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--fg-ghost)" }}
        >
          Connect with me
        </p>

        <div className="flex items-center gap-3">
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pill-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
            }}
          >
            {/* Instagram SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pill-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
            }}
          >
            {/* GitHub SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="group flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pill-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
            }}
          >
            {/* X logo */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--pill-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
            }}
          >
            {/* LinkedIn SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
