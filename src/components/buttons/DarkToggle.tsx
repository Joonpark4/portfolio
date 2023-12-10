"use client";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(!isDark ? "dark" : "light");
  };

  return (
    <div
      className="flex gap-3 items-center cursor-pointer"
      onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem]" />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
      />
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </div>
  );
}