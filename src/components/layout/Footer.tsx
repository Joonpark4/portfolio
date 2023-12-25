'use client';
import React, { useEffect } from 'react';
import { UserSquare2Icon, BoxesIcon, MailPlus, BookOpenTextIcon, AtomIcon, MailCheckIcon } from 'lucide-react';
import { usePageStore } from "@/store/pagenation";
import { Button } from "@/components/buttons/Button";

export default function Footer() {
  const pages = usePageStore((state) => state.pages);
  const pageIndex = usePageStore((state) => state.pageIndex);
  const setPageIndex = usePageStore((state) => state.setPageIndex);
  const icons = [<UserSquare2Icon key={"0"} size={28} />, <BoxesIcon key={"1"} size={28} />, <AtomIcon key={"2"} size={28} />, <MailPlus key={"3"} size={28} />, <BookOpenTextIcon key={"4"} size={28} />];

  return (
    <footer className="z-50 flex sm:hidden w-full justify-between items-center rounded-t-xl shadow-up shadow-border overflow-hidden h-[10vh]">
      {pages.map((button, index) => (
        <Button
          key={index}
          className='w-full h-full flex justify-center items-center border-b-2 flex-col gap-1'
          variant={pageIndex === index ? "selectedFooter" : "defaultFooter"}
          onClick={() => setPageIndex(index)}>
          {icons[index]}
          {button}
        </Button>
      ))}
    </footer>
  );
}
