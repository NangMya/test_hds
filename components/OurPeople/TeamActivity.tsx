"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import WavyCard2 from "../WavyCard2";
import ImageModal from "../ImageModal";

 type SlideProps = {
  title: string;
  subtitle: string;
  image: string;
  images: string[];
};

const slides = [
  {
    title: "Project Alpha",
    subtitle: "A stunning portfolio piece.",
    image: "/images/our_people/activity1.webp",
    images: [
      "/images/our_people/activity1.webp",
      "/images/our_people/activity1.webp",
      "/images/our_people/activity1.webp",
    ],
  },
  {
    title: "Project Beta",
    subtitle: "Modern architecture design.",
    image: "/images/our_people/activity2.webp",
    images: [
      "/images/our_people/activity2.webp",
      "/images/our_people/activity1.webp",
      "/images/our_people/activity1.webp",
    ],
  },
  {
    title: "Project Gamma",
    subtitle: "Futuristic cityscapes.",
    image: "/images/our_people/activity3.webp",
    images: [
      "/images/our_people/activity3.webp",
      "/images/our_people/activity1.webp",
      "/images/our_people/activity1.webp",
    ],
  },
  {
    title: "Project Alpha",
    subtitle: "Futuristic cityscapes.",
    image: "/images/our_people/activity3.webp",
    images: [
      "/images/our_people/activity3.webp",
      "/images/our_people/activity1.webp",
      "/images/our_people/activity1.webp",
    ],
  },
];
const TeamActivity = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedSlide, setSelectedSlide] = useState<SlideProps | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
 
  const openModal = (slide:SlideProps) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
  };

  const visibleSlides = [];
  for (let i = 0; i < 3; i++) {
    visibleSlides.push(slides[(currentSlide + i) % slides.length]);
  }
  return (
    <section className=" overflow-hidden py-0 sm:py-16 md:py-1  z-0 mt-2">
      <WavyCard2 color="#F2F0F4">
        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 h-full text-center">
            <h2 className="text-center pt-[8rem] sm:pt-56 md:pt-48 mb-6 sm:mb-12 text-2xl sm:text-4xl font-lora text-primaryTextColor">
              Our Happy Times
            </h2>
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-2">
            <div className="flex transition-transform duration-500 ease-in-out">
              {visibleSlides.map((slide, index) => (
                <div
                  key={`${slide.title}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 relative group cursor-pointer"
                  onClick={() => openModal(slide)}
                >
                  <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-center text-white">
                      <h2 className="text-sm mb-2 drop-shadow-md">
                        {slide.title}
                      </h2>
                      <p className="text-md font-medium mb-6 drop-shadow-md">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {isModalOpen && (
              <ImageModal slide={selectedSlide} onClose={closeModal} />
            )}

            <div className="pt-2 flex justify-end gap-4">
              
              <button
                onClick={goToPrev}
                className=" hover:bg-primary text-gray-800 rounded-full p-2 group "
              >
                <BsArrowLeft size={20} className="group-hover:text-white" />
              </button>
              <button
                onClick={goToNext}
                className=" hover:bg-primary text-gray-800 rounded-full p-2 group  "
              >
                <BsArrowRight size={20} className="group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </WavyCard2>
    </section>
  );
};

export default TeamActivity;
