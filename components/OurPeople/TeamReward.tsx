"use client"

import Image from 'next/image'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const TeamReward = () => {
  return (
    <section className='pt-14 font-lora'>
        <div className='grid grid-cols-2 gap-4'>

            <div className='px-16'>
            <h6 className='text-primary uppercase tracking-tight font-bold text-xs pb-5'>Team Rewards</h6>
            <h2 className='text-3xl font-bold mb-10'>Internal team awards.</h2>
            <div className='flex flex-row gap-4 my-6'>
                <button className='text-xs font-bold py-2 px-6 border border-black rounded-2xl'>This Month</button>
                <button className='text-xs font-bold py-2 px-6'>Last Month</button>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col justify-between h-44 border rounded-xl shadow bg-[#F6F6F6]'>
                    <Image priority={true}  src="/images/our_people/member1.webp" alt="member1" width={100} height={100} className='w-full h-full object-contain'/>
                </div>
                <div className='flex flex-col justify-between h-44 p-4 border rounded-xl shadow bg-[#F6F6F6]'>
                    <div className='flex justify-end'> <BsArrowUpRight/> </div>
                    <div>
                        <p className='text-sm '>Neo</p>
                        <p className='text-sm font-semibold'>Team's Favorite</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between h-44 p-4 border rounded-xl shadow bg-[#F6F6F6]'>
                    <div className='flex justify-end'> <BsArrowUpRight/> </div>
                    <div>
                        <p className='text-sm '>Joyce</p>
                        <p className='text-sm font-semibold'>Top sale of month</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between h-44 border rounded-xl shadow bg-[#F6F6F6]'>
                    <Image priority={true}  src="/images/our_people/member2.webp" alt="member1" width={100} height={100} className='w-full h-full object-contain'/>
                </div>
            </div>
            </div>
            <div className='flex justify-end'>
                <Image priority={true}  src="/images/our_people/team_reward.webp" alt='Team Reward' width={500} height={400} className=' object-contain self-end'/>
            </div>
        </div>
    </section>
  )
}

export default TeamReward