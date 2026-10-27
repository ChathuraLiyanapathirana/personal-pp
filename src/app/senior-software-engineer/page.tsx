import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "Senior Software Engineer";
const pageDescription =
  "Senior software engineer with 10+ years of experience in React Native, Next.js, full-stack product delivery, architecture, and technical leadership.";

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
          A decade of shipping products
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Around 10 years of professional experience have taken me through
          fintech payment platforms, insurance products serving multiple
          markets, large e-commerce apps, healthcare staffing systems, and
          social products — sometimes as the lead developer, sometimes as the
          senior engineer brought in to stabilize delivery. That range is the
          point: a senior engineer earns the title by having seen enough
          systems succeed and fail to know which decisions matter early and
          which can safely wait.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          I move comfortably between mobile and web: React Native on one day,
          a Next.js dashboard or Node.js API the next. Teams that hire me get
          an engineer who can pick up whichever layer of the product is
          blocking progress, with minimal ramp-up time.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          What senior means to me
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>
            Estimates you can plan around, risks raised before they become
            schedule slips, and no surprises at demo time.
          </li>
          <li>
            Code that the next engineer can maintain, with reviews and
            standards that lift the team rather than gatekeep it.
          </li>
          <li>
            Judgment about trade-offs: knowing when the quick fix is right,
            when it is debt, and saying which one you are getting.
          </li>
          <li>
            Full accountability for outcomes — if I take the work, the work
            ships. See my{" "}
            <Link href="/#experience" className="font-semibold text-brand">
              experience timeline
            </Link>{" "}
            and{" "}
            <Link href="/#projects" className="font-semibold text-brand">
              project case studies
            </Link>{" "}
            for the record.
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="text-sm font-semibold text-brand">
          Back to portfolio
        </Link>
        <Link href="/react-native-engineer" className="text-sm font-semibold text-brand">
          React Native engineer page
        </Link>
        <Link href="/full-stack-developer" className="text-sm font-semibold text-brand">
          Full stack developer page
        </Link>
      </div>
    </main>
  );
}
