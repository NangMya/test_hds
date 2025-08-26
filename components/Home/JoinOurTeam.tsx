"use client";

import { Lora } from "next/font/google";
import Image from "next/image";
import React from "react";
import CTA from "../CTA";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const JoinOurTeam = () => {
  return (
    <section className="min-h-[460px] md:min-h-[780px] overflow-x-hidden py-4 w-full">

      <div className="relative pt-10 flex flex-col h-full justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-normal leading-snug font-lora pt-12">
          Be Part of <span className="text-primary">Our Team</span>
        </h1>

        <Image
          src="/images/home/our_team1.png"
          alt="join_our_team"
          width={120}
          height={600}
          className="object-cover absolute top-12"
        />
        <Image
          src="/images/home/our_team.png"
          alt="join_our_team"
          width={1000}
          height={600}
          className="object-cover absolute top-16 w-full "
        />
      <div className="absolute top-[5%] right-8 md:bottom-[30%] md:right-24 z-30 bg-green-100 ">
        <CTA url="#" label="Join Our Team" />
      </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
