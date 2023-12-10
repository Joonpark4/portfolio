'use client'
import Image from "next/image";
import nextjs from "@/../public/img/nextjsLogo.png";

export default function NextLogo(){
   return (
      <div className="text-xs w-full flex justify-end items-center mt-4 gap-1">
          <div>Powered by</div>
          <Image
            src={nextjs}
            alt="v0_logo"
            className="animate-neon"
            width={45}
          />{" "}
        </div>
   );
};