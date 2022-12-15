import React from "react";

export default function LayoutBeta(props) {
  return (
    <div className="h-screen w-screen flex flex-col dark:bg-surface-dark">
      <header className="h-12 w-full px-6 flex items-center dark:bg-surface-dark bg-white border-b border-borderColor dark:border-borderColorDark">
        <div className="font-bold text-2xl text-accent-light dark:text-accent-dark">
          Gled
        </div>
      </header>
      <div className="flex flex-auto justify-center items-center">
        {props.children}
      </div>

      <footer className="h-12 w-full px-6 flex items-center justify-center dark:bg-surface-dark bg-white border-t border-borderColor dark:border-borderColorDark">
        <div className="text-sm text-textColorSecondary">
          Gled is a thing made by{" "}
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Amarpreet Singh
          </a>
        </div>
      </footer>
    </div>
  );
}
