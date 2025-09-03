import { api } from "@/services/api";
import GetInTouch from "@/components/Home/GetInTouch";
import Hero from "@/components/Home/Hero";
import JoinOurTeam from "@/components/Home/JoinOurTeam";
import OurClient from "@/components/Home/OurClient";
import OurWork from "@/components/Home/OurWork";
import Team from "@/components/Home/Team";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import LoadingOverlay from "@/components/LoadingOverlay";
import MeetTheTeam from "@/components/OurPeople/MeetTheTeam";
import React, { useEffect, useState } from "react";
import LoadingBar from "@/components/LadingBar";
export const metadata = {
  title: "HDS",
  description: "Default description for my website.",
  icons: {
    icon: "/hds.png",
  },
};


const Home = async() => {
  const [clients,info] = await Promise.all([
      api.getClients(),
      api.getHomeInfo()
    ]);
    console.log('info',info);
  
  return (
    <>
      <WebsiteLayout footerData={info}>
      <section className="">
        <Hero showreelMB={info?.showreel_pc} showreelPC={info?.showreel_pc} />
        <WhoWeAre />
        <WhatWeDo />
        <OurWork />
        <MeetTheTeam />
        <OurClient clients={clients} />
        <GetInTouch />
        <JoinOurTeam />
      </section>
      
    </WebsiteLayout>
    </>
  );
}
export default Home;
