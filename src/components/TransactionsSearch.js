import React from "react";
import SearchInput from "./designSystem/SearchInput";

export default function TransactionsSearch() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <SearchInput></SearchInput>
      </div>
      <div>
        <select className="h-12 text-textColor text-md">
          <option>Last 30 days</option>
        </select>
      </div>
    </div>
  );
}
