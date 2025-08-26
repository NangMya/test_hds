"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" pt-16 flex justify-between pb-2">
      <Image
        src="/images/our_service/bulb.webp"
        alt="Woman"
        width={200}
        height={200}
      />
      <div>
        <div className="grid grid-cols-4 gap-12">
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">30+</p>
            <p className="text-sm text-gray-500">Successful works</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">-</p>
            <p className="text-sm text-gray-500">Case Studies</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">5+</p>
            <p className="text-sm text-gray-500">Service provide</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center">
            <p className="text-6xl font-bold py-4 ">100++</p>
            <p className="text-sm text-gray-500">Satisfied clients</p>
          </div>
        </div>
       
      </div>
      <Image
        src="/images/our_service/human.webp"
        alt="Man painting"
        width={220}
        height={220}
      />
    </section>
  );
};

export default HeroSection;
