"use client";
import Image from "next/image";
import ReactPic from "@/../public/img/react.svg";
import NextPic from "@/../public/img/nextdotjs.svg";
import TypescriptPic from "@/../public/img/typescript.svg";
import TailwindPic from "@/../public/img/tailwindcss.svg";
import FramerPic from "@/../public/img/framer.svg";
import GoogleAnalyticsPic from "@/../public/img/googleanalytics.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const CoreTechStacks = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  return (
    <div className="flex w-64 flex-col items-start justify-start">
      <div className="flex h-10 items-center justify-start self-stretch bg-muted-foreground pl-3 font-bold text-muted">
        CORE TECH STACKS
      </div>
      <div className="grid w-full grid-cols-3 gap-x-10 gap-y-1 px-6 py-4 text-sm *:w-full">
        <Image src={ReactPic} alt="React" className={isDark ? "invert" : ""} />
        <Image src={NextPic} alt="Next.js" className={isDark ? "invert" : ""} />
        <Image
          src={TypescriptPic}
          alt="Typescript"
          className={isDark ? "invert" : ""}
        />
        <div className="flex justify-center text-center">React</div>
        <div className="flex justify-center text-center">Next.js</div>
        <div className="flex justify-center text-center">Typescript</div>
        <Image
          src={TailwindPic}
          alt="Tailwind CSS"
          className={cn("mt-4", isDark ? "invert" : "")}
        />
        <Image
          src={GoogleAnalyticsPic}
          alt="GoogleAnalytics"
          className={cn("mt-4", isDark ? "invert" : "")}
        />
        <Image
          src={FramerPic}
          alt="Framer Motion"
          className={cn("mt-4", isDark ? "invert" : "")}
        />
        <div className="flex justify-center text-center">Tailwind CSS</div>
        <div className="flex justify-center text-center">Google Analytics</div>
        <div className="flex justify-center text-center">Framer Motion</div>
      </div>
    </div>
  );
};
