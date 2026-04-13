import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { professionalProjects } from "@/constants/appConstant";
import { siteConfig } from "@/lib/seo";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

const getProject = (slug: string) =>
  professionalProjects.find((project) => project.slug === slug);

const ProjectBanner = ({
  image,
  alt,
  fadeDirection,
  priority = false,
}: {
  image: string;
  alt: string;
  fadeDirection: "top" | "bottom";
  priority?: boolean;
}) => {
  const maskImage =
    fadeDirection === "bottom"
      ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
      : "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)";

  return (
    <section className="mt-6 overflow-hidden rounded-3xl">
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      >
      <Image
        src={encodeURI(image)}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full scale-105 object-cover"
        priority={priority}
      />
      </div>
    </section>
  );
};

export function generateStaticParams() {
  return professionalProjects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Project`,
    description: `${project.title} project contribution by Chathura Buddhika. ${project.description}`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Project`,
      description: project.description,
      url: `${siteConfig.siteUrl}/projects/${project.slug}`,
      images: project.bannerImages?.length
        ? [
            {
              url: encodeURI(project.bannerImages[0]),
              alt: `${project.title} banner image`,
            },
          ]
        : undefined,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title} project contribution`,
    description: project.description,
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Chathura Buddhika",
      url: siteConfig.siteUrl,
    },
  };

  const topBanner = project.bannerImages?.[0];
  const bottomBanner = project.bannerImages?.[1];

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="transition hover:text-brand">
          Main portfolio
        </Link>
        <span>/</span>
        <Link href="/#project" className="transition hover:text-brand">
          Professional contributions
        </Link>
      </div>

      {topBanner ? (
        <ProjectBanner
          image={topBanner}
          alt={`${project.title} banner image`}
          fadeDirection="bottom"
          priority
        />
      ) : null}

      <div className="mt-6 rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-dim dark:text-brand">
          Professional contribution
        </p>
        <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
          By {project.by}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
          {project.overview}
        </p>
        {project.job ? (
          <p className="mt-5 inline-flex rounded-full border border-zinc-200/90 bg-zinc-50/90 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-700/90 dark:bg-zinc-800/70 dark:text-zinc-300">
            {project.job}
          </p>
        ) : null}
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 md:p-8">
          <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
            Contribution summary
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
            {project.description}
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
            {project.contributions?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 md:p-8">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
              Project outcomes
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
              {project.outcomes?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 md:p-8">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
              Stack focus
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200/90 bg-zinc-50/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-800/70 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {bottomBanner ? (
        <ProjectBanner
          image={bottomBanner}
          alt={`${project.title} secondary banner image`}
          fadeDirection="top"
        />
      ) : null}

      <section className="mt-8 rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 md:p-8">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
          Links
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-ink dark:hover:bg-white"
          >
            {project.linkLabel}
          </a>
          {project.link2 ? (
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-800 transition hover:-translate-y-0.5 hover:border-brand/45 hover:text-brand dark:border-zinc-700/80 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:text-brand"
            >
              {project.linkLabel2}
            </a>
          ) : null}
          <Link
            href="/#project"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-800 transition hover:-translate-y-0.5 hover:border-brand/45 hover:text-brand dark:border-zinc-700/80 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:text-brand"
          >
            Back to main site
          </Link>
        </div>
      </section>
    </main>
  );
}
