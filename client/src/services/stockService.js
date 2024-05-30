// stockService.js
import axios from 'axios'


export const addStock = async (productType) => {
  try {
    const response = await fetch('http://localhost:3000/api/stock/UpdateStocks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productType })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding stock:', error);
    throw error;
  }
};

// other service functions


export const getStock = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/stock/ShowStock');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error getting stock:', error);
    throw error;
  }
};
