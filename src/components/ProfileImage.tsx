import React from "react";
import Image from "next/image";

const corner =
  "pointer-events-none absolute h-7 w-7 border-brand sm:h-8 sm:w-8";

const ProfileImage = () => {
  return (
    <div className="relative mx-auto flex flex-col items-center pb-10">
      <div
        className="profile-ring pointer-events-none absolute left-1/2 top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand/40 opacity-70 blur-[1px] sm:h-44 sm:w-44"
        aria-hidden
      />

      <div className="profile-float relative z-[1]">
        <div className="relative">
          <div className="absolute -inset-3 sm:-inset-4">
            <span
              className={`${corner} -left-px -top-px border-l-[3px] border-t-[3px]`}
              aria-hidden
            />
            <span
              className={`${corner} -right-px -top-px border-r-[3px] border-t-[3px]`}
              aria-hidden
            />
            <span
              className={`${corner} -bottom-px -left-px border-b-[3px] border-l-[3px]`}
              aria-hidden
            />
            <span
              className={`${corner} -bottom-px -right-px border-b-[3px] border-r-[3px]`}
              aria-hidden
            />
            <div
              className="profile-glow pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-brand/25 shadow-[0_0_24px_3px_rgba(34,221,85,0.12)]"
              aria-hidden
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="profile-scan pointer-events-none absolute inset-0 z-[1] opacity-[0.08]"
              aria-hidden
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,221,85,0.35) 2px, rgba(34,221,85,0.35) 3px)",
                backgroundSize: "100% 6px",
              }}
            />
            <picture>
              <source srcSet="/images/iam.webp" type="image/webp" />
              <source srcSet="/images/iam.png" type="image/png" />
              <Image
                src="/images/iam.png"
                width={320}
                height={200}
                className="my-image rounded-2xl"
                alt="Portrait of Chathura Buddhika"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </picture>
          </div>

          <div className="pointer-events-none absolute -bottom-7 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md border border-brand/35 bg-ink/92 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand shadow-[0_4px_0_0_rgba(34,221,85,0.4)] dark:bg-zinc-950/95">
            <span className="relative flex h-2 w-2">
              <span className="profile-status-dot absolute inline-flex h-full w-full rounded-full bg-brand opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_rgba(34,221,85,0.9)]" />
            </span>
            Ready
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
