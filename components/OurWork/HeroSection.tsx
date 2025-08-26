"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" py-16 flex justify-between items-center">
      <Image
        src="/images/our_work/hold_trophy.webp"
        alt="Woman with trophy"
        width={150}
        height={150}
      />
      <div>
        <div className="grid grid-cols-4 gap-12">
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">20+</p>
            <p className="text-sm text-gray-500">Successful works</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">7+</p>
            <p className="text-sm text-gray-500">Case Studies</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">5+</p>
            <p className="text-sm text-gray-500">Service provide</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">95%</p>
            <p className="text-sm text-gray-500">Satisfied clients</p>
          </div>
        </div>
        <div className="text-center pt-10">
          <p className="text-primary uppercase text-xs font-bold pb-2">
            Featured Works
          </p>
          <h1 className="text-4xl">Our Recent Projects</h1>
        </div>
      </div>
      <Image
        src="/images/our_work/painting.webp"
        alt="Man painting"
        width={170}
        height={170}
      />
    </section>
  );
};

export default HeroSection;
