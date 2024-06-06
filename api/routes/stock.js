
import express from 'express';
import {
  ShowStock,
  UpdateStock,
  Individual,
  calculateIndividualProfitAndBuyingPrice,
  calculateTotalProfitAndBuyingPrice
} from '../controllers/stock.controller.js';

const router = express.Router();

router.get('/stock', ShowStock);
router.post('/stock/update', UpdateStock);
router.post('/stock/individual', Individual);
router.post('/stock/profit/individual', calculateIndividualProfitAndBuyingPrice);
router.post('/stock/profit/total', calculateTotalProfitAndBuyingPrice);

export default router;
