import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const CHEMICALS = [
  { name: 'Ungeral', buyingPrice: 185, sellingPrice: 300 },
  { name: 'Ufacid', buyingPrice: 310, sellingPrice: 400 },
  { name: 'IndustrialSalt', buyingPrice: 19, sellingPrice: 40 },
  { name: 'Caustic', buyingPrice: 152, sellingPrice: 300 },
  { name: 'CMC', buyingPrice: 146, sellingPrice: 1000 },
  { name: 'CDE', buyingPrice: 400, sellingPrice: 1500 },
  { name: 'Color', buyingPrice: 300, sellingPrice: 2000 },
  { name: 'Perfume', buyingPrice: 600, sellingPrice: 2000 },
  { name: 'Magadi', buyingPrice: 60, sellingPrice: 500 },
  { name: 'Chlorine', buyingPrice: 430, sellingPrice: 480 },
  { name: 'BioDigester', buyingPrice: 650, sellingPrice: 1100 },
  { name: 'Downy', buyingPrice: 550, sellingPrice: 650 },
  { name: 'UndilutedKerrol', buyingPrice: 1000, sellingPrice: 1400 },
  { name: 'Finesalt', buyingPrice: 24, sellingPrice: 60 },
  { name: 'Glycerine', buyingPrice: 900, sellingPrice: 2000 },
  { name: 'Pearlizer', buyingPrice: 900, sellingPrice: 2000 },
  { name: 'DOD', buyingPrice: 700, sellingPrice: 1000 },
  { name: 'NP9', buyingPrice: 500, sellingPrice: 780 },
  { name: 'PINE', buyingPrice: 1400, sellingPrice: 2000 },
  { name: 'ToiletBalls', buyingPrice: 130, sellingPrice: 250 },
  { name: 'HCL', buyingPrice: 136, sellingPrice: 250 },
];

const calculatePrices = (quantity, buyingPrice, sellingPrice) => {
  const buyingTotal = quantity * buyingPrice;
  const sellingTotal = quantity * sellingPrice;
  return { buyingTotal, sellingTotal, profit: sellingTotal - buyingTotal };
};

const StockList = () => {
  const [stock, setStock] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await fetch('/api/stock/ShowStock');
        if (!response.ok) {
          throw new Error('Failed to fetch stock');
        }
        const data = await response.json();
        setStock(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStock();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stock) {
    return <LoadingSpinner />;
  }

  let totalBuyingPrice = 0;
  let totalSellingPrice = 0;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Chemicals Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Chemical</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Quantity Used</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Quantity Remaining</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Buying Price</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Selling Price</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Profit</th>
            </tr>
          </thead>
          <tbody>
            {CHEMICALS.map(({ name, buyingPrice, sellingPrice }, index) => {
              const usedQuantity = stock[name] || 0;
              const addedQuantity = stock[`Add${name}`] || 0;
              const { buyingTotal, sellingTotal, profit } = calculatePrices(usedQuantity, buyingPrice, sellingPrice);

              totalBuyingPrice += buyingTotal;
              totalSellingPrice += sellingTotal;

              return (
                <tr key={index} className={`border-b ${index % 2 ? 'bg-gray-50' : ''}`}>
                  <td className="px-4 py-2">{name}</td>
                  <td className="px-4 py-2">{usedQuantity}</td>
                  <td className="px-4 py-2">{addedQuantity - usedQuantity}</td>
                  <td className="px-4 py-2">{buyingTotal}</td>
                  <td className="px-4 py-2">{sellingTotal}</td>
                  <td className="px-4 py-2">{profit}</td>
                </tr>
              );
            })}
            <tr>
              <td className="px-4 py-2 font-bold">Total</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 font-bold">{totalBuyingPrice}</td>
              <td className="px-4 py-2 font-bold">{totalSellingPrice}</td>
              <td className="px-4 py-2 font-bold">{totalSellingPrice - totalBuyingPrice}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-semibold">Updated At</td>
              <td className="px-4 py-2 text-red-500">{new Date(stock.updatedAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/Home" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default CombinedStockAndReadyMade;
