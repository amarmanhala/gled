import React from 'react'

export default function Search() {
  return (
    <div>
      <input type="text" placeholder='Search anything...' className="w-full placeholder:text-text-secondary-light dark:placeholder:text-secondary-dark rounded-md h-10 border border-border-light dark:border-border-dark outline-none px-4 font-medium dark:text-white text-black text-md focus:outline-accent-dark focus:outline-2 focus:outline-offset-0 dark:bg-surface-dark bg-surface-light"  />
    </div>
  )
}
