import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { professionalProjects, personalProjects } from "@/constants/appConstant";
import ProjectHeroBackdrop from "@/components/ProjectHeroBackdrop";
import { siteConfig } from "@/lib/seo";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

const allProjects = [...professionalProjects, ...personalProjects];

const getProject = (slug: string) =>
  allProjects.find((project) => project.slug === slug);

const EditorialSection = ({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) => (
  <section className="grid gap-6 border-t border-ink/10 py-12 dark:border-white/10 md:grid-cols-[0.3fr_0.7fr] md:gap-10 md:py-16">
    <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
      <span className="text-brand-dim dark:text-brand">{index}</span>
      <span aria-hidden> — </span>
      {label}
    </p>
    <div className="min-w-0">{children}</div>
  </section>
);

const EditorialList = ({ items }: { items: string[] }) => (
  <ul className="divide-y divide-ink/10 dark:divide-white/10">
    {items.map((item) => (
      <li
        key={item}
        className="py-4 text-sm leading-relaxed text-zinc-600 first:pt-0 last:pb-0 dark:text-zinc-300 md:text-base"
      >
        {item}
      </li>
    ))}
  </ul>
);

const EditorialLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-brand hover:text-brand-dim dark:border-white/25 dark:text-white dark:hover:border-brand dark:hover:text-brand"
  >
    {label}
    <span
      aria-hidden
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      &#8599;
    </span>
  </a>
);

export function generateStaticParams() {
  return allProjects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {};
  }

  const projectDescription = project.detailDescription ?? project.description;
  const metaDescription = `${project.title} project contribution by Chathura Buddhika. ${projectDescription}`;

  return {
    title: `${project.title} Project`,
    description:
      metaDescription.length > 160
        ? `${metaDescription.slice(0, 157).trimEnd()}...`
        : metaDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Project`,
      description: projectDescription,
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

  const projectDescription = project.detailDescription ?? project.description;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title} project contribution`,
    description: projectDescription,
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Chathura Buddhika",
      url: siteConfig.siteUrl,
    },
  };

  const bannerImages = project.bannerImages ?? [];

  return (
    <main className="relative mx-auto max-w-6xl px-5 pb-24 md:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <Link
        href="/#project"
        className="theme-toggle-button theme-toggle-button--fixed-left"
        aria-label="Back to professional contributions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 shrink-0"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M15.78 4.22a.75.75 0 0 1 0 1.06L9.06 12l6.72 6.72a.75.75 0 1 1 -1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <header className="relative pt-24 md:pt-32">
        <ProjectHeroBackdrop images={bannerImages} />

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            <li>
              <Link
                href="/#project"
                className="transition-colors hover:text-brand-dim dark:hover:text-brand"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden className="text-zinc-300 dark:text-zinc-700">
              /
            </li>
            <li className="text-zinc-500 dark:text-zinc-400">{project.title}</li>
          </ol>
        </nav>

        <dl className="mt-14 space-y-1.5 font-display text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap gap-x-2">
            <dt className="lowercase text-zinc-400 dark:text-zinc-500">
              client:
            </dt>
            <dd>{project.by}</dd>
          </div>
          {project.job ? (
            <div className="flex flex-wrap gap-x-2">
              <dt className="lowercase text-zinc-400 dark:text-zinc-500">
                role:
              </dt>
              <dd>{project.job}</dd>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-x-2">
            <dt className="lowercase text-zinc-400 dark:text-zinc-500">
              engineering:
            </dt>
            <dd>Chathura Buddhika</dd>
          </div>
        </dl>

        <div className="mt-10 flex items-center gap-5" aria-hidden>
          <span className="h-px w-full max-w-sm bg-ink/15 dark:bg-white/15" />
          <span className="shrink-0 font-display text-[11px] lowercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            {project.slug}
          </span>
        </div>

        <h1 className="font-display mt-8 text-left text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink dark:text-white sm:text-7xl lg:text-8xl">
          {project.title}
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[0.6fr_0.4fr] md:gap-16">
          <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
            {project.overview}
          </p>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <EditorialLink href={project.link} label={project.linkLabel} />
            {project.link2 && project.linkLabel2 ? (
              <EditorialLink href={project.link2} label={project.linkLabel2} />
            ) : null}
          </div>
        </div>
      </header>

      <div className="mt-14 md:mt-20">
        <EditorialSection index="01" label="Contribution">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
            {projectDescription}
          </p>
          {project.contributions?.length ? (
            <div className="mt-8">
              <EditorialList items={project.contributions} />
            </div>
          ) : null}
        </EditorialSection>

        {project.outcomes?.length ? (
          <EditorialSection index="02" label="Outcomes">
            <EditorialList items={project.outcomes} />
          </EditorialSection>
        ) : null}

        {project.stack?.length ? (
          <EditorialSection index="03" label="Stack">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 font-display text-sm uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-300"
                >
                  <span
                    aria-hidden
                    className="h-1 w-1 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </EditorialSection>
        ) : null}
      </div>
    </main>
  );
}
