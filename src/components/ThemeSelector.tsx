"use client";

import { useState, useEffect } from "react";
import { Sun, Palette, Moon } from "lucide-react";

export type Theme = "light" | "sketch" | "dark";

export function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>("sketch");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border-2 border-[#6B9B9E]">
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-3 rounded-full transition-all ${
          theme === "light"
            ? "bg-[#6B9B9E] text-white"
            : "bg-white text-[#6B9B9E] hover:bg-gray-100"
        }`}
        title="Modo Claro"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => handleThemeChange("sketch")}
        className={`p-3 rounded-full transition-all ${
          theme === "sketch"
            ? "bg-[#6B9B9E] text-white"
            : "bg-white text-[#6B9B9E] hover:bg-gray-100"
        }`}
        title="Modo Sketch (Original)"
      >
        <Palette size={20} />
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-3 rounded-full transition-all ${
          theme === "dark"
            ? "bg-[#6B9B9E] text-white"
            : "bg-white text-[#6B9B9E] hover:bg-gray-100"
        }`}
        title="Modo Oscuro"
      >
        <Moon size={20} />
      </button>
    </div>
  );
}
