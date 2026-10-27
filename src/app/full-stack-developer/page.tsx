import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "Full Stack Developer for Hire";
const pageDescription =
  "Hire a freelance full stack developer with 10+ years of experience. React, Next.js, Node.js, TypeScript, and React Native for web and mobile products.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/full-stack-developer",
  },
};

export default function FullStackDeveloperPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Stack Web and Mobile Development",
    serviceType: "Full stack development",
    description: pageDescription,
    url: `${siteConfig.siteUrl}/full-stack-developer`,
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
        Specialist page
      </p>
      <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl">
        Full Stack Developer for Hire
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
        I am a freelance full stack developer with around 10 years of
        professional experience building complete products: frontend, backend,
        APIs, databases, and the mobile apps that sit on top of them. If you
        need to hire a full stack developer who can own a feature or an entire
        product end to end — and who treats your deadline as a commitment, not
        a suggestion — this page explains how I work.
      </p>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          My full stack toolkit
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>
            Frontend: React, Next.js, TypeScript, Tailwind CSS, responsive and
            accessible UI, server-side rendering, and SEO-friendly rendering
            strategies.
          </li>
          <li>
            Backend: Node.js, Express, REST APIs, WebSockets, Firebase,
            relational and NoSQL databases, authentication, and payments.
          </li>
          <li>
            Mobile: React Native and Expo for iOS and Android, sharing logic
            and types with the web codebase.
          </li>
          <li>
            Delivery: Git workflows, code review, CI/CD, Vercel and cloud
            deployments, monitoring, and analytics.
          </li>
          <li>
            AI-assisted development used responsibly — faster research,
            debugging, and delivery, with every output validated by my own
            engineering judgment.
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Why hire a freelance full stack developer?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          A single experienced engineer who understands the whole stack can
          move faster than a split team for most product work: there is no
          coordination overhead between frontend and backend, decisions are
          consistent across layers, and you pay for building instead of
          meetings. I work on a contract, part-time, or full-time basis with
          remote teams worldwide, and I am comfortable joining an existing
          codebase or starting one from scratch.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Over the last decade I have delivered products in fintech, insurance,
          e-commerce, healthcare staffing, and social networking — including
          payment SDKs, marketplace platforms, and apps serving hundreds of
          thousands of users. You can review the details in my{" "}
          <Link href="/#projects" className="font-semibold text-brand">
            project case studies
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Hire a Next.js developer who cares about results
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Much of my recent web work is in Next.js: marketing sites that score
          well on Core Web Vitals, dashboards, and full products with API
          routes and server components. This portfolio itself is a Next.js
          application I designed and built. If you need to hire a Next.js
          developer or a React developer for an ongoing product, I can usually
          start with a small, fixed-scope piece of work so you can judge the
          quality before committing further.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/#contact" className="text-sm font-semibold text-brand">
          Start a project
        </Link>
        <Link href="/senior-software-engineer" className="text-sm font-semibold text-brand">
          Senior software engineer page
        </Link>
        <Link href="/mobile-app-development-services" className="text-sm font-semibold text-brand">
          Mobile app development services
        </Link>
      </div>
    </main>
  );
}
