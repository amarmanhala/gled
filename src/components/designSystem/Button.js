import React from "react";

export default function Button(props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={` ${ props.disabled ? "bg-accentMuted dark:bg-accentMuted" : "bg-accent-light dark:bg-accent-dark" } w-full p-4 flex items-center justify-center text-white rounded-lg text-lg font-semibold`}>
      {props.children}
    </button>
  );
}
