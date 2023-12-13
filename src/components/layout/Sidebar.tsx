import Navbar from "@/components/buttons/Navbar";
import DarkToggle from "../buttons/DarkToggle";
import NextLogo from "../Logo/NextLogo";

export default function Sidebar() {
  return (
    <header className="min-w-max h-full flex flex-col justify-between p-5 border">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <b className="text-lg font-black">Joon Park</b>
        </div>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <DarkToggle />
        <NextLogo />
      </div>
    </header>
  );
}
