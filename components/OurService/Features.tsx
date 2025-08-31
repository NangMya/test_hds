"use client";

import Image from "next/image";
import React from "react";
import Container from "../Container";
import Link from "next/link";

const Features = () => {
  return (
    <section className="pt-2 pb-16 font-lora z-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-10 items-center">
          <div className="col-span-1 sm:col-span-2">
            <p className="text-xs hidden sm:block">SERVICES/FEAURES SERVICES</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4">
              We prioritize what matters
            </h1>
            <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              most your results.
            </h1>
          </div>
          <div className="w-full hidden sm:block">
            <Image
              src="/images/our_service/human.webp"
              alt="map"
              width={200}
              height={200}
              className="object-cover justify-self-end -me-24"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-between relativ items-start pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 text-left ">
            <div>
              <Link href="/our_service#hds_media">
                <Image
                  priority={true}
                  src="/images/home/hds_media.webp"
                  width={50}
                  height={50}
                  alt="HDS Media"
                />
              </Link>
              <h5 className="font-medium text-sm sm:text-md">ATL Media</h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                Planning and Buying TV, Radio, OOH, Cinema, etc.
              </p>
              <h5 className=" font-medium text-sm sm:text-md pt-2">
                PR Management
              </h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                PR Event Set-up, Press Invite & PR Tracking.
              </p>
            </div>
            <div>
              <Link href="/our_service#hds_digital">
                <Image
                  priority={true}
                  src="/images/home/hds_digital.webp"
                  width={60}
                  height={60}
                  alt="HDS Digital"
                />

              </Link>
              <h5 className=" font-medium text-sm sm:text-md pt-2">
                Digital Media
              </h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                Google Ad, Local Website, Programmatic, Social Media Page
                Management & Community Management
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-0 text-left items-center ">
            <div className="block sm:hidden">
              <Link href="/our_service#hds_talent">
                <Image
                  priority={true}
                  src="/images/home/hds_talent.webp"
                  width={60}
                  height={60}
                  alt="HDS Talent"
                />
              </Link>

              <h5 className=" font-medium text-sm sm:text-md pt-2">
                KOL/Influencer Management
              </h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                Mega, Macro, Micro, Nano Talents for Endorsement or Content
                Development.
              </p>
            </div>
            <div className="mt-0 sm:mt-8">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center mx-0 sm:mx-8 my-0 sm:my-12 md:my-0">
                <div className="absolute w-full h-full rounded-full border-2 border-primary border-opacity-70 animate-pulse"></div>
                <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-primary border-opacity-50 animate-pulse"></div>
                <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-primary border-opacity-30 animate-pulse"></div>
                <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-primary border-opacity-10"></div>
                <div className="bg-primary w-24 h-24  sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center">
                  <p className="text-white text-sm sm:text-lg font-medium">
                    Our Services{" "}
                  </p>
                  <Image
                    priority={true}
                    src="/logo.png"
                    alt="HDS"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 text-left  ">
            <div className="hidden sm:block">
              <Link href="/our_service#hds_talent">
                <Image
                  priority={true}
                  src="/images/home/hds_talent.webp"
                  width={60}
                  height={60}
                  alt="HDS Talent"
                />
              </Link>

              <h5 className=" font-medium text-sm sm:text-md pt-2">
                KOL/Influencer Management
              </h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                Mega, Macro, Micro, Nano Talents for Endorsement or Content
                Development.
              </p>
            </div>

            <div>
              <Link href="/our_service#hds_action">
                <Image
                  priority={true}
                  src="/images/home/hds_action.webp"
                  width={60}
                  height={60}
                  alt="HDS Action"
                />
              </Link>

              <h5 className=" font-medium text-sm sm:text-md pt-2">
                Below The Line
              </h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                Events, Activations, Concerts, Live Boxing, Trade Shows and
                Local & International Artists Scouting.
              </p>
            </div>
            <div>
              <Link href="/our_service#hds_studio">
                <Image
                  priority={true}
                  src="/images/home/hds_studio.webp"
                  width={60}
                  height={60}
                  alt="HDS Studio"
                />
              </Link>


              <h5 className=" font-medium text-sm sm:text-md pt-2">
                Production & Design
              </h5>
              <p className="opacity-50 text-[10px] sm:text-xs leading-5">
                TVC & Video Production, Motion Graphics & Animation, Graphic
                Design, Branding & Social Media Contents
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
