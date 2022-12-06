import React from "react";
import Search from "./Search";

export default function Header() {
  return (
    <header className="h-16 px-6 flex items-center justify-end bg-surface-secondary-dark">
     <div className="w-[320px]"><Search></Search></div>
    </header>
  );
}
