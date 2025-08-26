"use client";

import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="pt-2 pb-16 font-lora w-[80%] mx-auto">
      <p className="text-xs ">SERVICES/FEAURES SERVICES</p>
      <div className="flex flex-row gap-10 items-center">
        <div>
          <h1 className="text-5xl">your business goals</h1>
          <h1 className="text-primary text-5xl">are our priority.</h1>
        </div>
        <Image
          src="/images/our_service/map.webp"
          alt="map"
          width={150}
          height={150}
          className="object-cover "
        />
      </div>
      <div className="relative bg-white flex flex-col items-center justify-center py-4 mt-8">
          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="flex flex-col gap-8 text-left md:w-1/3">
              <div>
                <h3 className="flex items-center gap-2 font-medium text-lg">
                  <Image priority={true}  src="/images/home/hds_media.webp" width={40} height={40} alt="HDS Media" /> <span className="text-sm">HDS Media</span>
                </h3>
                <p className="opacity-50 text-sm mt-2 leading-5">
                  Google Ad, local website partnerships, social media page
                  management, community management.
                </p>
              </div>

              <div>
              <h3 className="flex items-center gap-2 font-medium text-lg">
                  <Image priority={true}  src="/images/home/hds_digital.webp" width={40} height={40} alt="HDS Digital" /> <span className="text-sm">HDS Digital</span>
                </h3>
                <p className="opacity-50 text-sm mt-2 leading-5">
                  Pre and post planning and buying TV, Radio, OOH, Cinema PR
                  Management, PR event set-up, press invite, PR tracking.
                </p>
              </div>

              <div>
              <h3 className="flex items-center gap-2 font-medium text-lg">
                  <Image priority={true}  src="/images/home/hds_talent.webp" width={40} height={40} alt="HDS Talent" /> <span className="text-sm">HDS Talent</span>
                </h3>
                <p className="opacity-50 text-sm mt-2 leading-5">
                  Mega, Macro, Micro, Nano talents for endorsement or content
                  development.
                </p>
              </div>
            </div>

            <div className="mt-8">
            <div className="relative w-72 h-72 flex items-center justify-center mx-8 my-12 md:my-0">
              <div className="absolute w-full h-full rounded-full border-2 border-primary border-opacity-70 animate-pulse"></div>
              <div className="absolute w-64 h-64 rounded-full border-2 border-primary border-opacity-50 animate-pulse"></div>
              <div className="absolute w-56 h-56 rounded-full border-2 border-primary border-opacity-30 animate-pulse"></div>
              <div className="absolute w-48 h-48 rounded-full border-2 border-primary border-opacity-10"></div>
              <div className="bg-primary w-40 h-40 rounded-full flex flex-col items-center justify-center">
                <p className="text-white text-lg font-medium">Our Services </p>
                <Image priority={true}  src="/logo.png" alt="HDS" width={200} height={100} className="object-contain"/>
              </div>
            </div>
            </div>

            <div className="flex flex-col gap-8 text-left md:w-1/3">
              <div>
              <h3 className="flex items-center gap-2 font-medium text-lg">
                  <Image priority={true}  src="/images/home/hds_action.webp" width={40} height={40} alt="HDS Action" /> <span className="text-sm">HDS Action</span>
                </h3>
                <p className="opacity-50 text-sm mt-2 leading-5">
                  Events, Concerts, Live boxing, activation, trade shows,
                  international artists scouting.
                </p>
              </div>

              <div>
              <h3 className="flex items-center gap-2 font-medium text-lg">
                  <Image priority={true}  src="/images/home/hds_studio.webp" width={40} height={40} alt="HDS Studio" /> <span className="text-sm">HDS Studio</span>
                </h3>
                <p className="opacity-50 text-sm mt-2 leading-5">
                  TVCs & Video production, TV content, 2D & 3D animation,
                  Graphic designs, Branding, Social media content, POSMs.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Features;
