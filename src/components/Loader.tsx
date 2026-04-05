import React from "react";

const Loader = () => {
  return (
    <div className="mx-auto min-h-[40vh] max-w-7xl px-5 pt-2 md:px-8 lg:px-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h1 className="font-display mt-0 mb-0 text-4xl font-extrabold text-ink dark:text-white sm:text-4xl">
          Full blog site
        </h1>
        <a
          href="https://appcitor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display mb-4 mt-0 text-2xl font-bold text-brand sm:text-3xl"
        >
          appcitor.com
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {Array.from(String(1234)).map((item, index) => {
          return (
            <div className="rounded-2xl" key={index}>
              <article className="h-full overflow-hidden rounded-2xl border border-ink/10 bg-zinc-100/80 animate-pulse dark:border-white/10 dark:bg-zinc-800/50">
                <div>
                  <div className="h-56 w-full bg-zinc-300 dark:bg-zinc-700" />
                </div>

                <div className="h-full bg-white p-4 dark:bg-zinc-900 sm:p-6">
                  <span className="block h-3 bg-zinc-200 dark:bg-zinc-700"> </span>

                  <div className="mt-3 h-5 bg-zinc-200 dark:bg-zinc-700" />

                  <p className="mt-2 h-10 bg-zinc-200 dark:bg-zinc-700" />
                  <div className="mt-4 h-2 w-24 bg-zinc-200 dark:bg-zinc-700" />
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loader;
