"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/buttons/Button";

import {
  UserSquare2Icon,
  BoxesIcon,
  MailPlus,
  BookOpenTextIcon,
  AtomIcon,
  MailCheckIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar({ isSidebar }: { isSidebar?: boolean }) {
  const router = useRouter();
  const pathName = usePathname();
  const pages = [
    { name: "About Me", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Tech Stack", path: "/tech" },
    { name: "Contact", path: "/contact" },
    { name: "Diary", path: "/diary" },
  ];
  const sidebarStyle = "max-h-[50vh] flex-col overflow-hidden";
  const footerStyle = "h-full";

  const icons = [
    <UserSquare2Icon key={"0"} size={28} />,
    <BoxesIcon key={"1"} size={28} />,
    <AtomIcon key={"2"} size={28} />,
    <MailPlus key={"3"} size={28} />,
    <BookOpenTextIcon key={"4"} size={28} />,
  ];

  return (
    <nav
      className={cn(
        "grow flex items-start justify-start",
        isSidebar ? sidebarStyle : footerStyle,
      )}>
      {pages.map((button, index) => (
        <Button
          key={index}
          variant={
            pathName === button.path
              ? isSidebar
                ? "selectedNav"
                : "selectedFooter"
              : isSidebar
              ? "defaultNav"
              : "defaultFooter"
          }
          onClick={() => router.push(button.path)}>
          {!isSidebar && icons[index]}
          {button.name}
        </Button>
      ))}
    </nav>
  );
}
