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
import React from 'react'

const HomePage = () => {
  return (
   <WebsiteLayout>
    <section className="">
        <Hero/>
        {/* <WhoWeAre/>
        <WhatWeDo/>
        <OurWork/>
        <Team/>
        <OurClient/>
        <GetInTouch/>
        <JoinOurTeam/> */}
    </section>
    </WebsiteLayout>
  )
}

export default HomePage