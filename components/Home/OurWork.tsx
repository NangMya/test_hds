"use client";
import Image from "next/image";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CTA from "../CTA";
import Container from "../Container";
import { WorkProp } from "@/services/api";
import Link from "next/link";

const OurWork = ({ works }: { works: WorkProp[] }) => {
  const worksToShow = works.slice(0, 5);

  const gridClasses = [
    "col-span-2 row-span-2", // first item
    "col-span-2 row-span-1", // second item
    "row-span-2",            // third item
    "row-span-2",            // fourth item
    "col-span-2",            // fifth item
  ];

  return (
    <section className="relative overflow-hidden py-6 md:py-16 min-h-[500px] sm:min-h-[850px] z-10">
      <Container>
        <Image
          src="/images/home/our_work_bg.webp"
          alt="bg"
          className="absolute top-0 left-0 w-screen h-full "
          width={2000}
          height={500}
          quality={100}
          priority
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className=" mb-2 sm:mb-6 md:mb-0 text-center w-full py-4 sm:py-10">
              <h2 className="text-3xl sm:text-5xl font-normal font-lora text-primaryTextColor mb-2 sm:mb-10 mt-2 sm:mt-6 md:mt-6">
                Our <span className="text-primary">Works</span>{" "}
              </h2>

              <div className="w-full mx-auto mt-6 sm:mt-12">
                <div className="grid grid-rows-3 grid-cols-4 gap-2 sm:gap-4 mx-auto px-0 pb-2 sm:pb-10">
                  {worksToShow.map((work, i) => (
                    <div
                      key={work.id}
                      className={`${
                        gridClasses[i] ?? "col-span-2"
                      } bg-white rounded-3xl shadow-md relative flex items-center justify-center`}
                    >
                      <Image
                        src={work.image ?? "/images/home/works/1.webp"}
                        alt={work.title}
                        width={400}
                        height={300}
                        className="object-cover rounded-3xl w-full h-full"
                      />
                      
                      <Link href={`/our_work/details/${work.id}`} className="w-8 h-8 shadow-lg cursor-pointer rounded-lg flex items-center justify-center text-primary text-xs bg-white absolute top-4 right-4">
                        <span className="-rotate-45 text-md font-extrabold">
                          <FaArrowRightLong />
                        </span>
                      </Link>
                      <p className="absolute bottom-4 left-4 bg-[#EF5935] text-xs px-4 py-2 text-white rounded-2xl">
                        {work.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-4">
                <CTA url="/our_work" label="Explore More" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurWork;
