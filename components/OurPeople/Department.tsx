"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const departments = [
    { title: "Production Departments", members: 7, img: "/images/our_people/dept1.webp" },
    { title: "Media Department", members: 4, img: "/images/our_people/dept2.webp" },
    { title: "IT Department", members: 12, img: "/images/our_people/dept3.webp" },
  ];
const Department = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: { perView: 1.2, spacing: 15 },
        breakpoints: {
          '(min-width: 768px)': {
            slides: { perView: 3, spacing: 30 },
          },
        },
      });
  return (
    <section className="pt-16 pb-8 px-6 md:px-20 bg-white text-gray-800 text-center">
        <h6 className="text-primary uppercase text-xs tracking-tight font-semibold pb-4">DEPARTEMNTS</h6>
        <p className="text-lg pb-2">It's not about magic</p>
        <p className="text-4xl font-medium">It's about team work.</p>

        <div ref={sliderRef} className="keen-slider px-6 pt-6">
        {departments.map((dept, index) => (
          <div className="keen-slider__slide  rounded-2xl pt-6 text-center font-lora" key={index}>
            <Image priority={true}  src={dept.img} alt={dept.title} width={400} height={300} className="w-full h-[19rem] object-contain" />
            <h3 className="mt-4 font-semibold text-lg">{dept.title}</h3>
            <p className="text-sm text-gray-500">{dept.members} team members</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Department;
