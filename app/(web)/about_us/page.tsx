import About from "@/components/About/About";
import Intro from "@/components/About/Intro";
import OurPrinciple from "@/components/About/OurPrinciple";
import OurStory from "@/components/About/OurStory";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import { api } from "@/services/api";
import React from "react";

const page = async () => {
  const info = await api.getInfo();
  return (
    <WebsiteLayout footerData={info}>
      <section className="pt-8">
        <Intro />
        <About />
        <OurStory />
        <OurPrinciple />
      </section>
    </WebsiteLayout>
  );
};

export default page;
