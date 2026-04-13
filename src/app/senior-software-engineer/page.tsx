import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "Senior Software Engineer";
const pageDescription =
  "Senior software engineer portfolio for Chathura Buddhika, covering React Native, Next.js, full-stack product delivery, architecture, mentoring, and high-impact engineering work.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/senior-software-engineer",
  },
};

export default function SeniorSoftwareEngineerPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${pageTitle} | Chathura Buddhika`,
    description: pageDescription,
    url: `${siteConfig.siteUrl}/senior-software-engineer`,
    about: personJsonLd,
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-dim dark:text-brand">
        Specialist page
      </p>
      <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl">
        Senior Software Engineer
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
        I work across product engineering, architecture, and delivery. My background
        combines React Native mobile engineering, modern web development with React
        and Next.js, API integration, debugging, release readiness, and mentoring
        support for product teams that need senior level execution.
      </p>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Senior-level contribution areas
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>Architecture decisions for mobile and web product development.</li>
          <li>Hands-on delivery of features, integrations, and production fixes.</li>
          <li>Performance tuning, debugging, and technical quality improvements.</li>
          <li>Collaboration with designers, founders, PMs, and engineering teams.</li>
          <li>Pragmatic leadership through mentoring, reviews, and delivery ownership.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Search intent fit
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          This page is intended for teams searching for a talented software engineer,
          senior software engineer, or product focused engineer who can move between
          mobile, web, and technical execution with minimal ramp up time.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="text-sm font-semibold text-brand">
          Back to portfolio
        </Link>
        <Link href="/react-native-engineer" className="text-sm font-semibold text-brand">
          React Native engineer page
        </Link>
      </div>
    </main>
  );
}
