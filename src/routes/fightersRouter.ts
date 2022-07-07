import { Router } from 'express';
import { getRanking, battle } from '../controllers/fightersController.js';

const router = Router();

router.get('/ranking', getRanking);
router.post('/battle', battle);

export default router;
