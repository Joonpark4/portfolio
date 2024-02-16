import Navbar from "./Navbar";
export default function Footer() {
  return (
    <footer className="z-50 h-[10vh] w-full overflow-hidden rounded-t-xl shadow-up shadow-border sm:hidden">
      <Navbar isSidebar={false} />
    </footer>
  );
}
