import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="grid min-h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="font-display mt-0 mb-4 text-9xl font-black text-brand/25 dark:text-brand/20">
          404
        </h1>

        <p className="font-display mb-4 text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-0 text-zinc-600 dark:text-zinc-400">We can't find that page.</p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full border border-ink/15 bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-white/20 dark:bg-zinc-100 dark:text-ink dark:shadow-[4px_4px_0_0_#22dd55] dark:hover:bg-white"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
