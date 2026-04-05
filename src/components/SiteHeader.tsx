import { cn } from "@/lib/utils";

const nav = [
  { href: "#hello", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

type SiteHeaderProps = {
  activeSection: string;
};

const SiteHeader = ({ activeSection }: SiteHeaderProps) => {
  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-[1000] hidden md:block"
      aria-label="Primary"
    >
      {/* Two layers: mixing `from-*` and `dark:from-*` on one node can lose in CSS order; toggle visibility instead */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-zinc-50/95 from-15% via-zinc-50/78 via-45% to-transparent backdrop-blur-md dark:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-24 bg-gradient-to-b from-ink/96 from-15% via-ink-muted/82 via-45% to-transparent backdrop-blur-md dark:block"
        aria-hidden
      />
      <div className="pointer-events-auto relative z-10 mx-auto flex h-24 max-w-6xl items-center justify-between px-6 pr-[4.5rem] lg:px-8 lg:pr-24">
        <a
          href="#hello"
          className="font-display text-sm font-semibold tracking-[0.22em] text-ink transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:text-zinc-50 dark:hover:text-brand dark:focus-visible:ring-offset-ink md:text-base"
        >
          LPCB
        </a>
        <nav className="flex items-center gap-1 lg:gap-2">
          {nav.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-ink md:text-sm md:tracking-[0.14em]",
                  isActive
                    ? "bg-black/[0.08] text-ink dark:bg-white/15 dark:text-brand"
                    : "text-zinc-700 hover:bg-black/[0.06] hover:text-ink dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-brand"
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
