import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    if (shouldDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      type="button"
      data-testid="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg group-hover:scale-110 transition-all duration-300">
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-400 animate-spin-slow" strokeWidth={2.2} />
        ) : (
          <Moon className="w-6 h-6 text-slate-800" strokeWidth={2.2} />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
