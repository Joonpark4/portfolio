"use client";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <div
      className="centered relative flex cursor-pointer gap-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Moon
        className={`absolute left-2 top-2 h-[1.5rem] w-[1.5rem] ${
          isDark ? "" : "hidden"
        } text-gray-950`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Sun
        className={`absolute right-3 top-2 h-[1.5rem] w-[1.5rem] ${
          isDark ? "hidden" : ""
        }`}
      />
    </div>
  );
}
