import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import stockRoutes from './routes/stock.js';
import path from 'path';

mongoose.connect("mongodb+srv://eugenechanzu:12345@cluster0.u4cht0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/stock', stockRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
