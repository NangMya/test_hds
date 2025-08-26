"use client"

import React from 'react'
import Hero from './Hero'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
import OurWork from './OurWork'
import Team from './Team'
import GetInTouch from './GetInTouch'
import JoinOurTeam from './JoinOurTeam'
import OurClient from './OurClient'
import WebsiteLayout from '../layouts/WebsiteLayout'

const Home = () => {
  return (
    <WebsiteLayout>
        <Hero/>
        <WhoWeAre/>
        <WhatWeDo/>
        <OurWork/>
        <Team/>
        <OurClient/>
        <GetInTouch/>
        <JoinOurTeam/>
    </WebsiteLayout>
  )
}

export default Home