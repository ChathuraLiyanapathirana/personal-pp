import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import PageMeshBackground from "@/components/PageMeshBackground";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LPCB Portfolio",
  description: "Liyana Pathiranage Chanthura Buddhika Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`portfolio-body ${firaCode.variable} font-sans antialiased bg-transparent text-ink dark:text-zinc-100`}
      >
        <PageMeshBackground />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('portfolio-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <ThemeToggle />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
