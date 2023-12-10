"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "@/../public/img/nextLogoBlack.png";
import logoWhite from "@/../public/img/nextLogoWhite.png";

export default function NextLogo() {
  const { theme } = useTheme();

  return (
    <div className="text-xs w-full flex justify-end items-center mt-4 gap-1">
      <div>Powered by</div>

      {theme === "dark" ? (
        // 다크모드일 때 렌더링
        <Image
          src={logoWhite}
          alt="v0_logo"
          className="animate-neon"
          width={45}
        />
      ) : (
        // 라이트모드일 때 렌더링
        <Image
          src={logoBlack}
          alt="v0_logo"
          className="animate-neon"
          width={45}
        />
      )}
    </div>
  );
}
