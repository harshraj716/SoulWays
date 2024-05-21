import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Spinner from "../../CommomData/SkeletonCard";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import Review from "../../component/UserReview/Review";
import { Navigation } from 'swiper/modules';
import HotelBookingForm from "../../component/Booking/HotelBookingform";
const HotelDetails = () => {
  const { id } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/hotels/${id}`);
        console.log(response)
        setHotelDetails(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotelDetails) {
    // return <Spinner />;
  }

  return (
    <div className="px-4 md:px-20 mt-24 mb-[5rem] flex flex-col md:flex-row  gap-10">
      <div className="w-full md:w-[70%] flex-col">
        <Swiper
            navigation={true} modules={[Navigation]} className="mySwiper"
        >
          {hotelDetails?.imgurl?.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full rounded-lg mb-[2.5rem]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mb-[2.5rem] p-[2rem] rounded-lg border border-solid">
          <div className="flex justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-[1.5rem] mb-[1rem] font-bold">
                {hotelDetails?.Hotel_name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    className={` w-4 h-4 text-yellow-300 ms-1 ${
                      i < hotelDetails?.Rating ? "text-red-500" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="flex items-center text-center gap-1 ">
            <ImLocation2 />
            <span className="text-sm text-gray-600 ">
              {hotelDetails?.Location}
            </span>
          </div>

          <div className="flex justify-between items-center mt-2">
            {/* <span className="text-md ml-1 font-bold text-gray-600 ">
              ₹ {hotelDetails?.Price}/per person
            </span> */}
            <span className="text-sm text-gray-600">
              {hotelDetails?.Discount}
            </span>
          </div>
        </div>
        <Review hotelDetails={hotelDetails}/>
      </div>
      <div className="w-full md:w-[30%]">
        <HotelBookingForm hotelDetails={hotelDetails}/>
      </div>
    </div>
  );
};

export default HotelDetails;


