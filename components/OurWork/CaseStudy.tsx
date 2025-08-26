"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CaseStudy = () => {
  return (
    <div className="bg-white px-6 py-10 grid grid-cols-5 min-h-[300px] max-h-[500px] mb-10">
      <div className="col-span-2 px-12">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>Similar Case Studies</p>
            <select className="border rounded-3xl px-4 py-2 focus:outline-none hover:outline-none my-4 cursor-pointer">
              <option value="hds_media">HDS Media</option>
            </select>
          </div>
          <div>
            <FaArrowRight size={35} className="-rotate-45" />
            <h1 className="font-lora font-semibold text-4xl py-4 ">
              Successful works <br /> by our team.
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-3 p-4">
        <div className="flex gap-4 w-full">
          <div className="w-[40%] border rounded-3xl">
            <Image
              src="/images/our_work/image1.webp"
              width={100}
              height={50}
              className="w-full h-[440px] object-cover rounded-3xl"
              alt="Img1"
            />
          </div>
          <div className="w-[30%] border rounded-3xl">
            <Image
              src="/images/our_work/image2.webp"
              width={100}
              height={50}
              className="w-full h-[440px] object-cover rounded-3xl"
              alt="Img1"
            />
          </div>
          <div className="w-[20%] border rounded-3xl">
            <Image
              src="/images/our_work/image3.webp"
              width={100}
              height={50}
              className="w-full h-[440px] object-cover rounded-3xl"
              alt="Img1"
            />
          </div>
          <div className="w-[10%] border rounded-3xl">
            <Image
              src="/images/our_work/image4.webp"
              width={100}
              height={50}
              className="w-full h-[440px] object-cover rounded-3xl"
              alt="Img1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
