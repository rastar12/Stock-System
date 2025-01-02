import mongoose from "mongoose"

{/**    'CDE', 'CMC', 'Caustic', 'Chlorine', 'Color', 'DOD', 'Finesalt', 
    'Glycerine', 'HCL', 'IndustrialSalt', 'Magadi', 'NP9', 'PINE', 
    'Pearlizer', 'Pearls', 'Perfume', 'Ufacid', 'UndilutedKerrol', 'Ungeral','Tolietballs','Downy' */}

const priceSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  buyingPrice:{
    type:Number,
    required:true
  },
  sellingPrice:{
    type:Number,
    required:true,
  }
},{timestamps:true})
    /*
const priceSchema=new mongoose.Schema({

  CDEbuyingPrice:{type: Number, default: 0 },
  CDEsellingPrice:{type: Number, default: 0 },
  CMCbuyingPrice:{type: Number, default: 0 },
  CMCsellingPrice:{type: Number, default: 0 },
  CausticbuyingPrice:{type: Number, default: 0 },
  CausticselllingPrice:{type: Number, default: 0 },
  ChlorinebuyingPrice:{type: Number, default: 0 },
  ChlorinesellingPrice:{type: Number, default: 0 },
  ColorbuyingPrice:{type: Number, default: 0 },
  ColorsellingPrice:{type: Number, default: 0 },
  DODbuyingPrice:{type: Number, default: 0 },
  DODsellingPrice:{type: Number, default: 0 },
  FinesaltbuyingPrice:{type: Number, default: 0 },
  Finesaltsellingrice:{type: Number, default: 0 },
  GlycerinebuyingPrice:{type: Number, default: 0 },
  GlycerinesellingPrice:{type: Number, default: 0 },
  HCLbuyingPrice:{type: Number, default: 0 },
  HCLsellingPrice:{type: Number, default: 0 },
  IndustrialSaltbuyingPrice:{type: Number, default: 0 },
  IndustrialsellingPrice:{type: Number, default: 0 },
  MagadibuyingPrice:{type: Number, default: 0 },
  MagadisellingPrice:{type: Number, default: 0 },
  NP9buyingPrice:{type: Number, default: 0 },
  NP9sellingPrice:{type: Number, default: 0 },
  PINEbuyingPrice:{type: Number, default: 0 },
  PINEsellingPrice:{type: Number, default: 0 },
  PearlizerbuyingPrice:{type: Number, default: 0 },
  PearlizersellingPrice:{type: Number, default: 0 },
  PearlsbuyingPrice:{type: Number, default: 0 },
  PearlssellingPrice:{type: Number, default: 0 },
  PerfumebuyingPrice:{type: Number, default: 0 },
  PerfumesellingPrice:{type: Number, default: 0 },
  UfacidbuyingPrice:{type: Number, default: 0 },
  UfacidsellingPrice:{type: Number, default: 0 },
  UndillutedKerrolbuyingPrice:{type: Number, default: 0 },
  UndillutedKerrolsellingPrice:{type: Number, default: 0 },
  UngeralbuyingPrice:{type: Number, default: 0 },
  UngeralsellingPrice:{type: Number, default: 0 },
  ToiletBallsbuyingPrice:{type: Number, default: 0 },
  ToiletBallssellingPrice:{type: Number, default: 0 },
  DownybuyingPrice:{type: Number, default: 0 },
  DownysellingPrice:{type: Number, default: 0 },
  
},{timestamps:true})
*/
const Price =mongoose.model("prices",priceSchema)

export default Price

