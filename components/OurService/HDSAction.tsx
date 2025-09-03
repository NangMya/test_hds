"use client";

import Image from "next/image";
import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import WavyCard3 from "../WavyCard3";

const HDSAction = () => {
  return (
    <section id="hds_action" className="font-lora relative overflow-hidden w-full z-40 -mt-36  ">
      <WavyCard3 color="#B71E89">
        <div className="bg-white w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 mx-auto mb-1 sm:mb-4 mt-4 sm:mt-16">
          <Image
            src="/images/common/hds_action.png"
            width={100}
            height={100}
            alt="HDS Media"
            className="object-contain rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-lg text-white text-center">Below The Line</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-8 mt-8 sm:mt-14 w-full sm:w-[90%] mx-auto">
          <div className="px-8 pb-4 sm:pb-0">
            <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
              <span className="w-6 h-6 bg-white rounded-full text-fifth flex justify-center items-center">
                <PiShoppingBagFill />
              </span>
              <p className="text-white text-sm">Concepts</p>
            </div>
            <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
              We combine strategic insight with creativity to deliver unique activation concepts, carefully crafted for each brand and its target market.
            </p>
          </div>
          <div className="px-8 pb-4 sm:pb-0">
            <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
              <span className="w-6 h-6 bg-white rounded-full text-fifth flex justify-center items-center">
                <PiShoppingBagFill />
              </span>
              <p className="text-white text-sm">Events</p>
            </div>
            <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
              We bring a fresh and unique approach to every event, understanding that a well-planned and flawlessly executed experience.
            </p>
          </div>
          <div className="px-8 pb-4 sm:pb-0">
            <div className="flex flex-row gap-2 justify-start items-center mb-0 sm:mb-4">
              <span className="w-6 h-6 bg-white rounded-full text-fifth flex justify-center items-center">
                <PiShoppingBagFill />
              </span>
              <p className="text-white text-sm">Activations</p>
            </div>
            <p className="text-white text-xs py-2 opacity-65 text-left leading-6">
              We specialize in concept organization_From scouting national and international artists to full-scale concert execution_with a proven track record, including successful international shows delivered for SMART Axiata, Vattanac Brewery and Ganzberg Group among others.
            </p>
          </div>
          
        </div>
      </WavyCard3>
    </section>
  );
};

export default HDSAction;
