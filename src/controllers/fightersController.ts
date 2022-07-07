import { Request, Response } from 'express';
import * as services from '../services/fightersServices.js';

const getRanking = async (req: Request, res: Response) => {
  const result = await services.getRanking();
  res.json({ fighters: result });
};

const battle = async (req: Request, res: Response) => {
  const { firstUser, secondUser }: { firstUser: string; secondUser: string } =
    req.body;
  await services.verifyIfUsersExist(firstUser, secondUser);
  const result = await services.battle(firstUser, secondUser);
  res.json(result);
};

export { getRanking, battle };
