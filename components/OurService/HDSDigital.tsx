"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";

const HDSDigital = () => {
  return (
    <section className="font-lora relative overflow-hidden py-6 md:py-10 min-h-[700px] md:min-h-[850px] bg-[url('/images/our_service/digital_bg.webp')]  bg-no-repeat bg-center bg-cover -mt-[20%]">
      <div className="bg-white w-24 h-24 rounded-full p-1 mx-auto mb-4 mt-8">
        <Image
          src="/images/our_service/hds_digital.webp"
          width={100}
          height={100}
          alt="HDS Media"
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-white py-4 text-md max-w-sm mx-auto text-center">
        Digital Media Google Ad, local website partnerships, social media page
        management, community management.
      </p>
      <div className="grid grid-cols-2 gap-8 mt-10 w-[90%] mx-auto">
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-primary flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">HDS Media</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            Your Partner in digital success We aim to unlock your Brand's
            potential across digital platforms.
          </p>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We craft innovative campaigns across multiple channels to make sure
            we reach the right audiences.
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-primary flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Social Media Content</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We provide valuable and cool contents that drives relationship
            between your brand and your consumers.
          </p>
        </div>
      </div>
      <Image
        src="/images/our_service/image4.webp"
        width={250}
        height={300}
        alt="HDS Talent Image"
        className="object-contain rounded-full absolute -bottom-10 left-0 z-20"
      />
    </section>
  );
};

export default HDSDigital;
