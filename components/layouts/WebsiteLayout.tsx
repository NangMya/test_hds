"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "../General/Footer/Footer";
import ResponsiveNav from "../General/Navbar/ResponsiveNav";
import ScrollToTop from "../Helper/ScrollToTop";
import { useEffect } from "react";
import LoadingBar from "../LadingBar";

const WebsiteLayout = ({ children, footerData }: { children: React.ReactNode, footerData: any }) => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      const blockedKeys = ["F12", "I", "C", "U"];
      const isBlocked =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && blockedKeys.includes(e.key)) ||
        (e.ctrlKey && e.key === "U");
      if (isBlocked) {
        e.preventDefault();
      }
    };
    //   document.addEventListener("contextmenu", handleContextMenu);
    // window.addEventListener("keydown", handleKeyDown);
    //   return () => {
    //   document.removeEventListener("contextmenu", handleContextMenu);
    //   window.removeEventListener("keydown", handleKeyDown);
    // };
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      {/* <LanguageProvider> */}
        <ResponsiveNav />
        <main className="flex-1">{children}</main>
        <Footer footerData={footerData} />
        {/* <ScrollToTop /> */}
      {/* </LanguageProvider> */}
    </div>
  );
};

export default WebsiteLayout;
