import React, { useEffect, useRef, useState } from "react";
import ButtonSecondary from "./designSystem/ButtonSecondary";
import Select from "./designSystem/Select";

export default function Pagination(props) {
  const selectPage = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
  const pageNumbers = [];

  useEffect(() => {
    callPaginate(parseInt(currentPage));
    checkDisabled();
  }, [currentPage]);

  function callPaginate(value) {
    props.paginate(value);
  }
  for (
    let i = 1;
    i <= Math.ceil(props.totalTransactions / props.transactionsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const next = () => {
    setCurrentPage(parseInt(currentPage) + 1);
  };

  const previous = () => {
    setCurrentPage(parseInt(currentPage) - 1);
  };

  const onSelectChange = (value) => {
    setCurrentPage(parseInt(selectPage.current.value));
  };

  function checkDisabled() {
    if (currentPage === 1) {
      setIsPreviousDisabled(true);
      setIsDisabled(false);
    }
    if (currentPage > 1 && currentPage <= pageNumbers.length) {
      setIsPreviousDisabled(false);
      setIsDisabled(false);
    }
    if (currentPage === pageNumbers.length) {
      setIsDisabled(true);
      setIsPreviousDisabled(false);
    }
  }

  return (
    <nav className="w-full p-2 flex">
      <ButtonSecondary disabled={isPreviousDisabled} onClick={previous} size="medium">
        Prev
      </ButtonSecondary>
      <div className="px-6 flex items-center">
      <select
        onChange={(event) => onSelectChange(event.target.value)}
        ref={selectPage}
        value={currentPage}
        className="px-1 text-md text-textColor dark:text-white hover:bg-buttonSecondary dark:hover:bg-buttonSecondaryDark h-full rounded-md font-bold bg-transparent"
      >
        {pageNumbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <div className="flex items-center px-2 font-medium text-textColor dark:text-white"><span>of&nbsp;</span>{pageNumbers.length}</div>
      </div>
     
     
      <ButtonSecondary disabled={isDisabled} onClick={next} size="medium">
        Next
      </ButtonSecondary>
    </nav>
  );
}
