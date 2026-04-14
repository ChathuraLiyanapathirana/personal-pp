import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectType } from "@/types/appTypes";

const toColorToHex: Record<string, string> = {
  "to-lime-600": "#65a30d",
  "to-red-500": "#ef4444",
  "to-blue-600": "#2563eb",
  "to-sky-600": "#0284c7",
  "to-purple-600": "#9333ea",
  "to-green-600": "#16a34a",
  "to-red-600": "#dc2626",
  "to-yellow-600": "#ca8a04",
  "to-gray-300": "#d1d5db",
};

const ProjectCard = ({
  slug,
  title,
  by,
  description,
  link,
  linkLabel,
  link2,
  linkLabel2,
  job,
  toColor,
}: ProjectType) => {
  const accent = toColorToHex[toColor] ?? "#22dd55";
  const detailHref = slug ? `/projects/${slug}` : null;

  return (
    <article
      className="group relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-gradient-to-br from-white via-white to-zinc-100/50 shadow-[0_5px_0_0_var(--accent),0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_12px_0_0_var(--accent),0_28px_56px_-16px_rgba(0,0,0,0.18),0_0_0_1px_rgba(34,221,85,0.12)] focus-within:outline-none focus-within:ring-2 focus-within:ring-brand/45 dark:border-white/[0.08] dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 dark:shadow-[0_5px_0_0_var(--accent),0_12px_40px_-12px_rgba(0,0,0,0.5)] dark:hover:border-brand/35 dark:hover:shadow-[0_12px_0_0_var(--accent),0_32px_64px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(34,221,85,0.15)]"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-[0.14] blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.28]"
        style={{ background: accent }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-90"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
        }}
      />

      <div className="relative flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        {detailHref ? (
          <Link
            href={detailHref}
            aria-label={`Open ${title} project page`}
            title={`Open ${title} project page`}
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/45 dark:border-zinc-700/90 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:border-brand/50 dark:hover:text-brand"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
          </Link>
        ) : null}
        <div className="shrink-0">
          <h3 className="font-display pr-14 text-lg font-bold leading-snug tracking-tight text-ink dark:text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-zinc-50/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:border-zinc-700/90 dark:bg-zinc-800/60 dark:text-zinc-400">
            <span
              className="h-1 w-1 shrink-0 rounded-full opacity-90"
              style={{ backgroundColor: accent }}
            />
            <span className="font-normal normal-case tracking-normal text-zinc-400 dark:text-zinc-500">
              By
            </span>{" "}
            {by}
          </p>
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col gap-3 border-t border-zinc-200/60 pt-4 dark:border-zinc-700/60">
          <p className="text-pretty break-words text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
          {job ? (
            <p className="rounded-lg border border-dashed border-zinc-200/90 bg-zinc-50/50 px-3 py-2 text-xs leading-snug text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-800/40 dark:text-zinc-400">
              {job}
            </p>
          ) : null}
        </div>

        <dl className="mt-6 shrink-0">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            References
          </dt>
          <dd className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-2 sm:gap-y-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition-all duration-300 hover:border-brand/45 hover:bg-brand-surface hover:text-brand hover:shadow-[0_4px_12px_-4px_rgba(34,221,85,0.35)] dark:border-zinc-600/80 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
            >
              {linkLabel}
            </a>
            {link2 ? (
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition-all duration-300 hover:border-brand/45 hover:bg-brand-surface hover:text-brand hover:shadow-[0_4px_12px_-4px_rgba(34,221,85,0.35)] dark:border-zinc-600/80 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
              >
                {linkLabel2}
              </a>
            ) : null}
          </dd>
        </dl>
      </div>
    </article>
  );
};

export default ProjectCard;
