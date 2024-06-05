import React, { useState } from 'react';
import { addIndividualStock } from '../services/stockService.js';
import LoadingSpinner from './LoadingSpinner';

const chemicalOptions = [
  'CDE', 'CMC', 'Caustic', 'Chlorine', 'Color', 'DOD', 'Finesalt', 
  'Glycerine', 'HCL', 'IndustrialSalt', 'Magadi', 'NP9', 'PINE', 
  'Pearlizer', 'Pearls', 'Perfume', 'Ufacid', 'UndilutedKerrol', 'Ungeral'
];

const IndividualStockUpdateButton = () => {
  const [loading, setLoading] = useState(false);
  const [chemical, setChemical] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChemicalChange = (e) => {
    setChemical(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await addIndividualStock(chemical, quantity);
      console.log('Stock updated:', response);
      alert('Stock updated successfully!');
    } catch (error) {
      alert('Failed to update stock');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chemical">
        Chemical
      </label>
      <select
        id="chemical"
        value={chemical}
        onChange={handleChemicalChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select a chemical</option>
        {chemicalOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="quantity">
        Quantity
      </label>
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transform transition-transform hover:scale-105"
        >
          Update Stock
        </button>
      )}
    </div>
  );
};

export default IndividualStockUpdateButton;
