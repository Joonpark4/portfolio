"use client";
import { Button } from "@/components/buttons/Button";
import { usePageStore } from "@/store/pagenation";

export default function Navbar() {
  const pageIndex = usePageStore((state) => state.pageIndex);
  const pages = usePageStore((state) => state.pages);
  const setPageIndex = usePageStore((state) => state.setPageIndex);

  return (
    <nav className="self-stretch flex flex-col items-start justify-start text-coolgray-90 mt-3 gap-6 overflow-hidden ">
      {pages.map((button, index) => (
        <Button
          className="border-b-2 border-solid border-coolgray-10 py-3 mx-2"
          key={index}
          variant={pageIndex === index ? "selectedNav" : "defaultNav"}
          onClick={() => setPageIndex(index)}>
          {button}
        </Button>
      ))}
    </nav>
  );
}
