import React from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "../../component/HomeSection/Testimonial";

const AboutPage = () => {
  return (
    <div className="relative bg-gray-100">
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

      {/* Who We Are section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a4/4d/8c/caption.jpg?w=600&h=600&s=1"
                alt="About Us"
                className="w-full h-80 rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-lg mb-4">
                At SoulWays, we believe travel is more than just visiting
                places; it’s about embarking on a journey that feeds your soul.
                Inspired by our own adventures and challenges, we are your
                dedicated travel companion committed to making every trip
                seamless and memorable. Whether you're navigating a bustling
                city, relaxing on a tranquil beach, or hiking through
                breathtaking landscapes, SoulWays ensures you have the guidance
                and support you need.
              </p>
              <p className="text-lg">
                We offer personalized itineraries crafted just for you, connect
                you with local experts who reveal the heart of each location,
                and provide a platform where travelers like you can share
                experiences and form meaningful connections. Our community
                thrives on the spirit of exploration and the joy of discovering
                hidden gems and must-see spots.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Mission section */}
      <div className="container mx-auto py-16 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-1 md:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-lg mb-4">
                Our mission at SoulWays is to inspire and empower travelers to
                explore the world in a meaningful way. We are committed to
                promoting sustainable tourism, supporting local communities, and
                fostering cultural exchange. We believe that travel can be a
                force for good, creating positive impacts for both travelers and
                the destinations they visit.
              </p>
              <p className="text-lg">
                We strive to provide exceptional travel experiences that
                prioritize the well-being of our planet and its people. Join us
                on our journey to make the world a more connected, compassionate,
                and curious place.
              </p>
            </motion.div>
          </div>

          <div className="order-2 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://www.holidify.com/images/bgImages/MATHURA.jpg"
                alt="Our Mission"
                className="w-full h-80 rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Team section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg text-center"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Harsh Raj</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg text-center"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Saurav Singh</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg text-center"
          >
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Mike Johnson</h3>
            <p className="text-gray-600">Head of Operations</p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className=" bg-white">
      <TestimonialSlider/>
      </div>

      {/* Animation section */}
      <div className="container mx-auto py-16 px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
