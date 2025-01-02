import Stock from '../models/stock.js';

/*

const getObjectId = async () => {
  try {
    const objects = await Stock.find();
    const currentTime = new Date();
   

  } catch (error){

  } 
  }

 getObjectId();
 */
// to get the stock
export const ShowStock = async (req, res) => {
  try {
    const stock = await Stock.findOne();  // Fetch the single stock document
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// To update the stock
export const UpdateStock= async (req, res) => {
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
      "5litre-fabric-stain-remover": [
        { name: 'Magadi', quantity: 0.25 },
        { name: 'Caustic', quantity: 0.075 },
        { name: 'Chlorine', quantity: 0.125 }
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
        { name: 'IndustrialSalt', quantity: 0.175 },
        { name: 'HCL', quantity: 2 },
        { name: 'Color', quantity: 0.001 },
        { name: 'Perfume', quantity: 0.015 }
      ],
      "5litres-Downy":[
        {name:'Downy',quantity:0.5}
      ],
      "10litres-Downy":[
        {name:'Downy',quantity:1}
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
  
      selectedProduct.forEach(item => {
        stock[item.name] += item.quantity ;
      });
  
      await stock.save();
      res.status(200).json({ message: 'Stock updated successfully', stock });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

// to update individual Chemical
export const Individual= async (req, res) => {
  const { chemical, quantity } = req.body;

  try {
    const stock = await Stock.findById ("6667fd54d142be69f7a5660e"); 

    if (stock && stock[chemical] !== undefined) {
      stock[chemical] += parseFloat(quantity);
      await stock.save();
      res.status(200).json({ message: 'Stock updated successfully', stock });
    } else {
      res.status(400).json({ message: 'Invalid chemical name' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const DailyUpdate = async (req,res) => {
  try {
    const dailyUpdate = await Stock.findByIdAndUpdate(
      "6667fd54d142be69f7a5660e",
      req.body,
      {new: true}
    );
    res.status(200).json(dailyUpdate);
  } catch (error) {
    
  }
};