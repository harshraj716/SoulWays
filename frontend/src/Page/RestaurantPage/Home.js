import React from "react";
import { motion } from "framer-motion";
import newimage from '../../images/frontend_assets/header_img.png';
import MenuList from "./MenuList";
import RestaurantsCard from "./RestaurantList";

const Restaurant = () => {
  return (
    
    <div className="container mx-auto">
      <div className="relative">
      <motion.img 
        src={newimage} 
        className="h-[40vw] m-[34px] mx-auto bg-contain" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute flex flex-col items-start gap-4 max-w-[50%] bottom-[12%] left-[10vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h2 
          className="text-white font-bold text-sm md:text-[4rem] leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Order Your favourite Food here
        </motion.h2>
        <motion.p 
          className="text-white text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          "Welcome to our restaurant, where you can order your favorite food
          with ease. Choose from a wide selection of delicious dishes, carefully
          crafted to satisfy your cravings. Whether you're in the mood for
          something savory or sweet, our menu has something for everyone. Sit
          back, relax, and let us take care of the cooking. Place your order now
          and enjoy a delightful dining experience!"
        </motion.p>
        <motion.button 
          className="text-[#747474] font-bold px-4 py-2 rounded-md bg-white border-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          View Menu
        </motion.button>
      </motion.div>
      </div>
      <MenuList/>
      <RestaurantsCard/>
    </div>
  );
};

export default Restaurant;
