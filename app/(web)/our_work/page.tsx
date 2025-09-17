import Heading from "@/components/Heading";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import CaseStudy from "@/components/OurWork/CaseStudy";
import CaseStudyWrapper from "@/components/OurWork/CaseStudyWrapper";
import HeroSection from "@/components/OurWork/HeroSection";
import MeetingPoint from "@/components/OurWork/MeetingPoint";
import MeetingPointWrapper from "@/components/OurWork/MeetingPointWrapper";
import { api } from "@/services/api";
import React from "react";
export const metadata = {
  title: "Our Work | HDS",
  description: "Learn about our mission and team.",
};
const page = async() => {
  const info = await api.getInfo();
  return (
    <WebsiteLayout footerData={info}>
      <section className="py-14 font-lora">
        <Heading firstTitle="Successful " secondTitle="Works" />
        <HeroSection/>
        <MeetingPointWrapper/>
        {/* <MeetingPoint /> */}
        {/* <CaseStudy /> */}
        <CaseStudyWrapper/>
      </section>
    </WebsiteLayout>
  );
};

export default page;
