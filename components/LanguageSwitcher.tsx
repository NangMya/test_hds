"use client"

import Image from "next/image";
import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

type Props ={
  changeColor: boolean,
}
type Language = "en" | "km";
export default function LanguageSwitcher({changeColor}:Props) {
  
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("lang", lang);
    setIsOpen(false);
  };
  

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-transparent cursor-pointer outline-none hover:outline-none focus:outline-none focus:border-none"
      >
        {language === "en" ? (
          <Image priority={true}  src="/images/us.jpg" alt="EN" width={24} height={16} />
        ) : (
          <Image priority={true}  src="/images/km.webp" alt="KM" width={24} height={16} />
        )}

        <svg
          className={`ml-2 h-5 w-5 ${ changeColor ? 'text-black' :'text-white' }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7l7 7 7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-6 mt-0 w-auto rounded-md shadow-lg cursor-pointer ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {language === "en" ? (
              <button
                onClick={() => changeLanguage("km")}
                className="text-gray-700  px-4 py-2 text-sm flex items-center"
              >
                <Image priority={true}  src="/images/km.webp" alt="KM" width={24} height={16} />
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("en")}
                className="text-gray-700 px-4 py-2 text-sm flex items-center"
              >
                <Image priority={true}  src="/images/us.jpg" alt="EN" width={24} height={16} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
