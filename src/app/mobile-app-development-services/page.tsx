import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "Mobile App Development Services";
const pageDescription =
  "Mobile app development services by a senior app developer for hire. React Native apps for iOS and Android, from MVP to App Store and Play Store release.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/mobile-app-development-services",
  },
};

export default function MobileAppDevelopmentServicesPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    serviceType: "Mobile app development",
    description: pageDescription,
    url: `${siteConfig.siteUrl}/mobile-app-development-services`,
    provider: personJsonLd,
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.siteUrl}/#contact`,
    },
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
        Mobile App Development Services
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
        Looking for an app developer for hire who can take your idea from a
        rough sketch to a published product? I provide end-to-end mobile app
        development services for startups, founders, and product teams. With
        10+ years of software engineering experience and a specialization in
        React Native, I build one codebase that ships as a native-quality app
        on both iOS and Android — which usually means lower cost and faster
        delivery than building two separate native apps.
      </p>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          What my app development service includes
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>
            Product scoping and honest time estimation, so you know what you
            are paying for before any code is written.
          </li>
          <li>
            UI implementation from your designs, or clean, usable screens built
            directly from your requirements when you have no designer.
          </li>
          <li>
            Cross-platform development with React Native, Expo, and TypeScript
            for iOS and Android from a single codebase.
          </li>
          <li>
            Backend and API work with Node.js, Firebase, databases, push
            notifications, payments, maps, and analytics integrations.
          </li>
          <li>
            App Store and Google Play submission, release management, CI/CD
            pipelines, and post-launch support.
          </li>
          <li>
            Rescue work on existing apps: upgrades, performance fixes, crash
            debugging, and taking over stalled or legacy codebases.
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Want to build an app for your business?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Most clients come to me with a question like &ldquo;who can build an
          app for me?&rdquo; rather than a technical specification — and that is
          fine. We start with a short call about what your business needs, I
          translate it into a scoped plan with milestones, and you get working
          builds you can install on your phone from the first weeks. I have
          shipped production apps in fintech, insurance, e-commerce,
          healthcare staffing, and social networking, several of them serving
          hundreds of thousands of users.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Because I work as a freelance developer rather than an agency, you
          talk directly to the engineer who writes the code. No account
          managers, no hand-offs, no surprises in the invoice — just reliable,
          committed delivery with clear communication at every step.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          MVP development for startups
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          If you are validating an idea, I build lean MVPs that are cheap to
          change: a focused feature set, analytics from day one, and an
          architecture that can grow into the full product instead of being
          thrown away. You can see examples of apps I have designed, built,
          and published — including my own products — in the{" "}
          <Link href="/#projects" className="font-semibold text-brand">
            projects section
          </Link>{" "}
          of this portfolio.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/#contact" className="text-sm font-semibold text-brand">
          Get a quote for your app
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
