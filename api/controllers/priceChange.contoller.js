import Price from "../models/PriceChange.model.js"

export  const ShowPrices= async(req, res)=>{

  try {
    const price= await Price.findOne();
    res.status(200).json(price);

  } catch (error) {
    res.status(500).json({ message: error.message });  
   // console.log("Error");
   //next(error);
  }

}

export const UpdatePrices=async(req, res)=>{
  
    const prices =await Price.findById(req.params.id);
    try {
      const updatedPrice = await Price.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
      );
      res.status(200).json(updatedPrice);
    } catch (error) {
      next(error);
    }
  }


  export const CreatePrice= async(req,res)=>{
    const {Name,buyingPrice,sellingPrice} =req.body;
    const newPrice= new Price({Name,buyingPrice,sellingPrice});
  
    try {
      await newPrice.save();
      res.status(201).json("API pushed succesfully",);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  
  };


  export const getPrice= async (req,res,next)=>{

    try {
      const price=await Price.find();
      res.status(200).json(price);

    } catch (error) {
      res.status(500).json({message: error.message});
    }
  
  };
  

