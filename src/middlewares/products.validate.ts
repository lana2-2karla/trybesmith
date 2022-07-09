import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import HttpException from '../shared/http.exception';

const productsValidate = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const productsValidateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = productsValidate.validate(req.body);
  if (error) {
    const { message, type } = error.details[0];
    const status = type === 'any.required' ? 400 : 422;
    throw new HttpException(status, message);
  }
  next();
};

export default productsValidateMiddleware;