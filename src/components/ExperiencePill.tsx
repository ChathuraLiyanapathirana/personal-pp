"use client";

import { ExperienceType } from "@/types/appTypes";
import React from "react";
import HtmlRenderer from "./HtmlRenderer";
import { motion } from "framer-motion";

type ExperiencePillProps = ExperienceType & {
  stepIndex?: number;
};

const nestedContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const nestedItem = {
  hidden: { y: 14 },
  show: {
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const ExperiencePill = ({
  company,
  description,
  designation,
  duration,
  domain,
  product,
  nested,
  nestedItems,
  stepIndex,
}: ExperiencePillProps) => {
  const stepLabel =
    stepIndex !== undefined ? String(stepIndex).padStart(2, "0") : null;

  return (
    <motion.article
      className="relative pb-16 pt-2 pl-12 md:pl-16"
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute left-[0.75rem] top-8 z-[2] md:left-4" aria-hidden>
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-experience-pulse-ring rounded-full bg-brand/40 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-brand shadow-[0_0_12px_rgba(34,221,85,0.65)] dark:border-ink" />
        </span>
      </div>

      <div className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200/90 bg-white/90 shadow-lg shadow-zinc-900/[0.04] ring-1 ring-zinc-100/80 backdrop-blur-sm transition-all duration-500 hover:border-brand/35 hover:shadow-experience-glow dark:border-zinc-700/70 dark:bg-neutral-900/85 dark:shadow-black/40 dark:ring-zinc-800/60 dark:hover:border-brand/40">
        <div
          className="pointer-events-none absolute inset-0 bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-experience-shimmer"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(34,221,85,0.07) 50%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand/90 to-transparent opacity-90"
          aria-hidden
        />
        {stepLabel && (
          <span
            className="pointer-events-none absolute -right-2 top-4 select-none font-display text-[5.5rem] font-bold leading-none text-zinc-100/90 dark:text-white/[0.04] sm:text-[6.5rem]"
            aria-hidden
          >
            {stepLabel}
          </span>
        )}

        <div className="relative z-[1] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <time className="inline-flex items-center rounded-full border border-brand/25 bg-brand-surface px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-dim dark:border-brand/35 dark:bg-brand/10 dark:text-brand">
                {duration}
              </time>
              <h3 className="font-display mt-4 text-2xl font-bold leading-tight tracking-tight text-ink transition-colors group-hover:text-brand-dim dark:text-white dark:group-hover:text-brand sm:text-3xl">
                {company}
              </h3>
              <p className="mt-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100 sm:text-xl">
                {designation}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-lg bg-zinc-100/90 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-white/5 dark:text-zinc-300">
              <span className="font-semibold text-zinc-500 dark:text-zinc-500">Domain</span>{" "}
              {domain}
            </span>
            <span className="rounded-lg bg-zinc-100/90 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-white/5 dark:text-zinc-300">
              <span className="font-semibold text-zinc-500 dark:text-zinc-500">Products</span>{" "}
              {product}
            </span>
          </div>

          <div className="mt-6 border-t border-zinc-200/80 pt-6 text-sm leading-relaxed text-zinc-600 dark:border-zinc-700/80 dark:text-zinc-400">
            <HtmlRenderer htmlString={description} />
          </div>
        </div>
      </div>

      {nested && nestedItems && nestedItems.length > 0 && (
        <div className="relative mt-10 ml-0 sm:ml-2">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-px flex-1 bg-gradient-to-r from-brand/70 to-transparent"
              aria-hidden
            />
            <span className="shrink-0 font-display text-[0.7rem] font-bold uppercase tracking-[0.28em] text-brand-dim dark:text-brand">
              Client engagements
            </span>
            <span
              className="h-px flex-1 bg-gradient-to-l from-brand/40 to-transparent"
              aria-hidden
            />
          </div>
          <motion.ul
            className="grid gap-5"
            variants={nestedContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
          >
            {nestedItems.map((item, i) => (
              <motion.li
                key={`${item.company}-${i}`}
                variants={nestedItem}
                className="group/nested relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/80 p-5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg dark:border-zinc-700/70 dark:from-neutral-800/95 dark:to-neutral-900 dark:hover:border-brand/35"
              >
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-brand via-brand-dim to-transparent opacity-90"
                  aria-hidden
                />
                <div className="pl-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h4 className="text-lg font-bold leading-tight text-ink transition-colors group-hover/nested:text-brand-dim dark:text-white dark:group-hover/nested:text-brand">
                      {item.company}
                    </h4>
                    <time className="shrink-0 self-start rounded-full border border-brand/30 bg-brand-surface px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-dim dark:border-brand/40 dark:bg-brand/10 dark:text-brand">
                      {item.duration}
                    </time>
                  </div>
                  <p className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    {item.designation}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-md bg-zinc-100/80 px-2 py-1 text-zinc-600 dark:bg-white/5 dark:text-zinc-400">
                      <strong className="font-semibold text-zinc-500 dark:text-zinc-500">
                        Domain:
                      </strong>{" "}
                      {item.domain}
                    </span>
                    <span className="rounded-md bg-zinc-100/80 px-2 py-1 text-zinc-600 dark:bg-white/5 dark:text-zinc-400">
                      <strong className="font-semibold text-zinc-500 dark:text-zinc-500">
                        Focus:
                      </strong>{" "}
                      {item.product}
                    </span>
                  </div>
                  <div className="mt-4 border-t border-zinc-200/70 pt-4 text-sm leading-relaxed text-zinc-600 dark:border-zinc-700/70 dark:text-zinc-400">
                    <HtmlRenderer
                      htmlString={item.description}
                      className="font-normal [&_strong]:font-bold"
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </motion.article>
  );
};

export default ExperiencePill;
