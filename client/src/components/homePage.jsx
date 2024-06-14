

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Mbale Detergents Inventory System</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Link to="/update-stock" className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
          Sell whole set
        </Link>
        <Link to="/individual-update" className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
          Sell Individual Chemicals
        </Link>
        <Link to="/SellreadyMade" className="px-4 py-2 w-full bg-green-500 text-white rounded hover:bg-blue-600">
          Sell Ready Made Product
        </Link>
        <Link to='/AddreadyMade' className="px-4 py-2 w-full bg-green-500 text-white rounded hover:bg-blue-600 ">
          Add stock for ready made products
        </Link>
        <Link to='/readymadetable' className="px-4 py-2 w-full bg-red-500 text-white rounded hover:bg-blue-600 ">
          View stock for ready made product
        </Link>
        <Link to="/view-stock" className="px-4 py-2 w-full bg-red-500 text-white rounded hover:bg-blue-600">
          View stock for chemicals sold
        </Link>

      </div>
    </div>
  );
};

export default Home;

