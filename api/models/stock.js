import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  Ungeral: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 205 },
    sellingPrice: { type: Number, default: 300 },
    profit: { type: Number, default: 0 }
  },
  Ufacid: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 325 },
    sellingPrice: { type: Number, default: 400 },
    profit: { type: Number, default: 0 }
  },
  IndustrialSalt: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 19 },
    sellingPrice: { type: Number, default: 40 },
    profit: { type: Number, default: 0 }
  },
  Caustic: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 152 },
    sellingPrice: { type: Number, default: 300 },
    profit: { type: Number, default: 0 }
  },
  CMC: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 146},
    sellingPrice: { type: Number, default: 1000},
    profit: { type: Number, default: 0 }
  },
  CDE: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 400 },
    sellingPrice: { type: Number, default: 1500 },
    profit: { type: Number, default: 0 }
  },
  Color: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 300 },
    sellingPrice: { type: Number, default: 2000 },
    profit: { type: Number, default: 0 }
  },
  Perfume: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 600 },
    sellingPrice: { type: Number, default: 2000 },
    profit: { type: Number, default: 0 }
  },
  Magadi: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 60 },
    sellingPrice: { type: Number, default: 500 },
    profit: { type: Number, default: 0 }
  },
  Chlorine: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 430 },
    sellingPrice: { type: Number, default: 500 },
    profit: { type: Number, default: 0 }
  },
  BioDigester: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 350 },
    sellingPrice: { type: Number, default: 700 },
    profit: { type: Number, default: 0 }
  },
  Pearls: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 110 },
    sellingPrice: { type: Number, default: 1600 },
    profit: { type: Number, default: 0 }
  },
  UndillutedKerrol: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 1000 },
    sellingPrice: { type: Number, default: 1400 },
    profit: { type: Number, default: 0 }
  },
  FineSalt: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 24 },
    sellingPrice: { type: Number, default: 60 },
    profit: { type: Number, default: 0 }
  },
 Pearlizer: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 400 },
    sellingPrice: { type: Number, default: 2000 },
    profit: { type: Number, default: 0 }
  },
  DOD: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 700 },
    sellingPrice: { type: Number, default: 1000 },
    profit: { type: Number, default: 0 }
  },
 NP9: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 500 },
    sellingPrice: { type: Number, default: 780 },
    profit: { type: Number, default: 0 }
  },
  PINE: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 500 },
    sellingPrice: { type: Number, default: 2000 },
    profit: { type: Number, default: 0 }
  },
  ToiletBalls: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 130 },
    sellingPrice: { type: Number, default: 250 },
    profit: { type: Number, default: 0 }
  },
  HCL: {
    quantity: { type: Number, default: 0 },
    buyingPrice: { type: Number, default: 136 },
    sellingPrice: { type: Number, default: 250 },
    profit: { type: Number, default: 0 }
  },

}, { timestamps: true });

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;