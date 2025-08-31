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
    <section className="min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[800px] overflow-x-hidden py-4 w-full mb-0 sm:mb-4">

      <div className="relative pt-4 sm:pt-10 flex flex-col h-full justify-center text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-snug font-lora pt-4 sm:pt-2">
          Be Part of <span className="text-primary">Our Team</span>
        </h1>

        <Image
          src="/images/home/our_team1.png"
          alt="join_our_team"
          width={120}
          height={600}
          className="object-cover absolute top-12 sm:top-12 md:top-20 lg:top-32 w-12 sm:w-16 md:w-20 lg:w-32 h-auto"
        />
        <Image
          src="/images/home/our_team.png"
          alt="join_our_team"
          width={1000}
          height={600}
          className="object-cover  w-full "
        />
      <div className="mt-4 ">
        <CTA url="#" label="Join Our Team" />
      </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
