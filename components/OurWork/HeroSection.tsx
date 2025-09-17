"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" pt-16 pb-0 flex justify-center sm:justify-between items-center">
      <Image
        src="/images/our_work/hold_trophy.webp"
        alt="Woman with trophy"
        width={150}
        height={150}
        className="hidden sm:block"
      />
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
          <div className=" border-t-2 border-t-black mb-4 text-center" data-aos="zoom-in" data-aos-duration="3000">
            <p className="text-4xl sm:text-6xl font-bold py-4 ">20+</p>
            <p className="text-sm text-gray-500">Successful works</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center hidden sm:block" data-aos="zoom-in" data-aos-duration="4000">
            <p className="text-4xl sm:text-6xl font-bold py-4 ">7+</p>
            <p className="text-sm text-gray-500">Case Studies</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center hidden sm:block"  data-aos="zoom-in" data-aos-duration="5000">
            <p className="text-4xl sm:text-6xl font-bold py-4 ">5+</p>
            <p className="text-sm text-gray-500">Service provide</p>
          </div>
          <div className=" border-t-2 border-t-black mb-4 text-center"  data-aos="zoom-in" data-aos-duration="6000">
            <p className="text-4xl sm:text-6xl font-bold py-4 ">95%</p>
            <p className="text-sm text-gray-500">Satisfied clients</p>
          </div>
        </div>
      </div>
      <Image
        src="/images/our_work/painting.webp"
        alt="Man painting"
        width={170}
        height={170}
        className="hidden sm:block"
      />
    </section>
  );
};

export default HeroSection;
