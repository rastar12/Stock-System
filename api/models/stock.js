import mongoose from 'mongoose';

const chemicalSchema = new mongoose.Schema({
  quantity: { type: Number, default: 0 },
  buyingPrice: { type: Number, default: 0 },
  sellingPrice: { type: Number, default: 0 }
}, { _id: false });

const stockSchema = new mongoose.Schema({
  Ungeral: chemicalSchema,
  Ufacid: chemicalSchema,
  IndustrialSalt: chemicalSchema,
  Caustic: chemicalSchema,
  CMC: chemicalSchema,
  CDE: chemicalSchema,
  Color: chemicalSchema,
  Perfume: chemicalSchema,
  Magadi: chemicalSchema,
  Chlorine: chemicalSchema,
  BioDigester: chemicalSchema,
  Pearls: chemicalSchema,
  UndillutedKerrol: chemicalSchema,
  FineSalt: chemicalSchema,
  Pearlizer: chemicalSchema,
  DOD: chemicalSchema,
  NP9: chemicalSchema,
  PINE: chemicalSchema,
  ToiletBalls: chemicalSchema,
  HCL: chemicalSchema
}, { timestamps: true });

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
