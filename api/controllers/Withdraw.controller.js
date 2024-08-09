import Withdraw from '../models/withdrawRecords.js'

export const AddWithdraw= async(req,res)=>{
  const {ReasonforWithdraw,amount} =req.body;
  const newWithdraw= new Withdraw({ReasonforWithdraw,amount});

  try {
    await newWithdraw.save();
    res.status(201).json("Withdraw recorded succesfully");
  } catch (error) {
    res.status(500).json({message: error.message});
  }

};

export const showWithdraws=async(req,res)=>{
  try {
    const withdraw= await Withdraw.find();
    res.status(200).json(withdraw);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}