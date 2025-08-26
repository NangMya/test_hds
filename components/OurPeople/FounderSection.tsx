"use client";

import React from "react";
import CircularText from "./CircularText";

const FounderSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800 ">
      <div className="grid grid-cols-4 justify-between gap-6">
        <div className=" flex flex-col gap-6 items-start pt-6">
          <p className="text-xs text-[#3F3B3B]">Talents behind us</p>
          <p className="text-sm font-medium max-w-xs pb-8">
            when you start a new project, it's essential to find the right team
          </p>

          <p className="text-5xl font-bold mt-10 leading-3">50+</p>
          <p className="text-xs text-[#3F3B3B] ">Team members</p>
        </div>

        <div className="col-span-2 mt-10 md:mt-0">
          <img
            src="/images/our_people/founder-illustration.webp"
            alt="founder"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className=" h-full flex flex-col justify-center">
          <p className="text-5xl font-bold">7+</p>
          <p className="text-xs text-[#3F3B3B] pb-10">Departments</p>
          <div className="my-10">
            <blockquote className="text-[#3F3B3B] font-lora text-sm">
              “thankfully, we have been here for you to turn on a highway”
            </blockquote>{" "}
          </div>
          <CircularText />
        </div>
      </div>

      <div className="my-16 text-center">
        <h2 className="text-4xl font-medium font-lora">Founder's anecdote</h2>
        <p className="mt-6 max-w-lg font-light text-sm mx-auto text-gray-600">Our story started in 5 when William envisioned a place where creativity and strategy could come together to create powerful solutions. From humble beginnings in a small office, we faced challenges head-on, learning and growing with each project we took on.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <img
            src="/images/our_people/founder-avatar.webp"
            alt="William"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-bold">William</p>
            <p className="text-xs text-[#3F3B3B]">Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
