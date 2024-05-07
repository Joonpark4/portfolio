import Navbar from "@/components/layout/Navbar";
import DarkToggle from "../buttons/DarkToggle";
import NextLogo from "../Logo/NextLogo";

export default function Sidebar() {
  return (
    <aside className="hidden h-full flex-col justify-between border p-5 sm:flex">
      <div className="flex flex-col">
        <div className="centered flex-col gap-5">
          <b className="text-lg font-black">Joon ParkTES3</b>
        </div>
      </div>
      <Navbar isSidebar={true} />
      <div className="flex flex-col items-center">
        <div className=" w-24">
          <DarkToggle />
        </div>
        <NextLogo />
      </div>
    </aside>
  );
}
