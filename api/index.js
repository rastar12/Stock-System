import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import updateRoutes from './routes/stock.js'
import ShowRoutes from './routes/stock.js'

mongoose.connect("mongodb+srv://eugenechanzu:12345@cluster0.u4cht0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("connected to database");
}).catch((err)=>{
  console.log(err);
});


const app= express();
app.use(express.json());
app.use(cors());
app.listen(3000,()=>{
  console.log("connected to port 3000");
})

app.use('/api/stock',updateRoutes);
app.use('/api/stock',ShowRoutes);
