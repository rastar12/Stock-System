import express from "express"

import { ShowPrices,UpdatePrices ,CreatePrice,getPrice} from "../controllers/priceChange.contoller.js"

const router= express.Router();

router.get('/ShowPrices',getPrice);
router.post('/update/:id',UpdatePrices);
router.post('/new',CreatePrice);


export default router;