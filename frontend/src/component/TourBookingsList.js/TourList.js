import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { format } from "date-fns";
import Tour from "../HotelBookingList/Tour";
import { ImLocation2 } from "react-icons/im";
// import guide from "../../images/guide.gif";

const TourBookingList = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
 const BASE_URL = process.env.REACT_APP_BASE_URL;


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/user/tourbooking/${user.id}`
        );
        console.log(response);
        setBookings(response.data.TourBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [user.id]);

  return (
     
<motion.div
      className="h-screen mb-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Tour subpage="places" />
      
      <div className="container px-6 lg:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {bookings?.length > 0 &&
          bookings.map((booking, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={booking.TourBookingTouristPlace.images}
                  alt={booking.TourBookingTouristPlace.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-bold ml-1 text-orange">
                  {booking.TourBookingTouristPlace.name}
                </h2>
                <div className="flex justify-between ">
                  <div className="flex items-center text-center gap-1 ">
                    <ImLocation2 />
                    <span className="text-sm text-gray-600 ">
                      {booking.TourBookingPlace.name}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    {format(new Date(booking.tourDate), "yyyy-MM-dd")}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold">Guide Information</div>

                  <div className="flex justify-between items-center gap-1">
                    <span className="text-sm ">
                      {booking.TourBookingGuide.Guide_name}
                    </span>
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
                          {booking.TourBookingGuide.Rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm ">
                      {booking.TourBookingGuide.Experience} of experience
                    </span>
                    {/* <img src={guide} className="h-10 w-30" /> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
      </motion.div>
  );
};

export default TourBookingList;
