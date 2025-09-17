"use client";

import Image from "next/image";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const OurPrinciple = () => {
  return (
    <section className="bg-white font-lora pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div
          className="hidden sm:block"
          data-aos="fade-down-right"
          data-aos-duration="3500"
        >
          <Image
            priority={true}
            src="/images/common/image_1.webp"
            alt="image"
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl" data-aos="zoom-in" data-aos-duration="3500">
            Our Core Value <BsArrowDownRight className="inline" />{" "}
          </h1>
          <div className="py-4 mt-10">
            <h5 className="uppercase text-sm opacity-70 pb-3">
              High Accountability
            </h5>
            <ul className="list-dash font-graphik">
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We are responsive
              </li>
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We honor or promises
              </li>
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We take full responsibility for our decisions and actions
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h5 className="uppercase text-sm opacity-70 pb-3">
              DEVELOP & DELIVER
            </h5>
            <ul className="list-dash font-graphik">
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We listen to ideas and seek opportunities to strengthen our
                skills
              </li>
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We maintain high standards of our work
              </li>
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We commit to complete our work in a timely manner
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h5 className="uppercase text-sm opacity-70 pb-3">
              SOLUTION & SUPPORT
            </h5>
            <ul className="list-dash font-graphik">
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We approach challenges with confidence and creativity
              </li>
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We humble work as a team and always support each other
              </li>
              <li className="text-textColor text-xs sm:text-sm leading-6">
                - We celebrate team achievement and recognize contributions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrinciple;
