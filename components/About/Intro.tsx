"use client";

import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const Intro = () => {
  return (
    <section className=" p-6 rounded-2xl text-center justify-center w-[90%] mx-auto">
      <h1 className="font-lora text-7xl font-bold text-center">Who we are</h1>
      <p className="text-xs text-center max-w-sm text-[#3F3B3B] py-4  mx-auto">
        An evolving and fast-growing local international agency offering
        full-service to connect brand and consumer.
      </p>
      <div className="py-8 flex flex-row justify-center gap-10">
        <p className="flex items-center text-sm font-light">
          Ratings{" "}
          <span className="px-3">
            {" "}
            <BsStarFill className="inline text-yellow-400 mb-1" />
          </span>{" "}
          <span>5.0</span>{" "}
        </p>
        <div className="relative min-w-32">
          <div className="absolute top-0 left-0 rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-10 hover:z-50">
            <Image
              src="/images/about_us/image_1.webp"
              alt="image1"
              width={50}
              height={50}
              className=""
            />
          </div>
          <div className="absolute top-0 left-7 rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-20 hover:z-50">
            <Image
              src="/images/about_us/image_2.webp"
              alt="image2"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute top-0 left-14 rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-30 hover:z-50">
            <Image
              src="/images/about_us/image_3.webp"
              alt="image3"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute top-0 left-20 rounded-full w-10 h-10 border-2 border-white hover:border-primary cursor-pointer z-40 hover:z-50">
            <Image
              src="/images/about_us/image_4.webp"
              alt="image4"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">95%</p>
          <p className="opacity-70 text-xs">Satisfied customers</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
