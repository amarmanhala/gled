import React from 'react'

export default function InputNumber(props) {
  return (
    <input onChange={props.onChange} placeholder={props.placeholder} type="number" min="1" className="w-full outline-none focus:ring ring-offset ring-accent-light dark:ring-accent-dark border border-inputBorder dark:border-borderColorDark rounded-lg p-3 text-textColor dark:text-white text-lg placeholder:text-placeholder dark:placeholder:text-borderColorDark bg-transparent font-semibold"></input>
  )
}
