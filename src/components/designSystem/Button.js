import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className={`bg-accent dark:bg-accent-dark w-full p-4 flex items-center justify-center text-white rounded-lg text-lg font-semibold`}>
      {props.children}
    </button>
  );
}
