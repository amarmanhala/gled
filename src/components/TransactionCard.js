import React from 'react'

export default function TransactionCard(props) {
  return (
    <li className="w-full py-4 flex items-center justify-between text-xl text-textColor font-medium">
      <div>
        {props.title}
      </div>
      <div>
        $2
      </div>
    </li>
  )
}
