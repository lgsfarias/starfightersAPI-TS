import { Request, Response } from 'express';
import * as services from '../services/fightersServices.js';

const getRanking = async (req: Request, res: Response) => {
  const result = await services.getRanking();
  res.json({ fighters: result });
};

export { getRanking };
