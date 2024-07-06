"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function ImageSlider() {
  const slides = [
    {
      url: '/r1.jpg',
    },
    {
      url: '/r2.jpeg',
    },
    {
      url: '/r3.jpeg',
    },

    {
      url: '/r4.jpg',
    },
    {
      url: '/r5.webp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='relative max-w-[1000px] max-h-[600px] w-full mx-auto py-8 px-1/2 group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[40vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] bg-center bg-cover bg-no-repeat duration-500'
      ></div>

      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 sm:left-6 md:left-8 lg:left-10 text-xl sm:text-2xl md:text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/30 transition'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-4 sm:right-6 md:right-8 lg:right-10 text-xl sm:text-2xl md:text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/30 transition'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Pagination Dots */}
      <div className='absolute bottom-4 w-full flex justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <p className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 flex items-center justify-center text-white bg-black mx-1 mb-4 cursor-pointer hover:bg-primary transition ${slideIndex === currentIndex ? 'bg-primary' : ''} rounded-full text-xs md:text-sm lg:text-base`}>
              {slideIndex + 1}
            </p>


          </div>
        ))}
      </div>
    </div>


  );
}