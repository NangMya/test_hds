"use client";

// import { useLanguage } from "@/context/LanguageContext";
import { Kaushan_Script, Pacifico } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});
const Hero = () => {
  // const { t } = useLanguage();

  return (
    <div className=" w-full  h-[100vh]  bg-[url('/images/home/hero_bg.webp')] bg-cover bg-no-repeat bg-center z-10 pt-14">
      <div className="relative w-full flex items-center h-full ">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-25"></div>
        {/* <h1 className="text-5xl">{t.greeting}</h1> */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2 justify-between items-center w-[90%] left-[5%] mx-auto pt-0 sm:pt-0 ">
          <div>
            <div className="border-t-[1px] border-b-[1px] sm:border-t-2 sm:border-b-2 py-4 sm:py-10 border-t-border border-b-border w-full h-20 sm:h-32 flex flex-col items-center justify-center">
              <div className="text-white text-sm sm:text-lg md:text-lg font-bold tracking-[0.17rem] w-full text-center">
                <div className="relative inline-block">
                  <h1
                    className={`${pacifico.className} text-white text-sm sm:text-lg relative z-10`}
                  >
                    Let's
                  </h1>
                  <svg
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    className="absolute left-0 top-7 w-full h-2 z-0"
                  >
                    <path
                      d="M0,10 C30,0 70,0 100,10"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <span className="ps-2">CREATE SOMETHING GREAT</span>
              </div>
            </div>
            <br />
              <p className="absoute bottom-0 sm:relative inline text-xs text-white font-light cursor-pointer text-center">
          Get In Touch &nbsp;
          <FaArrowRight className="inline" size={14} />
        </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/images/home/hero.webp"
              alt="hero"
              width={100}
              height={100}
              className="w-64 sm:w-72 object-contain -mt-8 md:-mt-16"
            />
          </div>
          <div className="border-t-[1px] border-b-[1px] sm:border-t-2 sm:border-b-2  py-4 sm:py-10 border-t-white border-b-white w-full h-20 sm:h-32 flex flex-col items-center justify-center text-center">
            <p className="text-white text-2xl sm:text-3xl md:text-3xl font-normal font-graphik tracking-[0.17rem] ">
              WE MAKE IT
            </p>
            <p className="text-primaryLight text-2xl sm:text-3xl md:text-4xl font-bold tracking-[14px] text-center">
              HAPPEN
            </p>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default Hero;
