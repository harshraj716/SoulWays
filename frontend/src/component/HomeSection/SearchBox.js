import React, { useState } from "react";

const SearchBox = ({ setSearchQuery, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setSearchQuery(''); 
    }
  };

  return (
    <div className="w-full  mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-700 dark:text-gray-800 "
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange} 
          required
        />
        <button
          type="button"
          onClick={handleSearch} // Trigger filtering on button click
          className="text-purple-500 bg-white absolute right-2.5 bottom-2.5 bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
