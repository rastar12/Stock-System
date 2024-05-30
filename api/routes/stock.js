import express from 'express';

import { UpdateStock, ShowStock, Individual } from '../controllers/stock.controller.js';

const router = express.Router();

router.post('/UpdateStocks',UpdateStock)
router.get('/ShowStock',ShowStock)
router.post('/update-individual',Individual)



export default router;

