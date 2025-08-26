"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";

const HDSTalent = () => {
  return (
    <section className="font-lora relative overflow-hidden py-6 md:py-10 min-h-[700px] md:min-h-[800px] bg-[url('/images/our_service/talent_bg.webp')]  bg-no-repeat bg-center bg-cover -mt-36">
      <div className="bg-white w-24 h-24 rounded-full p-1 mx-auto mb-4 mt-10">
        <Image
          src="/images/our_service/hds_talent.webp"
          width={100}
          height={100}
          alt="HDS Media"
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-white text-center py-4 text-md max-w-sm mx-auto">
        KOL/Influencer Management Mega, Macro, Micro, Nano talents for
        endorsement or content development.
      </p>
      <div className="px-8 max-w-6xl mx-auto pt-8">
        <div className="flex flex-row gap-2 justify-start items-center mb-4">
          <span className="w-6 h-6 bg-white text-second rounded-full flex justify-center items-center">
            <PiShoppingBagFill />
          </span>
          <p className="text-white text-sm">Our Media</p>
        </div>
        <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
        A new, prevailing channel to connect Brands and Audiences. We collaborate creatively with influencers who can engage and influence our audience.
        </p>
      </div>

      <Image
          src="/images/our_service/image1.webp"
          width={300}
          height={300}
          alt="HDS Talent Image"
          className="object-contain rounded-full absolute bottom-0 right-0 z-20"
        />
        <Image
          src="/images/our_service/image2.webp"
          width={300}
          height={300}
          alt="HDS Talent Image"
          className="object-contain rounded-full absolute bottom-0 left-0 z-20"
        />
    </section>
  );
};

export default HDSTalent;
