import Heading from '@/components/Heading'
import OurClient from '@/components/Home/OurClient';
import WebsiteLayout from '@/components/layouts/WebsiteLayout';
import Features from '@/components/OurService/Features';
import HDSAction from '@/components/OurService/HDSAction';
import HDSDigital from '@/components/OurService/HDSDigital';
import HDSMedia from '@/components/OurService/HDSMedia';
import HDSStudio from '@/components/OurService/HDSStudio';
import HDSTalent from '@/components/OurService/HDSTalent';
import HeroSection from '@/components/OurService/HeroSection';
import React from 'react'
export const metadata = {
  title: "Our Service | HDS",
  description: "Learn about our mission and team.",
};
const page = () => {
  return (
    <WebsiteLayout>
    <section className='pt-14'>
        <Heading title="Our Services"/>
        <HeroSection/>
        <Features/>
        <HDSMedia/>
        <HDSTalent/>
        <HDSStudio/>
        <HDSDigital/>
        <HDSAction/>
        <OurClient/>
    </section>
    </WebsiteLayout>
  )
}

export default page