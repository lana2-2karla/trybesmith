import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAllProductsController = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAllProductsService();
  return res.status(200).json(products);
};

const addProductsController = async (req: Request, res: Response): Promise<Response> => {
  const newProduct = await productsService.addProductsService(req.body);
  return res.status(200).json(newProduct);
};

export default {
  getAllProductsController,
  addProductsController,
};