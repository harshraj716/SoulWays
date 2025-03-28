import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";

const HotelBookingForm = ({ hotelDetails }) => {
 const BASE_URL = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();
  const { user } = useAuth();

  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    members: 1,
  });
  const [persons, setPersons] = useState(1);

  const calculateTotalPrice = () => {
    const pricePerPerson = parseInt(hotelDetails?.Price);
    const members = parseInt(bookingData.members);

    // Calculate the number of days between check-in and check-out
    const checkInDate = new Date(bookingData.checkInDate);
    const checkOutDate = new Date(bookingData.checkOutDate);
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (isNaN(daysDiff) || daysDiff <= 0) {
      return pricePerPerson * members;
    }

    return pricePerPerson * members * daysDiff;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const totalPrice = calculateTotalPrice();
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${BASE_URL}/api/booking`, {
        ...bookingData,
        hotelId: hotelDetails?.id,
        totalPrice,
        userId: user.id,
      });

      console.log("Booking successful:", response.data);
      toast.success("Your Tour booked successfully!");
      navigate('/user/hoteltour');
    } catch (error) {
      console.error("Error booking:", error);
      toast.error("Failed to book the tour. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleMembersChange = (e) => {
    const members = parseInt(e.target.value);
    setBookingData((prevData) => ({
      ...prevData,
      members,
    }));
    setPersons(members);
  };

  const pricePerPerson = parseInt(hotelDetails?.Price);
  const members = parseInt(bookingData.members);
  const checkInDate = new Date(bookingData.checkInDate);
  const checkOutDate = new Date(bookingData.checkOutDate);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const daysDiff = timeDiff / (1000 * 3600 * 24);

  const pricePerMembers = pricePerPerson * members;
  const totalPrice = isNaN(daysDiff) || daysDiff <= 0 ? pricePerMembers : pricePerMembers * daysDiff;

  return (
    <div className="p-[2rem] rounded-3xl border border-solid sticky top-20">
      <div className="flex items-center justify-between text-[1.1rem] mb-3 border-b-2">
        <h3 className="text-md ml-1 font-bold text-gray-600 ">
          ₹ {hotelDetails?.Price}
          <span className="text-sm text-gray-500 ml-1 font-medium">
            /per person
          </span>
        </h3>
        <div className="flex gap-2 items-center">
          <svg
            className={`w-4 h-4 text-yellow-300 ms-1 ${"text-red-500"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span>{hotelDetails?.Rating}</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold">Book Your Stay</h2>
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm"
            />
          </div>
          <div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              placeholder="Phone Number"
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm"
            />
          </div>
          <div>
            <input
              type="number"
              id="members"
              name="members"
              min="1"
              value={bookingData.members}
              onChange={handleMembersChange}
              placeholder="Members"
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="checkInDate"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Check-In Date
            </label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="checkOutDate"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              onChange={handleChange}
              className="block w-full rounded-lg p-[0.5rem] border border-solid text-[1rem] text-gray-500 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-3 justify-between">
            <div className="flex justify-between items-center text-gray-600">
              <div className="flex items-center">
                <h5>₹ {hotelDetails?.Price}</h5>
                <div className="flex items-center ml-1">
                  <RxCross2 /> <span className="ml-1 font-medium">{persons} persons</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                ₹ {pricePerMembers}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h5 className="text-md font-bold text-gray-800">Days</h5>
                <span className="ml-1 font-medium">{isNaN(daysDiff) || daysDiff <= 0 ? 1 : daysDiff}</span>
              </div>
              <span className="text-sm text-gray-500">
                ₹ {isNaN(daysDiff) || daysDiff <= 0 ? pricePerMembers : pricePerMembers * daysDiff}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h5 className="text-md font-bold text-gray-800">Total</h5>
              <span className="text-gray-800 text-sm font-bold">₹ {totalPrice}</span>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default HotelBookingForm;
