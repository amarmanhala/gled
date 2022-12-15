import React from 'react'

export default function ErrorPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-semibold mb-4">Sorry, The page you’re looking for can’t be found.</h1>
    <a href='/' className="text-accent-light dark:text-accent-dark font-bold underline">Go to site</a>
    </div>
  )
}
