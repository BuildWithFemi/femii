import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center space-y-6">
      <p className="font-display text-8xl font-bold" style={{ color: "var(--fg-ghost)" }}>
        404
      </p>
      <h2 className="text-2xl font-semibold" style={{ color: "var(--fg-primary)" }}>
        Page not found
      </h2>
      <p style={{ color: "var(--fg-muted)" }}>
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="animated-underline text-sm"
        style={{ color: "var(--fg-secondary)" }}
      >
        ← Back home
      </Link>
    </main>
  );
}
