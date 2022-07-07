import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAllProductsController = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAllProductsService();
  return res.status(200).json(products);
};

export default {
  getAllProductsController,
};