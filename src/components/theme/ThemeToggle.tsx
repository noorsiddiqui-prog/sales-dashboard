'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi2';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
      className="
        outline-none
        border-0
        cursor-pointer
        rounded-lg border-none bg-[var(--icon-bg-color)] cursor-pointer hover:bg-[var(--hover-icon-color-dark)] w-8 h-8 flex items-center justify-center
      "
    >
      <span>
        {isDark ? (
          <HiSun style={{ color: "var(--toggle-color, #ffffff)", fontSize: "20px" }} />
        ) : (
          <HiMoon style={{ color: "var(--toggle-color, #facc15)", fontSize: "20px" }} />
        )}
      </span>
    </button>
  );
}
