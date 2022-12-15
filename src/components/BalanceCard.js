import React from "react";

export default function BalanceCard() {
  return (
    <div className="my-2 px-4 py-2 md:px-6 md:py-4 w-full h-18 dark:bg-success-secondary-dark bg-success-secondary-light border dark:border-border-dark border-border-light rounded-lg text-white">
      <div className="flex select-none h-full justify-center items-center">
        <div className="flex justify-start">
          <h2 className="text-md md:text-xl font-semibold md:font-bold text-black dark:text-white">
            👋🏻 Hi, &nbsp;
            <span className="">
              You have balance of 
            </span>
            <span className="dark:text-success-fg-dark text-success-fg-light font-extrabold">&nbsp; $5,000</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
