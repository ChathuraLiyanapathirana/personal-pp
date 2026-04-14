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
  children,
  className,
  imageClassName,
  priority = false,
}: {
  image: string;
  alt: string;
  fadeDirection: "top" | "bottom";
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) => {
  const overlayClass =
    fadeDirection === "bottom"
      ? "bg-gradient-to-t from-white/92 via-white/52 to-white/10 dark:from-black/90 dark:via-black/55 dark:to-black/10"
      : "bg-gradient-to-b from-white/88 via-white/40 to-white/10 dark:from-black/85 dark:via-black/45 dark:to-black/10";
  const imageMask =
    fadeDirection === "bottom"
      ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.72) 72%, rgba(0,0,0,0.18) 87%, rgba(0,0,0,0) 100%)"
      : "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 84%, rgba(0,0,0,0.72) 92%, rgba(0,0,0,0.18) 97%, rgba(0,0,0,0) 100%)";
  const blurMask =
    fadeDirection === "bottom"
      ? "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0) 100%)"
      : "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0) 100%)";
  const blurLayerClass =
    fadeDirection === "bottom"
      ? "absolute inset-x-0 bottom-0 h-[46%] bg-white/25 backdrop-blur-md dark:bg-black/20"
      : "absolute inset-x-0 top-0 h-[46%] bg-white/25 backdrop-blur-md dark:bg-black/20";
  const fadeLayerClass =
    fadeDirection === "bottom"
      ? "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/100 via-white/24 to-transparent dark:from-black/75 dark:via-black/30"
      : "absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/100 via-white/24 to-transparent dark:from-black/75 dark:via-black/30";

  return (
    <section className={`mt-0 overflow-hidden ${className ?? ""}`}>
      <div className="relative min-h-[32rem] overflow-hidden sm:min-h-[30rem] lg:min-h-[38rem]">
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: imageMask,
            maskImage: imageMask,
          }}
        >
          <Image
            src={encodeURI(image)}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
            className={`scale-105 object-cover ${imageClassName ?? ""}`}
            priority={priority}
          />
          <div className={`absolute inset-0 ${overlayClass}`} />
          <div
            className={blurLayerClass}
            style={{
              WebkitMaskImage: blurMask,
              maskImage: blurMask,
            }}
          />
          <div className={fadeLayerClass} />
        </div>
        {children ? (
          <div className="relative z-10 px-6 pb-6 pt-40 sm:absolute sm:inset-x-0 sm:bottom-0 sm:top-1/2 sm:px-8 sm:pb-8 sm:pt-0 lg:px-10 lg:pb-10">
            {children}
          </div>
        ) : null}
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

  const projectDescription = project.detailDescription ?? project.description;

  return {
    title: `${project.title} Project`,
    description: `${project.title} project contribution by Chathura Buddhika. ${projectDescription}`,
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

  const topBanner = project.bannerImages?.[0];
  const bottomBanner = project.bannerImages?.[1];
  const panelClassName =
    "rounded-3xl bg-white/82 p-6 backdrop-blur-sm dark:bg-zinc-900/82 md:p-8";

  return (
    <main className="mx-auto max-w-6xl md:px-8">
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

      {topBanner ? (
        <ProjectBanner
          image={topBanner}
          alt={`${project.title} banner image`}
          fadeDirection="bottom"
          priority
        >
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-dim drop-shadow-[0_2px_12px_rgba(255,255,255,0.55)] dark:text-brand dark:drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
              Professional contribution
            </p>
            <h1 className="font-display text-left mt-4 text-4xl font-extrabold tracking-tight text-ink drop-shadow-[0_10px_24px_rgba(255,255,255,0.72)] dark:text-white dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-zinc-700/90 drop-shadow-[0_4px_18px_rgba(255,255,255,0.66)] dark:text-zinc-200/90 dark:drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)]">
              By {project.by}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-800/95 drop-shadow-[0_8px_24px_rgba(255,255,255,0.78)] dark:text-zinc-100/95 dark:drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)] md:text-lg">
              {project.overview}
            </p>
            {project.job ? (
              <p className="mt-5 inline-flex rounded-full border border-white/70 bg-white/52 px-4 py-2 text-sm text-zinc-800 shadow-[0_10px_25px_-18px_rgba(255,255,255,0.95)] backdrop-blur-sm dark:border-white/20 dark:bg-black/30 dark:text-zinc-100 dark:shadow-none">
                {project.job}
              </p>
            ) : null}
          </div>
        </ProjectBanner>
      ) : null}

      <section className="relative z-10 mt-8 pb-6 px-5 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] md:px-0">
        <div
          className={`${panelClassName} relative lg:after:absolute lg:after:-right-3 lg:after:bottom-6 lg:after:top-6 lg:after:max-w-xs lg:after:bg-ink/10 lg:after:content-[''] dark:lg:after:bg-white/10`}
        >
          <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
            Contribution summary
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
            {projectDescription}
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
            {project.contributions?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="relative space-y-6 lg:before:absolute lg:before:-left-3 lg:before:bottom-6 lg:before:top-6 lg:before:w-px lg:before:bg-ink/10 lg:before:content-[''] dark:lg:before:bg-white/10">
          <div className={panelClassName}>
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
              Project outcomes
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
              {project.outcomes?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            className={`${panelClassName} relative before:absolute before:-top-3 before:left-6 before:right-6 before:h-px before:bg-ink/10 before:content-[''] dark:before:bg-white/10 md:before:left-8 md:before:right-8`}
          >
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
          <div
            className={`${panelClassName} relative before:absolute before:-top-3 before:left-6 before:right-6 before:h-px before:bg-ink/10 before:content-[''] dark:before:bg-white/10 md:before:left-8 md:before:right-8`}
          >
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
            </div>
          </div>
        </div>
      </section>

      {bottomBanner ? (
        <ProjectBanner
          image={bottomBanner}
          alt={`${project.title} secondary banner image`}
          fadeDirection="top"
          className="-mt-16 md:-mt-20"
          imageClassName="scale-100 object-left-top sm:scale-105 sm:object-center"
        />
      ) : null}
    </main>
  );
}
