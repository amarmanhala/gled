import React from "react";
import Button from "./designSystem/Button";
import List from "./List";
import Search from "./Search";

export default function Transactions() {

  return (
   
    <div className="w-full pt-6 overflow-scroll h-screen pt-2 px-1 relative scrollbar">
      <div className="flex w-full justify-between sticky top-0 dark:bg-surface-dark h-12 items-center">
        <div className="w-[280px]">
          <Search></Search>
          <Button>
            Demo
          </Button>
        </div>
        <div className="flex">
          <div className="ml-1.5">
            <Button label="Filters"></Button>
            
          </div>
          <div className="ml-1.5">
            <Button label="Export"></Button>
            
          </div>
        </div>
      </div>
      <List></List>
    </div>
    
  );
}
