'use client'
import { Button } from "@/components/buttons/NavButton";
import { usePageStore } from "@/store/pagenation";
const buttons = [
  {
    text: "About Me",
    variant: "selected",
  },
  {
    text: "Portfolio",
  },
  {
    text: "Tech Skills",
  },
  {
    text: "Contact",
  },
];
export default function Navbar() {
  const pageTo = usePageStore((state) => state.pageTo);

  return (
    <nav className="self-stretch h-80 flex flex-col items-start justify-start text-coolgray-90 mt-3 gap-5">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={
            (button.variant as "selected") || "default" || null || undefined
          }
          onClick={() => pageTo(index)}
          >
          {button.text}
        </Button>
      ))}
    </nav>
  );
}
