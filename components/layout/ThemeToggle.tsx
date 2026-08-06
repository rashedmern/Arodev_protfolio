"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:border-[#2563EB]/40
        hover:bg-white/10
      "
    >
      {isDark ? (
        <Sun
          size={18}
          strokeWidth={2.2}
          className="text-[#2563EB] transition-all duration-300"
        />
      ) : (
        <Moon
          size={18}
          strokeWidth={2.2}
          className="text-[#2563EB] transition-all duration-300"
        />
      )}
    </button>
  );
}