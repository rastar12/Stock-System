import Stock from '../models/stock.js';

// Get the stock
export const ShowStock = async (req, res) => {
  try {
    const stock = await Stock.findOne();
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the stock
export const UpdateStock = async (req, res) => {
  const { productType } = req.body;

  const productQuantities = {
    "20litre-detergent": [
      { name: 'Ungeral', quantity: 1 },
      { name: 'Ufacid', quantity: 0.5 },
      { name: 'IndustrialSalt', quantity: 1 },
      { name: 'Caustic', quantity: 0.025 },
      { name: 'CMC', quantity: 0.02 },
      { name: 'CDE', quantity: 0.02 },
      { name: 'Color', quantity: 0.01 },
      { name: 'Perfume', quantity: 0.015 }
    ],
    "10litre-detergent": [
      { name: 'Ungeral', quantity: 0.5 },
      { name: 'Ufacid', quantity: 0.25 },
      { name: 'IndustrialSalt', quantity: 0.5 },
      { name: 'Caustic', quantity: 0.0125 },
      { name: 'CMC', quantity: 0.01 },
      { name: 'CDE', quantity: 0.01 },
      { name: 'Color', quantity: 0.005 },
      { name: 'Perfume', quantity: 0.0075 }
    ],
    "10litre-fabric-stain-remover": [
      { name: 'Magadi', quantity: 0.5 },
      { name: 'Caustic', quantity: 0.15 },
      { name: 'Chlorine', quantity: 0.25 }
    ],
    "10litre-hand-wash": [
      { name: 'Ungeral', quantity: 0.75 },
      { name: 'Finesalt', quantity: 0.5 },
      { name: 'CDE', quantity: 0.175 },
      { name: 'Perfume', quantity: 0.025 },
      { name: 'Glycerine', quantity: 0.025 },
      { name: 'Color', quantity: 0.005 }
    ],
    "10litre-shampoo": [
      { name: 'Ungeral', quantity: 0.75 },
      { name: 'Finesalt', quantity: 0.5 },
      { name: 'Pearlizer', quantity: 0.025 },
      { name: 'CDE', quantity: 0.175 },
      { name: 'Color', quantity: 0.005 },
      { name: 'Perfume', quantity: 0.025 }
    ],
    "10litre-liquid-antiseptic": [
      { name: 'DOD', quantity: 0.25 },
      { name: 'NP9', quantity: 0.175 },
      { name: 'PINE', quantity: 0.05 },
      { name: 'Color', quantity: 0.002 }
    ],
    "10litre-toilet-cleaner": [
      { name: 'Ungeral', quantity: 0.25 },
      { name: 'HCL', quantity: 2 },
      { name: 'Color', quantity: 0.001 },
      { name: 'Perfume', quantity: 0.015 }
    ]
  };

  const selectedProduct = productQuantities[productType];

  if (!selectedProduct) {
    return res.status(400).json({ message: 'Invalid product type' });
  }

  try {
    const stock = await Stock.findOne();
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    for (const item of selectedProduct) {
      if (stock[item.name]) {
        stock[item.name].quantity += item.quantity;
      } else {
        return res.status(400).json({ message: `Chemical ${item.name} not found in stock` });
      }
    }

    await stock.save();
    res.status(200).json({ message: 'Stock updated successfully', stock });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update individual chemical stock
export const Individual = async (req, res) => {
  const { chemical, quantity } = req.body;

  try {
    const stock = await Stock.findOne();

    if (stock && stock[chemical]) {
      stock[chemical].quantity += parseFloat(quantity);
      await stock.save();
      res.status(200).json({ message: 'Stock updated successfully', stock });
    } else {
      res.status(400).json({ message: 'Invalid chemical name or stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Calculate profit for individual chemical
export const calculateIndividualProfitAndBuyingPrice = async (req, res) => {
  const { chemical, quantitySold, sellingPrice } = req.body;

  try {
    const stock = await Stock.findOne();

    if (stock && stock[chemical]) {
      const buyingPrice = stock[chemical].buyingPrice * quantitySold;
      const profit = sellingPrice - buyingPrice;
      stock[chemical].profit += profit;
      await stock.save();
      res.status(200).json({ message: 'Profit calculated successfully', stock });
    } else {
      res.status(400).json({ message: 'Invalid chemical name or stock not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Calculate profit for a batch of products
export const calculateTotalProfitAndBuyingPrice = async (req, res) => {
  const { productType, quantitySold } = req.body;

  const productQuantities = {
    "20litre-detergent": [
      { name: 'Ungeral', quantity: 1 },
      { name: 'Ufacid', quantity: 0.5 },
      { name: 'IndustrialSalt', quantity: 1 },
      { name: 'Caustic', quantity: 0.025 },
      { name: 'CMC', quantity: 0.02 },
      { name: 'CDE', quantity: 0.02 },
      { name: 'Color', quantity: 0.01 },
      { name: 'Perfume', quantity: 0.015 }
    ],
    "10litre-detergent": [
      { name: 'Ungeral', quantity: 0.5 },
      { name: 'Ufacid', quantity: 0.25 },
      { name: 'IndustrialSalt', quantity: 0.5 },
      { name: 'Caustic', quantity: 0.0125 },
      { name: 'CMC', quantity: 0.01 },
      { name: 'CDE', quantity: 0.01 },
      { name: 'Color', quantity: 0.005 },
      { name: 'Perfume', quantity: 0.0075 }
    ],
    "10litre-fabric-stain-remover": [
      { name: 'Magadi', quantity: 0.5 },
      { name: 'Caustic', quantity: 0.15 },
      { name: 'Chlorine', quantity: 0.25 }
    ],
    "10litre-hand-wash": [
      { name: 'Ungeral', quantity: 0.75 },
      { name: 'Finesalt', quantity: 0.5 },
      { name: 'CDE', quantity: 0.175 },
      { name: 'Perfume', quantity: 0.025 },
      { name: 'Glycerine', quantity: 0.025 },
      { name: 'Color', quantity: 0.005 }
    ],
    "10litre-shampoo": [
      { name: 'Ungeral', quantity: 0.75 },
      { name: 'Finesalt', quantity: 0.5 },
      { name: 'Pearlizer', quantity: 0.025 },
      { name: 'CDE', quantity: 0.175 },
      { name: 'Color', quantity: 0.005 },
      { name: 'Perfume', quantity: 0.025 }
    ],
    "10litre-liquid-antiseptic": [
      { name: 'DOD', quantity: 0.25 },
      { name: 'NP9', quantity: 0.175 },
      { name: 'PINE', quantity: 0.05 },
      { name: 'Color', quantity: 0.002 }
    ],
    "10litre-toilet-cleaner": [
      { name: 'Ungeral', quantity: 0.25 },
      { name: 'HCL', quantity: 2 },
      { name: 'Color', quantity: 0.001 },
      { name: 'Perfume', quantity: 0.015 }
    ]
    // Add other products here...
  };

  const selectedProduct = productQuantities[productType];

  if (!selectedProduct) {
    return res.status(400).json({ message: 'Invalid product type' });
  }

  try {
    const stock = await Stock.findOne();

    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    let totalBuyingPrice = 0;

    for (const item of selectedProduct) {
      if (stock[item.name]) {
        totalBuyingPrice += stock[item.name].buyingPrice * item.quantity * quantitySold;
      } else {
        return res.status(400).json({ message: `Chemical ${item.name} not found in stock` });
      }
    }

    const sellingPrice = stock[productType].sellingPrice * quantitySold;
    const totalProfit = sellingPrice - totalBuyingPrice;
    stock[productType].profit += totalProfit;
    await stock.save();
    res.status(200).json({ message: 'Total profit calculated successfully', stock });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
