"use client";

import JobTitle from "@/components/JobTitle";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const page = () => {
  return (
    <WebsiteLayout>
      <section className="pt-12 w-full sm:w-[90%] mx-auto font-lora px-10 sm:px-6 relative">
        <JobTitle />
        <div className=" flex flex-col sm:flex-row justify-between w-full py-6 items-start sm:items-center ">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Experience</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">4-5 years</p>
            </div>
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Seniority Level</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">senior level</p>
            </div>
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Employment Type</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">full-time</p>
            </div>
            <div className=" font-lora">
              <h1 className="text-sm font-medium">Salary</h1>
              <p className=" opacity-50 text-xs py-2 lowercase">negotiable</p>
            </div>
          </div>
          <div className="mt-6 sm:mt-0">
            <Link
              href="/join_our_team/1/apply"
              className="bg-primary py-2 px-8 sm:px-4 text-sm text-white rounded"
            >
              Apply Job
            </Link>
          </div>
        </div>
        <div className="py-6">
          <h1 className="text-3xl">
            Role Overview{" "}
            <span>
              <Image
                src="/images/join_our_team/icon.webp"
                alt="icon"
                width={65}
                height={65}
                className="inline"
              />
            </span>
          </h1>
          <p className="text-xs sm:text-sm opacity-80 leading-relaxed py-2">
            We are seeking a creative and motivated Graphic Designer to bring
            our brand vision to life. The ideal candidate will have a strong
            understanding of visual storytelling, exceptional design skills, and
            the ability to create compelling graphics for both digital and print
            mediums. This role requires a keen eye for detail, a passion for
            design, and the ability to work collaboratively with our marketing
            and content teams.
          </p>
        </div>
        <div className="py-6">
          <h1 className="text-3xl mb-3">
            Duties & Responsibilities
            <span>
              <Image
                src="/images/join_our_team/tick.webp"
                alt="icon"
                width={65}
                height={65}
                className="inline"
              />
            </span>
          </h1>
          <ul>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <HiOutlineShoppingBag
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">
                  Design and produce high-quality graphics, illustrations, and
                  layouts for various platforms including websites, social
                  media, email campaigns, print materials, and more.
                </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <HiOutlineShoppingBag
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">
                  Collaborate with the marketing team to develop creative
                  concepts and campaigns.
                </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <HiOutlineShoppingBag
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">
                  Ensure consistency of brand identity across all design
                  projects.
                </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <HiOutlineShoppingBag
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">
                  Stay up-to-date with design trends and best practices.
                </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <HiOutlineShoppingBag
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">
                  Manage multiple projects simultaneously and meet deadlines.
                </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <HiOutlineShoppingBag
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">
                  Provide creative input and feedback during brainstorming
                  sessions.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="pt-6 pb-24 sm:pt-6 sm:pb-6">
          <h1 className="text-3xl mb-6">
            Requirements
          </h1>
          <ul>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <BsArrowUpRight
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">Proven experience as a Graphic Designer or similar role.
                </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <BsArrowUpRight
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <BsArrowUpRight
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">Strong portfolio showcasing a variety of design projects.  </p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <BsArrowUpRight
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">Attention to detail and a strong sense of aesthetics.</p>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex flex-row gap-2">
                <BsArrowUpRight
                  size={20}
                  className="text-primary inline"
                />
                <p className="leading-normal opacity-80 text-xs sm:text-sm">Ability to work independently and as part of a team.</p>
              </div>
            </li>

          </ul>
        </div>
        
       
        <Image priority={true}
          src="/images/join_our_team/job_img.webp"
          alt="image"
          width={400}
          height={400}
          className="absolute -bottom-20 right-0 w-40 sm:-bottom-40 sm:-right-28 -z-20 sm:w-96 h-auto contain"
        />
      </section>
    </WebsiteLayout>
  );
};

export default page;
