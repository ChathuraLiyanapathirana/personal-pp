import { useEffect, useState } from "react";

/** DOM order of section `id`s — must match anchor hrefs (e.g. #hello → hello). */
export const NAV_SECTION_IDS = [
  "hello",
  "experience",
  "project",
  "blog",
  "contact",
] as const;

/**
 * Tracks which section is currently “in view” for nav highlighting.
 * Uses scroll position relative to a line below the top of the viewport (header area).
 */
export function useActiveSection(
  sectionIds: readonly string[] = NAV_SECTION_IDS
): string {
  const [activeId, setActiveId] = useState<string>(() => sectionIds[0] ?? "hello");

  useEffect(() => {
    const activationLine = () => {
      // ~h-24 header + small buffer so labels switch as sections enter the main view
      return window.scrollY + 96;
    };

    const updateActive = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 2) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? sectionIds[0]);
        return;
      }

      const line = activationLine();
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) {
          current = id;
        }
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  return activeId;
}
