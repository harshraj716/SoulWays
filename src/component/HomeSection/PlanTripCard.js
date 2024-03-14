import React from "react";
import { motion } from "framer-motion";
import Travel from '../../images/30189.jpg'

const PlanTripCard = () => {
  return (
    <div className="relative overflow-hidden lg:px-20 hidden lg:block mb-20">
      {/* Background Image */}
      <div className="relative cursor-pointer">
      <motion.div
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 0.98,opacity: 0.9  }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-full flex-col rounded-lg items-center"
          >
           
              <div className="relative w-full  rounded-xl  overflow-hidden">
                <motion.img
                   src={Travel}
                   alt="Background"
                   className="w-full h-auto rounded-xl brightness-50"
                  initial={{ opacity: 1, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </div>
     
   
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-bold text-[3rem] w-[60%] mb-4"
          >
            Plan your trip with travel experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl tracking-wider"
          >
            Our professional advisors can craft your perfect itinerary.
          </motion.p>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlanTripCard;
