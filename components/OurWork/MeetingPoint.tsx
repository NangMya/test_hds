"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import WavyCard1 from "../WavyCard1";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MeetingPoint = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "https://placehold.co/800x1200/FF5722/FFFFFF?text=Zakatplus",
      title: "Zakatplus",
      subtitle: "Branding",
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/800x1200/7C4DFF/FFFFFF?text=Boompay",
      title: "Boompay",
      subtitle: "App Development",
    },
    {
      id: 3,
      imageUrl:
        "https://placehold.co/800x1200/F57C00/FFFFFF?text=Two+days+to+go",
      title: "Two days to go",
      subtitle: "Branding & Social campaign",
    },
    {
      id: 4,
      imageUrl:
        "https://placehold.co/800x1200/42A5F5/FFFFFF?text=Gecreativ.com",
      title: "Gecreativ.com",
      subtitle: "Social Media",
    },
    {
      id: 5,
      imageUrl: "https://placehold.co/800x1200/FF5722/FFFFFF?text=Proposal",
      title: "Proposal",
      subtitle: "Google Campaign",
    },
    {
      id: 6,
      imageUrl: "https://placehold.co/800x1200/808080/FFFFFF?text=More+Content",
      title: "More Content",
      subtitle: "Placeholder",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const currentSlide = slides[activeIndex];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className=" overflow-hidden py-4 sm:py-16 md:py-1  z-0 mt-2 ">
      <WavyCard1>
        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 h-full text-center pt-0 sm:pt-10">
          <h1 className="text-2xl sm:text-4xl text-center">Our Recent Projects</h1>
          <div className="flex flex-col items-center justify-center w-full h-full mt-10 font-sans">
            <div className="relative w-full max-w-6xl flex justify-center items-center h-64 sm:h-72 md:h-80">
              {slides.map((slide, index) => {
                const offset = index - activeIndex;

                let transformStyle = "";
                let zIndex = 0;
                let opacity = 1;
                let rounded = "rounded-3xl";
                let shadow = "shadow-xl";

                if (offset === 0) {
                  transformStyle = "translateX(0) scale(1.1)";
                  zIndex = 30;
                  rounded = "rounded-3xl";
                  shadow = "shadow-2xl";
                } else if (offset === -1 || offset === slides.length - 1) {
                  transformStyle = "translateX(-70%) scale(0.9)";
                  zIndex = 20;
                } else if (offset === 1 || offset === -(slides.length - 1)) {
                  transformStyle = "translateX(70%) scale(0.9)";
                  zIndex = 20;
                } else if (offset === -2 || offset === slides.length - 2) {
                  transformStyle = "translateX(-120%) scale(0.8)";
                  zIndex = 15;
                } else if (offset === 2 || offset === -(slides.length - 2)) {
                  transformStyle = "translateX(120%) scale(0.8)";
                  zIndex = 15;
                } else {
                  transformStyle = `translateX(${offset * 100}%) scale(0.7)`;
                  opacity = 0;
                  zIndex = 10;
                }

                const cardStyle = `
                    absolute inset-0 mx-auto w-52 sm:w-80 h-full overflow-hidden transition-all duration-500 ease-in-out
                    bg-white transform ${shadow} ${rounded}
                  `;

                return (
                  <div className="" key={slide.id}>
                  <div
                    className={cardStyle}
                    style={{
                      transform: transformStyle,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                    <div className=" text-white z-20">
                      <h3 className="text-sm md:text-md font-medium">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-gray-300">{slide.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {currentSlide && (
              <div className="mt-6 text-center z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {currentSlide.title}
                </h2>
                <p className="text-md sm:text-lg text-gray-600">{currentSlide.subtitle}</p>
              </div>
            )}

            <div className="flex justify-center mt-4 space-x-4 z-40">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-colors duration-300"
                aria-label="Previous slide"
              >
                <BiChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-colors duration-300"
                aria-label="Next slide"
              >
                <BiChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
          {/* <div className="flex flex-row gap-12 absolute top-10 left-[13%]">
            <Image
              src="/images/our_work/1.webp"
              alt="mockup"
              width={100}
              height={100}
              className="cover w-32 h-32"
            />
            <Image
              src="/images/our_work/2.webp"
              alt="mockup"
              width={100}
              height={100}
              className="cover w-32 h-32"
            />
          </div> */}
        </div>
      </WavyCard1>
    </section>
  );
};

export default MeetingPoint;
