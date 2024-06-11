import React from 'react';
import { addStock } from '../services/stockService.js';

const StockUpdateButton = ({ productType, label }) => {
  const handleClick = async () => {
    try {
      const response = await addStock(productType);
      console.log('Stock updated:', response);
      alert('Stock updated successfully!');
    } catch (error) {
      alert('Failed to update stock');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transform transition-transform hover:scale-105"
    >
      {label}
    </button>
  );
};

export default StockUpdateButton;