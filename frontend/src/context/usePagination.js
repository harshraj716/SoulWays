import { useState } from 'react';

const usePagination = (totalItems, itemsPerPage, paginationRange = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(totalItems.length / itemsPerPage);

  let startPage = Math.max(1, currentPage - Math.floor(paginationRange / 2));
  let endPage = startPage + paginationRange - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - paginationRange + 1);
  }

  const pages = [...Array(endPage - startPage + 1).keys()].map((i) => startPage + i);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return {
    currentPage,
    currentItems,
    totalPages,
    startPage,
    endPage,
    pages,
    goToPage,
    nextPage,
    prevPage,
  };
};

export default usePagination;
