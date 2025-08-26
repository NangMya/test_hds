"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";

const HDSMedia = () => {
  return (
    <section className="relative text-center items-center justify-center bg-[#552588] py-16 font-lora">
      <Image
        src="/images/our_service/hold_prize.webp"
        alt="image"
        width={400}
        height={400}
        className="object-contain absolute -top-[30%] right-0"
      />
      <Image priority={true}  src="/images/our_service/talent_image.webp" alt="image" width={300} height={300} className="object-contain absolute -bottom-[10%] left-0 z-20"/>
      <div className="bg-white w-24 h-24 rounded-full p-1 mx-auto mb-4">
        <Image
          src="/images/our_service/hds_media.webp"
          width={100}
          height={100}
          alt="HDS Media"
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-white py-4 text-md max-w-sm mx-auto">
        ATL Media, PR Management Pre and post planning and buying TV, Radio,
        OOH, Cinema, PR event srt-up, press invite, PR tracking.
      </p>
      <div className="grid grid-cols-2 gap-8 mt-10 w-[90%] mx-auto pb-44">
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-third flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Our Media</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            Our data-driven approach, with accurate reporting from our data
            sources CMM and Kantar, ensures transparency and accountability.
          </p>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            Beyond traditional advertising, we have also spearheaded the
            creation of TV programs across entertainment, sports, and live
            events, which solidifies our stronghold in the industry.
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-third flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Our PR Management Specialist</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We offer top-tier PR management with a passion for crafting
            compelling narratives that drive positive brand and product brand
            and product recognition supported by strategic media coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HDSMedia;
