import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className="w-full p-4 bg-accent-light dark:bg-accent-dark text-white rounded-lg text-lg font-semibold">
      {props.children}
    </button>
  );
}
