'use client';
import React from 'react';
import { Home, Newspaper, UsersRound, LockKeyholeIcon, MessageCircleIcon } from 'lucide-react';
import { usePageStore } from "@/store/pagenation";
import { Button } from "@/components/buttons/Button";

export default function Footer() {
  const pages = usePageStore((state) => state.pages);
  const pageIndex = usePageStore((state) => state.pageIndex);
  const pageTo = usePageStore((state) => state.pageTo);
  // const footerList = [
  //   {
  //     icon: <Home size={26} />,
  //   },
  //   {
  //     icon: <Newspaper size={26} />,
  //   },
  //   {
  //     icon: <MessageCircleIcon size={26} />,
  //   },
  //   {
  //     icon: <LockKeyholeIcon size={26} />,
  //   },
  //   {
  //     icon: <LockKeyholeIcon size={26} />,
  //   },
  // ];
  return (
    <footer className="z-50 flex sm:hidden w-full justify-between items-center rounded-t-xl shadow-up shadow-border overflow-hidden h-[10vh]">
      {/* {pages.map((page, index) => (
        <Link
          href={page.link}
          key={index}
          className="w-full h-full flex justify-center shadow-inside shadow-border"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            {page.icon}
            <p className="font-bold">{page.title}</p>
          </div>
        </Link>
      ))} */}
      {pages.map((button, index) => (
        <Button
          key={index}
          className='w-full h-full flex justify-center items-center border-b-2'
          variant={pageIndex === index ? "selectedFooter" : "defaultFooter"}
          onClick={() => pageTo(index)}>
          {button}
        </Button>
      ))}
    </footer>
  );
}
