import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBox from "../../component/HomeSection/SearchBox";
import usePagination from "../../context/usePagination";
import { motion, AnimatePresence } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import { FaBowlFood } from "react-icons/fa6";
import Spinner from "../../CommomData/Spinner";
// import foodGif from '../../images/food.gif'

const BASE_URL = "http://localhost:8000";
const MAX_LENGTH = 120;

const RestaurantsCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/restaurants`);
        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const filterRestaurants = () => {
      const filtered = restaurants.filter(
        (restaurant) =>
          (restaurant.name &&
            restaurant.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          (restaurant.location &&
            restaurant.location
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      );
      setFilteredRestaurants(filtered);
    };
    filterRestaurants();
  }, [searchQuery, restaurants]);

  const {
    currentPage,
    currentItems,
    totalPages,
    pages,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(filteredRestaurants, 6);

  if (loading) {
    return (
      <div>
       <Spinner/>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto mt-[5rem]">
        <div className="flex w-[70%] mx-auto">
          <SearchBox
            setSearchQuery={setSearchQuery}
            placeholder={"serch your favourite restaurant..."}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
        >
          Top Restaurants
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {currentItems.length === 0 ? (
            <div className="text-center">
              <h1>Sorry! No data found</h1>
            </div>
          ) : (
            <AnimatePresence>
              {currentItems.map((restaurant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="transition-all duration-500 hover:shadow-xl cursor-pointer shadow-xl rounded-lg p-4"
                >
                  <div className="overflow-hidden">
                    <img
                      src={restaurant.img}
                      alt={restaurant.name}
                      className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between"> 
                      <h3 className="text-lg font-semibold">
                        {restaurant?.name}
                      </h3>
                      <div className="flex gap-2 items-center">
                      <san>{restaurant.rating}</san>
                        <svg
                          className={` w-4 h-4 text-yellow-300 ms-1 ${"text-red-500"}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <san>({restaurant.reviews})</san>
                      </div>
                    </div>
                    <div className="flex items-center text-center gap-1 mt-2">
                      <ImLocation2 />
                      <span className="text-sm text-gray-600">
                        {restaurant?.address}
                      </span>
                    </div>
                    <div className="flex items-center text-center gap-1 mt-2">
                      <FaBowlFood className="text-orange" />
                      <span className="text-sm text-gray-600">
                        {restaurant?.cuisine}
                      </span>
                    </div>
                    <div className="flex justify-between mt-5">
                      <Link to={`/restaurants/dishes/${restaurant.id}`}>
                        <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          See Dishes
                        </button>
                      </Link>
                         {/* <img src={foodGif} className="w-12 h-10"/> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
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
      </div>
    </>
  );
};

export default RestaurantsCard;
