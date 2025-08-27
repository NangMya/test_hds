"use client"
import React from 'react'

type Props ={
    title:string
}

const Heading = ({title}:Props) => {
  return (
    <div className="py-7 border-t-border  border-b-[1px] border-b-border w-full text-center">
        <h1 className="font-semibold text-7xl font-lora">{title}</h1>
    </div>
  )
}

export default Heading