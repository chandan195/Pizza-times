/* eslint-disable react/prop-types */
//import React from 'react'
import { useEffect,  useState } from "react";
const PaginationComponent = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,

  TotalPost,
}) => {
  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
// const pages = useMemo(()=>{
//   const numberOfPages = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
//     numberOfPages.push(i);
//   }
// },[])
  const pageLength = pages.length;

  useEffect(() => {
    let tempNumberOfPages = [];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (pageLength < 6) {
      tempNumberOfPages = pages;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageLength];
    } else if (currentPage === 4) {
      const sliced = pages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pageLength];
    } else if (currentPage > 4 && currentPage < pageLength - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = pages.slice(currentPage - 2, currentPage); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = pages.slice(currentPage, currentPage + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pageLength,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentPage > pageLength - 3) {
      // > 7
      const sliced = pages.slice(pageLength - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      //[1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // currentPage[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentPage(currentPage[pageLength - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(currentPage[3] + 2);
    } else if (currentPage === dotsLeft) {
      currentPage(currentPage[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentPage);
  }, [currentPage, pageLength, setCurrentPage]);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(totalPosts / postPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (TotalPost > postPerPage) {
    return (
      <>
        <div className="px-2">
          <button
            onClick={previousPage}
            className={currentPage > 1 ? " px-2 ml-2 " : "opacity-5 cursor-none"}
          >
            Prev
          </button>
          {
            arrOfCurrButtons.map((page, index) => {
              return (
                <button
                  className={
                    currentPage === page
                      ? " rounded-full px-2  ml-2 border border-white "
                      : " px-2 ml-2  rounded-full "
                  }
                  key={index}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}
          <button
            onClick={nextPage}
            className={
              currentPage < totalPosts / postPerPage
                ? " px-2 ml-2 "
                : "opacity-5 cursor-none"
            }
          >
            Next
          </button>
        </div>
      </>
    );
  }
};

export default PaginationComponent;
