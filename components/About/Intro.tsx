"use client";

import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const Intro = () => {
  return (
    <section className=" p-6 rounded-2xl text-center justify-center w-[90%] mx-auto" data-aos="fade-down" data-aos-duration="2000">
      <h1 className="font-lora text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center pt-10">
        Who <span className="text-primary">We Are</span>
      </h1>
      <p className="text-xs md:text-sm text-center max-w-sm text-textLight py-4  mx-auto">
        An evolving and fast-growing local international agency offering
        full-service to connect brand and consumer.
      </p>
      <div className="py-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 max-w-7xl mx-auto">

        <p className="flex items-center text-sm font-light text-center sm:text-left">
          Ratings
          <span className="px-2">
            <BsStarFill className="inline text-yellow-400" />
          </span>
          <span>5.0</span>
        </p>

        <div className="flex flex-row items-center sm:flex-row sm:gap-4">

          <div className="relative min-w-[10rem] h-10 mb-0 sm:mb-0">
            <div className="absolute rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-10 -top-0 -left-0">
              <Image
                src="/images/about_us/image_1.webp"
                alt="image1"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="absolute rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-20 -top-0 left-6">
              <Image
                src="/images/about_us/image_2.webp"
                alt="image2"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="absolute rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-30 -top-0 left-12">
              <Image
                src="/images/about_us/image_3.webp"
                alt="image3"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="absolute rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-40 -top-0 left-[4.5rem]">
              <Image
                src="/images/about_us/image_4.webp"
                alt="image4"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="font-bold text-sm">95%</p>
            <p className="opacity-70 text-xs">Satisfied customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
