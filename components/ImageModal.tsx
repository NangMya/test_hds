'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface SlideProps {
  title: string;
  subtitle: string;
  image: string;
  images: string[];
}

interface ImageModalProps {
  slide: SlideProps | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ slide, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!slide) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div 
        ref={modalRef} 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{slide.title}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-6">{slide.subtitle}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {slide.images.map((imgSrc, index) => (
              <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image 
                  src={imgSrc} 
                  alt={`${slide.title} image ${index + 1}`} 
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;