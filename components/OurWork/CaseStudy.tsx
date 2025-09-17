"use client";

import { WorkProp } from "@/services/api";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
type WorkProps ={
  works: WorkProp[]
}
const CaseStudy = ({works}:WorkProps) => {

  function useIsLargeScreen() {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsLarge(window.innerWidth >= 1024); 
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isLarge;
  }
  const [items, setItems] = useState(works);

  const isLargeScreen = useIsLargeScreen();
  const itemsToDisplay = isLargeScreen ? items : items.slice(0, 2);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setItems(items.slice(0, isMobile ? 2 : 4));
  }, [isMobile]);

  const handleNext = () => {
    setItems((currentItems) => {
      const [first, ...rest] = currentItems;
      return [...rest, first];
    });
  };
  // Function to handle moving the last item to the first position
  const handlePrev = () => {
    setItems((currentItems) => {
      // Get the last item
      const last = currentItems[currentItems.length - 1];
      const rest = currentItems.slice(0, currentItems.length - 1);
      return [last, ...rest];
    });
  };

  return (
    <div className="bg-white px-2 sm:px-6 py-0 sm:py-4 md:py-10 grid grid-cols-1 sm:grid-cols-5 min-h-[300px] max-h-[500px] mb-4 sm:mb-10">
      <div className="col-span-1 sm:col-span-2 px-2 sm:px-12">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>Similar Case Studies</p>
            <select className="border rounded-3xl px-4 py-2 focus:outline-none hover:outline-none my-4 cursor-pointer">
              <option value="hds_media">HDS Media</option>
            </select>
          </div>
          <div>
            <FaArrowRight size={35} className="-rotate-45" />
            <h1 className="font-lora font-semibold text-xl sm:text-4xl py-4 ">
              Successful works <br /> by our team.
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-3 p-0">
        <div className="flex justify-center items-center font-inter">
          <div className="relative w-full">
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              {itemsToDisplay.map((item, index) => {
                const isFirst = index === 0;

                const cardClasses = `
              relative shrink-0 transition-all duration-500 ease-in-out transform rounded-3xl overflow-hidden shadow-xl cursor-pointer
               h-64 z-10
              ${isFirst ? "w-52" : "w-1/3 grayscale hover:grayscale-0"}
                            lg:w-32 lg:w-40 lg:h-80
              ${
                isFirst
                  ? "lg:w-full lg:max-w-xs lg:z-20 lg:grayscale-0 lg:hover:grayscale-0"
                  : "lg:z-10"
              }
            `;

                return (
                  <div
                    key={item.id}
                    className={cardClasses}
                    onClick={() => {
                      setItems((currentItems) => {
                        const clickedIndex = currentItems.findIndex(
                          (i) => i.id === item.id
                        );
                        if (clickedIndex === 0) return currentItems;
                        const newItems = [...currentItems];
                        const [clickedItem] = newItems.splice(clickedIndex, 1);
                        newItems.unshift(clickedItem);
                        return newItems;
                      });
                    }}
                  >
                    <img
                      src={item.image as string}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white text-sm font-sans">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
