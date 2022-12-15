import React from 'react'
import ListItem from './ListItem'

export default function List() {
  const DATA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,];
  return (
    <ul className="mt-4">
      {
        DATA.map((item) => {
         return ( <ListItem value={item}></ListItem> )
        })
      }
      
    </ul>
  )
}
