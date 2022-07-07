import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).send('Something broke!');
};

export default errorHandler;
