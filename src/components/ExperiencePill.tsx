import { ExperienceType } from "@/types/appTypes";
import React from "react";
import HtmlRenderer from "./HtmlRenderer";

const ExperiencePill = ({
  company,
  description,
  designation,
  duration,
  domain,
  product,
  nested,
  nestedItems,
}: ExperienceType) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-extrabold text-2xl text-slate-900 dark:text-white mb-1 sm:mb-0">
        {company}
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 dark:before:bg-slate-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-lime-600 after:border-4 after:box-content after:border-slate-50 dark:after:border-neutral-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
          {duration}
        </time>
        <div className="text-xl font-bold text-slate-900 dark:text-white">{designation}</div>
      </div>
      <div className="text-slate-500 dark:text-slate-400">
        <strong>Domain:</strong> {domain}
        <br></br>
        <strong>Products:</strong> {product}
        <br></br>
        <HtmlRenderer htmlString={description} />
      </div>

      {nested && nestedItems && nestedItems.length > 0 && (
        <div className="mt-8 ml-0 sm:-ml-4 space-y-4">
          <div className="flex items-center gap-2">
            <span
              className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-lime-500/80 to-transparent"
              aria-hidden
            />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-lime-700 dark:text-lime-400">
              Client engagements
            </span>
            <span
              className="h-px flex-1 bg-gradient-to-l from-lime-500/30 to-transparent"
              aria-hidden
            />
          </div>
          <ul className="grid gap-4 sm:gap-5">
            {nestedItems.map((item, i) => (
              <li
                key={`${item.company}-${i}`}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm ring-1 ring-slate-100/80 dark:border-slate-700/80 dark:from-neutral-800/90 dark:to-neutral-900/95 dark:ring-slate-800/60"
              >
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-lime-500 via-lime-400 to-emerald-600"
                  aria-hidden
                />
                <div className="pl-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
                      {item.company}
                    </h3>
                    <time className="shrink-0 self-start rounded-full border border-lime-200/80 bg-lime-50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-lime-800 dark:border-lime-700/50 dark:bg-lime-950/40 dark:text-lime-300">
                      {item.duration}
                    </time>
                  </div>
                  <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                    {item.designation}
                  </p>
                  <div className="my-6 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <p className="mb-3 text-base">
                      <strong className="text-slate-700 dark:text-slate-300">Domain:</strong>{" "}
                      <span className="font-normal">{item.domain}</span>
                    </p>
                    <p className="text-base">
                      <strong className="text-slate-700 dark:text-slate-300">Focus:</strong>{" "}
                      <span className="font-normal">{item.product}</span>
                    </p>
                  </div>
                  <div className="mt-4 border-t border-slate-200/80 pt-4 text-sm leading-relaxed text-slate-500 dark:border-slate-700/80 dark:text-slate-400">
                    <HtmlRenderer
                      htmlString={item.description}
                      className="font-normal [&_strong]:font-bold"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperiencePill;
