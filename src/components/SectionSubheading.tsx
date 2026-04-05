import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Secondary title under a main section heading (e.g. project groups). */
const SectionSubheading = ({ children, className }: Props) => {
  return (
    <h3
      className={cn(
        "font-display flex items-center gap-3 text-xl font-bold text-ink dark:text-white sm:text-2xl",
        className
      )}
    >
      <span
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_10px_rgba(34,221,85,0.75)]"
        aria-hidden
      />
      {children}
    </h3>
  );
};

export default SectionSubheading;
