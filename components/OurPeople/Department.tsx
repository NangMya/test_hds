"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// const departments = [
//   {
//     title: "Production Departments",
//     members: 7,
//     img: "/images/our_people/dept1.webp",
//   },
//   {
//     title: "Media Department",
//     members: 4,
//     img: "/images/our_people/dept2.webp",
//   },
//   { title: "IT Department", members: 12, img: "/images/our_people/dept3.webp" },
// ];
const departments = [
  {
    id: 1,
    name: "IT Department",
    members: 12,
    image: "/images/our_people/dept2.webp",
  },
  {
    id: 2,
    name: "Marketing Department",
    members: 8,
    image: "/images/our_people/dept2.webp",
  },
  {
    id: 3,
    name: "Sales Department",
    members: 15,
    image: "/images/our_people/dept2.webp",
  },
  {
    id: 4,
    name: "HR Department",
    members: 6,
    image: "/images/our_people/dept2.webp",
  },
  {
    id: 5,
    name: "Finance Department",
    members: 9,
    image: "/images/our_people/dept2.webp",
  },
  {
    id: 6,
    name: "Operations Department",
    members: 14,
    image: "/images/our_people/dept2.webp",
  },
];
const Department = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % departments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % departments.length);
  };

  const goToPrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + departments.length) % departments.length
    );
  };

  return (
    <section className="pb-8 px-6   bg-white text-gray-800 text-center">
      <p className="text-lg pb-2">It's not about magic</p>
      <p className="text-4xl font-medium">It's about team work.</p>
      <div className="relative w-full overflow-hidden pt-4">
        <div className="flex w-full items-center justify-center transition-all duration-700 ease-in-out">
          {departments.map((department, index) => {
            const isMobileActive = index === activeIndex;

            // These items are visible on desktop
            const isDesktopVisible =
              index === activeIndex ||
              index === (activeIndex + 1) % departments.length ||
              index ===
                (activeIndex - 1 + departments.length) % departments.length;
            const isCenter =
              index === activeIndex ||
              index === (activeIndex + 1) % departments.length;
            // Use a responsive check to control visibility
            if (!isMobileActive && !isDesktopVisible) {
              return null;
            }

            return (
              <div
                key={department.id}
                className={`flex-shrink-0 transition-all duration-700 ease-in-out ${
                  isMobileActive
                    ? "w-full p-4"
                    :  isCenter ? "w-1/2 p-4" : "w-1/2 p-2 opacity-50"
                } md:opacity-100 md:w-1/2 lg:w-1/3 md:p-4 md:flex-row`}
              >
                <div className="bg-white rounded-xl shadow overflow-hidden h-full flex flex-col justify-between">
                  <div className="relative w-full h-40 md:h-64 flex items-center justify-center bg-gray-50">
                    <Image
                      src={department.image}
                      alt={`${department.name} character`}
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {department.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      | {department.members} team members
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8">
          <button
            onClick={goToPrev}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8">
          <button
            onClick={goToNext}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Department;
