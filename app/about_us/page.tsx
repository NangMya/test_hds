"use client";
import About from "@/components/About/About";
import Intro from "@/components/About/Intro";
import OurPrinciple from "@/components/About/OurPrinciple";
import OurStory from "@/components/About/OurStory";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const page = () => {
  return (
    <WebsiteLayout>
      <section className="pt-14">
        <Intro />
        <About />
        <OurStory />
        <OurPrinciple />
      </section>
    </WebsiteLayout>
  );
};

export default page;
