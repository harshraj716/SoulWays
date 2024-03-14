'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const SwiperSlider = ({ slides }) => {
    return (
        <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,       
          }}
          // modules={[Pagination,FreeMode]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            880: {
              slidesPerView: 3,
            },
            1224: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>


        </div>
    );
  };
  
  export default SwiperSlider;


// {/* <div>
// <h1 className="text-gray-800 text-[3rem] font-bold md:text-[4rem] text-center md:font-extrabold">
//   {activeOption === "searchAll"
//     ? "Where to go?"
//     : `Where to ${activeOption}?`}
// </h1>
// </div>
//  {/* Desktop option */}
// <div className="hidden md:flex justify-center gap-6 text-gray-700 hover:text-gray-500">
// {options.map((option) => (
//   <div
//     key={option.id} 
//     className={`cursor-pointer  flex items-center relative  ${
//       activeOption === option.id ? "border-b-2 border-black" : ""
//     }`}
//     onClick={() => handleOptionClick(option.id)}
//   >
//     {option.icon}
//     <span className="ml-2 font-bold text-gray-800 ">
//       {option.label}
//     </span>
//     <div className="hover-border"></div>
//   </div>
// ))}
// </div>


// <div className="md:hidden  ">
// <Swiper
//   slidesPerView={3}
//   spaceBetween={20}
 
// >
//   {options.map((option) => (
//     <SwiperSlide key={option.id}>
//         <div>
//               <div
//         className={`cursor-border  flex w-60  items-center justify-center relative `}
//         onClick={() => handleOptionClick(option.id)}
//       >
//         {option.icon}
//         <span className="ml-2 font-bold text-gray-800">
//           {option.label}
//         </span>
//         <div className="hover-border"></div>
//       </div>
//         </div>
    
//     </SwiperSlide>
//   ))}
// </Swiper>
// </div>




// <img src={desktopBanner} className="md:rounded-2xl md:block hidden hover:opacity-90 box-shadow" alt="Home" />
// <img src={mobileBanner} className="md:rounded-2xl md:hidden block hover:opacity-90 " alt="Home" /> */}
