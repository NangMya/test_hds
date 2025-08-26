"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel = () => {
  const slides = [
    {
      title: "March 2024",
      subtitle: "Holiday Activities",
      image: "/images/our_people/activity1.webp",
      numbers: [3, 2, 1],
    },
    {
      title: "Month 2024",
      subtitle: "Team Football Match",
      image: "/images/our_people/activity2.webp",
      numbers: [],
    },
    {
      title: "January 2024",
      subtitle: "Company Anniversary",
      image: "/images/our_people/activity3.webp",
      numbers: [],
    },
    {
      title: "January 2024",
      subtitle: "Company Anniversary",
      image: "/images/our_people/activity3.webp",
      numbers: [],
    },
    {
      title: "January 2024",
      subtitle: "Company Anniversary",
      image: "/images/our_people/activity3.webp",
      numbers: [],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= slides.length - slidesPerPage ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? slides.length - slidesPerPage : prev - 1
    );
  };

  const visibleSlides = [];
  for (let i = 0; i < slidesPerPage; i++) {
    const slideIndex = (currentSlide + i) % slides.length;
    visibleSlides.push(slides[slideIndex]);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-12">
      <div className="flex transition-transform duration-500 ease-in-out">
        {visibleSlides.map((slide, index) => (
          <div
            key={`${currentSlide}-${index}`}
            className="w-1/3 flex-shrink-0 px-2 relative group"
          >
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-center text-white">
                <h2 className="text-sm mb-2 drop-shadow-md">{slide.title}</h2>
                <p className="text-md font-medium mb-6 drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute bottom-0 right-0 hover:bg-white/80 text-gray-800 rounded-full p-2  "
      >
        <BsArrowRight size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-0 right-12 hover:bg-white text-gray-800 rounded-full p-2  "
      >
        <BsArrowLeft size={20} />
      </button>
    </div>
  );
};

export default Carousel;
