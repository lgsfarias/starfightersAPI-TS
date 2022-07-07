import { Request, Response } from 'express';

const schemaValidation = (schema: any) => {
  return (req: Request, res: Response, next: any) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      throw {
        status: 400,
        message: error.details.map((err: any) => err.message).join(', '),
      };
    }
    next();
  };
};

export default schemaValidation;
