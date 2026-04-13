import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "Mobile Software Engineer";
const pageDescription =
  "Mobile software engineer portfolio for Chathura Buddhika, focused on React Native, iOS, Android, mobile architecture, performance optimization, and product delivery.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/mobile-software-engineer",
  },
};

export default function MobileSoftwareEngineerPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${pageTitle} | Chathura Buddhika`,
    description: pageDescription,
    url: `${siteConfig.siteUrl}/mobile-software-engineer`,
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
        Mobile Software Engineer
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
        I help teams build and scale mobile products with strong engineering
        foundations. My experience spans React Native, iOS and Android delivery,
        architecture, analytics, notifications, security minded implementation,
        and store release management.
      </p>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Mobile engineering strengths
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>Product focused mobile delivery for iOS and Android.</li>
          <li>Scalable codebases with TypeScript, React Native, and clean architecture.</li>
          <li>Performance optimization, debugging, and production monitoring.</li>
          <li>Push notifications, location features, analytics, and third party integrations.</li>
          <li>CI/CD, release workflows, and app store compliance support.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Fit for hiring teams
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          If you are hiring a mobile software engineer who can contribute across
          planning, implementation, performance, release management, and product
          delivery, this site reflects the scope of work I usually take on.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="text-sm font-semibold text-brand">
          Back to portfolio
        </Link>
        <Link href="/senior-software-engineer" className="text-sm font-semibold text-brand">
          Senior software engineer page
        </Link>
      </div>
    </main>
  );
}
