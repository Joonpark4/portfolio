import { Button } from "@/components/buttons/NavButton";
import Link from "next/link";
const buttons = [
  {
    text: "About Me",
    link: "/",
  },
  {
    text: "Portfolio",
    link: "/",
  },
  {
    text: "Skill Stacks",
    link: "/",
  },
  {
    text: "Load Map",
    link: "/",
  },
  {
    text: "Contact",
    link: "/",
  },
];
export default function Navbar(){
   return (
    <nav className="self-stretch h-80 flex flex-col items-start justify-start text-coolgray-90 mt-3 gap-3">
    {buttons.map((button, index) => (
      <Button asChild key={index}>
        <Link href={button.link}>{button.text}</Link>
      </Button>
    ))}
  </nav>
   );
};