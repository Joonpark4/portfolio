import Navbar from "@/components/buttons/Navbar";
import DarkToggle from "../buttons/DarkToggle";
import NextLogo from "../Logo/NextLogo";

export default function Sidebar() {
  return (
    <header className="min-w-max h-full flex flex-col justify-between p-4 border rounded-lg">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center">
          <div className="flex flex-col items-end justify-center">
            <b className="text-lg font-black">Joon Park</b>
          </div>
        </div>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="self-stretch flex justify-center">
          <DarkToggle />
        </div>
        <NextLogo />
      </div>
    </header>
  );
}
