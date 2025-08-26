"use client"

import Image from 'next/image'
import React from 'react'

const MeetingPoint = () => {
  return (
    <section className="relative">
    <div className="flex flex-row gap-12 absolute top-10 left-[13%]">
      <Image
        src="/images/our_work/1.webp"
        alt="mockup"
        width={100}
        height={100}
        className="cover w-32 h-32"
      />
      <Image
        src="/images/our_work/2.webp"
        alt="mockup"
        width={100}
        height={100}
        className="cover w-32 h-32"
      />
    </div>

    <div className="flex flex-row gap-12 absolute right-[13%] top-10">
      <Image
        src="/images/our_work/3.webp"
        alt="mockup"
        width={100}
        height={100}
        className="cover w-32 h-32"
      />
      <Image
        src="/images/our_work/4.webp"
        alt="mockup"
        width={100}
        height={100}
        className="cover w-32 h-32"
      />
    </div>
    <div className="flex flex-row justify-center gap-4">
      <Image
        src="/images/our_work/hand.webp"
        alt="Phone mockup"
        width={600}
        height={600}
        className="contain z-10"
      />
    </div>
    <div className=" text-center w-full absolute bottom-8 z-10">
      <h2 className="text-4xl font-bold  mb-2">
        Meeting Point
      </h2>
      <p className="text-sm font-light">Branding & Social Services</p>
    </div>
  </section>
  )
}

export default MeetingPoint