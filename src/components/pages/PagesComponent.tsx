import AboutMePage from "@/components/pages/AboutMePage";
import PortfolioPage from "@/components/pages/PortfolioPage";
import TechStackPage from "@/components/pages/TechStackPage";
import ContactPage from "@/components/pages/ContactPage";
import DiaryPage from "@/components/pages/DiaryPage";

export default function PagesComponent({pageName}: {pageName: string}) {
    switch (pageName) {
      case "About Me":
        return <AboutMePage />;
      case "Portfolio":
        return <PortfolioPage />;
      case "Tech Stack":
        return <TechStackPage />;
      case "Contact":
        return <ContactPage />;
      case "Diary":
        return <DiaryPage />;
      default:
        return null;
    }
};