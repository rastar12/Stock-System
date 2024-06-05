import express from 'express';
import { 
  ShowStock, 
  UpdateStock, 
  Individual, 
  calculateIndividualProfitAndBuyingPrice, 
  calculateTotalProfitAndBuyingPrice 
} from '../controllers/stock.controller.js';

const router = express.Router();

router.get('/ShowStock', ShowStock);
router.post('/UpdateStock', UpdateStock);
router.post('/update-individual', Individual);
router.get('/stocks/profit/:chemical', calculateIndividualProfitAndBuyingPrice);
router.get('/totalProfit', calculateTotalProfitAndBuyingPrice);

export default router;
