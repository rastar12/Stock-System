import express from 'express';

import { ShowReadyProducts,AddReadyProducts} from '../controllers/readymadeController.js';

const router = express.Router();

router.post('/AddReadyMadeProducts',AddReadyProducts)
router.get('/ShowReadyProducts',ShowReadyProducts)



export default router;