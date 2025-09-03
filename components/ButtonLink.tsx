import React from 'react'
import Link from 'next/link'
import { FaPlusSquare } from 'react-icons/fa'

type Props={
  url: string,
  label: string
}

const ButtonLink = ({url,label}: Props) => {
  return (
    <Link

      href={url}
      className="py-2 px-4 rounded-lg bg-primary text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
    >
      <FaPlusSquare size={20} className="inline pb-1" /> {label}
    </Link>
  )
}

export default ButtonLink