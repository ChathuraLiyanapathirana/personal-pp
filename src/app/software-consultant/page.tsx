import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "Software Consultant";
const pageDescription =
  "Independent software consultant for custom software development, architecture reviews, technical audits, and delivery planning for web and mobile products.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/software-consultant",
  },
};

export default function SoftwareConsultantPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Consulting",
    serviceType: "Software consulting",
    description: pageDescription,
    url: `${siteConfig.siteUrl}/software-consultant`,
    provider: personJsonLd,
    areaServed: "Worldwide",
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-dim dark:text-brand">
        Service page
      </p>
      <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl">
        Software Consultant
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
        I work as an independent software consultant for founders, product
        owners, and engineering teams who need an experienced engineer to look
        at their system, their plan, or their codebase and tell them the
        truth. With 10+ years across mobile and full stack development, I help
        you make build decisions you will not regret a year later.
      </p>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Consulting services
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>
            Custom software development planning: turning a business idea or
            system requirement into a realistic scope, stack choice, timeline,
            and budget.
          </li>
          <li>
            Architecture and code reviews for React Native, React, Next.js,
            and Node.js codebases, with concrete, prioritized fixes.
          </li>
          <li>
            Technical audits before you acquire, invest in, or take over an
            existing product.
          </li>
          <li>
            Delivery rescue: diagnosing why a project is late, unstable, or
            over budget, and getting it back on track.
          </li>
          <li>
            Team support: mentoring developers, setting up code review and
            release processes, and establishing engineering standards.
          </li>
          <li>
            Honest time estimation — a skill I take seriously enough that
            clients often keep me on retainer just to sanity-check plans.
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Who hires me as a consultant
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Non-technical founders who need a trustworthy engineer before they
          spend money with an agency. Startups whose only mobile developer
          just left. Product teams whose app has grown slow, crashy, or
          impossible to release. Companies evaluating whether to rebuild or
          refactor. In each case the engagement starts the same way: a
          conversation, a look at what exists, and a short written assessment
          of where you actually stand.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Consulting can stay advisory or extend into hands-on contract
          development — I build as well as advise, which keeps my
          recommendations grounded in what is actually practical to implement.
          See my{" "}
          <Link href="/#experience" className="font-semibold text-brand">
            work experience
          </Link>{" "}
          and{" "}
          <Link href="/#projects" className="font-semibold text-brand">
            delivered projects
          </Link>{" "}
          for the track record behind the advice.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/#contact" className="text-sm font-semibold text-brand">
          Book a consultation
        </Link>
        <Link href="/full-stack-developer" className="text-sm font-semibold text-brand">
          Full stack developer page
        </Link>
        <Link href="/mobile-app-development-services" className="text-sm font-semibold text-brand">
          Mobile app development services
        </Link>
      </div>
    </main>
  );
}
