import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Full-width hero image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d2/d0/43/eb729c1e-9cbc-4385.jpg?w=800&h=-1&s=1"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        {/* Animated text overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold text-center bg-black bg-opacity-50"
        >
          Explore the World with SoulWays
        </motion.div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-2 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a4/4d/8c/caption.jpg?w=600&h=600&s=1"
                alt="About Us"
                className="w-[90%] rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
     
          <div className="order-1 md:order-2 flex flex-col justify-center">
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg">
              SoulWays is a travel company dedicated to providing unforgettable
              travel experiences to our customers. With a passion for adventure
              and exploration, we curate unique itineraries and offer exceptional
              service to ensure every journey is memorable.
            </p>
            <p className="mt-4 text-lg">
              Our team consists of experienced travelers and experts in the field
              of tourism. We are committed to delivering personalized service,
              safety, and sustainability in all our travel offerings.
            </p>
            </motion.div>
          </div>

          
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="order-1 md:order-1 flex flex-col justify-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg">
              SoulWays is a travel company dedicated to providing unforgettable
              travel experiences to our customers. With a passion for adventure
              and exploration, we curate unique itineraries and offer exceptional
              service to ensure every journey is memorable.
            </p>
            <p className="mt-4 text-lg">
              Our team consists of experienced travelers and experts in the field
              of tourism. We are committed to delivering personalized service,
              safety, and sustainability in all our travel offerings.
            </p>
            </motion.div>
          </div>

          {/* Right side */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a4/4d/8c/caption.jpg?w=600&h=600&s=1"
                alt="About Us"
                className="w-[90%] rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animation section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Discover</h3>
            <p>
              Explore new destinations and cultures with our carefully crafted
              travel packages.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Adventure</h3>
            <p>
              Embark on thrilling adventures and outdoor activities led by
              experienced guides.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Relaxation</h3>
            <p>
              Unwind and rejuvenate in luxurious accommodations and tranquil
              surroundings.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
