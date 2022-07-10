import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getOrdersController = async (req: Request, res: Response): Promise<Response> => {
  const orders = await ordersService.getOrdersService();
  return res.status(200).json(orders);
};

export default {
  getOrdersController,
};