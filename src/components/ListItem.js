import React from 'react'

export default function ListItem(props) {
  return (
    <li className="w-full flex justify-between items-center h-10 border-b dark:border-border-dark border-border-light text-text-secondary-dark font-semibold">
      <div>Coffee</div>
      <div>${props.value}</div>
    </li>
  )
}
