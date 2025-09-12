"use client"

import React from 'react'
import LogoutButton from '../LogoutButton'
import { FaBell } from 'react-icons/fa6'

const DashboardHeader = () => {
  return (
    <div className="bg-white shadow-sm h-14 z-10 w-full fixed flex items-center justify-end">
        <div className='pe-4'>
        <LogoutButton />
        </div>
    </div>
  )
}

export default DashboardHeader