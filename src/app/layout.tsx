import type { Metadata } from "next";
import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import Modal from "@/components/modal/Modal";
import { GoogleAnalytics } from "@next/third-parties/google";
import TanstackProvider from "@/providers/TanstackProvider";

const Noto = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JoonPark's Portfolio Site",
  description: "Do you wanna know about me? Check this out! 🤩",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`centered h-dvh flex-col sm:gap-1 sm:p-4 ${Noto.className} sm:flex-row`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TanstackProvider>
            <Header />
            <Sidebar />
            <Modal />
            <main className="relative h-full w-full max-w-[1300px] flex-1 overflow-hidden overflow-y-auto p-3 sm:border sm:p-6 md:p-10">
              {children}
            </main>
            <Footer />
          </TanstackProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-240CRYK9QZ" />
      </body>
    </html>
  );
}
