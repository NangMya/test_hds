"use client";

import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import CTA from "../CTA";

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 min-h-[400px] sm:min-h-[570px] md:min-h-[850px] z-10 ">
      <Image
        src="/images/home/bg.webp"
        alt="bg"
        className="absolute -top-12 left-0 w-screen h-full -z-30 "
        width={2000}
        height={500}
      />
      <Container>
        <div className="w-full px-4 md:px-8  lg:text-left py-4 md:py-6 z-50 ">
          <div className="w-full mx-auto md:mx-0 flex flex-row gap-4 items-center">
            <div className="w-1.5 h-14 sm:h-20 bg-primary rounded-2xl "></div>

            <h1 className="text-xl sm:text-4xl md:text-5xl font-normal leading-snug font-lora">
              We Make Brands <span className="text-primary">Relevant</span> In
              The <span className="text-primary">Market</span>.
            </h1>
          </div>
        </div>

        <div className="relative mt-0 sm:-mt-10 md:mt-12 flex justify-center mb-12 sm:mb-0">
          <img
            src="/images/home/team.webp"
            alt="Team"
            className="w-full max-w-3xl sm:max-w-4xl object-contain px-4"
          />
        </div>

        <div className="absolute bottom-[26%] sm:bottom-[20%] right-[28%] translate-x-1/2 md:right-[32%] md:translate-x-0">
          <Image
            src="/images/star.svg"
            alt="star"
            width={40}
            height={40}
            className="w-[25px] h-[30px] sm:w-[40px] md-h-40px]"
          />
        </div>

      </Container>
        <div className="w-full absolute bottom-[17%] sm:bottom-[10%] items-center flex justify-center font-graphik font-medium">
          <CTA url="#" label="More About Us" />
        </div>
    </section>
  );
};

export default WhoWeAre;
