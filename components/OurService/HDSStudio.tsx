"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";

const HDSStudio = () => {
  return (
    <section className="font-lora relative overflow-hidden py-6 md:py-10 min-h-[700px] md:min-h-[920px] bg-[url('/images/our_service/studio_bg.webp')]  bg-no-repeat bg-center bg-cover -mt-[20%]">
      <div className="bg-white w-24 h-24 rounded-full p-1 mx-auto mb-4 mt-10">
        <Image
          src="/images/our_service/hds_studio.webp"
          width={100}
          height={100}
          alt="HDS Media"
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-white py-4 text-md max-w-sm mx-auto text-center mb-6">
        Production & Design TVCs & Video production, TV content, 2D & 3D
        animation, Graphic designs, Branding, Social media content, POSMs.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-12 w-[90%] mx-auto">
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-fourth flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Our Creative Mind</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            A unique one-stop shop of creative ideas, stylish production, and
            smart execution to deliver results-driven, high-quality graphic
            design, TV advertising and video production.
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-fourth flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">TVC Production</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We offer high production values at a competitive price along with an
            impeccable service that ensure a smooth-running project from the
            initial brief to the big screen.
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <span className="w-6 h-6 bg-white rounded-full text-fourth flex justify-center items-center">
              <PiShoppingBagFill />
            </span>
            <p className="text-white text-sm">Graphic Design</p>
          </div>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We are taking the client's brief and story beyond words, then craft
            design that visually speak to the target audience.
          </p>
          <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
            We consider the psychology behind every artwork we compose.
          </p>
        </div>
      </div>
      <Image
        src="/images/our_service/image3.webp"
        width={300}
        height={300}
        alt="HDS Talent Image"
        className="object-contain rounded-full absolute bottom-0 right-0 z-20"
      />
    </section>
  );
};

export default HDSStudio;
