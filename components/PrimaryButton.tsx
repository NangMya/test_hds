import React from 'react'


type ButtonType = "button" | "submit" | "reset";

type Props = {
  type: ButtonType;
  label: string
}
const PrimaryButton = ({ type, label }: Props) => {
  return (
    <button
      type={type}
      className="py-2 px-4 rounded-lg bg-primary text-white border border-primary hover:bg-transparent hover:text-primary text-xs"
    >
      {label}
    </button>
  )
}

export default PrimaryButton
