

export const getStock = async () => {
  try {
    const response = await fetch(`api/stock`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch stock:', error);
    throw error;
  }
};

export const addStock = async (productType) => {
  try {
    const response = await fetch(`api/stock/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productType })
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to add stock:', error);
    throw error;
  }
};

export const addIndividualStock = async (chemical, quantity) => {
  try {
    const response = await fetch(`api/stock/individual`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chemical, quantity })
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to add individual stock:', error);
    throw error;
  }
};
