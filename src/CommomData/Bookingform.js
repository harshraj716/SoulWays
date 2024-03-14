import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BookingForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // Logic to submit form data
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 md:p-8"
      >
        <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="checkin" className="block text-sm font-semibold text-gray-700 mb-1">
              Check-In Date
            </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="checkout" className="block text-sm font-semibold text-gray-700 mb-1">
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Book Now
            </button>
            <p className="text-gray-500 text-sm">Secure booking - cancel anytime</p>
          </div>
        </form>
      </motion.div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-4">Your booking has been confirmed.</p>
            <div className="flex justify-between">
              <Link
                to="/"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Back to Home
              </Link>
              {/* <Link
                to="/booking-details"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                See Booking Details
              </Link> */}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
