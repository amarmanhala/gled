import React from "react";

export default function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        className="w-full placeholder:text-text-secondary-light dark:placeholder:text-secondary-dark rounded-md h-8 border border-border-dark outline-none px-4 font-medium text-white text-sm focus:outline-accent-dark focus:outline-2 focus:outline-offset-0 bg-surface-dark"
      />
    </div>
  );
}
