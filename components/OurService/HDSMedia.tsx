"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";

const HDSMedia = () => {
  return (
    <section id="hds_media" className="relative text-center items-center justify-center bg-third py-16 font-lora">
      <Image
        src="/images/common/team_award_1.png"
        alt="image"
        width={280}
        height={280}
        className="object-contain absolute -top-[10%] sm:-top-[20%] right-0 sm:left-0 w-44 h-44 sm:w-64 sm:h-64 scale-x-[-1] sm:scale-x-0"
      />
      <Image priority={true}  src="/images/our_service/talent_image.webp" alt="image" width={300} height={300} className="object-contain absolute bottom-10 sm:-bottom-[10%] left-0 z-20 w-40 h-40 sm:w-80 sm:h-80"/>
      
      <div className="bg-white w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 mx-auto mb-1 sm:mb-4">
        <Image
          src="/images/our_service/hds_media.webp"
          width={100}
          height={100}
          alt="HDS Media"
          className="object-contain rounded-full w-full h-full"
        />
      </div>
      <h3 className="text-md sm:text-lg text-white">ATL Media</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 mt-2 sm:mt-10 w-full sm:w-[90%] mx-auto pb-28 sm:pb-44 pt-4 sm:pt-8">
        <div className="px-8 pb-6 sm:pb-0">
          <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-third flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">PR Management</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            From setting up your PR strategy to tracking performance, we manage every step with precision - delivering impactful stories that boost brand credibility through targeted media coverage.
          </p>
        </div>
        <div className="px-8 pb-6 sm:pb-0">
          <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-third flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">ATL Media</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We optimise brand exposure through strategic placements on TV, redio, billboards, and digital platforms. Ideal for creating strong brand awareness and credibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HDSMedia;
