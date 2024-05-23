import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios'
import { useAuth } from "../../context/AuthContext";


const TourBookingForm = ({ placeDetails }) => {
  const BASE_URL = "http://localhost:8000";
  const navigate= useNavigate();
  const { user } = useAuth();

  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    tourDate: "",
    tourGuideId: "",
    touristId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${BASE_URL}/api/booking/tour`, {
        ...bookingData,
        userId: user.id,
        placeId: placeDetails.id
      });
  
      console.log("Booking successful:", response.data);
      toast.success("Your tour booked successfully !");
      navigate('/user/tour-list')
    } catch (error) {
      console.error("Error booking:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "guide") {
      const selectedGuide = placeDetails.guides.find(guide => guide.id === value);
      setBookingData((prevData) => ({
        ...prevData,
        tourGuideId: selectedGuide ? selectedGuide.id : "",
      }));
    } else if (id === "touristPlace") {
      const selectedTourist = placeDetails.tourists.find(tourist => tourist.id === value);
      setBookingData((prevData) => ({
        ...prevData,
        touristId: selectedTourist ? selectedTourist.id : "",
      }));
    } else {
      setBookingData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  

  return (
    <div className="p-[2rem] rounded-3xl border border-solid sticky top-20">
      <div className="flex items-center justify-between text-[1.1rem] mb-3 border-b-2">
        <h3 className="text-md ml-1 font-bold text-gray-600 ">
            Namste Bharat
        </h3>
        <div className="flex gap-2 items-center">
          <svg
            className={` w-4 h-4 text-yellow-300 ms-1 ${"text-red-500"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <form className="grid grid-cols-1 gap-4 ">
          <h2 className="text-2xl font-bold ">Book Your Tour</h2>
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm "
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm "
            />
          </div>
          <div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              placeholder="Phone Number"
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm "
            />
          </div>

          <div>
            <label
              htmlFor="tourDate"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Tour Date
            </label>
            <input
              type="date"
              id="tourDate"
              name="tourDate"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm "
            />
          </div>
          <div>
            <label
              htmlFor="guide"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Select Guide
            </label>
            <select
              id="guide"
              name="guide"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm "
            >
              <option value="">Select a guide</option>
              {placeDetails?.guides.map((guide) => (
                <option key={guide.id} value={guide.id}>
                  {guide.Guide_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="touristPlace"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Select Tourist Place
            </label>
            <select
              id="touristPlace"
              name="touristPlace"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm "
            >
              <option value="">Select a place</option>
              {placeDetails?.tourists.map((tourist) => (
                <option key={tourist.id} value={tourist.id}>
                  {tourist.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3 justify-between">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default TourBookingForm;
