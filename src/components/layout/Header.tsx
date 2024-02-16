"use client";
import DarkToggle from "../buttons/DarkToggle";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <header
      className={`z-50 flex h-[10vh] w-full justify-center px-10 shadow-md sm:hidden ${isDark && "shadow-border"}`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <b className="text-2xl font-black">{"Joon's Webpage"}</b>
        <DarkToggle />
      </div>
    </header>
  );
}
