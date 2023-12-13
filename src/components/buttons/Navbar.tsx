import { Button } from "@/components/buttons/NavButton";
import Link from "next/link";
const buttons = [
  {
    text: "About Me",
    link: "/",
    variant: "selected",
  },
  {
    text: "Portfolio",
    link: "/",
  },
  {
    text: "Tech Skills",
    link: "/",
  },
  {
    text: "Contact",
    link: "/",
  },
];
export default function Navbar() {
  return (
    <nav className="self-stretch h-80 flex flex-col items-start justify-start text-coolgray-90 mt-3 gap-5">
      {buttons.map((button, index) => (
        <Button
          asChild
          key={index}
          variant={
            (button.variant as "selected") || "default" || null || undefined
          }>
          <Link href={button.link}>{button.text}</Link>
        </Button>
      ))}
    </nav>
  );
}
