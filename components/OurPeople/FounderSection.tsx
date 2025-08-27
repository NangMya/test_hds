"use client";

import React from "react";
import Container from "../Container";

const FounderSection = () => {
  return (
    <section className="bg-white text-gray-800 w-full">
      <div className="border-b-[1px] py-7 border-b-border w-full text-center ">
        <h1 className=" font-lora text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center">
          Meet <span className="text-primary">Our Team</span>
        </h1>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-6 md:gap-6 pt-10">
          {/* First Column: Text and 50+ Team Members */}
          <div className="flex flex-col gap-6 items-start h-full justify-start">
            <div className="mt-8">
              <p className="text-xs font-graphik font-light pb-2">
                Talents behind us
              </p>
              <p className="text-sm font-semibold max-w-xs pb-8 font-lora hidden md:block">
                A team united by creativity 
              </p>
              <p className="text-md font-semibold max-w-md pt-2 pb-8 font-lora block md:hidden">
                A team united by creativity and driven by purpose to bring your
                ideas to life.
              </p>
            </div>

            <div className="flex flex-row sm:flex-col gap-6 w-full justify-between items-center sm:items-start ">
              <div className="mt-0 sm:mt-8">
                <p className="text-5xl font-bold mt-0 sm:mt-10 leading-3 pb-6">50+</p>
                <p className="text-xs text-textColor">Team members</p>
              </div>
              <div className="md:hidden">
                <p className="text-5xl font-bold leading-3 pb-6">7+</p>
                <p className="text-xs text-textColor">Departments</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 mt-10 md:mt-0">
            <img
              src="/images/our_people/founder-illustration.webp"
              alt="founder"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="hidden md:flex flex-col gap-6 items-start h-full justify-start">
            <div className="mt-8">
              <p className="text-5xl font-bold leading-3 pb-6">7+</p>
              <p className="text-xs text-textColor">Departments</p>
            </div>
            <div className="mt-8">
              <p className="text-textLight font-lora text-sm font-semibold mt-10">
                and driven by purpose to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold font-lora">
            A Message From Our Founders
          </h2>
          <blockquote className="mt-6 max-w-md font-light text-sm mx-auto text-gray-600">
            “Premium quality isn’t merely our promise; it’s how we build Lasting
            relationships, rooted in trust, respect, and a mutual drive for
            excellence.”
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-3">
            <img
              src="/images/our_people/founder-avatar.webp"
              alt="William"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-bold">William</p>
              <p className="text-xs text-textLight">Founder & CEO</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;
