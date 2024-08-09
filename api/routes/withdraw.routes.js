import express from 'express'
import { AddWithdraw, showWithdraws } from '../controllers/Withdraw.controller.js';
const router =express.Router();

router.post('/addwithdraw',AddWithdraw);
router.get('/showwithdraw',showWithdraws);

export default router;