"use client"
import Image from 'next/image'
import React from 'react'

const JobTitle = () => {
  return (
    <div className="grid grid-cols-2 gap-10 py-10">
          <div className="">
            <div className="flex flex-row items-center gap-3 mb-6">
              <Image
                src="/images/join_our_team/category_icon.svg"
                alt="category"
                width={20}
                height={20}
                className="inline"
              />
              <span className="px-4 pt-1 pb-2 text-xs uppercase border border-[#59585E] text-[#59585E] rounded-xl">
                Graphic
              </span>
              <span className="px-4 pt-1 pb-2 text-xs uppercase border border-[#59585E] text-[#59585E] rounded-xl">
                Designer
              </span>
            </div>
            <h1 className="font-lora text-5xl">graphic designer</h1>
            <h2 className="font-lora text-5xl opacity-50">needs in our team</h2>
            <div className="w-2 h-2 bg-black bg-opacity-50 rounded-full mt-12"></div>
            <p className="opacity-50 text-sm lowercase max-w-md">
              When you start a new porject, it's essential to choose the right
              road to move forward. Thankfully, we have been here for you to
              trun on a highway.
            </p>
          </div>
          <div className="bg-[#F6F6F6] rounded-lg border w-full flex items-end justify-center">
            <Image
              src="/images/join_our_team/drawing.webp"
              alt="category"
              width={200}
              height={220}
              className="object-contain "
            />
          </div>
        </div>
  )
}

export default JobTitle