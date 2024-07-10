import mongoose from 'mongoose';


const StockReadyMadeSchema = new mongoose.Schema({
 LiquidDetergent:{type:Number, default:0},
 Downy:{type:Number, default:0},
 Jik:{type:Number, default:0},
 HandWash:{type:Number, default:0},
 LiquidAntiseptic:{type:Number, default:0},
 Shampoo:{type:Number, default:0},
 ToiletCleaner:{type:Number, default:0},
 AddLiquidDetergent:{type:Number, default:0},
 AddDowny:{type:Number, default:0},
 AddJik:{type:Number, default:0},
 AddHandWash:{type:Number, default:0},
 AddLiquidAntiseptic:{type:Number, default:0},
 AddShampoo:{type:Number, default:0},
 AddToiletCleaner:{type:Number, default:0},

}, { timestamps: true });

const StockReadyMade = mongoose.model('StockReadyMade', StockReadyMadeSchema);

export default StockReadyMade;