

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Mbale Detergents Inventory System</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Link to="/update-stock" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Update Stock
        </Link>
        <Link to="/view-stock" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Stock
        </Link>
        <Link to="/individual-update" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Update Individual Stock
        </Link>
      </div>
    </div>
  );
};

export default Home;

