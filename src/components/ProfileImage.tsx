"use client";

import React from "react";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Outer glow effect */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand/30 via-brand/5 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="profile-float relative z-[1]">
        <div className="relative">
          {/* Elegant border frame */}
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/40 via-brand/20 to-transparent p-[2px]">
            <div className="h-full w-full rounded-[2rem] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm" />
          </div>

          {/* Main image container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink/10 dark:shadow-black/30">
            {/* Subtle overlay gradient */}
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/10 via-transparent to-white/10 dark:from-black/20 dark:to-white/5"
              aria-hidden
            />
            
            <picture>
              <source srcSet="/images/iam.webp" type="image/webp" />
              <source srcSet="/images/iam.png" type="image/png" />
              <Image
                src="/images/iam.png"
                width={340}
                height={220}
                className="rounded-3xl object-cover"
                alt="Portrait of Chathura Buddhika"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </picture>
          </div>

          {/* Status badge - more elegant */}
          <div className="absolute -bottom-4 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-brand/30 bg-white/95 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-lg backdrop-blur-sm dark:border-brand/40 dark:bg-zinc-900/95 dark:text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_8px_rgba(34,221,85,0.6)]" />
            </span>
            <span className="text-brand">Ready to collaborate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
