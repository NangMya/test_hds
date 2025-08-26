"use client";
import Image from "next/image";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CTA from "../CTA";
import Container from "../Container";

const OurWork = () => {
  return (
    <section className="relative overflow-hidden py-6 md:py-16 min-h-[850px] z-10">
      <Container>
        <Image
          src="/images/home/our_work_bg.webp"
          alt="bg"
          className="absolute top-0 left-0 w-screen h-full"
          width={2000}
          height={500}
          quality={100}
          priority
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="mb-6 md:mb-0 text-center w-full py-10">
              <h2 className="text-3xl md:text-5xl font-normal font-lora text-primaryTextColor mb-10 md:mb-10 mt-12 sm:mt-6 md:mt-6">
                Our <span className="text-primary">Works</span>{" "}
              </h2>

              <div className="w-full mx-auto mt-12">
                <div className="grid grid-rows-3 grid-cols-4 gap-4 mx-auto px-0 pb-10">
                  <div className="col-span-2 row-span-2 bg-white rounded-3xl shadow-md relative">
                    <Image
                      src="/images/home/works/1.webp"
                      alt="work"
                      width={100}
                      height={100}
                      className="object-cover rounded-3xl w-full h-full"
                    />
                    <div className="w-8 h-8 shadow-lg cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute top-4 right-4">
                      <span className="-rotate-45 text-md font-extrabold">
                        <FaArrowRightLong />
                      </span>
                    </div>
                    <p className="absolute bottom-4 left-4 bg-[#EF5935] text-xs px-4 py-2 text-white rounded-2xl">
                      Marketing Strategies For XYZ Company{" "}
                    </p>
                  </div>
                  <div className="col-span-2 row-span-1 bg-white rounded-3xl shadow-md relative">
                    <Image
                      src="/images/home/works/2.webp"
                      alt="work"
                      width={100}
                      height={100}
                      className="object-cover rounded-3xl w-full h-full"
                    />
                    <div className="w-8 h-8 shadow-lg cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute top-4 right-4">
                      <span className="-rotate-45 text-md font-extrabold">
                        <FaArrowRightLong />
                      </span>
                    </div>
                    <p className="absolute bottom-4 left-4 bg-[#EF5935] text-xs px-4 py-2 text-white rounded-2xl">
                      Packaging Design for Blue Panda{" "}
                    </p>
                  </div>

                  <div className="bg-white row-span-2 rounded-3xl shadow-md flex items-center justify-center relative">
                    <Image
                      src="/images/home/works/4.webp"
                      alt="work"
                      width={100}
                      height={100}
                      className="object-cover rounded-3xl w-full h-full"
                    />
                    <div className="w-8 h-8 shadow-lg cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute top-4 right-4">
                      <span className="-rotate-45 text-md font-extrabold">
                        <FaArrowRightLong />
                      </span>
                    </div>
                    <p className="absolute bottom-4 left-4 bg-[#EF5935] text-xs px-4 py-2 text-white rounded-2xl">
                      Video Production for Rio Brand{" "}
                    </p>
                  </div>

                  <div className="bg-blue-100 row-span-2 rounded-3xl shadow-md relative">
                    <Image
                      src="/images/home/works/5.webp"
                      alt="work"
                      width={50}
                      height={100}
                      className="object-cover rounded-3xl w-full h-full"
                    />
                    <div className="w-8 h-8 shadow-lg cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute top-4 right-4">
                      <span className="-rotate-45 text-md font-extrabold">
                        <FaArrowRightLong />
                      </span>
                    </div>
                    <p className="absolute bottom-4 left-4 bg-[#EF5935] text-xs px-4 py-2 text-white rounded-2xl">
                      Talent Recruitment with Universal Studio{" "}
                    </p>
                  </div>

                  <div className="col-span-2 bg-green-100  rounded-3xl shadow-md relative">
                    <Image
                      src="/images/home/works/3.webp"
                      alt="work"
                      width={100}
                      height={100}
                      className="object-cover rounded-3xl w-full h-full"
                    />
                    <div className="w-8 h-8 shadow-lg cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute top-4 right-4">
                      <span className="-rotate-45 text-md font-extrabold">
                        <FaArrowRightLong />
                      </span>
                    </div>
                    <p className="absolute bottom-4 left-4 bg-[#EF5935] text-xs px-4 py-2 text-white rounded-2xl">
                      Digital Design{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <CTA url="#" label="Explore More" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurWork;
