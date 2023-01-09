import React from 'react'

export default function Alert(props) {
  return (
    <div className="bg-red-200 text-red-900 font-semibold p-4 rounded-md">{props.message}</div>
  )
}
