import React from 'react'

export default function HelperText(props) {
  return (
    <span className="text-textColorMuted font-medium">&nbsp;{props.isVisible && props.text}</span>
  )
}
