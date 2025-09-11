"use client"

import React from 'react'
import LogoutButton from '../LogoutButton'
import { FaBell } from 'react-icons/fa6'

const DashboardHeader = () => {
  return (
    <div className=" bg-white shadow-sm h-14 z-[100] w-full fixed flex items-center  ">
      <div className='flex justify-end w-[85%] gap-4 text-black items-center '>
        <span>
        <FaBell/>
        </span>
        <div className='me-4'>
        <LogoutButton />
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader