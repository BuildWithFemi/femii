"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home"    },
  { label: "About",    href: "#about"   },
  { label: "Work", href: "#projects"},
  { label: "Stack",   href: "#skills"  },
  { label: "Contact",  href: "#contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Slightly increase background blur/opacity after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync active section with scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const matchingLink = navLinks.find((link) => link.href === `#${id}`);
            if (matchingLink) {
              setActive(matchingLink.label);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      {/* ── Floating pill ─────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center gap-0 rounded-full px-3 py-2.5 transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(var(--navbar-bg), 0.72)"
              : "rgba(var(--navbar-bg), 0.55)",
            border: "1px solid var(--line-strong)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.22), 0 0 0 1px var(--line)"
              : "0 4px 20px rgba(0,0,0,0.12)",
          }}
        >

          {/* ── Avatar ──────────────────────────────────────────────── */}
          <Link
            href="#"
            aria-label="Home"
            className="relative mr-3 flex-shrink-0"
            onClick={() => setActive("Home")}
          >
            <div
              className="relative h-8 w-8 overflow-hidden rounded-full"
              style={{ border: "1.5px solid var(--line-strong)" }}
            >
              <Image
                src="/photos/avatar.jpg"
                alt="Olorunfemi Jegede"
                fill
                className="object-cover object-top"
                sizes="32px"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

            </div>
          </Link>

          {/* ── Left divider ────────────────────────────────────────── */}
          <div
            className="mr-3 h-5 w-px flex-shrink-0"
            style={{ background: "var(--line-strong)" }}
          />

          {/* ── Nav links (desktop) ─────────────────────────────────── */}
          <nav className="hidden sm:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                style={{
                  color: active === link.label
                    ? "var(--fg-primary)"
                    : "var(--fg-muted)",
                }}
              >
                {link.label}

                {/* active dot indicator */}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                    style={{ background: "var(--fg-primary)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Right divider ───────────────────────────────────────── */}
          <div
            className="ml-3 h-5 w-px flex-shrink-0 hidden sm:block"
            style={{ background: "var(--line-strong)" }}
          />

          {/* ── Theme toggle ────────────────────────────────────────── */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "var(--pill-bg)",
              color: "var(--fg-muted)",
            }}
          >
            {mounted ? (
              isDark ? <Sun size={14} /> : <Moon size={14} />
            ) : (
              <span className="h-3.5 w-3.5" />
            )}
          </button>

          {/* ── Mobile hamburger ────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className="ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full sm:hidden transition-all duration-200"
            style={{
              background: "var(--pill-bg)",
              color: "var(--fg-muted)",
            }}
          >
            {mobileOpen ? <X size={14} /> : <Menu size={14} />}
          </button>

        </div>

        {/* ── Mobile dropdown ─────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl px-4 py-3"
              style={{
                background: "rgba(var(--navbar-bg), 0.82)",
                border: "1px solid var(--line-strong)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActive(link.label); setMobileOpen(false); }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150"
                  style={{
                    color: active === link.label ? "var(--fg-primary)" : "var(--fg-muted)",
                    background: active === link.label ? "var(--pill-bg)" : "transparent",
                  }}
                >
                  {active === link.label && (
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--fg-primary)" }}
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
