import React from "react";

export default function Link(props) {
  return (
    <a
      href={props.href}
      className="text-accent-light dark:text-accent-dark font-bold"
    >
      {props.children}
    </a>
  );
}
