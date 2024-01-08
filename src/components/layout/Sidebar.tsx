import Navbar from "@/components/layout/Navbar";
import DarkToggle from "../buttons/DarkToggle";
import NextLogo from "../Logo/NextLogo";

export default function Sidebar() {

  return (
    <aside className="hidden sm:flex flex-col h-full justify-between p-5 border">
      <div className="flex flex-col">
        <div className="flex justify-center items-center flex-col gap-5">
          <b className="text-lg font-black">Joon Park</b>
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
