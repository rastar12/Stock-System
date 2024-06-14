
import StockReadyMade from '../models/stockProduct.js'

//add ready made stock
export const AddReadyProducts= async (req, res) => {
    const { product,quantity } = req.body;

    try {
      const ReadyProduct = await StockReadyMade.findById("666bdbcc2c678ca006539b49");

      if (ReadyProduct && ReadyProduct[product] !== undefined) {
        ReadyProduct[product] += parseFloat(quantity);
        await ReadyProduct.save();
        res.status(200).json({ message: 'Product updated successfully', stock });
      } else {
        res.status(400).json({ message: 'Invalid name' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // show remaining ready made stock
  export const ShowReadyProducts = async (req, res) => {
    try {
      const ReadyProduct= await StockReadyMade.findOne();  // Fetch the single stock document
      res.status(200).json(ReadyProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };