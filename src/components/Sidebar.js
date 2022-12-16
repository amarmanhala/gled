import React from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import Transactions from "./Transactions";
import TransactionsFilters from "./TransactionsFilters";
import TransactionsSearch from "./TransactionsSearch";

export default function Sidebar() {
  return (
    <aside className="bg-white dark:bg-surface-dark h-full px-6 py-3">
      <TransactionsSearch></TransactionsSearch>
      <Transactions></Transactions>
      
    </aside>
  );
}
