import React, { useState } from 'react';
import { addStock } from '../services/stockService.js';

const StockUpdateButton = ({ productType, label }) => {
  const [loading,setLoading]=useState(false);
  const handleClick = async () => {
   
    try {
      setLoading(true)
      const response = await addStock(productType);
      console.log('Stock updated:', response);
      alert(`${label} updated succesfully`);
      setLoading(false);
    } catch (error) {
      alert(`failed to ${label}`);
      setLoading(false)
    }
  };
  
  return (
    <button
     disabled={loading}
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transform transition-transform hover:scale-105"
    >
      {loading ? "loading..." : `${label}`}
    
    </button>
  );
};

export default StockUpdateButton;