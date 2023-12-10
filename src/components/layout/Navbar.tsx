import { Button, buttonVariants } from "@/components/button/NavButton";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="h-full flex flex-col justify-between p-3">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center">
          <div className="flex flex-col items-end justify-center">
            <b className="text-xl">WebbyFrames</b>
            <div className="text-xs leading-[140%] mt-[-4px]">for Figma</div>
          </div>
        </div>
        <nav className="self-stretch h-80 flex flex-col items-start justify-start text-coolgray-90 mt-3">
          <Button asChild>
            <Link href="/">About Me</Link>
          </Button>
          <Button asChild>
            <Link href="/">Portfolio</Link>
          </Button>
          <Button asChild>
            <Link href="/">Skill Stacks</Link>
          </Button>
          <Button asChild>
            <Link href="/">Load Map</Link>
          </Button>
          <Button asChild>
            <Link href="/">Contact</Link>
          </Button>
        </nav>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] text-primary-60">
        <div className="self-stretch box-border h-12 flex flex-row items-center justify-center py-4 px-3 border-[2px] border-solid border-primary-60">
          <div className="flex flex-row items-center justify-center py-0 px-4">
            <div className="tracking-[">Log In</div>
          </div>
        </div>
        <div className="self-stretch bg-primary-60 box-border h-12 flex flex-row items-center justify-center py-4 px-3 text-default-white border-[2px] border-solid border-primary-60">
          <div className="box-border w-3 hidden border-r-[1px] border-solid border-gray" />
          <div className="flex flex-row items-center justify-center py-0 px-4">
            <div className="tracking-[">Sign Up Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}
