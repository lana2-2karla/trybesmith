import express from 'express';
import productsController from '../controllers/products.controller';

const router = express.Router();

router.get('/products', productsController.getAllProductsController);

export default router;