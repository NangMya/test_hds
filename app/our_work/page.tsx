import Heading from "@/components/Heading";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import CaseStudy from "@/components/OurWork/CaseStudy";
import HeroSection from "@/components/OurWork/HeroSection";
import MeetingPoint from "@/components/OurWork/MeetingPoint";
import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Our Work | HDS",
  description: "Learn about our mission and team.",
};
const page = () => {
  return (
    <WebsiteLayout>
      <section className="py-14 font-lora">
        <Heading firstTitle="Successful " secondTitle="Works" />
        <HeroSection/>
        <MeetingPoint />
        <CaseStudy />
      </section>
    </WebsiteLayout>
  );
};

export default page;
