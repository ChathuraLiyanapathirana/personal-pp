import React from "react";

/** Full-viewport mesh + grid + glow orbs, fixed behind all content (single place, no per-section repeat). */
export default function PageMeshBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="relative h-full min-h-full w-full">
        <div className="pointer-events-none absolute inset-0 bg-hero-mesh-light opacity-90 dark:bg-hero-mesh-dark dark:opacity-100" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.22]"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 221, 85, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 221, 85, 0.07) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl dark:bg-brand/15" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand/5 blur-3xl dark:bg-brand/10" />
      </div>
    </div>
  );
}
