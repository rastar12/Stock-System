import express from 'express';

import { UpdateStock, ShowStock, Individual, DailyUpdate } from '../controllers/stock.controller.js';

const router = express.Router();

router.post('/UpdateStocks',UpdateStock)
router.get('/ShowStock',ShowStock)
router.post('/update-individual',Individual);
router.post("/dailyUpdate",DailyUpdate);

export default router;
