"use client";

import React from "react";
import Container from "../Container";

const OurStory = () => {
  return (
    <section className=" font-lora relative overflow-hidden py-6 md:py-1 min-h-[1200px]  md:min-h-[1200px] lg:min-h-[950px] bg-[url('/images/home/team/team_bg.webp')] bg-no-repeat bg-center bg-cover z-30 ">
      <Container>

        <div className="flex flex-col sm:flex-row mt-10 pt-10">
          <div className=" px-4 sm:px-12 order-first sm:order-last mb-6 sm:mb-0" data-aos="fade-right" data-aos-duration="3000">
            <h5 className="uppercase text-md opacity-70 mb-6">Company Value</h5>
            <h1 className="text-2xl sm:text-4xl font-medium mb-2">How we shape
              <br className="hidden sm:block" />
              <span className="ps-2 sm:ps-0">our stories</span>
            </h1>
          </div>
         
          <div className="flex flex-col sm:flex-row max-w-6xl sm:max-w-4xl mx-auto border-b-2 border-t-2" data-aos="fade-left" data-aos-duration="3000">
            <div className="flex-1 p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
              <h3 className="text-gray-500 text-sm md:text-base font-medium uppercase mb-4 tracking-widest">
                Our Vision
              </h3>
              <p className="text-gray-900 text-md md:text-xl font-serif leading-relaxed">
                Be the Preferred 360 Advertising Agency.
              </p>
            </div>

            <div className="flex-1 p-6">
              <h3 className="text-gray-500 text-sm md:text-base font-medium uppercase mb-4 tracking-widest">
                Our Mission
              </h3>
              <p className="text-gray-900 text-md md:text-xl font-serif leading-relaxed">
                Deliver local ideas and Solutions to Answer Clients Advertising
                Challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-16" >
          <div className="bg-primary rounded-3xl p-2 sm:p-6 shadow-lg" data-aos="flip-right" data-aos-duration="3500">
            <div className="flex justify-between text-white p-4">
              <div>
                <h1 className="text-2xl sm:text-5xl mb-3 sm:mb-6">Since 12 years</h1>
                <p className="text-xs font-light">We pride ourselves in great work ethics, integrity and successful
                  end-results.
                </p>
              </div>
              <p className="text-xs opacity-50">/001</p>
            </div>
          </div>
          <div className="bg-second rounded-3xl p-2 sm:p-6 shadow-lg" data-aos="flip-left" data-aos-duration="3500">
            <div className="flex justify-between text-white p-4">
              <div>
                <h1 className="text-2xl sm:text-5xl mb-3 sm:mb-6">100++</h1>
                <p className="text-xs font-light">Number of clients served. From beverages, telecommunications,
                  FMCG to banking and finance.
                </p>
              </div>
              <p className="text-xs opacity-50">/002</p>
            </div>
          </div>
          <div className="bg-third rounded-3xl p-2 sm:p-6 shadow-lg" data-aos="flip-right" data-aos-duration="4000">
            <div className="flex justify-between text-white p-4">
              <div>
                <h1 className="text-2xl sm:text-5xl mb-3 sm:mb-6">2000++</h1>
                <p className="text-xs font-light">Project handled</p>
                <p className="text-xs font-light">
                  We have executed projects in a timely manner, efficient budget management from ATL, through the line, down to BTL.
                </p>
              </div>
              <p className="text-xs opacity-50">/003</p>
            </div>
          </div>
          <div className="bg-fourth rounded-3xl p-2 sm:p-6 shadow" data-aos="flip-left" data-aos-duration="4000">
            <div className="flex justify-between text-white p-4">
              <div>
                <h1 className="text-2xl sm:text-5xl mb-3 sm:mb-6">40++</h1>
                <p className="text-xs font-light">Members in our core team
                  Small in number, big in impact, bringing your vision to life.</p>
              </div>
              <p className="text-xs opacity-50">/004</p>
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default OurStory;
