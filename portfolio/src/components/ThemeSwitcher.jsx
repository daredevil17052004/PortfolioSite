"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(null); // Start with null to avoid mismatch

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('transition-colors', 'duration-300');
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  // Prevent rendering button before hydration
  if (!theme) return null;

  return (
    <div className="">

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 text-text rounded-md w-40"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>

  );
}
