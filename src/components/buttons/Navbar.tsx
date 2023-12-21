"use client";
import { Button } from "@/components/buttons/NavButton";
import { usePageStore } from "@/store/pagenation";
const buttons = [
  {
    text: "About Me",
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
  {
    text: "Dev-Diary",
  },
];
export default function Navbar() {
  const pageTo = usePageStore((state) => state.pageTo);
  const pageIndex = usePageStore((state) => state.pageIndex);

  return (
    <nav className="self-stretch h-80 flex flex-col items-start justify-start text-coolgray-90 mt-3 gap-5">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={pageIndex === index ? "selected" : "default"}
          onClick={() => pageTo(index)}>
          {button.text}
        </Button>
      ))}
    </nav>
  );
}
