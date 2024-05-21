import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import Spinner from "../../CommomData/SkeletonCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import { Navigation } from "swiper/modules";
import TourBookingForm from "../../component/Booking/TourBookingform";

const PlaceDetails = () => {
  const { id } = useParams();
  const [placeDetails, setPlaceDetails] = useState(null);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/places/${id}`);
        setPlaceDetails(response.data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  // if (!placeDetails) {
  //   return <Spinner />;
  // }

  return (
    <>
      <div className="px-4 md:px-20 mt-24 mb-[5rem] flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-[70%] flex-col">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {placeDetails?.img.map((img, index) => (
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
                  {placeDetails?.name}
                </h1>
              </motion.div>
            </div>
            <div className="flex items-center text-center gap-1 ">
              <ImLocation2  className="text-purple-600"/>
              <span className="text-sm text-gray-600 ">
                {placeDetails?.capital}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-1 ">
                <span className="text-sm text-gray-600 mt-5 ml-1 ">
                  {placeDetails?.about}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
        <TourBookingForm placeDetails={placeDetails}/>
      </div>
      </div>

      <div className="flex  justify-center bg-gray-50 py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
          >
            Popular Place In {placeDetails?.name}
          </motion.div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {placeDetails?.tourists.map((place) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="transition-all duration-500 hover:shadow-xl cursor-pointer shadow-xl rounded-lg p-4"
              >
                <div className="overflow-hidden">
                  <img
                    src={place.images}
                    alt={place.name}
                    className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                  />
                  <div className="flex flex-col gap-4 border-t-2 y-3 !mt-4">
                    <div className="flex justify-between items-center !mt-4">
                      <h3 className="text-lg font-semibold">{place.name}</h3>
                    </div>
                    <div className="flex justify-between items-center ">
                      <h3 className="text-sm font-semibold text-gray-600">{place.info}</h3>
                    </div>
                    
                    
                    <div className="flex justify-between">
                      <a href={`${place.location}`} className="text-purple-600 hover:text-blue-700 font-bold rounded">
                        See Location
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
