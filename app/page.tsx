import { api } from "@/services/api";
import GetInTouch from "@/components/Home/GetInTouch";
import Hero from "@/components/Home/Hero";
import JoinOurTeam from "@/components/Home/JoinOurTeam";
import OurClient from "@/components/Home/OurClient";
import OurWork from "@/components/Home/OurWork";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import MeetTheTeam from "@/components/OurPeople/MeetTheTeam";


export const metadata = {
  title: "HDS",
  description: "Default description for my website.",
  icons: {
    icon: "/logo.svg",
  },
};

const Home = async () => {
  const [ clients,info, members,works] = await Promise.all([
    api.getClients(),
    api.getInfo(),
    api.getMembers(),
    api.getOurWorks()
  ]);


  return (
    <>
      <WebsiteLayout footerData={info}>
        <section className="">
          <Hero showreelMB={info?.showreel_pc} showreelPC={info?.showreel_pc} />
          <WhoWeAre />
          <WhatWeDo />
          <OurWork works={works}/>
          <MeetTheTeam members={members} />
          <OurClient clients={clients} />
          <GetInTouch />
          <JoinOurTeam />
        </section>
      </WebsiteLayout>
    </>
  );
};

export default Home;
