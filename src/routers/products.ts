import express from 'express';
import productsController from '../controllers/products.controller';
import productsValidateMiddleware from '../middlewares/products.validate';

const router = express.Router();

router.get('/products', productsController.getAllProductsController);

router.post('/products', productsValidateMiddleware, productsController.addProductsController);

export default router;