import React from 'react';
import { FaUmbrellaBeach, FaMountain, FaCity, FaUtensils, FaShip, FaTree, FaCampground } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  draggable: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 8,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 6,
        arrows: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 4,
        arrows: false,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    }
  ]
};

const TravelCategory = () => {
  const categories = [
    { name: 'Beach', icon: <FaUmbrellaBeach /> },
    { name: 'Desert', icon: <FaTree /> },
    { name: 'Mountain', icon: <FaMountain /> },
    { name: 'Iconic Cities', icon: <FaCity /> },
    { name: 'Houseboat', icon: <FaShip /> },
    { name: 'Restaurant', icon: <FaUtensils /> },
    { name: 'Tropical', icon: <FaUmbrellaBeach /> },
    { name: 'Camping', icon: <FaCampground /> },
  ];

  return (
    <div>
      <h2 className="text-white text-[2rem] font-bold mb-4 items-center">Travel Categories</h2>
      <div className="flex flex-col justify-center cursor-pointer">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-center gap-6 text-white hover:text-white opacity-70">
                <div className='flex flex-col justify center items-center'>
                <span className="text-lg">{category.icon}</span>
              <span className="text-lg">{category.name}</span>
                </div>
      
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TravelCategory;
