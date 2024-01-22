import type { Metadata } from "next";
import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import Modal from "@/components/modal/Modal";
import Providers from "@/app/providers";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        className={`flex h-dvh items-center justify-center sm:p-4 sm:gap-1 flex-col ${Noto.className} sm:flex-row`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}>
          <Header />
          <Sidebar />
          <Modal />
          <main className="w-full h-full flex-1 max-w-[1200px] sm:border overflow-hidden overflow-y-auto p-10 relative">
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-240CRYK9QZ" />
      </body>
    </html>
  );
}
