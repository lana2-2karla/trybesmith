import { Request, Response } from 'express';
import usersService from '../services/users.service';

const addUsersController = async (req: Request, res: Response): Promise<Response> => {
  const token = await usersService.addUsersService(req.body);
  return res.status(201).json(token);
};
  
export default {
  addUsersController,
};