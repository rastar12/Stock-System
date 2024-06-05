export const addStock = async (productType) => {
  try {
    const response = await fetch('/api/stock/UpdateStock', {
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

export const addIndividualStock = async (chemical, quantity) => {
  try {
    const response = await fetch('/api/stock/update-individual', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chemical, quantity }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding individual stock:', error);
    throw error;
  }
};
