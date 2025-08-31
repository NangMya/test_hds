"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import WavyCard3 from "../WavyCard3";

const HDSDigital = () => {
  return (
    <div id="hds_digital" className="relative">
      <Image
        src="/images/our_service/image3.webp"
        width={250}
        height={250}
        alt="HDS Talent Image"
        className="object-contain absolute bottom-6 sm:-top-32 -left-8 sm:right-6 w-36 h-36 sm:w-80 sm:h-80 z-50"
      />
      <Image
        src="/images/our_service/image4.webp"
        width={250}
        height={300}
        alt="HDS Talent Image"
        className="object-contain absolute bottom-0 sm:-bottom-10 right-0 sm:left-0 z-50 w-40 h-40 sm:w-80 sm:h-80 scale-x-[-1] sm:scale-x-100"
      />
      <section className="font-lora relative overflow-hidden w-full z-30 -mt-36  pb-10 sm:pb-0">
        <WavyCard3 color="#90264C">
          <div className="bg-white w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 mx-auto mb-4 mt-6 sm:mt-16">
            <Image
              src="/images/our_service/hds_digital.webp"
              width={100}
              height={100}
              alt="HDS Media"
              className="object-contain rounded-full w-full h-full"
            />
          </div>
          <h3 className="text-lg text-white text-center">Digital Media</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4 sm:mt-10 w-[90%] mx-auto">
            <p className="text-white text-xs py-2 opacity-65 text-center sm:text-left leading-6 max-w-sm">
              We build your digital presence across social media and online
              platforms with smart content, digital ad strategy and performance
              tracking to drive real results.
            </p>
            <p className="text-white text-xs py-2 opacity-65 text-center sm:text-left leading-6 max-w-sm">
              We craft digital solutions, optimize engagement and conversions to
              achieve measurable results, impact and sustained growth.
            </p>
          </div>
        </WavyCard3>
      </section>
    </div>
  );
};

export default HDSDigital;
