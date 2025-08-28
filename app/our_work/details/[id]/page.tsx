"use client";

import Footer from "@/components/General/Footer/Footer";
import CaseStudy from "@/components/OurWork/CaseStudy";
import WavyCard4 from "@/components/WavyCard4";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";

const WorkDetail = () => {
  return (
    <section>
      <div className="pt-14 pb-0 ">
        <div className="py-7 my-0 border-t-border border-t-[1px]  w-full ">
          <div className="px-6 sm:px-12">
            <Link href="/our_work" className="pb-2 sm:pb-8 cursor-pointer">
              <FaArrowLeft className="inline" />
              <span className="px-4 text-sm">Back to case study</span>
            </Link>
            <h2 className="font-light text-2xl py-2 sm:py-4 mt-0 sm:mt-4"> Expandi | March 2024</h2>
            <h1 className="font-bold text-3xl py-2 sm:py-4">Website Rebranding</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 r">
            <div className="text-left px-6 sm:px-12 order-2 sm:order-1">
              <p className="text-sm font-light text-justify pt-[30px] leading-loose">
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
            <div className="flex justify-end w-full  order-1 sm:order-2 mt-0 sm:-mt-20">
              <Image
                src="/images/our_work/work1.webp"
                alt="Case Study"
                width={100}
                height={100}
                className="object-contain rounded w-[550px] h-[450px]"
              // sizes="(max-width: 768px) 80vw, 200px"
              />
            </div>
          </div>
          <div className="px-6 sm:px-12 pt-10 pb-6 sm:pb-10  ">
            <div className="max-w-xl">
              <h1 className="font-semibold text-2xl flex mb-4 sm:mb-8 font-lora ">
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
          </div>
          <div className="block sm:hidden">

            <div className=" px-4">
              <Image
                src="/images/our_work/message.webp"
                alt="Message"
                width={1000}
                height={20}
                className="object-contain mx-auto w-[95%] "
              />
              <div className=" py-6">
                <h1 className="font-semibold text-2xl flex font-lora ">
                  <FaQuoteLeft size={12} className="font-extralight" /> Our
                  Strategy (Mobile)
                  <FaQuoteRight size={12} className="font-extralight" />
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

            <div className="px-4 sm:px-12 pb-4">
              <h1 className="font-semibold text-2xl flex font-lora ">
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
            <div className="w-full flex justify-end items-center">
              <Link href="/our_work" className="pb-2 cursor-pointer">
                <FaArrowLeft className="inline" />
                <span className="px-4 text-sm ">Back to case studies</span>
              </Link>
            </div>
          </div>

          <div className="hidden sm:block">

            <WavyCard4>
              <div className=" pb-2 lg:pb-20 ">
                <div className="relative min-h-[460px] lg:min-h-[750px] hidden sm:block ">
                  <Image
                    src="/images/our_work/message.webp"
                    alt="Message"
                    width={1000}
                    height={20}
                    className="object-contain absolute top-[5%] w-[95%] "
                  />
                  <div className="border border-primary rounded-2xl pt-[33%] pb-2 lg:pb-6 max-w-md float-right px-6">
                    <h1 className="font-semibold text-2xl flex font-lora ">
                      <FaQuoteLeft size={12} className="font-extralight" /> Our
                      Strategy (Desktop)
                      <FaQuoteRight size={12} className="font-extralight" />
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

                <div className="px-0 sm:px-12 pb-8 lg:pb-6 mt-2 lg:mt-0">
                  <h1 className="font-semibold text-2xl flex font-lora ">
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
                <div className="w-full flex justify-end items-center -mt-10 lg:mt-0">
                  <Link href="/our_work" className="pb-0 lg:pb-8 cursor-pointer">
                    <FaArrowLeft className="inline" />
                    <span className="px-4 text-sm ">Back to case studies</span>
                  </Link>
                </div>
              </div>
            </WavyCard4>
          </div>
        </div>
      </div>
      <CaseStudy />
      <Footer />
    </section>
  );
};

export default WorkDetail;
