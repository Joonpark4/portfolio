'use client';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function DarkToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <div
      className="relative flex gap-3 items-center justify-center cursor-pointer"
      onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Moon
        className={`absolute top-2 left-2 h-[1.5rem] w-[1.5rem] ${
          isDark ? '' : 'hidden'
        } text-gray-950`}
      />
      <Switch checked={isDark} onCheckedChange={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Sun
        className={`absolute top-2 right-3 h-[1.5rem] w-[1.5rem] ${
          isDark ? 'hidden' : ''
        }`}
      />
    </div>
  );
}
