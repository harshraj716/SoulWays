import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import SwiperSlider from "../../CommomData/SwiperSlider";
import SearchBox from "../../component/HomeSection/SearchBox";
import { Link, useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Spinner from "../../CommomData/Spinner";

const HotelCard = () => {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [hotelsPerPage] = useState(6); // Number of hotels per page
  const [paginationRange, setPaginationRange] = useState(5); // Range of pagination buttons to display

  const BASE_URL = "http://localhost:3001";

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/hotels`);
        setHotels(response.data);
        setFilteredHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
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

  // Pagination Logic
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(
    indexOfFirstHotel,
    indexOfLastHotel
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!filteredHotels.length) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  // Calculate total number of pages
  const pageNumbers = Math.ceil(filteredHotels.length / hotelsPerPage);

  // Adjust pagination buttons based on current page
  let startPage = Math.max(1, currentPage - Math.floor(paginationRange / 2));
  let endPage = startPage + paginationRange - 1;
  if (endPage > pageNumbers) {
    endPage = pageNumbers;
    startPage = Math.max(1, endPage - paginationRange + 1);
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen mb-[15rem] flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
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
          <div class="flex justify-center mb-10">
            <SearchBox setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>
      {/* Hotel Cards */}
      <div className="flex container mx-auto my-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentHotels.map((hotel, index) => (
            <Link to={`/hotels/${hotel._id}`} key={index}>
              <div className="bg-peach-300 h-[650px] shadow-md hover:scale-300  rounded-lg p-4">
                <img
                  src={hotel.imgurl[0]}
                  alt={hotel.Hotel_name}
                  className="h-[400px] w-[400px] rounded-2xl object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{hotel.Hotel_name}</h3>
                <p className="text-sm text-gray-600 mb-2">{hotel.Location}</p>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {hotel.Discount}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{hotel.Price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center my-4">
        <ul className="flex">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "bg-gray-300" : "bg-gray-200"
              } px-3 py-2 mx-1 rounded-md focus:outline-none`}
            >
              <FaChevronLeft />
            </button>
          </li>
          {Array.from({ length: pageNumbers }, (_, i) => i + 1)
            .slice(startPage - 1, endPage)
            .map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } px-3 py-2 mx-1 rounded-md focus:outline-none`}
                >
                  {number}
                </button>
              </li>
            ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === pageNumbers}
              className={`${
                currentPage === pageNumbers ? "bg-gray-300" : "bg-gray-200"
              } px-3 py-2 mx-1 rounded-md focus:outline-none`}
            >
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotelCard;
