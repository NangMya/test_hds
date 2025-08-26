"use client"
import React from 'react'

type Props ={
    showNav: boolean;
    closeNav : () => void;
}
const MobileNav = ({showNav, closeNav}: Props) => {
  return (
    <div>MobileNav</div>
  )
}

export default MobileNav