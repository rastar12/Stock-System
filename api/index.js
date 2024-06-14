import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import updateRoutes from './routes/stock.js'
import ShowRoutes from './routes/stock.js'
import IndividualRoutes from './routes/stock.js'
import path from 'path'
import ShowReadyProductsRoutes from './routes/products.js'
import AddReadyMadeProductsRoutes from './routes/products.js'


mongoose.connect("mongodb+srv://eugenechanzu:12345@cluster0.u4cht0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("connected to database");
}).catch((err)=>{
  console.log(err);
});

 const __dirname =path.resolve();
const app= express();
app.use(express.json());
app.use(cors());
app.listen(3000,()=>{
  console.log("connected to port 3000");
})

app.use('/api/stock',updateRoutes);
app.use('/api/stock',ShowRoutes);
app.use('/api/stock',IndividualRoutes)

app.use('/api/products',ShowReadyProductsRoutes);
app.use('/api/products',AddReadyMadeProductsRoutes);


app.use(express.static(path.join(__dirname,"/client/dist")))

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
})