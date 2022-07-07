import IProduct from '../intarfaces/products.intarface';
import productsModel from '../models/products.model';

const getAllProductsService = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProductsModel();
  return products;
};

export default {
  getAllProductsService,
};