import express, { Request,Response} from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get('/', (req: Request, res:Response) => {
  res.status(200).json({
    message: 'Welcome to starfighters API'
  })
})

export default app
