"use client";

import Image from "next/image";
import CTA from "../CTA";
import WavyCard1 from "../WavyCard1";
import WavyCard5 from "../WavyCard5";

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden py-6 md:py-1  z-30">
      <WavyCard5>
        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 h-full text-center flex flex-col justify-between items-center pt-4 sm:pt-4">

          <div className="text-center">
            <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-lora text-primaryTextColor mb-2">
              Get In <span className="text-primary">Touch</span>
            </h2>
          </div>

          <Image
            src="/images/common/get_in_touch.webp"
            alt="get_in_touch"
            className=" object-cover -mt-16 sm:-mt-20 mb-6 md:mb-20 w-80 h-80 sm:w-[500px] sm:h-auto"
            width={500}
            height={200}
            priority
          />

          <CTA url="/contact" label="Get In Touch" />
        </div>

        <Image
          src="/images/star.svg"
          alt="start"
          className="absolute left-[15%] top-[30%] object-cover z-50 w-16 h-16"
          width={60}
          height={50}
          priority
        />
      </WavyCard5>
    </section>
  );
};

export default GetInTouch;
