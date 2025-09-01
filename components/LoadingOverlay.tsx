"use client";
import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 z-[999]" />
      <div
        className="absolute left-0 w-screen h-screen flex items-center justify-center z-[1000]"
        style={{ top: `${scrollY}px` }}
      >
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-white"></div>
      </div>
    </>
  );
}
