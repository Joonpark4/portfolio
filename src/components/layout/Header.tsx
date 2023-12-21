'use client';
import Link from 'next/link';
import Image from 'next/image';
import DarkToggle from '../buttons/DarkToggle';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Header() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <header className={`z-50 w-full flex sm:hidden justify-center h-[10vh] px-10 border ${isDark && 'shadow-border'}`}>
      <div className="w-full max-w-7xl flex justify-between items-center">
        Joon Park
        <DarkToggle />
      </div>
    </header>
  );
}
