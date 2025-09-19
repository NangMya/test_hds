"use client"
import Image from 'next/image'
import React from 'react'

type jobTitleProp ={
  title:string | undefined,
  description:string | undefined,
}
const JobTitle = ({title,description}: jobTitleProp) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-10">
      <div className="">
        <div className="flex flex-row items-center gap-3 mb-6">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.49902 9.69141H6.5C7.31355 9.69028 8.14108 10.0296 8.77051 10.71L10.5967 12.6826L9.53223 13.832L7.74121 11.8975V11.8965L7.6084 11.7676C7.28875 11.486 6.90007 11.3453 6.50098 11.3438H6.49805C6.04128 11.3454 5.59916 11.5288 5.25781 11.8965V11.8975L3.46582 13.832L2.40039 12.6826L4.22754 10.71C4.857 10.0295 5.68593 9.69024 6.49902 9.69141ZM3.30762 4.80957C3.89944 5.44824 4.221 6.28632 4.25781 7.13184L4.26074 7.30078V7.30176C4.26175 8.2035 3.93871 9.10996 3.30762 9.79102L1.51465 11.7266L0.451172 10.5771L2.27832 8.60449V8.60352C2.61686 8.23627 2.77873 7.77108 2.78027 7.30176V7.29883C2.77874 6.82949 2.61687 6.36432 2.27832 5.99707V5.99609L0.451172 4.02344L1.51562 2.87402L3.30762 4.80957ZM12.5469 4.02246L10.7217 5.99609H10.7207C10.3818 6.3629 10.2213 6.82898 10.2197 7.29883V7.30176C10.2213 7.77102 10.3823 8.2363 10.7207 8.60352L10.7217 8.60449L12.5479 10.5771L11.4844 11.7256L9.69238 9.79102V9.79004C9.0614 9.10966 8.73817 8.20269 8.73926 7.30078V7.2998C8.73816 6.39789 9.06125 5.49068 9.69238 4.80957L11.4834 2.87402L12.5469 4.02246ZM10.5967 1.91699L8.77051 3.89062C8.14108 4.57094 7.31354 4.91031 6.5 4.90918H6.49902C5.68593 4.91034 4.857 4.57109 4.22754 3.89062L2.40039 1.91699L3.46484 0.767578L5.25684 2.70312V2.7041C5.59799 3.071 6.04144 3.25521 6.49805 3.25684H6.5C6.95611 3.25521 7.39881 3.07187 7.74023 2.7041L7.74121 2.70312L9.53223 0.766602L10.5967 1.91699Z" fill="#59585E" stroke="#59585E" stroke-width="0.662546" />
          </svg>

          <span className="px-4 pt-1 pb-2 text-xs uppercase border border-[#59585E] text-[#59585E] rounded-xl">
            Graphic
          </span>
          <span className="px-4 pt-1 pb-2 text-xs uppercase border border-[#59585E] text-[#59585E] rounded-xl">
            Designer
          </span>
        </div>
        <h1 className="font-lora text-4xl md:text-5xl lowercase">{title}</h1>
        <h2 className="font-lora text-4xl md:text-5xl opacity-50">needs in our team</h2>
        <div className="w-2 h-2 bg-black bg-opacity-50 rounded-full mt-12 hidden sm:block"></div>
        <p className="opacity-50 text-sm lowercase max-w-md pt-6 sm:pt-0 pb-6 sm:pb-0 text-justify">
          {description}
        </p>
      </div>
      <div className="bg-[#F6F6F6] rounded-lg border w-full flex items-end justify-center relative ">
        <Image
          src="/images/join_our_team/drawing.webp"
          alt="category"
          width={200}
          height={220}
          className="object-contain hidden sm:block"
        />
        <Image
          src="/images/common/illustration_1.png"
          alt="category"
          width={200}
          height={220}
          className="object-cover block sm:hidden scale-150 "
        />
      </div>
    </div>
  )
}

export default JobTitle