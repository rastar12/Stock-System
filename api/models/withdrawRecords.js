import mongoose from 'mongoose'

const WithdrawSchema=new mongoose.Schema({

  amount:{
    type:Number,
    required:true,
    default:0,
  },
  ReasonforWithdraw:{
    type:String,
    required: true,
  },

}, {timestamps:true});

const Withdraw =mongoose.model("withdraws",WithdrawSchema);

export default Withdraw;