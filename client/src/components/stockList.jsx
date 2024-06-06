import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStock } from '../services/stockService.js'

const StockList = () => {
  const [stockData, setStockData] = useState(null);
  const [totalData, setTotalData] = useState(null);

  useEffect(() => {
    // Fetch stock data
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    try {
      const data = await getStock();
      setStockData(data.stock);
      setTotalData(data.totalData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  if (!stockData || !totalData) {
    return <div>Fetching data please wait...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Information</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Chemical</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Buying Price</th>
            <th className="py-2 px-4 border-b">Total Buying Price</th>
            <th className="py-2 px-4 border-b">Selling Price</th>
            <th className="py-2 px-4 border-b">Profit</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(stockData).map((chemical) => {
            if (chemical !== '_id' && chemical !== 'createdAt' && chemical !== 'updatedAt') {
              const { quantity, buyingPrice, sellingPrice } = stockData[chemical];
              const totalBuyingPrice = quantity * buyingPrice;
              const profit = (sellingPrice - buyingPrice) * quantity;
              return (
                <tr key={chemical}>
                  <td className="py-2 px-4 border-b">{chemical}</td>
                  <td className="py-2 px-4 border-b">{quantity}</td>
                  <td className="py-2 px-4 border-b">{buyingPrice}</td>
                  <td className="py-2 px-4 border-b">{totalBuyingPrice}</td>
                  <td className="py-2 px-4 border-b">{sellingPrice}</td>
                  <td className="py-2 px-4 border-b">{profit}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-4">Total Summary</h2>
      <table className="min-w-full bg-white border border-gray-200 mt-2">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Total Buying Price</th>
            <th className="py-2 px-4 border-b">Total Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">{totalData.totalBuyingPrice}</td>
            <td className="py-2 px-4 border-b">{totalData.totalProfit}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <Link to="/Home" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Go Back
      </Link>
    </div>
  );
};

export default StockList;
