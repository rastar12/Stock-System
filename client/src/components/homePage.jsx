

import React from 'react';
import { Link } from 'react-router-dom';

const SellStockHome = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center uppercase">Sell </h1>
      <div className="flex flex-col items-center justify-center space-y-4">

        <Link to="/update-stock" className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
          Sell whole set chemicals
        </Link>
        <Link to="/individual-update" className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
          Sell Individual Chemicals
        </Link>
        <Link to="/SellreadyMade" className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
          Sell Ready Made Product
        </Link>
      </div>
    </div>
  );
};

export default SellStockHome;

