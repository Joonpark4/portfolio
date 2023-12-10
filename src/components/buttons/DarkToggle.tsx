"use client";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className="flex gap-3 items-center cursor-pointer"
      onClick={() => {
        setIsDark(!isDark);
      }}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      <Switch
        checked={isDark}
        onCheckedChange={() => {
          setIsDark(!isDark);
        }}
      />
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
    </div>
  );
}
