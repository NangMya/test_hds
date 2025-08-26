"use client"

import React from 'react'

type Props  = {
    title: string
}
const FormTitle = ({title}:Props) => {
  return (
    <h1 className='text-primary font-lora text-lg font-bold uppercase'>
        {title}
    </h1>
  )
}

export default FormTitle