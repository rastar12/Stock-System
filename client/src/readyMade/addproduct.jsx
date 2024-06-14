
import React, { useState } from 'react';
import { ReadyMadeStock } from '../services/stockService.js';
import LoadingSpinner from '../components/LoadingSpinner.jsx'; // Import the LoadingSpinner component

const ProductOptions = [
'AddLiquidDetergent','AddHandWash','AddDowny','AddJik','AddLiquidAntiseptic','AddShampoo','AddToiletCleaner'
];

const AddReadyMade = () => {
  const [loading, setLoading] = useState(false); // State to manage loading
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChemicalChange = (e) => {
    setProduct(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true); // Set loading to true when the button is clicked
    try {
      const response = await ReadyMadeStock(product, quantity);
      console.log('Product updated:', response);
      alert('Product  Added successfully!');
    } catch (error) {
      alert('Failed to update product');
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };

  return (
    <div className="mt-8">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
        product
      </label>
      <select
        id="product"
        value={product}
        onChange={handleChemicalChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select a product</option>
        {ProductOptions.map((option) => (
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
        <LoadingSpinner /> // Display the loading spinner when loading
      ) : (
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transform transition-transform hover:scale-105"
        >
          Add stock
        </button>
      )}
    </div>
  );
};

export default AddReadyMade;