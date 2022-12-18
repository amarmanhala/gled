import React from "react";

export default function Select(props) {
  return (
    <select
      className="bg-red-400"
      ref={props.ref}
      value={props.value}
      onChange={props.onChange}
    >
      <option key={props.key} value={props.value}>
        {props.children}
      </option>
    </select>
  );
}
