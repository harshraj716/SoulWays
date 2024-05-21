import React from "react";
import { motion } from "framer-motion";
import TravelCategory from "./TravelCategory";
import DestinationCard from "./DestinationsSlide/DestinationCard";
import Services from "./OurServices/Services";
import PlanTripCard from "./PlanTripCard";
import TestimonialSlider from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div className="relative h-screen mb-[15rem] flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600242466690-c1c04f081762?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0 opacity-80 h-[120px]"></div>
        </div>

        <div className="container z-10 mt-[-4rem] lg:px-[7rem] px-4">
          {/* Navbar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white lg:w-[60%] lg:text-[4rem] text-[3rem] flex items-start font-bold mb-8"
          >
            The whole world awaits.
          </motion.div>
          {/* Search Bar */}

          <TravelCategory />
        </div>

        {/* destination sections */}
        <DestinationCard />
      </div>
      <div>
        {/* services section */}
        <Services />
      </div>
      <div>
        <PlanTripCard />
      </div>

      <div>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Home;
