"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center rounded-md px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      <span className="inline-block">
        <Sun className="h-4 w-4 text-neutral-700 transition-all duration-300 dark:hidden dark:scale-0 dark:rotate-90 dark:text-secondary" />
        <Moon className="hidden h-4 w-4 text-neutral-400 transition-all duration-300 dark:inline-block dark:scale-100 dark:rotate-0" />
      </span>
    </button>
  )
}
