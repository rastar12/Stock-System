import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewSales() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-center uppercase">Stock records </h1>
    <div className="flex flex-col items-center justify-center space-y-4">

      <Link to="/readymadetable" className="px-4 py-2 w-full bg-red-700 text-white rounded hover:bg-red-500 text-center">
       Stock Status
      </Link>
      <Link to="/account-status" className="px-4 py-2 w-full bg-red-700 text-white rounded hover:bg-red-500 text-center">
       Bank account status
      </Link>
    </div>
  </div>
  )
}
