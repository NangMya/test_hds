"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import WavyCard3 from "../WavyCard3";

const HDSStudio = () => {
  return (
    <div id="hds_studio" className="relative">
    
       <Image
          src="/images/our_service/image2.webp"
          width={280}
          height={280}
          alt="HDS Talent Image"
          className="object-contain  absolute -top-16 sm:-top-32 right-0 sm:left-0 z-40 w-40 h-40 sm:w-80 sm:h-80 scale-x-[-1] sm:scale-x-100"
        />
        <Image
          src="/images/our_service/image1.webp"
          width={280}
          height={280}
          alt="HDS Talent Image"
          className="object-contain  absolute bottom-8 sm:-top-24 right-0 z-40 w-40 h-40 sm:w-80 sm:h-80"
        />
    <section className="font-lora relative overflow-hidden w-full z-30 -mt-36  pb-16 sm:pb-0 ">
      <WavyCard3 color="#326B62">
        <div className="bg-white w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 mx-auto mb-1 sm:mb-4 mt-4 sm:mt-16">
          <Image
            src="/images/common/hds_studio.png"
            width={100}
            height={100}
            alt="HDS Media"
            className="object-contain rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-lg text-white text-center">Production & Design</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-12 w-full sm:w-[90%] mx-auto ">
          <div className="px-8">
            <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
              <span className="w-6 h-6 bg-white rounded-full text-fourth flex justify-center items-center">
                <PiShoppingBagFill />
              </span>
              <p className="text-white text-sm">Video Production</p>
            </div>
            <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
              From animated content to video production, we deliver high-quality
              production ensuring smooth execution from the initial concept to
              final output.
            </p>
          </div>
          <div className="px-8">
            <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
              <span className="w-6 h-6 bg-white rounded-full text-fourth flex justify-center items-center">
                <PiShoppingBagFill />
              </span>
              <p className="text-white text-sm">Graphic design</p>
            </div>
            <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
              We go beyond words, turning stories into visuals that reflect your
              brand identity and captivate your audience.
            </p>
          </div>
        </div>
      </WavyCard3>
    </section>
    </div>
  );
};

export default HDSStudio;
