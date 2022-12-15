import React from "react";

export default function Header() {
  return (
    <header className="h-full w-full px-3 md:px-6 flex items-center justify-between dark:bg-surface-dark bg-white border-b border-borderColor dark:border-borderColorDark">
     <div className="font-bold text-2xl text-accent-light dark:text-accent-dark">Gled</div>
     <div className="flex box-border m-0 items-center flex-wrap">
     <div className="h-full mr-8">
        <a href="/signin" className=" dark:text-white text-textColor font-medium">Sign in</a>
       </div>
       <div className="h-full mr-8">
        <a href="/login" className="text-accent-light dark:text-accent-dark font-bold">Login</a>
       </div>
       <div className="h-full">
        <a href="about" className=" dark:text-white text-textColorSecondary font-medium">About Gled</a>
       </div>
      
     </div>
    </header>
  );
}
