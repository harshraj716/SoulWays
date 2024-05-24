import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { motion } from 'framer-motion';
import { testimonials } from '../../CommomData/index';
import travel from '../../images/flutes.gif';


const TestimonialSlider = () => {
  return (
    <div className='mb-20 px-4 lg:px-20'>
      <h1 className='text-gray-600 text-center text-[3rem] mb-8 font-bold'>Our Happy Client</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,       
        }}
        loop={true} 
        breakpoints={{
          1200: { slidesPerView: 3 },
          1180: { slidesPerView: 2 },
          708: { slidesPerView: 2 },
          700: { slidesPerView: 1 }
        }}
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              className="rounded-lg mb-10 h-[450px] bg-gray-100 shadow-xl p-6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col ">
                <div className='flex justify-between gap-10'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <img
                    src={travel}
                    alt='icons'
                    className="w-24 h-24 rounded-full mb-4"
                  />
                </div>
                <span className="text-lg font-bold mb-2">{testimonial.name}</span>
                <p className="text-start text-gray-600">{testimonial.description}</p>
                <div className="flex  flex-col gap-2 mt-10 items-start justify-start">
                  <span className="text-start  text-gray-700">{testimonial.tripplan}</span>
                  <div className="flex items-center ">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 mr-1 fill-current ${index < testimonial.rating ? 'text-purple-600' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.708 1.473c.128-.396.465-.675.871-.675.405 0 .743.279.872.675l1.211 3.739a1 1 0 0 0 .949.688l3.943.287c.439.032.632.588.293.884l-3.21 2.335a.999.999 0 0 0-.378 1.007l1.104 3.825c.165.573-.506 1.034-.992.688l-3.322-2.402a1 1 0 0 0-1.184 0l-3.322 2.402c-.486.352-1.157-.115-.992-.688l1.104-3.825a.999.999 0 0 0-.378-1.007L3.774 6.496c-.339-.296-.146-.852.293-.884l3.943-.287a1 1 0 0 0 .949-.688l1.211-3.739z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
