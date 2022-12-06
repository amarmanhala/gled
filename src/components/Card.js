import React from 'react'

export default function Card() {
  return (
    <div className="my-2 w-full h-24 dark:bg-surface-secondary-dark bg-surface-secondary-light border dark:border-border-dark rounded-lg text-white">
      <div className="flex flex-col select-none"><div className="flex justify-start"><h2 className="text-2xl font-bold p-3">👋🏻 Hi, &nbsp;<span className="dark:text-text-secondary-dark">Did you spend any money?</span></h2></div>
     <div className="flex justify-end"><h3 className="px-3 text-accent-dark font-bold">+ Add Transaction</h3></div> 
      </div>
    </div>
  )
}
