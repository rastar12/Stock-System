import Payment from '../models/Payment.js'

export  const ShowPayment= async (req,res)=>{
  try {
    const payment= await Payment.find();
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const AddPayment= async(req,res)=>{
  const {paymentFor,amount} =req.body;
  const newPayment= new Payment({paymentFor,amount});

  try {
    await newPayment.save();
    res.status(201).json("Payment recorded succesfully");
  } catch (error) {
    res.status(500).json({message: error.message});
  }

};
