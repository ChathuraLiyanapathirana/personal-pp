import React from "react";
import ProfileImage from "../ProfileImage";

const HelloSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="hello">
      <section className="relative text-white">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32 lg:px-10">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <ProfileImage />
            <h1 className="font-display mt-10 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink dark:text-zinc-50 xs:text-5xl md:text-6xl md:leading-[1.08] lg:text-7xl">
              <span className="block">
                <span className="text-ink dark:text-zinc-50">Hello, I&apos;m </span>
                <span className="bg-gradient-to-r from-brand to-brand-dim bg-clip-text text-transparent">
                  Chathura.
                </span>
              </span>
              <span className="mt-4 block text-3xl font-semibold tracking-tight text-ink/90 dark:text-zinc-200 md:text-4xl lg:text-5xl">
                Explore my portfolio and discover my work.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg md:leading-relaxed">
              Passionate about crafting innovative software solutions that drive
              efficiency and elevate user experiences. With over 8 years of
              hands on experience in the software development industry, I bring
              a wealth of expertise to deliver cutting-edge solutions that
              seamlessly blend technology and user needs.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-50 shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-ink dark:shadow-[4px_4px_0_0_#22dd55] dark:hover:bg-white"
              >
                View experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink backdrop-blur transition hover:border-brand/40 hover:text-brand dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-brand/50 dark:hover:text-brand"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelloSection;
