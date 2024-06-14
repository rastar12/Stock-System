// stockService.js


export const addStock = async (productType) => {
  try {
    const response = await fetch('/api/stock/UpdateStocks', {
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



export const getStock = async () => {
  try {
    const response = await fetch('/api/stock/ShowStock');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error getting stock:', error);
    throw error;
  }
};

// src/services/stockService.js



// Function to update individual stock items
export const addIndividualStock = async (chemical, quantity) => {
  const response = await fetch('/api/stock/update-individual', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ chemical, quantity }),
  });
  return response.json();
};
// function to update sales 

// function to add ready made 
export const ReadyMadeStock = async (product, quantity) => {
  const response = await fetch('/api/products/AddReadyMadeProducts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product, quantity }),
  });
  return response.json();
};