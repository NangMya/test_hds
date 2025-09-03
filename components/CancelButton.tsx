import React from 'react'
import Link from 'next/link'
import { FaPlusSquare } from 'react-icons/fa'

type Props={
  url: string,
  label: string
}

const CancelButton = ({url,label}: Props) => {
  return (
    <Link

      href={url}
      className="py-2 px-4 rounded-lg bg-transparent text-primary border border-border hover:bg-transparent hover:text-second text-xs"
    > {label}
    </Link>
  )
}

export default CancelButton