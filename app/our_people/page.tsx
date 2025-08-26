import Heading from '@/components/Heading'
import Team from '@/components/Home/Team';
import WebsiteLayout from '@/components/layouts/WebsiteLayout';
import Department from '@/components/OurPeople/Department';
import FounderSection from '@/components/OurPeople/FounderSection';
import TeamActivity from '@/components/OurPeople/TeamActivity';
import TeamReward from '@/components/OurPeople/TeamReward';
import React from 'react'
export const metadata = {
  title: "Our People | HDS",
  description: "Learn about our mission and team.",
};
const page = () => {
  return (
    <WebsiteLayout>  
    <section className='py-14'>
        <Heading title="Meet our talents"/>
        <FounderSection/>
        <Team/>
        <Department/>
        <TeamReward/>
        <TeamActivity/>
    </section>
    </WebsiteLayout>
  )
}

export default page