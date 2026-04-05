"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const THEME_KEY = "portfolio-theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem(THEME_KEY, theme);
}

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

const iconTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1] as const,
};

function ThemeToggleIcons({ theme }: { theme: "light" | "dark" }) {
  const showMoon = theme === "light";
  return (
    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden
        initial={false}
        animate={{
          opacity: showMoon ? 1 : 0,
          scale: showMoon ? 1 : 0.65,
          rotate: showMoon ? 0 : 28,
        }}
        transition={iconTransition}
        style={{ pointerEvents: showMoon ? "auto" : "none" }}
      >
        <MoonIcon />
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden
        initial={false}
        animate={{
          opacity: showMoon ? 0 : 1,
          scale: showMoon ? 0.65 : 1,
          rotate: showMoon ? -28 : 0,
        }}
        transition={iconTransition}
        style={{ pointerEvents: showMoon ? "none" : "auto" }}
      >
        <SunIcon />
      </motion.span>
    </span>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <button
        className="theme-toggle-button shadow-md"
        aria-label="Toggle theme"
        type="button"
      >
        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <MoonIcon />
        </span>
      </button>
    );
  }

  return (
    <button
      className="theme-toggle-button shadow-md"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      type="button"
    >
      <ThemeToggleIcons theme={theme} />
    </button>
  );
}
