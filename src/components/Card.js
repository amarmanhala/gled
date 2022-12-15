import React from "react";

export default function Card() {
  return (
    <div className="my-2 px-4 py-2 md:px-6 md:py-4 w-full h-24 dark:bg-surface-secondary-dark bg-surface-secondary-light border dark:border-border-dark border-border-light rounded-lg text-white">
      <div className="flex flex-col select-none h-full justify-between">
        <div className="flex justify-start">
          <h2 className="text-md md:text-xl font-semibold md:font-bold text-black dark:text-white">
            Did&nbsp;
            <span className="dark:text-text-secondary-dark text-text-secondary-light">
              you spend any money?
            </span>
          </h2>
        </div>
        <div className="flex justify-end">
          <h3 className="dark:text-accent-dark text-accent-light  font-bold text-sm md:text-lg">+ Add Transaction</h3>
        </div>
      </div>
    </div>
  );
}
