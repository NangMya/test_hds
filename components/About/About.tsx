"use client"

import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="bg-secondaryBg p-6 rounded-2xl w-[90%] mx-auto">
    <div className="grid grid-cols-2">
      <div className="relative font-lora">
        <div className="w-[70%] mx-auto text-left mt-8">
          <h1 className="text-white font-lg uppercase opacity-70">
            About
          </h1>
          <h1 className="text-white text-3xl font-medium mt-4">
            Who we are,
          </h1>
          <h1 className="text-white text-3xl font-medium">
            Our Culture
          </h1>
          <p className="text-white text-xs font-normal mt-4 leading-5">
            We dig deep into understanding clients' advertising needs
            then we develop unique, tailor-fit solution to brands
            consumers' journey
          </p>
        </div>
        <div className="absolute -bottom-6 -left-10">
          <Image
            src="/images/about_us/man_pen.webp"
            alt="Image"
            width={300}
            height={350}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="py-4 px-10 font-lora">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4">
            <div className="w-10 h-10 p-2 rounded-full bg-red-100 mb-6">
              <Image
                src="/images/about_us/icons/insights.svg"
                alt="Image"
                width={30}
                height={30}
                className="object cover w-full h-full"
              />
            </div>
            <h1 className="uppercase text-sm text-left text-[#3F3B3B]">
              Insights
            </h1>
            <p className="text-xs text-left text-[#3F3B3B] opacity-80 pt-2">
              Understanding data-driven, target-focused and competitor
              intel
            </p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="w-10 h-10 p-2 rounded-full bg-orange-100 mb-6">
              <Image
                src="/images/about_us/icons/idea.svg"
                alt="Image"
                width={30}
                height={30}
                className="object cover w-full h-full"
              />
            </div>
            <h1 className="uppercase text-sm text-left text-[#3F3B3B] ">
              Ideas
            </h1>
            <p className="text-xs text-left text-[#3F3B3B] opacity-80 pt-2">
              Plan communication goals setting, creative concepts and
              pre-planning assumptions
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="w-10 h-10 p-2 rounded-full bg-purple-100 mb-6">
              <Image
                src="/images/about_us/icons/target.svg"
                alt="Image"
                width={30}
                height={30}
                className="object cover w-full h-full"
              />
            </div>
            <h1 className="uppercase text-sm text-left text-[#3F3B3B]">
              Impact
            </h1>
            <p className="text-xs text-left text-[#3F3B3B] opacity-80 pt-2">
              Measure post results, efficiencies, achieving KPI
              thresholds and assertive actions
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="w-10 h-10 p-2 rounded-full bg-green-100 mb-6">
              <Image
                src="/images/about_us/icons/star_ring.svg"
                alt="Image"
                width={30}
                height={30}
                className="object cover w-full h-full"
              />
            </div>
            <h1 className="uppercase text-sm text-left text-[#3F3B3B]">
              Innovation
            </h1>
            <p className="text-xs text-left text-[#3F3B3B] opacity-80 pt-2">
              Understanding data-driven, target-focused and competitor
              intel
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About