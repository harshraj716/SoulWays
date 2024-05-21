import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { destination } from "../../../CommomData/index";
import SwiperSlider from "../../../CommomData/SwiperSlider";
import { motion } from "framer-motion";

function DestinationCard() {


  return (
    <section className="w-full  absolute bottom-[-8rem] lg:px-10   cursor-pointer">
      <div className="mx-auto mb-8 hidden md:flex text-start px-14 lg:px-8">
        <h1 className="text-white font-bold lg:text-3xl text-2xl uppercase">
          <motion.span initial="hidden" animate="visible" >
            Top Vacation Destinations
          </motion.span>
        </h1>
      </div>
      <SwiperSlider
        slides={destination.map((testimonial, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
          
            className="flex w-full flex-col rounded-lg items-center"
          >
            <div className="relative w-[300px] md:w-[300px] h-[200px] rounded-lg overflow-hidden">
              <motion.img
                src={testimonial.image}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center lg:text-start lg:left-4">
              <motion.h2
                className="text-white  text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {testimonial.title}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      />
    </section>
  );
}

export default DestinationCard;
