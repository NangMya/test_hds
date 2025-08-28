"use client";
import React from "react";

type Props = {
  firstTitle: string;
  secondTitle: string;
};

const Heading = ({ firstTitle, secondTitle }: Props) => {
  return (
    <div className=" py-7 border-b-[1px] border-b-border w-full text-center ">
      <h1 className=" font-lora text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center">
        {firstTitle} <span className="text-primary">{secondTitle}</span>
      </h1>
    </div>
  );
};

export default Heading;
