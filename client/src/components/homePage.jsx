
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Mbale detergents Stock keeping system</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/update-stock" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Update Stock
        </Link>
        <Link to="/view-stock" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          View Stock
        </Link>
      </div>
    </div>
  );
};

export default Home;

