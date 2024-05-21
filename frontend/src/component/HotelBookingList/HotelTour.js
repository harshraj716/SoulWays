import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import BookingDates from './BookingDates';
import Tour from './Tour';

const HotelTour = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/user/hotelbooking/${user?.id}`);
        console.log(response)
        setBookings(response.data.HotelBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, [user?.id]);
  console.log(bookings)
  return (
    <div className='h-screen mb-10'>
      <Tour subpage="hotel"/>
      <div className='container  mx-auto grid grid-cols-1 sm:grid-cols-2  '>
        {bookings?.length > 0 && bookings.map((booking, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 overflow-hidden mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-[250px]">
                <img src={booking.hotels.imgurl[0]} alt={booking.hotels.Hotel_name} className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="py-3 pr-3 w-3/4">
                <div className='flex justify-between'>
                <h2 className="text-xl font-bold text-orange">{booking.hotels.Hotel_name}</h2>
                <div
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className={` w-4 h-4 text-yellow-300 ms-1 text-red-500 `}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="font-bold">
                          {" "}
                          {booking.hotels.Rating}
                        </span>
                      </div>
                    </div>
                </div>
                <h3 className="text-lg">{booking.hotels.Location}</h3>
                <BookingDates booking={booking} className="mb-2 mt-4 text-gray-500" />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    <div className="text-md font-semibold">Total Price: <span className='text-sm text-gray-500'>₹{booking.totalPrice}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HotelTour;
