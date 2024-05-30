import express from 'express';

import { UpdateStock, ShowStock } from '../controllers/stock.controller.js';

const router = express.Router();

router.post('/UpdateStocks',UpdateStock)
router.get('/ShowStock',ShowStock)



export default router;

