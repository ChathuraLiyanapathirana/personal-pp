import type { Metadata } from "next";
import Link from "next/link";
import { personJsonLd, siteConfig } from "@/lib/seo";

const pageTitle = "React Native Engineer";
const pageDescription =
  "React Native engineer portfolio for Chathura Buddhika, covering mobile architecture, performance optimization, App Store and Play Store delivery, native modules, and scalable product engineering.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/react-native-engineer",
  },
};

export default function ReactNativeEngineerPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${pageTitle} | Chathura Buddhika`,
    description: pageDescription,
    url: `${siteConfig.siteUrl}/react-native-engineer`,
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
        React Native Engineer
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
        I design, build, optimize, and ship React Native applications for iOS and
        Android. My work covers architecture, reusable components, performance
        tuning, native integrations, release engineering, analytics, debugging,
        and long term maintainability for production mobile products.
      </p>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          What I do as a React Native engineer
        </h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          <li>Build cross platform mobile apps with React Native and TypeScript.</li>
          <li>Improve performance, startup time, stability, and release readiness.</li>
          <li>Work with Expo or bare React Native based on product needs.</li>
          <li>Integrate native modules, Firebase, analytics, notifications, and mapping APIs.</li>
          <li>Support App Store and Play Store release workflows and CI/CD pipelines.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Why teams hire me
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          Teams usually bring me in when they need a senior React Native developer
          who can own delivery, improve architecture, unblock difficult mobile
          issues, and keep product quality high without slowing down execution.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="text-sm font-semibold text-brand">
          Back to portfolio
        </Link>
        <Link href="/mobile-software-engineer" className="text-sm font-semibold text-brand">
          Mobile software engineer page
        </Link>
      </div>
    </main>
  );
}
