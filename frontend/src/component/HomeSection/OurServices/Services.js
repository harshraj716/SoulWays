import React from 'react';
import { Link } from 'react-router-dom';
import SwiperSlider from '../../../CommomData/SwiperSlider';
import { motion } from "framer-motion";
import { services } from '../../../CommomData/index';

const Services = () => {
  return (
    <section className="w-full mb-10 lg:px-20  cursor-pointer">
      <div className=" mb-8  text-start px-10 lg:px-4">
        <h1 className="text-black font-bold lg:text-3xl text-2xl uppercase">
          <motion.span initial="hidden" animate="visible">
            Our services 
          </motion.span>
        </h1>
      </div>
      <SwiperSlider
        slides={services.map((service, index) => (
        <Link to={service.link} key={index}>
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 0.95 }}
            className="flex w-full flex-col rounded-lg items-center"
          >
           
              <div className="relative w-[300px] h-[200px] rounded-xl  overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={`service ${index + 1}`}
                  className="w-full h-full object-cover brightness-50"
                  initial={{ opacity: 1, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ opacity: 0.7 }} 
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
     
   
            <motion.div
              className="absolute bottom-0 left-2 right-0 p-4 text-center lg:text-start "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-white text-3xl  font-bold mb-4">
                {service.title}
              </h2>
            </motion.div>
          </motion.div>
          </Link>
        ))}
      />
    </section>
  )
}

export default Services;
