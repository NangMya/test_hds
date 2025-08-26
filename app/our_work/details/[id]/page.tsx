"use client";

import CaseStudy from "@/components/OurWork/CaseStudy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";

const WorkDetail = () => {
  return (
    <section>
      <div className="pt-14 pb-24 bg-[url('/images/home/team/team_bg.webp')] bg-no-repeat bg-center bg-cover">
        <div className="py-7 my-0 border-t-border border-t-[1px]  w-full text-center ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-left px-12">
              <Link href="/our_work" className="pb-8 cursor-pointer">
                {" "}
                <FaArrowLeft className="inline" />
                <span className="px-4 text-sm">Back to case study</span>
              </Link>
              <h2 className="font-light text-2xl py-4 mt-4">
                Expandi | March 2024
              </h2>
              <h1 className="font-bold text-3xl py-4">Website Rebranding</h1>
              <p className="text-sm font-light text-justify pt-[30px] pb-10 leading-loose">
                Every month, we organize fun and engaging team-building events
                that encourage teamwork and camaraderie. From escape rooms to
                outdoor adventures, these activities help us learn more about
                each other and work together more effectively. Our creative
                brainstorming sessions are a platform for everyone to share
                their ideas and contribute to ongoing projects. These sessions
                are not only productive but also a great way to inspire
                innovative thinking and out-of-the-box solutions. We prioritize
                continuous learning and development. Our workshops and training
                programs cover a wide range of topics, from technical skills.
              </p>
            </div>
            <div className="relative w-full ">
              <Image
                src="/images/our_work/work1.webp"
                alt="Case Study"
                fill
                className="object-contain rounded w-[200px]"
                sizes="(max-width: 768px) 80vw, 200px"
              />
            </div>
          </div>
          <div className="px-12 py-10  ">
            <div className="max-w-xl">
              <h1 className="font-semibold text-2xl flex mb-8 font-lora ">
                {" "}
                <FaQuoteLeft
                  size={12}
                  className="font-extralight"
                /> Challenges{" "}
                <FaQuoteRight size={12} className="font-extralight" />{" "}
              </h1>
              <p className="text-sm font-extralight text-justify leading-loose">
                We are seeking a creative and motivated Graphic Designer to
                bring our brand vision to life. The ideal candidate will have a
                strong understanding of visual storytelling, exceptional design
                skills, and the ability to create compelling graphics for both
                digital and print mediums. This role requires a keen eye for
                detail.
              </p>
            </div>
            <div className="relative  min-h-[660px]">
              <Image
                src="/images/our_work/message.webp"
                alt="Message"
                width={1000}
                height={300}
                className="object-cover absolute top-[5%] w-[95%]"
              />
              <div className="border border-primary rounded-2xl pt-[33%] pb-10 max-w-md float-right px-10">
                <h1 className="font-semibold text-2xl flex font-lora ">
                  {" "}
                  <FaQuoteLeft size={12} className="font-extralight" /> Our
                  Strategy{" "}
                  <FaQuoteRight size={12} className="font-extralight" />{" "}
                </h1>
                <p className="text-sm font-light text-justify  p-4 leading-loose">
                  We are seeking a creative and motivated Graphic Designer to
                  bring our brand vision to life. The ideal candidate will have
                  a strong understanding of visual storytelling, exceptional
                  design skills, and the ability to create compelling graphics
                  for both digital and print mediums. This role requires a keen
                  eye for detail.
                </p>
              </div>
            </div>
          </div>
          <div className="px-12 -mt-12 pb-12">
            <h1 className="font-semibold text-2xl flex font-lora ">
              {" "}
              <FaQuoteLeft
                size={12}
                className="font-extralight"
              /> Takeaway <FaQuoteRight size={12} className="font-extralight" />{" "}
            </h1>
            <p className="text-sm font-light text-justify  p-4 leading-loose">
              We are seeking a creative and motivated Graphic Designer to bring
              our brand vision to life. The ideal candidate will have a strong
              understanding of visual storytelling, exceptional design skills,
              and the ability to create compelling graphics for both digital and
              print mediums. This role requires a keen eye for detail.
            </p>
          </div>
        </div>
      </div>
      <CaseStudy/>
      
    </section>
  );
};

export default WorkDetail;
