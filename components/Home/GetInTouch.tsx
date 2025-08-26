"use client";

import Image from "next/image";
import CTA from "../CTA";

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden py-6 md:py-16 min-h-[680px] md:min-h-[800px] bg-[url('/images/home/team/team_bg.webp')] bg-no-repeat bg-center bg-cover z-30 ">
      <div className="flex flex-col justify-center items-center mt-12 md:mt-0">
        <div className="text-center">
          <h2 className="text-7xl font-lora text-primaryTextColor mb-2">
            Get In <span className="text-primary">Touch</span>{" "}
          </h2>
        </div>

        <Image
          src="/images/common/get_in_touch.webp"
          alt="get_in_touch"
          className=" object-cover -mt-24 mb-6 md:mb-20"
          width={500}
          height={200}
          priority
        />

        <CTA url="/contact" label="Get In Touch" />
      </div>

      <Image
        src="/images/star.svg"
        alt="start"
        className="absolute left-[15%] top-[30%] object-cover z-50"
        width={60}
        height={50}
        priority
      />
    </section>
  );
};

export default GetInTouch;
