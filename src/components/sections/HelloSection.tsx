import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope, faLocationDot, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
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
            {/* Location badge */}
            <div className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            Based in Sri Lanka 🇱🇰, love working remotely 🌏
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
              hands on experience delivering cutting edge solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-50 shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-ink dark:shadow-[4px_4px_0_0_#22dd55] dark:hover:bg-white"
              >
                View My Experience
                <FontAwesomeIcon icon={faArrowDown} className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-zinc-300 bg-white/80 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-700 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-brand/50 dark:hover:text-brand"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                Start a Conversation
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
          <FontAwesomeIcon icon={faArrowDown} className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default HelloSection;
