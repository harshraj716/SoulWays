import React from "react";
import { motion } from "framer-motion";
import { menu_list } from "../../images/frontend_assets/assets";

const MenuList = () => {
  return (
    <div className="container mx-auto my-8 p-4">
        <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold text-center mb-4">Explore Our Menu</h1>
      <p className="text-lg text-center mb-8">
        Dive into a world of culinary delights with our extensive menu. Each dish is crafted with the finest ingredients, blending traditional flavors with contemporary twists. Whether you're craving a hearty meal or a light snack, our menu promises a delectable experience for every palate. Explore our offerings and find your new favorite dish today!
      </p>
        </div>

      <div className="flex overflow-x-scroll space-x-4 p-4">
        {menu_list.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-48 h-48 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-opacity-50 bottom-4  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl font-bold">{item.menu_name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
