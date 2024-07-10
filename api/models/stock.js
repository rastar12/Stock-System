import mongoose from 'mongoose';


const stockSchema = new mongoose.Schema({
  Ungeral: { type: Number, default: 0 },
  Ufacid: { type: Number, default: 0 },
  IndustrialSalt: { type: Number, default: 0 },
  Caustic: { type: Number, default: 0 },
  CMC: { type: Number, default: 0 },
  CDE: { type: Number, default: 0 },
  Color: { type: Number, default: 0 },
  Perfume: { type: Number, default: 0 },
  Magadi: { type: Number, default: 0 },
  Chlorine: { type: Number, default: 0 },
  UndilutedKerrol: { type: Number, default: 0 },
  Finesalt: { type: Number, default: 0 },
  Glycerine: { type: Number, default: 0 },
  Pearlizer: { type: Number, default: 0 },
  HCL: { type: Number, default: 0 },
  DOD: { type: Number, default: 0 },
  NP9: { type: Number, default: 0 },
  PINE: { type: Number, default: 0 },
  Downy: { type: Number, default: 0 },
  BioDigester:{type: Number,default: 0},
  ToiletBalls: { type: Number, default: 0 },
  // added stock
  AddUngeral: { type: Number, default: 0 },
  AddUfacid: { type: Number, default: 0 },
  AddIndustrialSalt: { type: Number, default: 0 },
  AddCaustic: { type: Number, default: 0 },
  AddCMC: { type: Number, default: 0 },
  AddCDE: { type: Number, default: 0 },
  AddColor: { type: Number, default: 0 },
  AddPerfume: { type: Number, default: 0 },
  AddMagadi: { type: Number, default: 0 },
  AddChlorine: { type: Number, default: 0 },
  AddUndilutedKerrol: { type: Number, default: 0 },
  AddFinesalt: { type: Number, default: 0 },
  AddGlycerine: { type: Number, default: 0 },
  AddPearlizer: { type: Number, default: 0 },
  AddHCL: { type: Number, default: 0 },
  AddDOD: { type: Number, default: 0 },
  AddNP9: { type: Number, default: 0 },
  AddPINE: { type: Number, default: 0 },
  AddDowny: { type: Number, default: 0 },
  AddBioDigester:{type: Number,default: 0},
  AddToiletBalls: { type: Number, default: 0 }
}, { timestamps: true });

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;