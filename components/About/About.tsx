"use client"

import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="bg-secondaryBg p-6 rounded-2xl w-[90%] mx-auto font-lora" data-aos="fade-up" data-aos-duration="3000">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 relative">
        <div className="w-full px-4 sm:px-0 sm:w-[90%] md:w-[70%] mx-auto text-left mt-8">
          <h1 className="text-white font-lg opacity-70">
            About
          </h1>
          <h1 className="text-white text-3xl font-medium mt-4">
            Our Principle
          </h1>
          <p className="text-white text-xs font-normal max-w-sm mt-4 leading-5">
            We dig deep into understanding clients'
          </p>
          <p className="text-white text-xs font-normal max-w-sm leading-5">
            advertising needs then we develop unique,
          </p>
          <p className="text-white text-xs font-normal max-w-sm leading-5">
            tailor-fit solution to brands consumers' journey
          </p>
        </div>

        <div className="pt-4 pb-44 sm:pb-4 px:6 sm:px-6 md:px-10 font-lora mt-6 sm:mt-4 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
            <div className="bg-white rounded-3xl p-6 flex flex-row gap-8 md:gap-4" data-aos="zoom-in" data-aos-duration="3400">
              <div className="w-14 sm:18 md:w-20 h-8 p-2 flex justify-center items-center rounded-full bg-red-100 mb-6">
                <Image
                  src="/images/about_us/icons/insights.svg"
                  alt="Image"
                  width={18}
                  height={20}
                  className=""
                />
              </div>
              <div>
                <h1 className="uppercase text-sm text-left text-primary font-semibold">
                  UNDERSTAND
                </h1>
                <p className="text-xs text-left text-textColor opacity-80 pt-2">
                  Understanding data-driven, target-focused and competitor
                  intel
                </p>
                <p className="mt-6 uppercase text-textColor text-md">INSIGHT</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 flex flex-row gap-8 md:gap-4" data-aos="zoom-in" data-aos-duration="3800">
              <div className="w-14 sm:18 md:w-20 h-8 p-2 flex justify-center items-center rounded-full bg-orange-100 mb-6">
                <Image
                  src="/images/about_us/icons/idea.svg"
                  alt="Image"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h1 className="uppercase text-sm text-left text-primary font-semibold ">
                  Plan
                </h1>
                <p className="text-xs text-left text-textColor opacity-80 pt-2">
                  Communication goals setting Creative concepts
                  Pre-planning assumptions
                </p>
                <p className="mt-6 uppercase text-textColor text-md">IDEA</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 flex flex-row gap-8 md:gap-4" data-aos="zoom-in" data-aos-duration="4000">
              <div className="w-14 sm:18 md:w-20 h-8 p-2 flex justify-center items-center rounded-full bg-purple-100 mb-6">
                <Image
                  src="/images/about_us/icons/target.svg"
                  alt="Image"
                  width={20}
                  height={20}
                  className="object cover w-full h-full"
                />
              </div>
              <div>
                <h1 className="uppercase text-sm text-left text-primary font-semibold">
                  Measure
                </h1>
                <p className="text-xs text-left text-textColor opacity-80 pt-2">
                  Measure post results
                  Efficiencies
                  achieving KPI thresholds
                  Assertive actions
                </p>
                <p className="mt-6 uppercase text-textColor text-md">IMPACT</p>

              </div>
            </div>

          </div>
        </div>
        <div className="absolute -bottom-16 -right-8 z-40">
          <Image
            src="/images/about_us/our_principle.png"
            alt="Image"
            width={500}
            height={450}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default About