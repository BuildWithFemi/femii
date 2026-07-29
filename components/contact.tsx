"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight, Twitter } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const socialLinks = [
  { label: "Twitter / X", handle: "@Buildwithfemi", href: "https://x.com/Buildwithfemi", icon: Twitter },
  { label: "GitHub", handle: "@BuildWithFemi", href: "https://github.com/BuildWithFemi", icon: Github },
  { label: "LinkedIn", handle: "jegede-olorunfemi", href: "https://www.linkedin.com/in/jegede-olorunfemi-98a2a1321", icon: Linkedin },
  { label: "Email", handle: "olorunfemicaleb2@gmail.com", href: "mailto:olorunfemicaleb2@gmail.com", icon: Mail },
  { label: "WhatsApp", handle: "080888664406", href: "https://wa.me/23480888664406", icon: MessageCircle },
];

/* ── Animation Wrapper ─────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full px-6 py-28 md:px-16 lg:px-24"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* ── Header ────────────────────────────────────────────── */}
        <FadeUp delay={0}>
          <div className="mb-14">
            <h2
              className="font-display text-4xl font-medium tracking-tight sm:text-4xl"
              style={{ color: "var(--fg-primary)" }}
            >
              Let&apos;s Build.
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: "var(--fg-muted)" }}
            >
              Founders, developers, and builders — reach out.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          
          {/* ── Left Column: Pitch & Links ────────────────────────── */}
          <div className="flex flex-col gap-12">
            <FadeUp delay={0.1}>
              <div>
                <h3
                  className="mb-4 text-lg font-light"
                  style={{ color: "var(--fg-primary)" }}
                >
                  Get in touch
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Whether you&apos;re looking to collaborate on an AI-powered product, team up for a hackathon, or just want to chat about software engineering and startups, my inbox is always open. Let&apos;s build something impactful.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b py-5 transition-colors"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-md"
                          style={{ background: "var(--bg-panel)", border: "1px solid var(--line-strong)" }}
                        >
                          <Icon size={16} style={{ color: "var(--fg-secondary)" }} />
                        </div>
                        <div className="flex flex-col">
                          <span
                            className="text-[10px] font-semibold uppercase tracking-widest transition-colors group-hover:text-[var(--fg-primary)]"
                            style={{ color: "var(--fg-ghost)" }}
                          >
                            {link.label}
                          </span>
                          <span
                            className="text-sm transition-colors group-hover:text-[var(--fg-primary)]"
                            style={{ color: "var(--fg-secondary)" }}
                          >
                            {link.handle}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        style={{ color: "var(--fg-ghost)" }}
                      />
                    </Link>
                  );
                })}
              </div>
            </FadeUp>
          </div>

          {/* ── Right Column: Standard Form ───────────────────────── */}
          <div className="flex flex-col justify-center">
            <FadeUp delay={0.3}>
              <form
                className="flex flex-col gap-6 rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:bg-[var(--card-hover)]"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--line-strong)",
                }}
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--fg-ghost)] hover:border-[var(--fg-muted)] focus:border-[var(--fg-secondary)]"
                    style={{
                      border: "1px solid var(--line-strong)",
                      color: "var(--fg-primary)",
                    }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--fg-ghost)] hover:border-[var(--fg-muted)] focus:border-[var(--fg-secondary)]"
                    style={{
                      border: "1px solid var(--line-strong)",
                      color: "var(--fg-primary)",
                    }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me what you're building or exploring..."
                    rows={4}
                    className="bg-transparent rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none placeholder:text-[var(--fg-ghost)] hover:border-[var(--fg-muted)] focus:border-[var(--fg-secondary)]"
                    style={{
                      border: "1px solid var(--line-strong)",
                      color: "var(--fg-primary)",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="group mt-2 flex items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: "var(--fg-primary)",
                    color: "var(--bg-base)",
                  }}
                >
                  Send Message
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
