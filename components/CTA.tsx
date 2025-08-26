"use client";
import React from "react";

interface CTAProps{
    label: string,
    url: string,
}
const CTA: React.FC<CTAProps> = ({label, url}) => {
  return (
      <a  href={url}
        className="text-black font-bold inline-flex items-center text-xs focus:outline-none cursor-pointer">
        {label}{" "}
        <span className="ml-2 font-normal text-xl pb-1">&#8594;</span>
      </a>
  );
};

export default CTA;
