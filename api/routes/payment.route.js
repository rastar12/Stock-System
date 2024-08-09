import express from 'express'
import { AddPayment, ShowPayment } from '../controllers/payment.controller.js';

const router =express.Router();

router.get('/show',ShowPayment);
router.post('/addPayment',AddPayment);

export default router;