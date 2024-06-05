import StockUpdateButton from './StockUpdateButton.jsx';
import React from 'react';
import { Link } from 'react-router-dom';

const UpdateStock = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">MBALE DETERGENTS STOCK UPDATE</h1>
      <Link to="/Home" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Go Back
      </Link>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StockUpdateButton productType="20litre-detergent" label="Add 20 Litre Detergent" />
          <StockUpdateButton productType="10litre-detergent" label="Add 10 Litre Detergent" />
          <StockUpdateButton productType="10litre-fabric-stain-remover" label="Add 10 Litre Fabric Stain Remover" />
          <StockUpdateButton productType="10litre-hand-wash" label="Add 10 Litre Hand Wash" />
          <StockUpdateButton productType="10litre-shampoo" label="Add 10 Litre Shampoo" />
          <StockUpdateButton productType="10litre-liquid-antiseptic" label="Add 10 Litre Liquid Antiseptic" />
          <StockUpdateButton productType="10litre-toilet-cleaner" label="Add 10 Litre Toilet Cleaner" />
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
