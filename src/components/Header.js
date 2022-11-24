import React from "react";

export default function Header() {
  return (
    <header className="h-12 mx-6 flex items-center justify-end">
      <nav className="dark:text-[#E6E1E5] text-[#1C1B1F] font-medium">
        <a href="#" className="ml-3">Create an account</a>
        <a href="#" className="ml-3">Login</a>
      </nav>
    </header>
  );
}
