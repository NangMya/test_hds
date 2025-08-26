"use client";
import { Lora } from "next/font/google";
import Image from "next/image";

import React from "react";
import CTA from "../CTA";


const Team = () => {
  return (
    <section className="relative overflow-hidden py-6 sm:py-16 md:py-16 min-h-[850px] bg-[url('/images/home/team/team_bg.webp')] bg-no-repeat bg-center bg-cover z-0 mt-2 sm:-mt-14 ">
      <Image
        src="/images/home/team/waves.webp"
        alt="bg"
        className="absolute z-30 top-[10%] md:top-[25%] -rotate-[23deg] w-full object-cover scale-125 sm:scale-125 md:scale-150"
        width={3000}
        height={200}
        priority
      />

      <div className="absolute left-12 top-[25%] md:top-[35%] z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-lora text-primaryTextColor mb-2 text-3xl md:text-5xl  font-normal">
          Meet The <span className="text-primary">Team</span>{" "}
        </h2>
      </div>

      <Image
        src="/images/home/team/join_team.webp"
        alt="bg"
        className="absolute left-0 bottom-[20%] md:bottom-[18%] object-cover z-50"
        width={250}
        height={200}
        priority
      />
      <Image
        src="/images/home/team/heart.webp"
        alt="bg"
        className="absolute left-[10%] top-[22%] md:top-[35%] object-cover z-50"
        width={80}
        height={50}
        priority
      />

      <div className="absolute right-0 md:right-[10%] top-[15%] grid grid-cols-2 gap-6 z-50 p-6 ">
        <div className="mt-20">
          <Image
            src="/images/common/member3.webp"
            alt="bg"
            className="object-cover z-50 w-[150px] md:w-[180px]"
            width={180}
            height={200}
            priority
          />
          <div>
            <p className="font-bold pt-2 text-sm">Robet Fox</p>
            <p className="font-normal text-xs">Cheif Executive Officer</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/common/member2.webp"
            alt="member2"
            className="object-cover z-50 w-[150px] md:w-[180px]"
            width={180}
            height={200}
            priority
          />
          <div>
            <p className="font-bold pt-2 text-sm">Annette Black</p>
            <p className="font-normal text-xs">Founder</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/common/member4.webp"
            alt="bg"
            className="object-cover z-50 w-[150px] md:w-[180px]"
            width={180}
            height={200}
            priority
          />
          <div>
            <p className="font-bold pt-2 text-sm">Kathryn Murphy</p>
            <p className="font-normal text-xs">Cheif Technology Officer</p>
          </div>
        </div>
        <div className="-mt-20">
          <Image
            src="/images/common/member1.webp"
            alt="bg"
            className="object-cover z-50 w-[150px] md:w-[180px]"
            width={180}
            height={200}
            priority
          />
          <div>
            <p className="font-bold pt-2 text-sm">Savannah Nguyen</p>
            <p className="font-normal text-xs">Creative Director</p>
          </div>
        </div>
      </div>

      <div className="mt-4 absolute bottom-24 md:bottom-16 w-full text-center mx-auto">
        <CTA url="#" label="More About Us" />
      </div>
    </section>
  );
};

export default Team;
