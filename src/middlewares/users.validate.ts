import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import HttpException from '../shared/http.exception';

const usersValidate = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const usersValidateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = usersValidate.validate(req.body);
  if (error) {
    const { message, type } = error.details[0];
    const status = type === 'any.required' ? 400 : 422;
    throw new HttpException(status, message);
  }
  next();
};

export default usersValidateMiddleware;