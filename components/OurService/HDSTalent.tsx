"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import WavyCard3 from "../WavyCard3";

const HDSTalent = () => {
  return (
    <div className="relative">
    <section className="font-lora relative overflow-hidden py-6 md:py-0 w-full z-10 -mt-36 items-center justify-center ">
      <WavyCard3 color="#F15A22">
        <div className="bg-white w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 mx-auto mb-1 sm:mb-4">
          <Image
            src="/images/our_service/hds_talent.webp"
            width={100}
            height={100}
            alt="HDS Media"
            className="object-contain rounded-full w-full h-full"
          />
        </div>

        <h3 className="text-lg text-white text-center">
          KOL/Influencer Management
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
          <p className="text-white text-center sm:text-left py-0 sm:py-4 text-md text-xs  opacity-65 max-w-sm mx-auto leading-6">
            We collaborate with the right influencers to deliver authentic and
            engaging content that boosts trust and turns followers into
            customers.{" "}
          </p>
          <p className="text-white text-center sm:text-left py-0 sm:py-4 text-md text-xs  opacity-65 max-w-sm mx-auto leading-6">
            Our approach is focused on selection of the right KOLs that
            resonates with brands and their audiences, who can drive results,
            and deliver engagement.
          </p>
        </div>
      </WavyCard3>
     
    </section>
      
    </div>
  );
};

export default HDSTalent;
