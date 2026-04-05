"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const corner =
  "pointer-events-none absolute h-7 w-7 border-brand sm:h-8 sm:w-8";

const ProfileImage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex flex-col items-center pb-10">
      {/* Spawn ring — one-shot */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand/70 sm:h-44 sm:w-44"
        aria-hidden
        initial={{ scale: 0.35, opacity: 0.85 }}
        animate={{ scale: 2.15, opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="relative z-[1]"
        initial={{ opacity: 0, scale: 0.78, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
          mass: 0.7,
        }}
      >
        <motion.div
          className="relative"
          animate={reduceMotion ? {} : { y: [0, -7, 0] }}
          transition={
            reduceMotion
              ? {}
              : {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          {/* HUD-style frame */}
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
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-brand/25"
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : {
                      boxShadow: [
                        "0 0 0 0 rgba(34, 221, 85, 0.25)",
                        "0 0 24px 3px rgba(34, 221, 85, 0.2)",
                        "0 0 0 0 rgba(34, 221, 85, 0.25)",
                      ],
                    }
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-[1] opacity-[0.1]"
                aria-hidden
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,221,85,0.35) 2px, rgba(34,221,85,0.35) 3px)",
                  backgroundSize: "100% 6px",
                }}
              />
            )}
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

          <motion.div
            className="pointer-events-none absolute -bottom-7 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md border border-brand/35 bg-ink/92 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand shadow-[0_4px_0_0_rgba(34,221,85,0.4)] dark:bg-zinc-950/95"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 18 }}
          >
            <span className="relative flex h-2 w-2">
              {!reduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_rgba(34,221,85,0.9)]" />
            </span>
            Ready
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
