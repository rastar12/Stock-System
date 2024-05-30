// components/StockList.js
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const StockList = () => {
  const [stock, setStock] = useState(null);

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
        console.error('Error fetching stock:', error);
      }
    };

    fetchStock();
  }, []);

  if (!stock) {
    return <LoadingSpinner/>;
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Stock Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Chemical</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Quantity Used </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Ungeral</td>
              <td className="px-4 py-2">{stock.Ungeral}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Ufacid</td>
              <td className="px-4 py-2">{stock.Ufacid}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Industrial Salt</td>
              <td className="px-4 py-2">{stock.IndustrialSalt}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Caustic</td>
              <td className="px-4 py-2">{stock.Caustic}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">CMC</td>
              <td className="px-4 py-2">{stock.CMC}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">CDE</td>
              <td className="px-4 py-2">{stock.CDE}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Color</td>
              <td className="px-4 py-2">{stock.Color}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Perfume</td>
              <td className="px-4 py-2">{stock.Perfume}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Magadi</td>
              <td className="px-4 py-2">{stock.Magadi}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Chlorine</td>
              <td className="px-4 py-2">{stock.Chlorine}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Pearls</td>
              <td className="px-4 py-2">{stock.Pearls}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Undiluted Kerrol</td>
              <td className="px-4 py-2">{stock.UndilutedKerrol}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Fine Salt</td>
              <td className="px-4 py-2">{stock.Finesalt}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Glycerine</td>
              <td className="px-4 py-2">{stock.Glycerine}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Pearlizer</td>
              <td className="px-4 py-2">{stock.Pearlizer}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">HCL</td>
              <td className="px-4 py-2">{stock.HCL}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">DOD</td>
              <td className="px-4 py-2">{stock.DOD}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">NP9</td>
              <td className="px-4 py-2">{stock.NP9}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">PINE</td>
              <td className="px-4 py-2">{stock.PINE}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-semibold">Updated At</td>
              <td className="px-4 py-2 text-red-500">{new Date(stock.updatedAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/Home" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Go Back
        </Link>
      </div>
    </div>
  );

};

export default StockList;
