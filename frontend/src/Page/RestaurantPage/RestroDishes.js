import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import banner from '../../images/food_banner.jpg';
import { ImLocation2 } from "react-icons/im";
import dishGif from '../../images/dish.gif'
import Spinner from "../../CommomData/Spinner";

const RestroDishes = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/restaurants/${id}`);
        console.log("Fetched restaurant details:", response.data);
        setRestaurantDetails(response.data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (!restaurantDetails) {
    return <Spinner/>
  }

  return (
    <>
      <div className="px-4 md:px-20 mt-24 mb-[5rem] flex flex-col md:flex-row gap-10">
        <div className="w-full flex-col relative">
          <motion.img 
            src={banner} 
            className="h-[40vw] w-full mb-[34px] rounded-2xl mx-auto bg-contain" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 flex bottom-[25rem]  items-center justify-center">
            <motion.h1 
              className="text-white text-[6rem] font-bold bg-opacity-50 p-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {restaurantDetails.name}
            </motion.h1>
          </div>

          <div className="mb-[2.5rem] p-[2rem] rounded-lg border border-solid">
            <div className="flex justify-between">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-[1.5rem] mb-[1rem] font-bold">
                  {restaurantDetails.name}
                </h1>
              </motion.div>
            </div>
            <div className="flex items-center text-center gap-1 ">
              <ImLocation2 className="text-purple-600" />
              <span className="text-sm text-gray-600 ">
                {restaurantDetails.address}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-1 ">
                <span className="text-sm text-gray-600 mt-5 ml-1 ">
                  {restaurantDetails.cuisine}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-50 py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
          >
            Dishes at {restaurantDetails.name}
          </motion.div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {restaurantDetails.dishes.map((dish) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="transition-all duration-500 hover:shadow-xl cursor-pointer shadow-xl rounded-lg p-4"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                  />
                  <div className="flex flex-col gap-4 border-t-2 y-3 !mt-4">
                    <div className="flex justify-between items-center !mt-4">
                      <h3 className="text-lg font-semibold">{dish.name}</h3>
                    </div>
                    <div className="flex justify-between items-center ">
                      <h3 className="text-sm font-semibold text-gray-600">{dish.description}</h3>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-600 font-bold rounded">
                        ${dish.price}
                      </span>
                      <img src={dishGif} className="w-12 h-10"/>
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

export default RestroDishes;
