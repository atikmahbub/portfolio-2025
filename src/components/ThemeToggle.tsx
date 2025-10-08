"use client";

import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import clsx from "clsx";

export default function ThemeToggle({
  variant = "ghost",
}: {
  variant?: "ghost" | "pill";
}) {
  const { theme, toggleTheme, isReady } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isReady) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className={clsx(
        "transition-colors duration-300",
        variant === "pill"
          ? "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/40 dark:hover:bg-white/10"
          : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
      )}
    >
      {variant === "pill" ? (
        <>
          {isDark ? (
            <>
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </>
          ) : (
            <>
              <MoonStar className="h-4 w-4" />
              <span>Dark</span>
            </>
          )}
        </>
      ) : isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <MoonStar className="h-4 w-4" />
      )}
    </button>
  );
}
