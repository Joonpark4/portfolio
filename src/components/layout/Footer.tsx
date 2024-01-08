import Navbar from "./Navbar";
export default function Footer() {

  return (
    <footer className="z-50 sm:hidden w-full rounded-t-xl shadow-up shadow-border overflow-hidden h-[10vh]">
      <Navbar isSidebar={false} />
    </footer>
  );
}
