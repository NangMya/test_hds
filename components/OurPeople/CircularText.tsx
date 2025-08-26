"use client"

import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const CircularText = () => {
  return (
    <div className="relative w-28 h-28">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <path
          id="circlePath"
          d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
          fill="none"
        />
      </defs>
      <text fill="#2E2E2E" fontSize="14" fontWeight="bold" letterSpacing="2">
        <textPath
          href="#circlePath"
          startOffset="50%"
          textAnchor="middle"
        >
          VIEW OUR CLIENTS VIEW OUR CLIENTS VIEW OUR CLIENTS
        </textPath>
      </text>
    </svg>

    <div className="absolute inset-0 flex items-center justify-center">
        <BsArrowDown size={24}/>
    </div>
  </div>
  )
}

export default CircularText