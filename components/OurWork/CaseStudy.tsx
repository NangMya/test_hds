"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
const imageData = [
  { id: 1, title: 'Boompay', subtitle: 'App development project', imageUrl: 'https://placehold.co/400x800/8B5CF6/ffffff?text=Boompay' },
  { id: 2, title: 'Graphic Design Mentorship', subtitle: 'Two days to go', imageUrl: 'https://placehold.co/400x800/F97316/ffffff?text=Design+Mentorship' },
  { id: 3, title: 'Creative Works', subtitle: 'by team', imageUrl: 'https://placehold.co/400x800/EC4899/ffffff?text=Creative+Works' },
  { id: 4, title: 'Team Projects', subtitle: 'Our Latest Work', imageUrl: 'https://placehold.co/400x800/10B981/ffffff?text=Team+Projects' },
  { id: 5, title: 'Product Launch', subtitle: 'New Products', imageUrl: 'https://placehold.co/400x800/EF4444/ffffff?text=Product+Launch' },
  { id: 6, title: 'Product Launch 6', subtitle: 'New Products', imageUrl: 'https://placehold.co/400x800/EF4444/ffffff?text=Product+Launch' },
  { id: 7, title: 'Product Launch 7', subtitle: 'New Products', imageUrl: 'https://placehold.co/400x800/EF4444/ffffff?text=Product+Launch' },
];

const CaseStudy = () => {
  const [activeImageId, setActiveImageId] = useState(imageData[0].id);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState('HDS Media');

  // Use a ref to store a map of image elements.
  // We'll map each item's ID to its DOM element.
  const imageRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Effect to scroll the active image into view.
  useEffect(() => {
    // Check if the ref for the active image exists.
    const activeImageElement = imageRefs.current[activeImageId];
    if (activeImageElement) {
      activeImageElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeImageId]);
  return (
    <div className="bg-white px-6 py-10 grid grid-cols-5 min-h-[300px] max-h-[500px] mb-10">
      <div className="col-span-2 px-12">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>Similar Case Studies</p>
            <select className="border rounded-3xl px-4 py-2 focus:outline-none hover:outline-none my-4 cursor-pointer">
              <option value="hds_media">HDS Media</option>
            </select>
          </div>
          <div>
            <FaArrowRight size={35} className="-rotate-45" />
            <h1 className="font-lora font-semibold text-4xl py-4 ">
              Successful works <br /> by our team.
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-3 p-0">
        <div className="mt-8 md:mt-0 md:flex w-full bg-green-200">

          <div
            className="flex overflow-x-hidden overflow-y-hidden
                     scrollbar-hide md:overflow-y-hidden snap-x snap-mandatory"
          >

            {imageData.map((item) => {
              const isActive = item.id === activeImageId;
              const cardClasses = `
              relative
              ${isActive ? 'w-80 h-[28rem] z-20 scale-100' : 'w-60 h-[28rem] z-10 scale-90'}
              rounded-3xl overflow-hidden
              shadow-lg transform transition-all duration-500
              hover:scale-105 cursor-pointer
              snap-center
              ${!isActive ? 'grayscale hover:grayscale-0 rotate-0' : 'rotate-0'}
            `;

              return (
                <div
                  key={item.id}
                  // Assign a ref to each individual element
                  // ref={(el: HTMLDivElement | null) => (imageRefs.current[item.id] = el)}

                  className={cardClasses}
                  onClick={() => setActiveImageId(item.id)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute bottom-6 left-6 text-white text-sm font-sans">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-300">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

  );
};

export default CaseStudy;
// <div className="bg-white px-6 py-10 grid grid-cols-5 min-h-[300px] max-h-[500px] mb-10">
//   <div className="col-span-2 px-12">
//     <div className="flex flex-col justify-between h-full">
//       <div>
//         <p>Similar Case Studies</p>
//         <select className="border rounded-3xl px-4 py-2 focus:outline-none hover:outline-none my-4 cursor-pointer">
//           <option value="hds_media">HDS Media</option>
//         </select>
//       </div>
//       <div>
//         <FaArrowRight size={35} className="-rotate-45" />
//         <h1 className="font-lora font-semibold text-4xl py-4 ">
//           Successful works <br /> by our team.
//         </h1>
//       </div>
//     </div>
//   </div>
//   <div className="col-span-3 p-4">
//     <div className="flex gap-4 w-full">
//       <div className="w-[40%] border rounded-3xl">
//         <Image
//           src="/images/our_work/image1.webp"
//           width={100}
//           height={50}
//           className="w-full h-[440px] object-cover rounded-3xl"
//           alt="Img1"
//         />
//       </div>
//       <div className="w-[30%] border rounded-3xl">
//         <Image
//           src="/images/our_work/image2.webp"
//           width={100}
//           height={50}
//           className="w-full h-[440px] object-cover rounded-3xl"
//           alt="Img1"
//         />
//       </div>
//       <div className="w-[20%] border rounded-3xl">
//         <Image
//           src="/images/our_work/image3.webp"
//           width={100}
//           height={50}
//           className="w-full h-[440px] object-cover rounded-3xl"
//           alt="Img1"
//         />
//       </div>
//       <div className="w-[10%] border rounded-3xl">
//         <Image
//           src="/images/our_work/image4.webp"
//           width={100}
//           height={50}
//           className="w-full h-[440px] object-cover rounded-3xl"
//           alt="Img1"
//         />
//       </div>
//     </div>
//   </div>
// </div>
