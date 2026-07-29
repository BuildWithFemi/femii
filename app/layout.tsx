import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Background } from "@/components/background";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Olorunfemi Jegede — AI-Engineer",
    template: "%s | Olorunfemi Jegede",
  },
  description:
    "Portfolio of Olorunfemi Jegede — AI-engineer building ML piplines,and responsive full stack applications.",
  keywords: ["AI", "Engineer", "portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Olorunfemi Jegede" }],
  creator: "Olorunfemi Jegede",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Olorunfemi Jegede — AI Engineer",
    description:
      "Portfolio of Olorunfemi Jegede — AI-engineer building ML piplines,and responsive full stack applications.",
    siteName: "Olorunfemi Jegede",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olorunfemi Jegede — AI Engineer",
    description:
      "Portfolio of Olorunfemi Jegede — AI-engineer building ML piplines,and responsive full stack applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Grain / noise overlay */}
          <div className="noise-overlay" aria-hidden="true" />
          <Background />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
