import React from 'react'
import Search from './Search'

export default function Sidebar() {
  return (
    <div className="grid w-full grid-cols-4 gap-4 p-4">
         <div className="row-span-1 col-span-4"><Search /></div>
          
        </div>
  )
}
