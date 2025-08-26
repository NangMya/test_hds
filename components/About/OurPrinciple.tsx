"use client";

import Image from "next/image";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const OurPrinciple = () => {
  return (
    <section className="bg-white font-lora">
      <div className="grid grid-cols-2 gap-6 items-center">
        <div>
            <Image priority={true}  src="/images/common/image_1.webp" alt="image" width={450} height={450} className="object-cover"/>
        </div>
        <div>
          <h1 className="text-4xl">
            Our Principle <BsArrowDownRight className="inline" />{" "}
          </h1>
          <div className="py-4 mt-10">
            <h5 className="uppercase text-sm opacity-70">Our Commitment</h5>
            <p className="pt-4 pb-2 text-[#393131] text-xs leading-6">
              We make brands relevant in the market.Strong commitment to deliver
              the most efficient plans by our experienced team.
            </p>
          </div>
          <div className="py-4">
            <h5 className="uppercase text-sm opacity-70">CORE VALUE</h5>
            <p className="pt-4 pb-2 text-[#393131] text-xs leading-6">We help drive the client business. We bring value, we achieve KPIs and strengthen brand relevance in the market.
            </p>
          </div>
          <div className="py-4">
            <h5 className="uppercase text-sm opacity-70">Our Vision</h5>
            <p className="pt-4 pb-2 text-[#393131] text-xs leading-6">Be the Preferred 360 Advertising Agency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrinciple;
