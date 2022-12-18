import React from "react";

export default function ButtonSecondary(props) {
  return (
    <button disabled={props.disabled}  onClick={props.onClick} className={`w-full p-2 flex items-center justify-center bg-buttonSecondary dark:bg-buttonSecondaryDark textColor dark:text-white rounded-lg font-semibold ${props.disabled && "text-textColorMuted dark:text-textColorMuted"} ${props.size === "medium" && "text-md" } ${props.size === "large" && "text-lg" }`}>
      {props.children}
    </button>
  );
}
