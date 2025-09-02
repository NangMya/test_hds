"use client"
import GetInTouch from '@/components/Home/GetInTouch'
import Hero from '@/components/Home/Hero'
import JoinOurTeam from '@/components/Home/JoinOurTeam'
import OurClient from '@/components/Home/OurClient'
import OurWork from '@/components/Home/OurWork'
import Team from '@/components/Home/Team'
import WhatWeDo from '@/components/Home/WhatWeDo'
import WhoWeAre from '@/components/Home/WhoWeAre'
import WebsiteLayout from '@/components/layouts/WebsiteLayout'
import LoadingOverlay from '@/components/LoadingOverlay'
import MeetTheTeam from '@/components/OurPeople/MeetTheTeam'
import React, { useEffect, useState } from 'react'
type InfoProps = {
  id: number;
  name: string;
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  map: string;
  facebook_url: string;
  linkedin_url: string;
  instagram_url: string;
  youtube_url: string;
  telegram_url: string;
  tiktok_url: string;
  showreel_pc: string | null;
  showreel_mb: string | null;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
};
const emptyInfo: InfoProps = {
  id: 0,
  name: "",
  email: "",
  phone1: "",
  phone2: "",
  address: "",
  map: "",
  facebook_url: "",
  linkedin_url: "",
  instagram_url: "",
  youtube_url: "",
  telegram_url: "",
  tiktok_url: "",
  showreel_pc: "",
  showreel_mb: "",
  created_by: "",
  updated_by: "",
  created_at: "",
  updated_at: "",
};
const HomePage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [info, setInfo] = useState(emptyInfo);
    const [error, setError] = useState("");
    useEffect(() => {
      setLoading(true);
        const fetchInfo = async () => {
          try {
            const response = await fetch("/api/web/home");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            setInfo(data);
          } catch (error) {
            setError("Failed to fetch work");
          } finally {
            setLoading(false);
          }
        };
        fetchInfo();
        // Register GSAP plugins.
        // gsap.registerPlugin(ScrollTrigger);
      }, []);
  return (
   <WebsiteLayout footerData={info}>
    {
      loading && <LoadingOverlay/>
    }
    <section className="">
        <Hero showreelMB={info.showreel_pc} showreelPC={info.showreel_pc} />
        <WhoWeAre/>
        <WhatWeDo/>
        <OurWork/>  
        <MeetTheTeam/>
        {/* <Team/> */}
        <OurClient/>
        <GetInTouch/>
        <JoinOurTeam/> 
        
    </section>
    </WebsiteLayout>
  )
}

export default HomePage