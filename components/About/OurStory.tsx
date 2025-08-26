"use client";

import React from "react";

const OurStory = () => {
  return (
    <section className=" font-lora relative overflow-hidden py-6 md:py-1 min-h-[650px] md:min-h-[800px] bg-[url('/images/home/team/team_bg.webp')] bg-no-repeat bg-center bg-cover z-30 ">
      <div className="grid grid-cols-5 w-[80%] mx-auto mt-20 ">
        <div className="col-span-3 border-t border-t-border border-b border-b-border">
          <div className="grid grid-cols-2">
            <div className="p-4">
              <h5 className="uppercase text-sm opacity-70">Our Vision</h5>
              <p className="pt-10 pb-2 text-[#393131] text-xs">
                Be the Preferred 360 Advertising Agency.
              </p>
            </div>
            <div className="border-l border-l-border p-4">
              <h5 className="uppercase text-sm opacity-70">Our Mission</h5>
              <p className="pt-10 pb-2 text-[#393131] text-xs">
                Deliver Glocal Ideas and Solutions to Answer Clients Advertising
                Challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-12">
          <h5 className="uppercase text-sm opacity-70 mb-6">Company Value</h5>
          <h1 className="text-3xl font-medium mb-2">How we shape</h1>
          <h1 className="text-3xl font-medium mb-2">our stories</h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-4 mt-20">
        <div className="bg-primary rounded-3xl p-6 shadow">
          <div className="flex justify-between text-white">
            <div>
              <h1 className="text-4xl mb-4">12 years</h1>
              <p className="text-xs">Strong in the market</p>
            </div>
            <p className="text-xs opacity-50">/001</p>
          </div>
        </div>
        <div className="bg-second rounded-3xl p-6 shadow">
          <div className="flex justify-between text-white">
            <div>
              <h1 className="text-4xl mb-4">100++</h1>
              <p className="text-xs">Number of clients served</p>
            </div>
            <p className="text-xs opacity-50">/002</p>
          </div>
        </div>
        <div className="bg-third rounded-3xl p-6 shadow">
          <div className="flex justify-between text-white">
            <div>
              <h1 className="text-4xl mb-4">2000++</h1>
              <p className="text-xs">
                Projects handled We have executed projects in a timely manner,
                efficient budget management from ATL, through the line, down to
                BTL.
              </p>
            </div>
            <p className="text-xs opacity-50">/003</p>
          </div>
        </div>
        <div className="bg-fourth rounded-3xl p-6 shadow">
          <div className="flex justify-between text-white">
            <div>
              <h1 className="text-4xl mb-4">40++</h1>
              <p className="text-xs">Meet the team</p>
            </div>
            <p className="text-xs opacity-50">/004</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
