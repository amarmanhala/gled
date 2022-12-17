import React, { useEffect, useRef, useState } from "react";

export default function Pagination(props) {
  const selectPage = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const pageNumbers = [];
  useEffect(() => {
    props.paginate(currentPage);
    console.log("Current page" + currentPage);
  }, [currentPage]);

  for (
    let i = 1;
    i <= Math.ceil(props.totalTransactions / props.transactionsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const next = () => {
    console.log(selectPage.current.value);
    if(selectPage.current.value === 13) { 
      console.log("NO MORE");
      setDisabled(true);
    }
    selectPage.current.value = selectPage.current.value + 1;

    setCurrentPage(selectPage.current.value);
    props.paginate(selectPage.current.value);
  };

  const previous = () => {
    console.log(pageNumbers.length);

    selectPage.current.value--;

    setCurrentPage(currentPage - 1);
    props.paginate(selectPage.current.value);
  };

  const onSelectChange = (value) => {
    console.log(value);
    setCurrentPage(value);
   console.log(currentPage);
  };

  return (
    <nav className="w-full p-2 overflow-scroll">
      <button disabled={currentPage === 1 ? true : false} onClick={previous}>
        Previous
      </button>
      <select
        onChange={(event) => onSelectChange(event.target.value)}
        ref={selectPage}
      >
        {pageNumbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <button
        disabled={disabled}
        onClick={next}
      >
        Next
      </button>
    </nav>
  );
}
