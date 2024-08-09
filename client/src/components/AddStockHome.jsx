import React from 'react'
import { Link } from 'react-router-dom'

export default function AddStockHome() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">Add Stock</h1>
    <div className="flex flex-col items-center justify-center space-y-4">
    <Link to="/Addchemicals" className="px-4 py-2 w-full bg-green-500 text-white rounded hover:bg-green-600">
        Add chemical stock
      </Link>
      <Link to='/AddreadyMade' className="px-4 py-2 w-full bg-green-500 text-white rounded hover:bg-green-600 ">
        Add stock for ready made products
      </Link>
    </div>
  </div>
  )
}
