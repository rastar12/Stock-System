import mongoose from 'mongoose'

const paymentSchema=new mongoose.Schema({

  amount:{
    type:Number,
    required:true,
    default:0,
  },
  paymentFor:{
    type:String,
    required: true,
  },

}, {timestamps:true});

const Payment =mongoose.model("payments",paymentSchema);

export default Payment