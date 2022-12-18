import React from "react";

export default function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="w-full outline-none focus:ring ring-offset ring-accent-light dark:ring-accent-dark border border-inputBorder dark:border-borderColorDark rounded-lg p-3 text-textColor dark:text-white text-lg placeholder:text-placeholder dark:placeholder:text-borderColorDark bg-transparent font-semibold"
    ></input>
  );
}
