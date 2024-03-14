import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SwiperSlider from '../../CommomData/SwiperSlider';
import Spinner from '../../CommomData/Spinner';
import { motion } from 'framer-motion';
import BookingForm from '../../CommomData/Bookingform';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);

  const BASE_URL = 'http://localhost:3001';

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/hotels/${id}`);
        setHotelDetails(response.data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotelDetails) {
    return <Spinner />;
  }

  return (
    <div className="px-20 mt-[5rem] ">
        <div>
        <SwiperSlider slides={hotelDetails.imgurl.map((img, index) => (
        <img key={index} src={img} alt={`Image ${index + 1}`} className="w-full" />
      ))} />
        </div>
 
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto flex  mt-8 space-y-4"
      >
        <div>
        <h1 className="text-3xl font-bold">{hotelDetails.Hotel_name}</h1>
        <p className="text-lg font-semibold">Location: {hotelDetails.Location}</p>
        <p className="text-lg font-semibold">Price: {hotelDetails.Price}</p>
        <p className="text-lg font-semibold">Discount: {hotelDetails.Discount}</p>
        <p className="text-lg font-semibold">Rating: {hotelDetails.Rating}</p>
        <p className="text-lg font-semibold">Tags: {hotelDetails.tags.join(', ')}</p>
        </div>
      
        <div>
        <BookingForm/>
        </div>
    
      </motion.div>
    </div>
  );
};

export default HotelDetails;
