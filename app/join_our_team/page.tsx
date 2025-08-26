"use client";

import Heading from "@/components/Heading";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Department = {
  title: string;
  openings: number;
  jobs?: string[];
  bgColor: string;
  image?: string;
};

const departments: Department[] = [
  { title: "Development", openings: 3, bgColor: "bg-purple-700" },
  {
    title: "Design",
    openings: 3,
    jobs: ["Graphic Designer", "UI/UX Designer", "Art Director"],
    image: "/images/join_our_team/bg_image.webp",
    bgColor: "bg-black",
  },
  { title: "Marketing", openings: 1, bgColor: "bg-orange-500" },
  { title: "Customer Service", openings: 3, bgColor: "bg-purple-600" },
  { title: "Operations", openings: 3, bgColor: "bg-emerald-700" },
  { title: "Finance", openings: 3, bgColor: "bg-pink-600" },
  { title: "Management", openings: 3, bgColor: "bg-orange-600" },
  { title: "SEO", openings: 3, bgColor: "bg-purple-700" },
  { title: "Media", openings: 3, bgColor: "bg-pink-600" },
];
const page = () => {
  return (
    <WebsiteLayout>
    <section className="py-14">
      <div className="font-lora text-center">
        <p className="text-xl uppercase pb-2">Open Jobs</p>
        <h1 className="text-5xl font-normal ">Which One</h1>
        <h2 className="opacity-50 text-5xl">are you?</h2>
      </div>
      <div className="w-[70%] mx-auto my-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-4">
        {departments.map((dept, i) => (
          <Link href="/join_our_team/1" key={i}>
          <div
           
            className={`relative p-4 h-60 rounded-2xl text-white flex flex-col justify-between cursor-pointer group overflow-hidden ${dept.bgColor}`}
          >
            {dept.image && (
              <Image
                src={dept.image}
                alt={dept.title}
                fill
                className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-300"
              />
            )}
            <div className="z-10 absolute bottom-4">
              <p className="text-xs">{dept.openings} opening positions</p>
              <h2 className="font-semibold text-lg">{dept.title}</h2>
            </div>
            <BsArrowUpRight className="absolute top-2 right-2 w-5 h-5 z-10" />

            {dept.jobs && (
              <div className="absolute inset-0 bg-black/70 text-sm p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="mb-2 text-xs">Opening positions</p>
                <ul className="space-y-1">
                  {dept.jobs.map((job, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span>{job}</span>
                      <BsArrowUpRight className="w-4 h-4" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
    </WebsiteLayout>
  );
};

export default page;
