import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBox from "../../component/HomeSection/SearchBox";
import usePagination from "../../context/usePagination";
import { motion, AnimatePresence } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import Spinner from "../../CommomData/Spinner";
import hotelgif from '../../images/hotels.gif';

const HotelCard = () => {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const resultsRef = useRef(null);

 const BASE_URL = process.env.REACT_APP_BASE_URL;


  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/hotels`);
        setHotels(response.data);
        setFilteredHotels(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    const filterHotels = () => {
      const filtered = hotels.filter(
        (hotel) =>
          hotel.Hotel_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.Location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      setFilteredHotels(filtered);
    };
    filterHotels();
  }, [searchQuery, hotels]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const {
    currentPage,
    currentItems,
    totalPages,
    pages,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(filteredHotels, 6);

  if (currentItems.length === 0) {
    return <div>Sorry No data found...</div>;
  }
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d5/77/rambagh-palace-exterior.jpg?w=1400&h=-1&s=1"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0 opacity-80 h-[120px]"></div>
        </div>
        <div className="container z-10 mt-[-4rem] lg:px-[7rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white lg:w-[60%] lg:text-[4rem] text-[3rem] flex items-start font-bold mb-8"
          >
            The whole world awaits.
          </motion.div>
          <div className="flex justify-center mb-10">
            <SearchBox setSearchQuery={handleSearch} placeholder='search for hotels...' />
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-50 py-10" ref={resultsRef}>
        <div className="container ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
          >
            Our Popular Hotels
          </motion.div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <AnimatePresence>
              {currentItems.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="transition-all duration-500 hover:shadow-xl cursor-pointer shadow-xl rounded-lg p-4"
                >
                  <div className="overflow-hidden">
                    <img
                      src={hotel.imgurl[0]}
                      alt={hotel.Hotel_name}
                      className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                    />
                    <div className="flex flex-col gap-4 border-t-2 y-3 !mt-4">
                      <div className="flex justify-between items-center !mt-4">
                        <h3 className="text-lg font-semibold">{hotel.Hotel_name}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 text-yellow-300 ms-1 ${
                                i < hotel.Rating ? "text-red-500" : "text-gray-300"
                              }`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-center gap-1 mt-2">
                        <ImLocation2 />
                        <span className="text-sm text-gray-600">{hotel.Location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg ml-1 font-semibold">₹{hotel.Price}</span>
                        <span className="text-sm text-gray-600">{hotel.Discount}</span>
                      </div>
                      <div className="flex justify-between">
                        <Link to={`/hotels/${hotel.id}`}>
                          <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            See Details
                          </button>
                        </Link>
                        <img src={hotelgif} className="w-12 h-10" alt="Hotel Gif"/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <ul className="flex">
          <li>
            <button
              onClick={() => prevPage()}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "bg-gray-300" : "bg-gray-200"
              } px-3 py-2 mx-1 rounded-md focus:outline-none`}
            >
              Prev
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => goToPage(page)}
                className={`${
                  currentPage === page
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } px-3 py-2 mx-1 rounded-md focus:outline-none`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => nextPage()}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages ? "bg-gray-300" : "bg-gray-200"
              } px-3 py-2 mx-1 rounded-md focus:outline-none`}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HotelCard;
