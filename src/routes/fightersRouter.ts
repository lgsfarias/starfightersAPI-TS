import { Router } from 'express';
import { getRanking, battle } from '../controllers/fightersController.js';
import schemaValidation from '../middlewares/schemaValidation.js';
import battleSchema from '../schemas/battle.schema.js';

const router = Router();

router.use(schemaValidation(battleSchema));
router.get('/ranking', getRanking);
router.post('/battle', battle);

export default router;
