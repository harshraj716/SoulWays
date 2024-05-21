import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBox from "../../component/HomeSection/SearchBox";
import usePagination from "../../context/usePagination";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../../CommomData/Spinner";
import { ImLocation2 } from "react-icons/im";
import placegif from '../../images/place.gif'

const BASE_URL = "http://localhost:8000";
const MAX_LENGTH = 120;
const PlacesCard = () => {
  const [places, setPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/places`);
        setPlaces(response.data);
        setFilteredPlaces(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching places:", error);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  useEffect(() => {
    const filterPlaces = () => {
      const filtered = places.filter(
        (place) =>
          place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          place.capital.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlaces(filtered);
    };
    filterPlaces();
  }, [searchQuery, places]);

  const {
    currentPage,
    currentItems,
    totalPages,
    pages,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(filteredPlaces, 6);

  const toggleShowFullText = (index) => {
    setExpandedItems((prevExpandedItems) =>
      prevExpandedItems.includes(index)
        ? prevExpandedItems.filter((item) => item !== index)
        : [...prevExpandedItems, index]
    );
  };

  if (loading) {
    return (
      <div>
        <Spinner/>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-screen  flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0">
          <img
            src="https://www.chardham-tours.com/wp-content/uploads/2018/07/uttarakhand-tour-packages.jpg"
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
            <SearchBox setSearchQuery={setSearchQuery}  placeholder={"serch top desination and places..."} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[5rem]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold"
        >
          Top Destinations
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {currentItems.length === 0 ? (
            <div className="text-center ">
              <h1>Sorry ! no data found</h1>
            </div>
          ) : (
            <AnimatePresence>
              {currentItems.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="transition-all duration-500 hover:shadow-xl cursor-pointer shadow-xl rounded-lg p-4"
                >
                    <div className="overflow-hidden">
                      <img
                        src={place.img[0]}
                        alt={place.name}
                        className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-lg"
                      />
                    </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{place.name}</h3>
                    <div className="flex items-center text-center gap-1 mt-2">
                      <ImLocation2 />
                      <span className="text-sm text-gray-600">
                        {place.capital}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-md text-gray-600 ml-1">
                        {expandedItems.includes(index)
                          ? place.about
                          : place.about.slice(0, MAX_LENGTH)}
                        {place.about.length > MAX_LENGTH && (
                          <button
                            className="text-purple-500 ml-1"
                            onClick={() => toggleShowFullText(index)}
                          >
                            {expandedItems.includes(index)
                              ? "read less"
                              : "...read more"}
                          </button>
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between mt-5">
                    <Link to={`/places-to-visit/${place.id}`}>
                    <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                         See Popular Place
                      </button>
                      </Link>
                      <img src={placegif} className="w-12 h-12"/>
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

export default PlacesCard;
