import React from "react";
import ProfileImage from "../ProfileImage";

const HelloSection = () => {
  return (
    <section
      id="hello"
      className="relative flex min-h-screen items-center justify-center py-20"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-8">
          {/* Profile Image - centered on mobile, left on desktop */}
          <div className="flex-shrink-0 lg:pt-4">
            <ProfileImage />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-medium text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Available for opportunities
            </div>

            {/* Main heading */}
            <h1 className="font-display mt-8 mb-2 text-4xl font-bold tracking-tight text-ink dark:text-zinc-50 sm:text-5xl md:text-6xl">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dim bg-clip-text text-transparent">
                Chathura
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-0 text-xl font-medium text-ink/80 dark:text-zinc-300 sm:text-2xl">
              Senior Software Engineer
            </p>

            {/* Description */}
            <p className="mt-0 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Passionate about crafting innovative software solutions that drive
              efficiency and elevate user experiences. With over 8 years of
              hands-on experience delivering cutting-edge solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-xl hover:shadow-ink/25 dark:bg-zinc-100 dark:text-ink dark:shadow-brand/20 dark:hover:bg-white"
              >
                View Experience
                <svg className="size-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all duration-200 hover:border-brand/40 hover:text-brand hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-brand/50 dark:hover:text-brand"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 lg:justify-start">
              <div className="text-center">
                <div className="text-xl font-bold text-ink dark:text-zinc-100 sm:text-2xl">8+</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 sm:text-xs">Years Experience</div>
              </div>
              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700 sm:h-8" />
              <div className="text-center">
                <div className="text-xl font-bold text-ink dark:text-zinc-100 sm:text-2xl">15+</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 sm:text-xs">Projects Delivered</div>
              </div>
              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700 sm:h-8" />
              <div className="text-center">
                <div className="text-xl font-bold text-ink dark:text-zinc-100 sm:text-2xl">12+</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 sm:text-xs">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 text-zinc-400 transition-colors hover:text-brand"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HelloSection;
