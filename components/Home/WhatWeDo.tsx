"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


const WhatWeDo = () => {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <Container>
        <div className="relative pb-10">
          <div className="mb-20 text-center w-full">
             <h1 className="text-3xl md:text-5xl font-normal leading-snug font-lora">
              What <span className="text-primary">We Do</span> 
            </h1>
          </div>

          <div className="flex flex-row gap-12 justify-center px-10 ">
            <div className="bg-cartBg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative z-20 w-[25%] h-[300px] ">
              <Image
                src="/images/home/hds_media.webp"
                alt="ATL Media"
                width={60}
                height={80}
                className="w-14 h-auto"
              />
              <h3 className="text-xl font-normal text-gray-800 mb-3">
                Above The Line Media
              </h3>
              <p className="text-desc text-xs pb-4">
                Maximizing reach through impactful mass media campaigns
              </p>
              <div className="w-8 h-8 shadow-md cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute bottom-4">
                <span className="-rotate-45 text-md font-extrabold">
                  <FaArrowRightLong/>
                </span>
              </div>
            </div>

            <div className="bg-cartBg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative -mt-10  w-[25%] h-[300px] ">
              <Image
                src="/images/home/hds_digital.webp"
                alt="Digital Media"
                width={60}
                height={80}
                className="w-20 -mx-2 h-auto"
              />
              <h3 className="text-xl font-normal text-gray-800 mb-3">
                Digital Media
              </h3>
              <p className="text-desc text-xs pb-4">
                Optimised digital media placements that turn impressions into impact.
              </p>
              <div className="w-8 h-8 shadow-md cursor-pointer rounded-lg flex items-center justify-center  text-primary text-xs bg-white absolute bottom-4">
                <span className="-rotate-45 text-md font-extrabold">
                  <FaArrowRightLong/>
                </span>
              </div>
            </div>

            <div className="bg-cartBg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative z-20 h-[300px]  w-[25%] ">
              <Image
                src="/images/home/hds_talent.webp"
                alt="KOL/Influencer Management"
                width={60}
                height={80}
                className="w-16 h-auto -mx-2"
              />
              <h3 className="text-xl font-normal text-gray-800 mb-3">
                KOL/Influencer Management
              </h3>
              <p className="text-desc text-xs pb-4">
                Connecting brands with the right voices to deliver authenticity, relevance, and results.
              </p>
              <div className="w-8 h-8 shadow-md cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute bottom-4">
                <span className="-rotate-45 text-md font-extrabold">
                  <FaArrowRightLong/>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-12 px-10 h-[300px] justify-center mt-12 z-20">
            <div className="bg-cartBg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-[25%]  h-full relative">
              <Image
                src="/images/home/hds_action.webp"
                alt="H2S"
                width={60}
                height={80}
                className="w-14 h-auto -mx-3"
              />
              <h3 className="text-xl font-normal text-gray-800 mb-3 mt-1">
                Below The Line
              </h3>
              <div className="flex flex-col justify-between">
                <p className="text-desc text-xs pb-4">
                  Connecting brands directly with consumers, generating sales.
                </p>
                <div className="w-8 h-8 shadow-md cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute bottom-4">
                  <span className="-rotate-45 text-md font-extrabold">
                    <FaArrowRightLong/>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-cartBg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-[25%]  h-full relative ">
              <Image
                src="/images/home/hds_studio.webp"
                alt="Production & Design"
                width={60}
                height={80}
                className="w-14 h-auto -mx-4"
              />
              <h3 className="text-xl font-normal text-gray-800 mb-3 mt-1">
                Production & Design
              </h3>
              <div className="flex flex-col justify-between">
                <p className="text-desc text-sm pb-4">
                 Turning ideas into visuals that ensures consistency, quality, and impact.
                </p>
                <div className="w-8 h-8 shadow-md cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute bottom-4">
                  <span className="-rotate-45 text-md font-extrabold">
                    <FaArrowRightLong/>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-14 top-28 z-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#C9402C] to-[#FFAD64]"></div>
          <div className="absolute right-24 top-20 z-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#BA6AA3] to-[#B3517C]"></div>
          <Image priority={true}  src="/images/home/line1.webp" alt="line1" width={170} height={50} className="absolute left-[25%] top-[14%] z-30 -rotate-0"/>
          <Image priority={true}  src="/images/home/line2.webp" alt="line2" width={170} height={50} className="absolute right-[31%] top-[12%] z-30 rotate-10"/>
          <Image priority={true}  src="/images/home/line2.webp" alt="line2" width={150} height={50} className="absolute left-[20%] top-[47%] z-30 rotate-[10deg]"/>
          <Image priority={true}  src="/images/home/line1.webp" alt="line1" width={170} height={50} className="absolute right-[13%] top-[52%] z-30 rotate-[-20deg]"/>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
